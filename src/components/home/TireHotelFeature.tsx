import Image from "next/image";
import { Check } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { PriceTag } from "@/components/ui/Price";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { tireBookingUrl } from "@/content/booking";
import { photos } from "@/content/images";
import { getPriceItems } from "@/content/pricing";

const benefits = [
  "Däck och fälgar tvättas innan förvaring",
  "Mönsterdjup, skador och slitage kontrolleras",
  "Förvaras svalt, torrt och mörkt – och försäkrade",
  "Vi hör av oss om däcken behöver bytas inför säsongen",
];

export function TireHotelFeature() {
  const packages = getPriceItems(["silverforvaring", "guldforvaring"]);

  return (
    <section aria-labelledby="dackhotell" className="bg-white py-20 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="reveal-image relative aspect-[4/5] w-[82%]">
            <Image
              src={photos.dackhotellGang.src}
              alt={photos.dackhotellGang.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, 82vw"
              className="object-cover"
            />
          </div>
          <div className="reveal-image absolute right-0 bottom-[-2rem] aspect-square w-[46%] border-8 border-white">
            <Image
              src={photos.dackhotellHylla.src}
              alt={photos.dackhotellHylla.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 24vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="pt-8 lg:col-span-6 lg:pt-0">
          <SectionIntro eyebrow="Däckhotell" title={<span id="dackhotell">Dina däck, i goda händer mellan säsongerna.</span>}>
            <p>Slipp tunga lyft och ett fullt förråd. Vi tar hand om hjulen från ett skifte till nästa.</p>
          </SectionIntro>

          <ul className="reveal mt-8 grid gap-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <Check aria-hidden className="mt-1 size-4 shrink-0 text-signal-ink" />
                {benefit}
              </li>
            ))}
          </ul>

          <dl className="reveal mt-10 grid grid-cols-2 border border-line">
            {packages.map((item, index) => (
              <div key={item.id} className={`p-5 sm:p-6 ${index > 0 ? "border-l border-line" : ""}`}>
                <dt className="type-label text-muted">{item.name}</dt>
                <dd className="mt-3">
                  <PriceTag price={item.price} size="md" />
                </dd>
              </div>
            ))}
          </dl>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="/tjanster/dackhotell">Läs mer om däckhotell</ActionLink>
            <ActionLink href={tireBookingUrl} variant="ghost-dark" icon="external">
              Boka däckskifte
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
