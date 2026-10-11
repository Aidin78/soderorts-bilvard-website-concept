import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { business } from "@/content/business";
import { jsonLdScript, localBusinessJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const defaultTitle = "Bilvård, biltvätt & däckservice i Johanneshov, Stockholm";
const defaultDescription =
  "Söderorts Bilvård i Johanneshov: handtvätt, bilrekond, däckbyte, däckhotell och däckverkstad sedan 2012. Tydliga priser och enkel bokning nära Globen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${defaultTitle} | ${business.name}`, template: `%s | ${business.name}` },
  description: defaultDescription,
  applicationName: business.name,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: business.name,
    locale: "sv_SE",
    type: "website",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#15191c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${archivo.variable} ${hanken.variable}`}>
      <body className="flex min-h-dvh flex-col pb-14 lg:pb-0">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd())} />
        <SiteHeader />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
