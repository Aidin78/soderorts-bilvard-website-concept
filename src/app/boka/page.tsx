import Link from "next/link";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PriceTag } from "@/components/ui/Price";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { PageHero } from "@/components/sections/PageHero";
import { business, mailto } from "@/content/business";
import { bookingTerms, tireBookingUrl } from "@/content/booking";
import { contactServiceOptions } from "@/content/contact";
import { getPriceItem } from "@/content/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Boka tid – däckskifte online eller tvätt och rekond",
  description:
    "Boka däckskifte direkt i vår onlinekalender. För biltvätt, rekond, däckverkstad och förvaring – ring 08-549 02 549, mejla eller skicka en förfrågan.",
  path: "/boka",
});

const bookingFaq = [
  {
    question: "Kan jag boka tid på helgen?",
    answer: `Vi har öppet ${business.openingHours[0].days.toLowerCase()} ${business.openingHours[0].opens}–${business.openingHours[0].closes}. ${business.openingHoursNote}`,
  },
  {
    question: "Hur avbokar eller ombokar jag?",
    answer: `Kontakta oss så snart som möjligt och senast ${bookingTerms.cancellationHours} timmar före bokad tid. Vid utebliven avbokning debiteras ${bookingTerms.noShowFee} kr.`,
  },
  {
    question: "Ingår en tid för däckskifte när jag har däckhotell?",
    answer: `${bookingTerms.separateBookingNote} ${bookingTerms.storedTyresNote}`,
  },
];

export default function BookingPage() {
  const requestServices = contactServiceOptions.filter((option) => option.value !== "dackbyte" && option.value !== "annat");

  return (
    <>
      <PageHero
        eyebrow="Boka tid"
        title="Välj hur du vill boka."
        lead={<p>Däckskifte bokar du direkt i vår onlinekalender. Tvätt, rekond, verkstad och förvaring bokar du enklast via telefon, mejl eller formulär.</p>}
        breadcrumbs={[{ name: "Boka tid", path: "/boka" }]}
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <article id="dackskifte" aria-labelledby="dackskifte-rubrik" className="reveal flex scroll-mt-28 flex-col bg-carbon p-6 text-white sm:p-10">
            <p className="type-label text-signal">01 · Onlinebokning</p>
            <h2 id="dackskifte-rubrik" className="type-display text-display-2 mt-6">
              Däckskifte
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Välj datum och tid i bokningskalendern och fyll i dina kontaktuppgifter.
            </p>
            <div className="mt-8">
              <PriceTag price={getPriceItem("dackskifte-personbil").price} size="lg" tone="dark" />
              <p className="mt-1 text-sm text-steel">Personbil. Tunga eller stora hjul: +450 kr.</p>
            </div>
            <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-white/80">
              {[bookingTerms.storedTyresNote, `Av- eller omboka senast ${bookingTerms.cancellationHours} timmar före. Utebliven avbokning: ${bookingTerms.noShowFee} kr.`].map(
                (note) => (
                  <li key={note} className="flex gap-3">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-signal" />
                    {note}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-auto pt-10">
              <ActionLink href={tireBookingUrl} size="lg" icon="external" className="w-full">
                Öppna bokningskalendern
              </ActionLink>
              <p className="mt-3 text-sm text-steel">Kalendern öppnas i vårt bokningssystem.</p>
            </div>
          </article>

          <article
            id="ovriga-tjanster"
            aria-labelledby="ovriga-rubrik"
            className="reveal flex scroll-mt-28 flex-col border border-line bg-white p-6 sm:p-10"
          >
            <p className="type-label text-signal-ink">02 · Via telefon, mejl eller formulär</p>
            <h2 id="ovriga-rubrik" className="type-display text-display-2 mt-6">
              Övriga tjänster
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Berätta vad du behöver och vilken bil det gäller, så återkommer vi med en tid som passar.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {requestServices.map((option) => (
                <li key={option.value}>
                  <Link
                    href={`/kontakt?tjanst=${option.value}#formular`}
                    className="inline-flex min-h-10 items-center border border-line px-3 text-sm transition-colors hover:border-carbon"
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid gap-3 pt-10">
              <a
                href={business.phone.href}
                className="group flex items-center justify-between gap-4 bg-signal px-6 py-4 text-carbon transition-colors hover:bg-signal-hover"
              >
                <span>
                  <span className="type-label block">Ring oss</span>
                  <span className="type-figure text-2xl">{business.phone.display}</span>
                </span>
                <Phone aria-hidden className="size-5" />
              </a>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={mailto("Bokningsförfrågan")}
                  className="type-label flex min-h-14 items-center justify-between gap-3 border border-carbon/20 px-5 hover:border-carbon"
                >
                  Mejla oss
                  <Mail aria-hidden className="size-4" />
                </a>
                <Link
                  href="/kontakt#formular"
                  className="type-label flex min-h-14 items-center justify-between gap-3 border border-carbon/20 px-5 hover:border-carbon"
                >
                  Skicka förfrågan
                  <ArrowRight aria-hidden className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionIntro eyebrow="Inför besöket" title="Bra att veta.">
              <p>
                {business.address.street}, {business.address.locality}. {business.landmarks}
              </p>
            </SectionIntro>
          </div>
          <div className="reveal lg:col-span-8">
            <FaqList items={bookingFaq} />
          </div>
        </Container>
      </section>
    </>
  );
}
