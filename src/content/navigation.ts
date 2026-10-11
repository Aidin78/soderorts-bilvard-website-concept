import { coreServiceOrder, getService } from "@/content/services";

export type NavLink = { label: string; href: string };

export const serviceLinks: NavLink[] = [
  ...coreServiceOrder.map((slug) => ({ label: getService(slug)!.name, href: `/tjanster/${slug}` })),
  { label: "Övriga tjänster", href: "/tjanster/ovriga-tjanster" },
];

export const mainLinks: NavLink[] = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Priser", href: "/priser" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];
