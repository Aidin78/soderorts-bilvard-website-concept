import { z } from "zod";
import { contactServiceOptions } from "@/content/contact";

const serviceValues = contactServiceOptions.map((option) => option.value) as [string, ...string[]];

/** Shared by the client form (React Hook Form) and the server action. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Skriv ditt namn.").max(100, "Namnet är för långt."),
  email: z.string().trim().max(200, "E-postadressen är för lång.").pipe(z.email("Kontrollera e-postadressen.")),
  phone: z
    .string()
    .trim()
    .max(30, "Telefonnumret är för långt.")
    .regex(/^[\d\s+()-]*$/, "Telefonnumret får bara innehålla siffror, mellanslag, +, - och parenteser."),
  service: z.enum(serviceValues, { message: "Välj en tjänst." }),
  message: z.string().trim().min(10, "Berätta lite mer – minst 10 tecken.").max(3000, "Meddelandet är för långt (max 3 000 tecken)."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Partial<Record<keyof ContactInput, string>> };
