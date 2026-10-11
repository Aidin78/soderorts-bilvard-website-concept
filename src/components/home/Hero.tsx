import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Eyebrow } from "@/components/ui/SectionIntro";
import { business } from "@/content/business";
import { photos } from "@/content/images";

export function Hero() {
  const hours = business.openingHours[0];
  const facts = [
    { label: "Öppet", value: `${hours.days} ${hours.opens}–${hours.closes}` },
    { label: "Adress", value: `${business.address.street}, ${business.address.locality}` },
  ];

  return (
    <section className="bg-carbon text-white">
      <div className="grid lg:min-h-[min(calc(100svh-4.5rem),58rem)] lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-12 px-4 pt-12 pb-10 sm:px-6 lg:col-span-6 lg:py-16 lg:pr-12 lg:pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))] xl:col-span-5">
          <div>
            <div className="animate-rise">
              <Eyebrow tone="dark">Johanneshov · Sedan {business.foundedYear}</Eyebrow>
            </div>
            <h1 className="type-display text-display-1 animate-rise mt-8 [--delay:120ms]">
              Din bil förtjänar det bästa<span className="text-signal">.</span>
            </h1>
            <p className="animate-rise mt-8 max-w-md text-lg leading-relaxed text-white/75 [--delay:240ms] sm:text-xl">
              Professionell bilvård, rekond och däckservice i Johanneshov, Stockholm.
            </p>
            <div className="animate-rise mt-10 flex flex-col gap-3 [--delay:360ms] xs:flex-row">
              <ActionLink href="/boka" size="lg">
                Boka tid
              </ActionLink>
              <ActionLink href="/priser" variant="ghost-light" size="lg">
                Se våra priser
              </ActionLink>
            </div>
          </div>

          <dl className="animate-rise grid gap-5 border-t border-white/10 pt-6 [--delay:480ms] sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="type-label text-steel">{fact.label}</dt>
                <dd className="mt-2 text-[0.95rem] text-white/85">{fact.value}</dd>
              </div>
            ))}
            <div>
              <dt className="type-label text-steel">Telefon</dt>
              <dd className="mt-2">
                <a href={business.phone.href} className="type-figure text-[1.05rem] transition-colors hover:text-signal">
                  {business.phone.display}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <figure className="animate-unveil relative aspect-[4/3] [--delay:200ms] sm:aspect-[16/10] lg:col-span-6 lg:aspect-auto xl:col-span-7">
          <Image
            src={photos.handtvattHogtryck.src}
            alt={photos.handtvattHogtryck.alt}
            fill
            preload
            placeholder="blur"
            sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[35%_50%]"
          />
          <figcaption className="type-label absolute bottom-0 left-0 bg-carbon px-4 py-3 text-white/80 sm:px-6">
            Handtvätt i vår hall på {business.address.street}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
