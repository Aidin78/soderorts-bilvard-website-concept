import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { PriceTag } from "@/components/ui/Price";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { bookingActionFor } from "@/content/booking";
import { photos, type Photo } from "@/content/images";
import { getPriceItem } from "@/content/pricing";
import { getService, type ServiceSlug } from "@/content/services";

type Feature = { slug: ServiceSlug; photo: Photo; layout: "image-left" | "image-right" | "band" };

const features: Feature[] = [
  { slug: "biltvatt", photo: photos.falgtvatt, layout: "image-left" },
  { slug: "bilrekond", photo: photos.polering, layout: "image-right" },
  { slug: "dackbyte", photo: photos.hjulbyteLyft, layout: "band" },
];

export function FeaturedServices() {
  return (
    <section aria-labelledby="populara-tjanster" className="py-20 lg:py-32">
      <Container>
        <SectionIntro eyebrow="Populära tjänster" title={<span id="populara-tjanster">Gjort för hand. Gjort ordentligt.</span>}>
          <p>Det här bokar våra kunder oftast – och det här ingår.</p>
        </SectionIntro>
      </Container>

      <div className="mt-16 grid gap-20 lg:mt-24 lg:gap-32">
        {features.map((feature, index) => (
          <FeatureRow key={feature.slug} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const service = getService(feature.slug)!;
  const booking = bookingActionFor(service);
  const included = service.packages?.[0]?.items.slice(0, 4) ?? service.steps?.map((step) => step.title) ?? [];
  const number = String(index + 1).padStart(2, "0");

  const text = (
    <div className="reveal">
      <p className="type-label text-signal-ink">
        {number} <span className="text-muted">/ {service.hero.eyebrow}</span>
      </p>
      <h3 className="type-heading text-heading-1 mt-4">
        <Link href={`/tjanster/${service.slug}`} className="hover:text-signal-ink">
          {service.name}
        </Link>
      </h3>
      <p className="mt-4 text-lg leading-relaxed text-muted">{service.tagline}</p>
      <ul className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
        {included.map((item) => (
          <li key={item} className="flex gap-3 text-[0.95rem]">
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-signal-ink" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <PriceTag price={getPriceItem(service.startingPriceId).price} size="lg" />
        <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto">
          <ActionLink href={`/tjanster/${service.slug}`} variant="ghost-dark">
            Läs mer
          </ActionLink>
          <ActionLink href={booking.href} icon={booking.external ? "external" : "arrow"}>
            {booking.external ? "Boka online" : "Boka"}
          </ActionLink>
        </div>
      </div>
    </div>
  );

  if (feature.layout === "band") {
    return (
      <article className="relative">
        <div className="reveal-image relative aspect-[4/3] sm:aspect-[21/9]">
          <Image
            src={feature.photo.src}
            alt={feature.photo.alt}
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
        </div>
        <Container>
          <div className="relative bg-white p-6 sm:p-10 lg:-mt-40 lg:ml-auto lg:w-[58%] lg:p-14">{text}</div>
        </Container>
      </article>
    );
  }

  const imageLeft = feature.layout === "image-left";
  return (
    <article>
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div
          className={`reveal-image relative aspect-[4/3] lg:col-span-7 ${
            imageLeft ? "" : "lg:col-start-6 lg:row-start-1 lg:mt-16"
          }`}
        >
          <Image src={feature.photo.src} alt={feature.photo.alt} fill placeholder="blur" sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
        <div className={`lg:col-span-5 ${imageLeft ? "" : "lg:col-start-1 lg:row-start-1"}`}>{text}</div>
      </Container>
    </article>
  );
}
