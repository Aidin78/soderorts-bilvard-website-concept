"use server";

import { headers } from "next/headers";
import { business } from "@/content/business";
import { contactServiceOptions } from "@/content/contact";
import { contactSchema, type ContactFormState, type ContactInput } from "@/lib/contact-schema";
import { isMailConfigured, sendMail } from "@/lib/mail";
import { isRateLimited } from "@/lib/rate-limit";

const MIN_FILL_TIME_MS = 3000;
const fallback = `Ring oss på ${business.phone.display} eller mejla ${business.email}.`;

export async function sendContactRequest(_previous: ContactFormState, formData: FormData): Promise<ContactFormState> {
  if (!isMailConfigured()) {
    return { status: "error", message: `Formuläret är inte aktiverat ännu. ${fallback}` };
  }

  // Spam protection: a hidden honeypot field and a minimum time to fill in the form.
  const startedAt = Number(formData.get("startedAt"));
  if (formData.get("website") || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { status: "error", message: `Meddelandet kunde inte skickas. ${fallback}` };
  }

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "okänd";
  if (isRateLimited(ip)) {
    return { status: "error", message: `Du har skickat flera meddelanden på kort tid. Försök igen senare, eller ${fallback.toLowerCase()}` };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as keyof ContactInput;
      fieldErrors[field] ??= issue.message;
    }
    return { status: "error", message: "Kontrollera de markerade fälten.", fieldErrors };
  }

  const data = parsed.data;
  const serviceLabel = contactServiceOptions.find((option) => option.value === data.service)?.label ?? data.service;
  const sent = await sendMail({
    subject: `Förfrågan via webbplatsen – ${serviceLabel}`,
    replyTo: data.email,
    text: [
      `Namn: ${data.name}`,
      `E-post: ${data.email}`,
      `Telefon: ${data.phone || "–"}`,
      `Tjänst: ${serviceLabel}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (!sent) {
    return { status: "error", message: `Något gick fel och meddelandet skickades inte. ${fallback}` };
  }
  return { status: "success" };
}
