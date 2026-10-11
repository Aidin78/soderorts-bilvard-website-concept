import { Disc3, Droplets, Sparkles, Warehouse, Wrench, type LucideProps } from "lucide-react";
import type { ServiceSlug } from "@/content/services";

const icons = {
  biltvatt: Droplets,
  bilrekond: Sparkles,
  dackbyte: Disc3,
  dackhotell: Warehouse,
  dackverkstad: Wrench,
} satisfies Record<ServiceSlug, unknown>;

export function ServiceIcon({ slug, ...props }: { slug: ServiceSlug } & LucideProps) {
  const Icon = icons[slug];
  return <Icon aria-hidden strokeWidth={1.5} {...props} />;
}
