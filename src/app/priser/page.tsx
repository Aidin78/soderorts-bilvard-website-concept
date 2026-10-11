import { Info } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { PriceRows } from "@/components/ui/Price";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { bookingTerms, tireBookingUrl } from "@/content/booking";
import { generalPriceNotes, priceCategories } from "@/content/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Priser – biltvätt, rekond, däckbyte & däckhotell",
  description:
    "Prislista för Söderorts Bilvård i Johanneshov: handtvätt från 695 kr, helrekond från 6 500 kr, däckskifte 500 kr, däckhotell från 2 295 kr per säsong.",
  path: "/priser",
});

const legend = [
  { term: "från 695 kr", text: "Startpris – slutpriset beror på bilens storlek och skick." },
  { term: "500 kr", text: "Fast pris för personbil." },
  { term: "kr/st", text: "Pris per enhet, till exempel per däck eller säte." },
];

export default function PricesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prislista"
        title="Priser för bilvård och däckservice."
        lead={<p>Hela prislistan på ett ställe. Tveka inte att ringa om du vill ha ett exakt pris för din bil.</p>}
        breadcrumbs={[{ name: "Priser", path: "/priser" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ActionLink href={tireBookingUrl} size="lg" icon="external">
            Boka däckskifte online
          </ActionLink>
          <ActionLink href="/boka#ovriga-tjanster" variant="ghost-light" size="lg">
            Boka övriga tjänster
          </ActionLink>
        </div>
      </PageHero>

      <nav aria-label="Priskategorier" className="sticky top-[4.5rem] z-30 border-b border-line bg-paper">
        <Container>
          <ul className="-mx-4 flex overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
            {priceCategories.map((category, index) => (
              <li key={category.id} className="shrink-0">
                <a
                  href={`#${category.id}`}
                  className="type-label flex min-h-14 items-center gap-2 border-b-2 border-transparent pr-6 text-muted transition-colors hover:border-signal hover:text-carbon"
                >
                  <span className="text-signal-ink">{index + 1}</span>
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <Container className="py-16 lg:py-24">
        <dl className="reveal grid gap-px border border-line bg-line sm:grid-cols-3">
          {legend.map((item) => (
            <div key={item.term} className="bg-white p-5">
              <dt className="type-figure text-lg">{item.term}</dt>
              <dd className="mt-1 text-sm text-muted">{item.text}</dd>
            </div>
          ))}
        </dl>

        {priceCategories.map((category, index) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-rubrik`}
            className="grid scroll-mt-36 gap-8 border-b border-line py-14 lg:grid-cols-12 lg:gap-16 lg:py-20"
          >
            <div className="reveal lg:col-span-4">
              <div className="lg:sticky lg:top-40">
                <p className="type-label text-signal-ink">{String(index + 1).padStart(2, "0")}</p>
                <h2 id={`${category.id}-rubrik`} className="type-heading text-heading-1 mt-3">
                  {category.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted">{category.intro}</p>
              </div>
            </div>
            <div className="reveal lg:col-span-8">
              <PriceRows items={category.items} linked />
              <ul className="mt-5 grid gap-2 text-sm text-muted">
                {category.conditions.map((condition) => (
                  <li key={condition} className="flex gap-2">
                    <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-steel" />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <aside aria-label="Villkor" className="reveal mt-14 grid gap-8 bg-carbon p-6 text-white sm:p-10 lg:grid-cols-2">
          <div>
            <h2 className="type-heading text-heading-2">Bra att veta</h2>
            <ul className="mt-5 grid gap-2 text-white/75">
              {generalPriceNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="type-heading text-heading-2">Avbokning</h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Av- eller omboka senast {bookingTerms.cancellationHours} timmar före bokad tid. Vid utebliven avbokning debiteras{" "}
              {bookingTerms.noShowFee} kr.
            </p>
          </div>
        </aside>
      </Container>

      <FinalCta />
    </>
  );
}
