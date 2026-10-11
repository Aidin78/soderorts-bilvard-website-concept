import Image from "next/image";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { business } from "@/content/business";
import { photos } from "@/content/images";

/**
 * A gallery of real workshop photos. There are no authentic before/after pairs
 * available, so no comparison slider is shown.
 */
const tiles = [
  { photo: photos.dackhotellLager, caption: "Däckhotellet", className: "col-span-2 aspect-[16/10] lg:col-span-7 lg:row-span-2" },
  { photo: photos.biltvattSkolj, caption: "Sköljning efter handtvätt", className: "aspect-square lg:col-span-5" },
  { photo: photos.kladseltvatt, caption: "Klädseltvätt", className: "aspect-square lg:col-span-5" },
  { photo: photos.motortvatt, caption: "Motortvätt", className: "aspect-square lg:col-span-3" },
  { photo: photos.solfilm, caption: "Solfilm", className: "aspect-square lg:col-span-3" },
  { photo: photos.hjulskifteVinterdack, caption: "Hjulskifte", className: "aspect-square lg:col-span-3" },
  { photo: photos.invandigRekond, caption: "Invändig rengöring", className: "aspect-square lg:col-span-3" },
];

export function WorkshopGallery() {
  return (
    <section aria-labelledby="fran-verkstaden" className="bg-carbon py-20 text-white lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro eyebrow="Från verkstaden" tone="dark" title={<span id="fran-verkstaden">Så ser det ut hos oss.</span>}>
            <p>Bilder från tvätthallen, verkstaden och däckhotellet på {business.address.street}.</p>
          </SectionIntro>
          <ActionLink href={business.social.instagram.url} variant="ghost-light" icon="external" newTab className="reveal shrink-0">
            Mer på Instagram {business.social.instagram.handle}
          </ActionLink>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-2 sm:gap-3 lg:mt-16 lg:auto-rows-[15rem] lg:grid-cols-12">
          {tiles.map((tile) => (
            <li key={tile.caption} className={`reveal-image group relative overflow-hidden lg:aspect-auto ${tile.className}`}>
              <Image
                src={tile.photo.src}
                alt={tile.photo.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover transition-transform duration-700 ease-precise group-hover:scale-[1.04]"
              />
              <p className="type-label absolute bottom-0 left-0 bg-carbon/90 px-3 py-2 text-[0.7rem] text-white/85">{tile.caption}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
