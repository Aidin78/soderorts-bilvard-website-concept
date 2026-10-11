import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PriceTag } from "@/components/ui/Price";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { otherServices } from "@/content/other-services";
import { getPriceItem } from "@/content/pricing";
import { coreServiceOrder, getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tjänster – bilvård, rekond och däckservice",
  description:
    "Alla tjänster hos Söderorts Bilvård i Johanneshov: biltvätt, bilrekond, däckbyte, däckhotell, däckverkstad, motortvätt, lackskydd, solfilm och förvaring.",
  path: "/tjanster",
});

export default function ServicesPage() {
  const core = coreServiceOrder.map((slug) => getService(slug)!);

  return (
    <>
      <PageHero
        eyebrow="Tjänster"
        title="Allt för bilen, under ett tak."
        lead={<p>Handtvätt och rekond i tvätthallen, hjulskifte och däck i verkstaden – och förvaring av både däck och fordon.</p>}
        breadcrumbs={[{ name: "Tjänster", path: "/tjanster" }]}
      />

      <section aria-label="Våra tjänster" className="py-16 lg:py-24">
        <Container>
          <ul className="border-t border-carbon">
            {core.map((service, index) => (
              <li key={service.slug} className="reveal border-b border-line">
                <Link
                  href={`/tjanster/${service.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 py-7 transition-colors hover:bg-white sm:gap-x-8 lg:grid-cols-[4rem_1fr_12rem_11rem_2rem] lg:px-4"
                >
                  <span className="type-label self-start pt-2 text-signal-ink lg:col-start-1 lg:row-start-1">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 lg:col-start-2 lg:row-start-1">
                    <span className="flex items-center gap-3">
                      <ServiceIcon slug={service.slug} className="size-6 shrink-0 text-muted" />
                      <span className="type-heading text-heading-2 group-hover:text-signal-ink">{service.name}</span>
                    </span>
                    <span className="mt-2 block text-muted">{service.tagline}</span>
                  </span>
                  <span className="relative hidden aspect-[4/3] overflow-hidden lg:col-start-3 lg:row-start-1 lg:block">
                    <Image
                      src={service.hero.photo.src}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="192px"
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </span>
                  <span className="col-start-2 lg:col-start-4 lg:row-start-1 lg:text-right">
                    <PriceTag price={getPriceItem(service.startingPriceId).price} size="sm" />
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="col-start-3 row-start-1 size-5 text-signal-ink transition-transform duration-300 group-hover:translate-x-1 lg:col-start-5"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-16">
            <div className="reveal lg:col-span-4">
              <p className="type-label text-signal-ink">06</p>
              <h2 className="type-heading text-heading-1 mt-4">Övriga tjänster</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">Specialbehandlingar för lack och interiör, solfilm – och varmgarage för bil och MC.</p>
              <Link
                href="/tjanster/ovriga-tjanster"
                className="type-label mt-8 inline-flex items-center gap-3 border-b-2 border-signal pb-1 hover:text-signal-ink"
              >
                Se övriga tjänster
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <ul className="grid gap-px bg-line sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
              {otherServices.map((item) => (
                <li key={item.id} className="reveal bg-paper">
                  <Link href={`/tjanster/ovriga-tjanster#${item.id}`} className="group flex h-full flex-col justify-between gap-6 p-6 hover:bg-white">
                    <span className="type-heading text-xl group-hover:text-signal-ink">{item.title}</span>
                    <PriceTag price={getPriceItem(item.priceIds[0]).price} size="sm" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
