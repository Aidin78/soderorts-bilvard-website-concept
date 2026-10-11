import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionIntro";
import { business } from "@/content/business";

/** Only verified strengths – no invented statistics. */
const strengths = [
  { title: "Etablerade sedan 2012", text: "Många års yrkeserfarenhet av biltvätt, rekond och däckservice." },
  { title: "Alltid handtvätt", text: "Skonsammare mot lacken än maskintvätt – och vi når ytorna en maskin missar." },
  { title: "Garanti på biltvättar", text: "Vi lämnar garanti på utförda biltvättar." },
  { title: "Bilvård in i detalj", text: "Från motortvätt och klädseltvätt till polering och lackförsegling." },
  { title: "Däck året runt", text: "Skifte, verkstad, nya däck och däckhotell – på ett och samma ställe." },
  { title: "Nära Globen", text: "Tjurhornsgränd 6 i Johanneshov, ett par minuter från Gullmarsplan." },
];

export function WhyUs() {
  return (
    <section aria-labelledby="varfor-oss" className="overflow-hidden py-20 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="reveal lg:col-span-5">
          <Eyebrow>Varför Söderorts Bilvård</Eyebrow>
          <p
            aria-hidden
            className="type-display mt-8 text-[clamp(5.5rem,3rem+11vw,11rem)] leading-[0.8] text-transparent [-webkit-text-stroke:1.5px_var(--color-steel)]"
          >
            {business.foundedYear}
          </p>
          <h2 id="varfor-oss" className="type-heading text-heading-1 mt-8 max-w-md">
            Verkstadens noggrannhet. Bilvårdarens känsla.
          </h2>
        </div>

        <ol className="grid self-end sm:grid-cols-2 lg:col-span-7">
          {strengths.map((strength, index) => (
            <li key={strength.title} className="reveal border-t border-line py-7 sm:pr-8">
              <p className="type-label text-signal-ink">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="type-heading mt-3 text-xl">{strength.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{strength.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
