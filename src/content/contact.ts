/** Services selectable in the contact form. Values match service slugs and anchors on /tjanster/ovriga-tjanster. */
export const contactServiceOptions = [
  { value: "biltvatt", label: "Biltvätt" },
  { value: "bilrekond", label: "Bilrekond" },
  { value: "dackbyte", label: "Däckbyte" },
  { value: "dackhotell", label: "Däckhotell" },
  { value: "dackverkstad", label: "Däckverkstad / nya däck" },
  { value: "motortvatt", label: "Motortvätt" },
  { value: "lackskydd", label: "Lackförsegling / lackkonservering" },
  { value: "ozonbehandling", label: "Ozonbehandling" },
  { value: "kladsel", label: "Klädseltvätt / skinnbehandling" },
  { value: "solfilm", label: "Solfilm" },
  { value: "forvaring", label: "Bil- eller MC-förvaring" },
  { value: "annat", label: "Annat" },
] as const;

export type ContactServiceValue = (typeof contactServiceOptions)[number]["value"];

export function isContactService(value: string | null | undefined): value is ContactServiceValue {
  return contactServiceOptions.some((option) => option.value === value);
}
