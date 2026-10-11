import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { business } from "@/content/business";
import { mainLinks, serviceLinks } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-carbon text-white">
      <a
        href="#innehall"
        className="type-label sr-only z-50 bg-signal px-4 py-3 text-carbon focus:not-sr-only focus:absolute focus:top-2 focus:left-2"
      >
        Hoppa till innehållet
      </a>
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" aria-label="Söderorts Bilvård – startsida" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Huvudmeny" className="hidden h-full lg:block">
          <ul className="flex h-full items-center gap-1">
            {mainLinks.map((link) =>
              link.href === "/tjanster" ? (
                <li key={link.href} className="group relative flex h-full items-center">
                  <Link href={link.href} className="type-label flex items-center gap-1.5 px-4 py-3 text-white/80 transition-colors hover:text-white">
                    {link.label}
                    <ChevronDown aria-hidden className="size-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute top-full left-0 w-72 translate-y-2 border border-white/10 bg-graphite opacity-0 transition duration-200 ease-precise group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="py-2">
                      {serviceLinks.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className="flex items-center justify-between px-5 py-3 text-[0.95rem] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {service.label}
                            <span aria-hidden className="h-px w-4 bg-signal" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href} className="type-label px-4 py-3 text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={business.phone.href}
            className="type-figure hidden items-center gap-2 text-[0.95rem] text-white/85 transition-colors hover:text-white xl:flex"
          >
            <Phone aria-hidden className="size-4 text-signal" />
            {business.phone.display}
          </a>
          <div className="hidden sm:block">
            <ActionLink href="/boka">Boka tid</ActionLink>
          </div>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
