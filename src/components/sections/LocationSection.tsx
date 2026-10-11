import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { business, mailto } from "@/content/business";

export function LocationSection() {
  const hours = business.openingHours[0];
  const rows = [
    { label: "Adress", value: `${business.address.street}, ${business.address.postalCode} ${business.address.locality}` },
    { label: "Öppettider", value: `${hours.days} ${hours.opens}–${hours.closes}` },
  ];

  return (
    <section aria-labelledby="hitta-hit" className="bg-carbon text-white">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <SectionIntro eyebrow="Hitta hit" tone="dark" title={<span id="hitta-hit">Mitt i södra Stockholm.</span>}>
            <p>{business.landmarks}</p>
          </SectionIntro>

          <dl className="reveal mt-10 border-t border-white/10">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 border-b border-white/10 py-4 sm:grid-cols-[9rem_1fr]">
                <dt className="type-label text-steel">{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
            <div className="grid gap-1 border-b border-white/10 py-4 sm:grid-cols-[9rem_1fr]">
              <dt className="type-label text-steel">Kontakt</dt>
              <dd className="grid gap-1">
                <a href={business.phone.href} className="type-figure text-xl hover:text-signal">
                  {business.phone.display}
                </a>
                <a href={mailto()} className="[overflow-wrap:anywhere] text-white/70 hover:text-white">
                  {business.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="reveal mt-4 text-sm text-steel">{business.openingHoursNote}</p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={business.maps.directionsUrl} newTab icon="external">
              Vägbeskrivning
            </ActionLink>
            <ActionLink href={business.phone.href} variant="ghost-light" icon="phone">
              Ring oss
            </ActionLink>
          </div>
        </div>

        <div className="reveal-image min-h-[22rem] lg:col-span-7 lg:min-h-full">
          <MapEmbed className="min-h-[22rem]" />
        </div>
      </Container>
    </section>
  );
}
