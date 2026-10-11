import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { business, mailto } from "@/content/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Integritet och cookies",
  description: "Så hanterar Söderorts Bilvård AB personuppgifter från kontaktformuläret och vilka tredjepartstjänster webbplatsen använder.",
  path: "/integritet",
});

const sections = [
  {
    title: "Personuppgiftsansvarig",
    body: [
      `${business.legalName} (org.nr ${business.orgNumber}), ${business.address.street}, ${business.address.postalCode} ${business.address.locality}, är personuppgiftsansvarig för uppgifter som lämnas via webbplatsen.`,
    ],
  },
  {
    title: "Kontaktformuläret",
    body: [
      "När du skickar ett meddelande behandlar vi ditt namn, din e-postadress, ditt telefonnummer (om du anger det), vald tjänst och ditt meddelande.",
      `Uppgifterna skickas som e-post till ${business.email} och används enbart för att besvara och hantera din förfrågan. Webbplatsen sparar dem inte i någon databas.`,
      "Den rättsliga grunden är vårt berättigade intresse av att kunna svara på förfrågningar, eller åtgärder inför ett avtal när du vill boka en tjänst.",
    ],
  },
  {
    title: "Cookies och tredjepartstjänster",
    body: [
      "Webbplatsen använder inga egna cookies för analys eller marknadsföring.",
      "Kartan från Google Maps laddas först när du klickar på ”Visa karta”. Google kan då sätta cookies enligt Googles villkor.",
      "Kundomdömena visas via Reco.se och onlinebokningen av däckskifte sker i ett separat bokningssystem. Dessa tjänster kan hantera uppgifter enligt sina egna villkor.",
    ],
  },
  {
    title: "Dina rättigheter",
    body: [
      "Du har rätt att begära information om vilka personuppgifter vi behandlar om dig, och att få felaktiga uppgifter rättade eller raderade.",
      "Om du anser att vi behandlar dina uppgifter felaktigt kan du lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Integritet"
        title="Integritet och cookies."
        lead={<p>Kort och tydligt om hur vi hanterar de uppgifter du lämnar på webbplatsen.</p>}
        breadcrumbs={[{ name: "Integritet", path: "/integritet" }]}
      />
      <Container className="py-16 lg:py-24">
        <div className="max-w-3xl">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-line py-10">
              <h2 className="type-heading text-heading-2">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <p className="border-t border-line pt-10 text-lg">
            Frågor? Kontakta oss på{" "}
            <a href={mailto("Personuppgifter")} className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
              {business.email}
            </a>{" "}
            eller{" "}
            <a href={business.phone.href} className="font-semibold underline decoration-signal decoration-2 underline-offset-4">
              {business.phone.display}
            </a>
            .
          </p>
        </div>
      </Container>
    </>
  );
}
