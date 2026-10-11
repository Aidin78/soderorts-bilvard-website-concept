import type { Metadata } from "next";
import { business } from "@/content/business";
import type { Faq } from "@/content/services";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://soderortsbilvard.se").replace(/\/$/, "");

type PageMetaInput = { title: string; description: string; path: string };

/** Unique title, description, canonical URL and Open Graph data for a page. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // Child openGraph objects replace the parent's, so the shared fields are repeated here.
    openGraph: { title, description, url: path, siteName: business.name, locale: "sv_SE", type: "website" },
  };
}

export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoWash", "TireShop"],
    "@id": `${siteUrl}/#business`,
    name: business.name,
    legalName: business.legalName,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image.jpg`,
    telephone: business.phone.e164,
    email: business.email,
    foundingDate: String(business.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: { "@type": "GeoCoordinates", ...business.geo },
    hasMap: business.maps.placeUrl,
    openingHoursSpecification: business.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayCodes.map((code) => `https://schema.org/${dayNames[code]}`),
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: { "@type": "City", name: "Stockholm" },
    sameAs: [business.social.instagram.url, business.social.facebook.url, business.reviews.recoProfileUrl],
  };
}

const dayNames: Record<string, string> = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
};

export function faqJsonLd(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };
}
