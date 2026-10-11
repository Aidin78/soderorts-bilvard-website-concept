import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionIntro";
import type { Photo } from "@/content/images";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/seo";

export type Crumb = { name: string; path: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: ReactNode;
  /** Trail after "Hem"; the last crumb is the current page. */
  breadcrumbs: Crumb[];
  photo?: Photo;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lead, breadcrumbs, photo, children }: PageHeroProps) {
  const trail = [{ name: "Hem", path: "/" }, ...breadcrumbs];

  const text = (
    <>
      <nav aria-label="Brödsmulor" className="animate-rise">
        <ol className="type-label flex flex-wrap items-center gap-x-2 gap-y-1 text-steel">
          {trail.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              {index === trail.length - 1 ? (
                <span aria-current="page" className="text-white/80">
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className="hover:text-white">
                  {crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="animate-rise mt-12 [--delay:100ms] lg:mt-16">
        <Eyebrow tone="dark">{eyebrow}</Eyebrow>
      </div>
      <h1 className="type-display text-display-2 animate-rise mt-6 [--delay:180ms]">{title}</h1>
      <div className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-white/75 [--delay:260ms]">{lead}</div>
      {children && <div className="animate-rise mt-10 [--delay:340ms]">{children}</div>}
    </>
  );

  return (
    <section className="bg-carbon text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbJsonLd(trail))} />
      {photo ? (
        <div className="grid lg:min-h-[36rem] lg:grid-cols-12">
          <div className="px-4 pt-10 pb-12 sm:px-6 lg:col-span-6 lg:py-14 lg:pr-12 lg:pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]">
            {text}
          </div>
          <div className="animate-unveil relative aspect-[16/10] [--delay:150ms] lg:col-span-6 lg:aspect-auto">
            <Image src={photo.src} alt={photo.alt} fill preload placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      ) : (
        <Container className="pt-10 pb-16 lg:pt-14 lg:pb-24">{text}</Container>
      )}
    </section>
  );
}
