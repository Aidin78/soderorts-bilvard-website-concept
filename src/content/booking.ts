/**
 * Booking paths. Tyre changes are booked in the company's existing online
 * calendar (Amelia on WordPress). Every other service is booked by phone,
 * e-mail or the contact form – exactly as on the current website.
 *
 * TIRE_BOOKING_URL lets the calendar move (e.g. to a subdomain) without a code change.
 * Server-only: read it from Server Components and pass it down as a prop.
 */
export const tireBookingUrl = process.env.TIRE_BOOKING_URL ?? "https://soderortsbilvard.se/boka-tid-v2/";

export type BookingAction = { href: string; label: string; external: boolean };

/** The correct booking path for a service: online calendar for tyre work, a request otherwise. */
export function bookingActionFor(service: { slug: string; booking: "tire" | "request" }): BookingAction {
  return service.booking === "tire"
    ? { href: tireBookingUrl, label: "Boka tid online", external: true }
    : { href: `/kontakt?tjanst=${service.slug}#formular`, label: "Skicka bokningsförfrågan", external: false };
}

/** Verified terms from the booking page and the tyre storage terms (§ 9). */
export const bookingTerms = {
  cancellationHours: 24,
  noShowFee: 500,
  storedTyresNote:
    "Har du dina däck på förvaring hos oss förbereder vi dem dagen innan ditt besök, så att bytet går snabbt.",
  separateBookingNote: "Däckförvaring innebär inte en reserverad tid för nästa skifte – däckskiftet bokas separat.",
  retorqueNote:
    "Efter hjulskifte ska hjulbultarna efterdras efter cirka 5–10 mils körning.",
} as const;
