import "server-only";
import { business } from "@/content/business";

/**
 * Contact form delivery via the Resend HTTP API (https://resend.com).
 * The form is only enabled when RESEND_API_KEY and CONTACT_FROM_EMAIL are set;
 * the sender domain must be verified in Resend.
 */
export function isMailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_FROM_EMAIL);
}

type Mail = { subject: string; text: string; replyTo: string };

export async function sendMail({ subject, text, replyTo }: Mail): Promise<boolean> {
  if (!isMailConfigured()) return false;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL ?? business.email],
        reply_to: replyTo,
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("Contact mail failed", response.status, await response.text());
    }
    return response.ok;
  } catch (error) {
    console.error("Contact mail failed", error);
    return false;
  }
}
