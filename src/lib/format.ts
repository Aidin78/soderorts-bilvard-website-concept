import type { Price } from "@/content/pricing";

const number = new Intl.NumberFormat("sv-SE");

export type PriceParts = { prefix?: string; amount: string; unit: string };

export function priceParts(price: Price): PriceParts {
  switch (price.kind) {
    case "from":
      return { prefix: "från", amount: number.format(price.amount), unit: "kr" };
    case "fixed":
      return { amount: number.format(price.amount), unit: "kr" };
    case "per":
      return { amount: number.format(price.amount), unit: `kr/${price.unit}` };
    case "quote":
      return { amount: "Offert", unit: "" };
  }
}

export function formatPrice(price: Price): string {
  const { prefix, amount, unit } = priceParts(price);
  return [prefix, amount, unit].filter(Boolean).join(" ");
}
