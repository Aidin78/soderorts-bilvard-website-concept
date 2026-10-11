/**
 * Single source of truth for all prices on the site.
 * Source: soderortsbilvard.se/priser and /bilforvaring-och-mc-forvaring (verified 2026-10-11).
 * Prices are those published on the current website, not guaranteed offers.
 */

export type Price =
  | { kind: "from"; amount: number }
  | { kind: "fixed"; amount: number }
  | { kind: "per"; amount: number; unit: string }
  | { kind: "quote" };

export type PriceItem = {
  id: string;
  name: string;
  price: Price;
  /** Extra price line or clarification shown under the name. */
  detail?: string;
  href?: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  intro: string;
  items: PriceItem[];
  conditions: string[];
};

const surchargeLargeVehicleWash =
  "Större fordon: tillägg 450 kr inför tvätt. Hårt smutsade bilar debiteras extra.";
const surchargeHeavyWheels =
  "Tunga eller stora hjul: tillägg 450 kr vid däckbyte. Gäller bland annat vissa elbilar, arbetsfordon med C-däck och SUV:ar.";

export const priceCategories: PriceCategory[] = [
  {
    id: "bilvard",
    title: "Bilvård",
    intro: "Handtvätt, invändig rengöring och vaxning. Allt görs för hand.",
    items: [
      { id: "handtvatt-utvandig", name: "Handtvätt utvändig", price: { kind: "from", amount: 695 }, href: "/tjanster/biltvatt" },
      { id: "invandig-tvatt", name: "Invändig tvätt/städning", price: { kind: "from", amount: 720 }, href: "/tjanster/biltvatt" },
      { id: "ut-och-invandig-tvatt", name: "Ut- och invändig tvätt", price: { kind: "from", amount: 1295 }, href: "/tjanster/biltvatt" },
      { id: "utvandig-handtvatt-vaxning", name: "Utvändig handtvätt och vaxning", price: { kind: "from", amount: 945 }, href: "/tjanster/biltvatt" },
      { id: "in-utvandig-handtvatt-vaxning", name: "In- och utvändig handtvätt och vaxning", price: { kind: "from", amount: 1380 }, href: "/tjanster/biltvatt" },
      { id: "motortvatt", name: "Motortvätt", price: { kind: "fixed", amount: 550 }, href: "/tjanster/ovriga-tjanster#motortvatt" },
    ],
    conditions: [surchargeLargeVehicleWash],
  },
  {
    id: "rekond",
    title: "Rekond & lackbehandling",
    intro: "Polering, lackskydd och djuprengöring av interiören.",
    items: [
      { id: "minirekond-utvandig", name: "Minirekond utvändigt", price: { kind: "from", amount: 2500 }, href: "/tjanster/bilrekond" },
      { id: "helrekond", name: "Helrekond", price: { kind: "from", amount: 6500 }, href: "/tjanster/bilrekond" },
      { id: "lackforsegling", name: "Lackförsegling", price: { kind: "from", amount: 3900 }, href: "/tjanster/ovriga-tjanster#lackskydd" },
      { id: "lackkonservering", name: "Lackkonservering", price: { kind: "from", amount: 5700 }, href: "/tjanster/ovriga-tjanster#lackskydd" },
      { id: "ozonbehandling", name: "Ozonbehandling", price: { kind: "from", amount: 1200 }, href: "/tjanster/ovriga-tjanster#ozonbehandling" },
      {
        id: "kladseltvatt",
        name: "Klädseltvätt",
        price: { kind: "per", amount: 560, unit: "st" },
        detail: "Fram och bak: 2 800 kr",
        href: "/tjanster/ovriga-tjanster#kladsel",
      },
      { id: "skinnbehandling", name: "Skinnbehandling", price: { kind: "from", amount: 1500 }, href: "/tjanster/ovriga-tjanster#kladsel" },
    ],
    conditions: [surchargeLargeVehicleWash],
  },
  {
    id: "dackservice",
    title: "Däckservice",
    intro: "Hjulskifte, omläggning, balansering och lagning.",
    items: [
      { id: "dackskifte-personbil", name: "Däckskifte personbil", price: { kind: "fixed", amount: 500 }, href: "/tjanster/dackbyte" },
      { id: "punktering", name: "Lagning av punktering", price: { kind: "fixed", amount: 520 }, href: "/tjanster/dackverkstad" },
      {
        id: "omlaggning-17",
        name: "Omläggning och balansering, upp till 17″",
        price: { kind: "per", amount: 425, unit: "st" },
        href: "/tjanster/dackverkstad",
      },
      {
        id: "omlaggning-18-19",
        name: "Omläggning och balansering, 18–19″",
        price: { kind: "per", amount: 485, unit: "st" },
        href: "/tjanster/dackverkstad",
      },
      {
        id: "omlaggning-20-22",
        name: "Omläggning och balansering, 20–22″",
        price: { kind: "per", amount: 595, unit: "st" },
        href: "/tjanster/dackverkstad",
      },
    ],
    conditions: [
      surchargeHeavyWheels,
      "I omläggning ingår demontering av befintligt däck från fälg, montering av däck på fälg och balansering.",
    ],
  },
  {
    id: "dackhotell",
    title: "Däckhotell",
    intro: "Förvaring av däck och hjul. En förvaringsavgift gäller en säsong.",
    items: [
      { id: "silverforvaring", name: "Silverförvaring", price: { kind: "per", amount: 2295, unit: "säsong" }, href: "/tjanster/dackhotell" },
      { id: "guldforvaring", name: "Guldförvaring", price: { kind: "per", amount: 2495, unit: "säsong" }, href: "/tjanster/dackhotell" },
    ],
    conditions: [
      "En säsong motsvarar normalt cirka sex månader, mellan två ordinarie hjulskiften.",
      "Hör av dig så berättar vi vad som skiljer Silver och Guld.",
    ],
  },
  {
    id: "ovrigt",
    title: "Övriga tjänster",
    intro: "Solfilm samt förvaring av bil och motorcykel i varmgarage.",
    items: [
      { id: "solfilm", name: "Solfilm", price: { kind: "quote" }, href: "/tjanster/ovriga-tjanster#solfilm" },
      { id: "bilforvaring", name: "Bilförvaring och parkering", price: { kind: "per", amount: 2000, unit: "månad" }, href: "/tjanster/ovriga-tjanster#forvaring" },
      {
        id: "mc-forvaring",
        name: "Vinterförvaring av MC",
        price: { kind: "per", amount: 450, unit: "månad" },
        detail: "Oktober–mars",
        href: "/tjanster/ovriga-tjanster#forvaring",
      },
    ],
    conditions: ["Bilförvaring har en månads uppsägningstid."],
  },
];

export const fromPriceNote = "Priser markerade med ”från” beror på bilens storlek och skick.";
export const priceReservationNote = "Vi reserverar oss för eventuella prisjusteringar.";
export const generalPriceNotes = [fromPriceNote, priceReservationNote];

const allItems = new Map(priceCategories.flatMap((c) => c.items.map((item) => [item.id, item] as const)));

export function getPriceItem(id: string): PriceItem {
  const item = allItems.get(id);
  if (!item) throw new Error(`Unknown price id: ${id}`);
  return item;
}

export function getPriceItems(ids: readonly string[]): PriceItem[] {
  return ids.map(getPriceItem);
}
