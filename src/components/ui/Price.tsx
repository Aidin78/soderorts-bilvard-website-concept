import Link from "next/link";
import type { Price, PriceItem } from "@/content/pricing";
import { priceParts } from "@/lib/format";

type Tone = "light" | "dark";

export function PriceTag({ price, size = "md", tone = "light" }: { price: Price; size?: "sm" | "md" | "lg"; tone?: Tone }) {
  const { prefix, amount, unit } = priceParts(price);
  const amountSize = { sm: "text-lg", md: "text-2xl", lg: "text-4xl sm:text-5xl" }[size];
  const quiet = tone === "dark" ? "text-steel" : "text-muted";
  return (
    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
      {prefix && <span className={`type-label ${quiet}`}>{prefix}</span>}
      <span className={`type-figure ${amountSize}`}>{amount}</span>
      {unit && <span className={`type-label ${quiet}`}>{unit}</span>}
    </span>
  );
}

/** Price rows with dotted leaders, used on the price page, service pages and the homepage. */
export function PriceRows({ items, tone = "light", linked = false }: { items: PriceItem[]; tone?: Tone; linked?: boolean }) {
  const line = tone === "dark" ? "border-line-dark" : "border-line";
  const leader = tone === "dark" ? "border-white/15" : "border-carbon/15";
  return (
    <ul className={`border-t ${line}`}>
      {items.map((item) => {
        const name =
          linked && item.href ? (
            <Link href={item.href} className="underline-offset-4 decoration-signal decoration-2 hover:underline">
              {item.name}
            </Link>
          ) : (
            item.name
          );
        return (
          <li key={item.id} className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b py-4 ${line}`}>
            <span className="min-w-0 basis-full font-medium sm:basis-auto">
              {name}
              {item.detail && <span className={`block text-sm font-normal ${tone === "dark" ? "text-steel" : "text-muted"}`}>{item.detail}</span>}
            </span>
            <span aria-hidden className={`hidden flex-1 translate-y-[-0.3em] border-b border-dotted sm:block ${leader}`} />
            <PriceTag price={item.price} size="sm" tone={tone} />
          </li>
        );
      })}
    </ul>
  );
}
