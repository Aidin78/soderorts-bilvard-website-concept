import { Suspense } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormFromUrl } from "@/components/contact/ContactFormFromUrl";
import { Container } from "@/components/ui/Container";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { PageHero } from "@/components/sections/PageHero";
import { business, mailto } from "@/content/business";
import { isMailConfigured } from "@/lib/mail";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakt – Tjurhornsgränd 6, Johanneshov",
  description:
    "Kontakta Söderorts Bilvård: ring 08-549 02 549, mejla kontakt@soderortsbilvard.se eller besök oss på Tjurhornsgränd 6 i Johanneshov. Öppet mån–fre 07–17.",
  path: "/kontakt",
});

export default function ContactPage() {
  const enabled = isMailConfigured();
  const hours = business.openingHours[0];

  const channels = [
    { icon: Phone, label: "Telefon", value: business.phone.display, href: business.phone.href, figure: true },
    { icon: Mail, label: "E-post", value: business.email, href: mailto() },
    {
      icon: MapPin,
      label: "Besöksadress",
      value: `${business.address.street}, ${business.address.postalCode} ${business.address.locality}`,
      href: business.maps.directionsUrl,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Hör av dig – vi hjälper dig gärna."
        lead={<p>Ring, mejla eller skicka ett meddelande. Du är också välkommen att svänga förbi verkstaden i Johanneshov.</p>}
        breadcrumbs={[{ name: "Kontakt", path: "/kontakt" }]}
      />

      <section className="py-16 lg:py-24">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <h2 className="type-heading text-heading-2">{business.legalName}</h2>
            <ul className="mt-8 border-t border-line">
              {channels.map((channel) => (
                <li key={channel.label} className="border-b border-line">
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 py-5"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center bg-carbon text-signal">
                      <channel.icon aria-hidden className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="type-label block text-muted">{channel.label}</span>
                      <span className={`mt-1 block [overflow-wrap:anywhere] group-hover:text-signal-ink ${channel.figure ? "type-figure text-2xl" : "text-lg"}`}>
                        {channel.value}
                      </span>
                    </span>
                    {channel.external && <ArrowUpRight aria-hidden className="size-5 shrink-0 text-signal-ink" />}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-5 border-b border-line py-5">
                <span className="flex size-12 shrink-0 items-center justify-center bg-carbon text-signal">
                  <Clock aria-hidden className="size-5" />
                </span>
                <span>
                  <span className="type-label block text-muted">Öppettider</span>
                  <span className="mt-1 block text-lg">
                    {hours.days} {hours.opens}–{hours.closes}
                  </span>
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">{business.openingHoursNote}</p>
            <p className="mt-6 leading-relaxed text-muted">{business.landmarks}</p>
          </div>

          <div id="formular" className="min-w-0 scroll-mt-28 lg:col-span-7">
            <h2 className="type-heading text-heading-2">Skicka ett meddelande</h2>
            <p className="mt-3 mb-8 text-muted">Vill du boka tvätt, rekond eller verkstad? Berätta vad du behöver så återkommer vi med en tid.</p>
            <Suspense fallback={<ContactForm enabled={enabled} />}>
              <ContactFormFromUrl enabled={enabled} />
            </Suspense>
          </div>
        </Container>
      </section>

      <section aria-label="Karta" className="h-[26rem] lg:h-[32rem]">
        <MapEmbed />
      </section>
    </>
  );
}
