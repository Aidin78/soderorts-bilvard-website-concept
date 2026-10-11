import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PriceTag } from "@/components/ui/Price";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getPriceItem } from "@/content/pricing";
import { coreServiceOrder, getService } from "@/content/services";

export function QuickServiceNav() {
  const items = coreServiceOrder.map((slug) => getService(slug)!);

  return (
    <nav aria-label="Snabbval tjänster" className="border-b border-line bg-white">
      <Container className="py-0">
        <ul className="divide-y divide-line lg:grid lg:grid-cols-5 lg:divide-x lg:divide-y-0 lg:border-x lg:border-line">
          {items.map((service, index) => (
            <li key={service.slug}>
              <Link
                href={`/tjanster/${service.slug}`}
                className="group relative flex items-center gap-4 py-5 lg:h-full lg:flex-col lg:items-start lg:gap-0 lg:px-6 lg:pt-7 lg:pb-8"
              >
                <span className="type-label hidden text-signal-ink lg:block">{String(index + 1).padStart(2, "0")}</span>
                <ServiceIcon slug={service.slug} className="size-7 shrink-0 text-carbon lg:mt-8 lg:size-8" />
                <span className="min-w-0 flex-1 lg:mt-5">
                  <span className="type-heading block text-xl lg:text-2xl">{service.name}</span>
                  <span className="mt-1 hidden text-sm leading-snug text-muted sm:block">{service.tagline}</span>
                </span>
                <span className="hidden text-right xs:block lg:mt-6 lg:text-left">
                  <PriceTag price={getPriceItem(service.startingPriceId).price} size="sm" />
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-5 shrink-0 text-signal-ink transition-transform duration-300 ease-precise group-hover:translate-x-1 lg:absolute lg:top-7 lg:right-6"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 hidden h-1 origin-left scale-x-0 bg-signal transition-transform duration-500 ease-precise group-hover:scale-x-100 lg:block"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
