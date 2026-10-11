import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { PriceRows } from "@/components/ui/Price";
import { Eyebrow } from "@/components/ui/SectionIntro";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { otherServices } from "@/content/other-services";
import { getPriceItems } from "@/content/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Motortvätt, lackskydd, solfilm & förvaring",
  description:
    "Motortvätt 550 kr, lackförsegling från 3 900 kr, ozonbehandling, klädseltvätt, solfilm samt bil- och MC-förvaring i varmgarage i Johanneshov, Stockholm.",
  path: "/tjanster/ovriga-tjanster",
});

export default function OtherServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Övriga tjänster"
        title="Specialbehandlingar och förvaring."
        lead={<p>Det lilla extra för lack, motor och interiör – och en trygg, uppvärmd plats för bilen eller motorcykeln.</p>}
        breadcrumbs={[
          { name: "Tjänster", path: "/tjanster" },
          { name: "Övriga tjänster", path: "/tjanster/ovriga-tjanster" },
        ]}
      >
        <ul className="flex flex-wrap gap-2">
          {otherServices.map((item) => (
            <li key={item.id}>
              <Link href={`#${item.id}`} className="type-label inline-flex min-h-10 items-center border border-white/20 px-4 text-white/80 hover:border-white hover:text-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </PageHero>

      <div className="py-16 lg:py-24">
        {otherServices.map((item, index) => {
          const reversed = index % 2 === 1;
          return (
            <section key={item.id} id={item.id} aria-labelledby={`${item.id}-rubrik`} className="py-10 lg:py-14">
              <Container className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                <div className={`reveal-image relative aspect-[4/3] lg:col-span-5 lg:row-start-1 ${reversed ? "lg:col-start-8" : ""}`}>
                  <Image src={item.photo.src} alt={item.photo.alt} fill placeholder="blur" sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
                </div>
                <div className={`reveal lg:col-span-6 lg:row-start-1 ${reversed ? "lg:col-start-1" : "lg:col-start-7"}`}>
                  <Eyebrow index={String(index + 1).padStart(2, "0")}>Övriga tjänster</Eyebrow>
                  <h2 id={`${item.id}-rubrik`} className="type-heading text-heading-1 mt-5">
                    {item.title}
                  </h2>
                  {item.body.map((paragraph) => (
                    <p key={paragraph} className="mt-5 text-lg leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                  {item.bullets && (
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-ink" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-8">
                    <PriceRows items={getPriceItems(item.priceIds)} />
                  </div>
                  <div className="mt-8">
                    <ActionLink href={`/kontakt?tjanst=${item.id}#formular`} variant="ghost-dark">
                      {item.priceIds.includes("solfilm") ? "Begär prisförslag" : "Skicka förfrågan"}
                    </ActionLink>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <FinalCta />
    </>
  );
}
