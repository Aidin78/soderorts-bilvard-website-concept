"use client";

import Link from "next/link";
import { startTransition, useActionState, useEffect, useRef, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { sendContactRequest } from "@/app/kontakt/actions";
import { business, mailto } from "@/content/business";
import { contactServiceOptions, isContactService } from "@/content/contact";
import { contactSchema, type ContactFormState, type ContactInput } from "@/lib/contact-schema";

type ContactFormProps = { enabled: boolean; defaultService?: string | null };

const initialState: ContactFormState = { status: "idle" };

const fieldClass =
  "block w-full border border-line bg-white px-4 text-base text-carbon transition-colors placeholder:text-steel focus:border-carbon disabled:cursor-not-allowed disabled:bg-paper aria-invalid:border-danger";

export function ContactForm({ enabled, defaultService }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(sendContactRequest, initialState);
  // When the form became usable; the server rejects submissions faster than a person can type.
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: isContactService(defaultService) ? defaultService : "",
      message: "",
    },
  });

  const serverErrors = state.status === "error" ? state.fieldErrors : undefined;
  const errorFor = (field: keyof ContactInput) => errors[field]?.message ?? serverErrors?.[field];

  const submit = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    formData.set("startedAt", String(startedAt.current));
    startTransition(() => formAction(formData));
  };

  if (state.status === "success") {
    return (
      <div role="status" className="border-l-4 border-signal bg-white p-8">
        <CircleCheck aria-hidden className="size-8 text-signal-ink" />
        <h3 className="type-heading mt-4 text-heading-2">Tack – vi har tagit emot ditt meddelande.</h3>
        <p className="mt-3 leading-relaxed text-muted">
          Vi återkommer så snart vi kan, vanligtvis under våra öppettider. Brådskar det? Ring {business.phone.display}.
        </p>
      </div>
    );
  }

  const disabled = !enabled || pending;

  return (
    <form
      noValidate
      onSubmit={(event) => {
        // Capture the form now: currentTarget is cleared before async validation finishes.
        const form = event.currentTarget;
        return handleSubmit(() => submit(form))(event);
      }}
      className="grid gap-6"
    >
      {!enabled && (
        <div className="flex gap-3 border-l-4 border-steel bg-white p-5 text-[0.95rem] leading-relaxed">
          <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-muted" />
          <p>
            Formuläret är inte aktiverat ännu. Ring{" "}
            <a href={business.phone.href} className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
              {business.phone.display}
            </a>{" "}
            eller mejla{" "}
            <a href={mailto("Förfrågan")} className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
              {business.email}
            </a>
            .
          </p>
        </div>
      )}

      <fieldset disabled={disabled} className="grid min-w-0 gap-6 sm:grid-cols-2">
        <legend className="sr-only">Dina uppgifter</legend>
        <Field id="name" label="Namn" error={errorFor("name")}>
          <input id="name" type="text" autoComplete="name" className={`${fieldClass} h-14`} {...register("name")} {...ariaProps("name", errorFor("name"))} />
        </Field>
        <Field id="email" label="E-post" error={errorFor("email")}>
          <input id="email" type="email" autoComplete="email" inputMode="email" className={`${fieldClass} h-14`} {...register("email")} {...ariaProps("email", errorFor("email"))} />
        </Field>
        <Field id="phone" label="Telefonnummer" optional error={errorFor("phone")}>
          <input id="phone" type="tel" autoComplete="tel" inputMode="tel" className={`${fieldClass} h-14`} {...register("phone")} {...ariaProps("phone", errorFor("phone"))} />
        </Field>
        <Field id="service" label="Tjänst" error={errorFor("service")}>
          <div className="relative">
            <select
              id="service"
              className={`${fieldClass} h-14 appearance-none pr-12`}
              {...register("service")}
              {...ariaProps("service", errorFor("service"))}
            >
              <option value="" disabled>
                Välj tjänst
              </option>
              {contactServiceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
          </div>
        </Field>
        <Field id="message" label="Meddelande" error={errorFor("message")} className="sm:col-span-2">
          <textarea
            id="message"
            rows={6}
            placeholder="Berätta vad du behöver hjälp med, gärna bilmodell och önskad dag."
            className={`${fieldClass} py-3`}
            {...register("message")}
            {...ariaProps("message", errorFor("message"))}
          />
        </Field>
        {/* Honeypot – hidden from people, tempting for bots. */}
        <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label htmlFor="website">Lämna tomt</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </fieldset>

      <p className="text-sm leading-relaxed text-muted">
        Vi använder dina uppgifter enbart för att besvara din förfrågan. Läs mer i vår{" "}
        <Link href="/integritet" className="underline underline-offset-4 hover:text-carbon">
          integritetspolicy
        </Link>
        .
      </p>

      {state.status === "error" && (
        <p role="alert" className="flex gap-3 border-l-4 border-danger bg-white p-4 text-[0.95rem]">
          <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-danger" />
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="type-label inline-flex min-h-14 items-center justify-between gap-6 bg-carbon px-6 text-white transition-colors hover:bg-graphite disabled:cursor-not-allowed disabled:opacity-50 sm:justify-self-start"
      >
        {pending ? "Skickar…" : "Skicka meddelande"}
        {pending ? <LoaderCircle aria-hidden className="size-4 animate-spin" /> : <Send aria-hidden className="size-4" />}
      </button>
    </form>
  );
}

function ariaProps(id: string, error?: string) {
  return { "aria-invalid": error ? true : undefined, "aria-describedby": error ? `${id}-fel` : undefined };
}

function Field({
  id,
  label,
  optional,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="type-label mb-2 flex justify-between text-carbon">
        {label}
        {optional && <span className="text-muted normal-case tracking-normal">Valfritt</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-fel`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
