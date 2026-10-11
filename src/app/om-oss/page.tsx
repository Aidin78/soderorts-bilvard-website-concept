import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionIntro } from "@/components/ui/SectionIntro";
import { FinalCta } from "@/components/sections/FinalCta";
import { LocationSection } from "@/components/sections/LocationSection";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { business } from "@/content/business";
import { photos } from "@/content/images";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Om oss – bilvård i Johanneshov sedan 2012",
  description:
    "Söderorts Bilvård AB grundades 2012 och erbjuder biltvätt, rekond och en komplett däckverkstad i Johanneshov, Stockholm. För privatpersoner, företag och bilhandlare.",
  path: "/om-oss",
});

const principles = [
  {
    title: "Kvalitet som håller",
    text: "Vår vision är att erbjuda högkvalitativ service. Därför lämnar vi garanti på utförda biltvättar.",
  },
  {
    title: "Omsorg om din bil",
    text: "Det är en självklarhet för oss att behandla kundens egendom med omsorg – från första sköljningen till sista hjulbulten.",
  },
  {
    title: "Personlig service",
    text: "Gott bemötande och raka råd, oavsett om det gäller en tvätt, nya däck eller förvaring.",
  },
];

const customers = ["Privatpersoner", "Företag", "Små och stora bilhandlare", "Kommuner och myndigheter", "Åkerier"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Om oss"
        title={`Bilvård i Johanneshov sedan ${business.foundedYear}.`}
        lead={<p>Söderorts Bilvård AB är en komplett bilvårdsfirma med tvätthall, rekond och däckverkstad under samma tak – mellan Globen och Årsta.</p>}
        breadcrumbs={[{ name: "Om oss", path: "/om-oss" }]}
        photo={photos.hjulbyteLyft}
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro eyebrow="Vilka vi är" index="01" title="Lång erfarenhet. Samma noggrannhet varje gång." />
          </div>
          <div className="reveal grid gap-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              Söderorts Bilvård AB grundades {business.foundedYear} och har många års yrkeserfarenhet inom biltvätt och rekond. I
              Johanneshov har vi också en komplett däckverkstad med däckbyte, däckhotell och försäljning av däck och fälgar.
            </p>
            <p>
              Vi tvättar alltid för hand, eftersom det är skonsammare mot lacken och ger ett jämnare resultat. Samma inställning
              gäller i verkstaden: rätt däck, rätt placerade och rätt åtdragna.
            </p>
            <p>
              Vad du än behöver hjälp med ska du kunna räkna med ett gott bemötande och professionell service. Se mer av vårt
              arbete på Instagram,{" "}
              <a
                href={business.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-carbon underline decoration-signal decoration-2 underline-offset-4"
              >
                {business.social.instagram.handle}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Bilder från verkstaden">
        <Container>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-12">
            <div className="reveal-image relative col-span-2 aspect-[16/10] lg:col-span-7">
              <Image src={photos.polering.src} alt={photos.polering.alt} fill placeholder="blur" sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
            </div>
            <div className="reveal-image relative aspect-square lg:col-span-5 lg:aspect-auto">
              <Image src={photos.falgtvatt.src} alt={photos.falgtvatt.alt} fill placeholder="blur" sizes="(min-width: 1024px) 40vw, 50vw" className="object-cover" />
            </div>
            <div className="reveal-image relative aspect-square lg:hidden">
              <Image src={photos.dackhotellLager.src} alt={photos.dackhotellLager.alt} fill placeholder="blur" sizes="50vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <SectionIntro eyebrow="Så arbetar vi" index="02" title="Tre saker vi aldrig kompromissar med." />
          <ol className="mt-12 grid gap-10 md:grid-cols-3 lg:mt-16">
            {principles.map((principle, index) => (
              <li key={principle.title} className="reveal border-t-2 border-carbon pt-6">
                <p className="type-figure text-5xl text-signal-ink">{index + 1}</p>
                <h3 className="type-heading mt-6 text-2xl">{principle.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{principle.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-graphite py-20 text-white lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="reveal lg:col-span-5">
            <Eyebrow tone="dark" index="03">
              Våra kunder
            </Eyebrow>
            <h2 className="type-heading text-heading-1 mt-5">Vi tar hand om alla bilägare.</h2>
          </div>
          <ul className="reveal flex flex-wrap gap-2 lg:col-span-7">
            {customers.map((customer) => (
              <li key={customer} className="border border-white/20 px-4 py-3 text-white/85">
                {customer}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ReviewsSection />
      <LocationSection />
      <FinalCta />
    </>
  );
}
