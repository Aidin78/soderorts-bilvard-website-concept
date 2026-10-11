import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Info } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { FaqList } from "@/components/ui/FaqList";
import { PriceRows, PriceTag } from "@/components/ui/Price";
import { Eyebrow, SectionIntro } from "@/components/ui/SectionIntro";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { business } from "@/content/business";
import { bookingActionFor, bookingTerms } from "@/content/booking";
import { fromPriceNote, getPriceItem, getPriceItems, priceCategories, priceReservationNote } from "@/content/pricing";
import { getService, type Service } from "@/content/services";
import { faqJsonLd, jsonLdScript } from "@/lib/seo";

export function ServicePage({ service }: { service: Service }) {
  const booking = bookingActionFor(service);
  const categories = priceCategories.filter((category) => service.priceCategoryIds.includes(category.id));
  const priceItems = service.priceIds ? getPriceItems(service.priceIds) : categories.flatMap((category) => category.items);
  const conditions = categories.flatMap((category) => category.conditions);
  const hasFromPrices = priceItems.some((item) => item.price.kind === "from");
  const notes = [...conditions, ...(hasFromPrices ? [fromPriceNote] : []), priceReservationNote];
  let sectionIndex = 0;
  const nextIndex = () => String(++sectionIndex).padStart(2, "0");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(service.faq))} />
      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        lead={<p>{service.hero.lead}</p>}
        photo={service.hero.photo}
        breadcrumbs={[
          { name: "Tjänster", path: "/tjanster" },
          { name: service.name, path: `/tjanster/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-6">
          <PriceTag price={getPriceItem(service.startingPriceId).price} size="lg" tone="dark" />
          <div className="flex flex-col gap-3 xs:flex-row">
            <ActionLink href={booking.href} size="lg" icon={booking.external ? "external" : "arrow"}>
              {booking.label}
            </ActionLink>
            <ActionLink href={business.phone.href} variant="ghost-light" size="lg" icon="phone">
              Ring oss
            </ActionLink>
          </div>
        </div>
      </PageHero>

      {service.packages && (
        <section className="py-20 lg:py-28">
          <Container>
            <SectionIntro eyebrow={service.packagesTitle ?? "Det här ingår"} index={nextIndex()} title="Det här ingår." />
            <div className={`mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 ${service.packages.length > 2 ? "lg:grid-cols-3" : ""}`}>
              {service.packages.map((pkg) => (
                <article key={pkg.title} className="reveal border-t-2 border-carbon pt-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="type-heading text-heading-2">{pkg.title}</h3>
                    {pkg.priceId && <PriceTag price={getPriceItem(pkg.priceId).price} />}
                  </div>
                  <ul className="mt-6 grid gap-3">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-ink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {service.steps && (
        <section className="bg-graphite py-20 text-white lg:py-28">
          <Container>
            <SectionIntro eyebrow="Så går det till" index={nextIndex()} tone="dark" title="Enkelt från bokning till färdig bil." />
            <ol className="mt-14 grid gap-px bg-line-dark sm:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, index) => (
                <li key={step.title} className="reveal bg-graphite py-6 sm:p-6 lg:pt-0 lg:pb-2">
                  <p className="type-figure text-5xl text-signal">{index + 1}</p>
                  <h3 className="type-heading mt-6 text-xl">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{step.body}</p>
                </li>
              ))}
            </ol>
            {service.facts && (
              <dl className="reveal mt-16 grid border border-line-dark sm:grid-cols-3">
                {service.facts.map((fact, index) => (
                  <div key={fact.label} className={`p-6 ${index > 0 ? "border-t border-line-dark sm:border-t-0 sm:border-l" : ""}`}>
                    <dt className="type-label text-steel">{fact.label}</dt>
                    <dd className="type-figure mt-3 text-xl">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Container>
        </section>
      )}

      <section className="py-20 lg:py-28">
        <Container className="grid gap-20 lg:gap-28">
          {service.sections.map((section, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={section.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`reveal ${section.photo ? `lg:col-span-5 ${reversed ? "lg:col-start-8" : ""}` : "lg:col-span-8"}`}>
                  <Eyebrow index={nextIndex()}>{service.name}</Eyebrow>
                  <h2 className="type-heading text-heading-1 mt-5">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.photo && (
                  <div
                    className={`reveal-image relative aspect-[4/3] lg:col-span-6 lg:row-start-1 ${
                      reversed ? "lg:col-start-1" : "lg:col-start-7"
                    }`}
                  >
                    <Image src={section.photo.src} alt={section.photo.alt} fill placeholder="blur" sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  </div>
                )}
              </article>
            );
          })}
        </Container>
      </section>

      <section aria-labelledby="priser" className="border-y border-line bg-white py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro eyebrow="Priser" index={nextIndex()} title={<span id="priser">Vad kostar {service.name.toLowerCase()}?</span>}>
              <p>Priserna kommer från vår prislista. Behöver du ett exakt pris för din bil – hör av dig.</p>
            </SectionIntro>
            <div className="reveal mt-8">
              <ActionLink href="/priser" variant="ghost-dark">
                Hela prislistan
              </ActionLink>
            </div>
          </div>
          <div className="reveal lg:col-span-7">
            <PriceRows items={priceItems} />
            <ul className="mt-6 grid gap-2 text-sm text-muted">
              {notes.map((note) => (
                <li key={note} className="flex gap-2">
                  <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-steel" />
                  {note}
                </li>
              ))}
            </ul>
            {service.booking === "tire" && (
              <div className="mt-8 border-l-4 border-signal bg-paper p-5 text-[0.95rem] leading-relaxed sm:p-6">
                <p className="font-semibold">Bra att veta inför bokningen</p>
                <ul className="mt-3 grid gap-2 text-muted">
                  <li>{bookingTerms.storedTyresNote}</li>
                  <li>
                    Av- eller omboka senast {bookingTerms.cancellationHours} timmar före bokad tid. Vid utebliven avbokning debiteras{" "}
                    {bookingTerms.noShowFee} kr.
                  </li>
                  {service.slug === "dackhotell" && <li>{bookingTerms.separateBookingNote}</li>}
                </ul>
                {service.slug === "dackhotell" && (
                  <a
                    href={business.documents.tireStorageTerms}
                    className="mt-4 inline-block font-semibold underline decoration-signal decoration-2 underline-offset-4"
                  >
                    Villkor för däck- och hjulförvaring (PDF)
                  </a>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      <section aria-labelledby="fragor" className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionIntro eyebrow="Vanliga frågor" index={nextIndex()} title={<span id="fragor">Frågor om {service.name.toLowerCase()}</span>}>
              <p>
                Hittar du inte svaret? Ring{" "}
                <a href={business.phone.href} className="font-semibold text-carbon underline decoration-signal decoration-2 underline-offset-4">
                  {business.phone.display}
                </a>
                .
              </p>
            </SectionIntro>
          </div>
          <div className="reveal lg:col-span-8">
            <FaqList items={service.faq} />
          </div>
        </Container>
      </section>

      <RelatedServices service={service} />

      <FinalCta
        title={service.booking === "tire" ? "Boka tid direkt i kalendern." : `Dags för ${service.name.toLowerCase()}?`}
        text={
          service.booking === "tire"
            ? "Välj en ledig tid online – det tar bara någon minut. Har du frågor är du välkommen att ringa."
            : "Skicka en förfrågan så återkommer vi med en tid, eller ring oss direkt."
        }
        primary={{ href: booking.href, label: booking.label, external: booking.external }}
      />
    </>
  );
}

function RelatedServices({ service }: { service: Service }) {
  const related = service.related.map((slug) =>
    slug === "ovriga-tjanster"
      ? { href: "/tjanster/ovriga-tjanster", name: "Övriga tjänster", tagline: "Motortvätt, lackskydd, solfilm och förvaring." }
      : { href: `/tjanster/${slug}`, name: getService(slug)!.name, tagline: getService(slug)!.tagline },
  );

  return (
    <nav aria-label="Relaterade tjänster" className="border-t border-line bg-white">
      <Container>
        <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
          {related.map((item) => (
            <li key={item.href} className="md:px-8 md:first:pl-0 md:last:pr-0">
              <Link href={item.href} className="group flex h-full items-start justify-between gap-6 py-8">
                <span>
                  <span className="type-label text-muted">Relaterad tjänst</span>
                  <span className="type-heading mt-2 block text-2xl group-hover:text-signal-ink">{item.name}</span>
                  <span className="mt-1 block text-muted">{item.tagline}</span>
                </span>
                <ArrowRight aria-hidden className="mt-7 size-5 shrink-0 text-signal-ink transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
