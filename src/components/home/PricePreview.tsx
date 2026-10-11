import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { PriceRows } from "@/components/ui/Price";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { generalPriceNotes, getPriceItems } from "@/content/pricing";

const previewIds = ["handtvatt-utvandig", "invandig-tvatt", "ut-och-invandig-tvatt", "dackskifte-personbil", "helrekond"];

export function PricePreview() {
  return (
    <section aria-labelledby="prisexempel" className="bg-graphite text-white">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-5">
          <SectionIntro eyebrow="Priser" tone="dark" title={<span id="prisexempel">Priser i klartext.</span>}>
            <p>Fasta priser där det går – och tydligt markerat när priset beror på bilens storlek och skick.</p>
          </SectionIntro>
          <div className="reveal mt-10">
            <ActionLink href="/priser" size="lg">
              Se hela prislistan
            </ActionLink>
          </div>
        </div>
        <div className="reveal lg:col-span-7">
          <PriceRows items={getPriceItems(previewIds)} tone="dark" linked />
          <ul className="mt-6 grid gap-1 text-sm text-steel">
            <li>Större fordon: tillägg 450 kr inför tvätt. Tunga eller stora hjul: tillägg 450 kr vid däckbyte.</li>
            {generalPriceNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
