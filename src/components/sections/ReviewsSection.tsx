import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionIntro";
import { business } from "@/content/business";
import recoBadge from "@/assets/images/reco-rekommenderat-7-ar.webp";

/** Reviews come straight from Reco's official widget – nothing is copied or invented. */
export function ReviewsSection() {
  return (
    <section aria-labelledby="omdomen" className="border-y border-line bg-white">
      <Container className="grid gap-10 py-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-24">
        <div className="reveal flex items-start gap-6 lg:col-span-4">
          <Image src={recoBadge} alt="Reco.se: Rekommenderat 7 år i rad" className="size-24 shrink-0 sm:size-28" sizes="112px" />
          <div>
            <Eyebrow>Omdömen</Eyebrow>
            <h2 id="omdomen" className="type-heading text-heading-2 mt-4">
              Vad våra kunder säger
            </h2>
          </div>
        </div>
        <div className="reveal lg:col-span-8">
          <iframe
            src={business.reviews.recoWidgetUrl}
            title="Kundomdömen om Söderorts Bilvård på Reco"
            loading="lazy"
            className="block h-[225px] w-full border-0"
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={business.reviews.recoProfileUrl} variant="ghost-dark" icon="external" newTab>
              Alla omdömen på Reco
            </ActionLink>
            <ActionLink href={business.reviews.googleMapsUrl} variant="ghost-dark" icon="external" newTab>
              Omdömen på Google
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
