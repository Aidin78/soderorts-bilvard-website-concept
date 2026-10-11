import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { business, mailto } from "@/content/business";
import { serviceLinks } from "@/content/navigation";

const infoLinks = [
  { label: "Priser", href: "/priser" },
  { label: "Boka tid", href: "/boka" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Integritet", href: "/integritet" },
];

export function SiteFooter() {
  const hours = business.openingHours[0];
  return (
    <footer className="bg-carbon text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Wordmark />
          <address className="mt-8 not-italic leading-relaxed text-white/70">
            {business.legalName}
            <br />
            {business.address.street}
            <br />
            {business.address.postalCode} {business.address.locality}
          </address>
          <p className="mt-6 grid gap-1">
            <a href={business.phone.href} className="type-figure text-2xl transition-colors hover:text-signal">
              {business.phone.display}
            </a>
            <a href={mailto()} className="text-white/70 underline-offset-4 hover:text-white hover:underline">
              {business.email}
            </a>
          </p>
        </div>

        <FooterColumn title="Tjänster" className="lg:col-span-3">
          {serviceLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Information" className="lg:col-span-2">
          {infoLinks.map((link) => (
            <FooterLink key={link.href} href={link.href}>
              {link.label}
            </FooterLink>
          ))}
          <li>
            <a href={business.documents.tireStorageTerms} className="text-white/70 transition-colors hover:text-white">
              Villkor däckförvaring (PDF)
            </a>
          </li>
        </FooterColumn>

        <FooterColumn title="Öppettider" className="lg:col-span-3">
          <li className="flex justify-between gap-6 border-b border-white/10 pb-3">
            <span className="text-white/70">{hours.days}</span>
            <span className="type-figure">
              {hours.opens}–{hours.closes}
            </span>
          </li>
          <li className="text-sm leading-relaxed text-steel">{business.openingHoursNote}</li>
          <li className="flex gap-5 pt-2">
            <a href={business.social.instagram.url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
              Instagram
            </a>
            <a href={business.social.facebook.url} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
              Facebook
            </a>
          </li>
        </FooterColumn>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-sm text-steel sm:flex-row sm:justify-between">
          <p>
            © {business.legalName} · Org.nr {business.orgNumber}
          </p>
          <p>Bilvård och däckservice i Johanneshov sedan {business.foundedYear}</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, className, children }: { title: string; className: string; children: ReactNode }) {
  return (
    <div className={className}>
      <h2 className="type-label text-steel">{title}</h2>
      <ul className="mt-6 grid gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/70 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
