import { photos, type Photo } from "@/content/images";

export type ServiceSlug = "biltvatt" | "bilrekond" | "dackbyte" | "dackhotell" | "dackverkstad";

export type Faq = { question: string; answer: string };

export type ServicePackage = { title: string; priceId?: string; items: string[] };

export type ServiceSection = { title: string; body: string[]; photo?: Photo };

export type Service = {
  slug: ServiceSlug;
  /** Short name used in navigation and cards. */
  name: string;
  tagline: string;
  startingPriceId: string;
  /** "tire" = online calendar, "request" = phone, e-mail or contact form. */
  booking: "tire" | "request";
  seo: { title: string; description: string };
  hero: { eyebrow: string; title: string; lead: string; photo: Photo };
  packagesTitle?: string;
  packages?: ServicePackage[];
  sections: ServiceSection[];
  steps?: { title: string; body: string }[];
  facts?: { label: string; value: string }[];
  priceCategoryIds: string[];
  /** Restrict the price table to these items; defaults to the whole categories. */
  priceIds?: string[];
  faq: Faq[];
  related: (ServiceSlug | "ovriga-tjanster")[];
};

export const services: Service[] = [
  {
    slug: "biltvatt",
    name: "Biltvätt",
    tagline: "Skonsam handtvätt – utvändigt, invändigt eller hela bilen.",
    startingPriceId: "handtvatt-utvandig",
    booking: "request",
    seo: {
      title: "Biltvätt & handtvätt i Stockholm",
      description:
        "Handtvätt av bil i Johanneshov, Stockholm. Utvändig handtvätt från 695 kr, invändig tvätt från 720 kr och heltvätt från 1 295 kr. Boka via telefon eller formulär.",
    },
    hero: {
      eyebrow: "Biltvätt · Handtvätt",
      title: "Handtvätt av bil i Johanneshov",
      lead: "Sedan 2012 tvättar vi bilar för hand – med skonsamma produkter som tar bort smutsen men skyddar lacken. Välj utvändig tvätt, invändig rengöring eller hela bilen på en gång.",
      photo: photos.falgtvatt,
    },
    packagesTitle: "Välj tvätt",
    packages: [
      {
        title: "Utvändig handtvätt",
        priceId: "handtvatt-utvandig",
        items: ["Avfettning", "Schamponering", "Spolning av hjulhus", "Fälgrengöring", "Torkning för hand"],
      },
      {
        title: "Invändig tvätt",
        priceId: "invandig-tvatt",
        items: [
          "Dammsugning av kupé och bagageutrymme",
          "Rengöring av instrumentpanel och paneler",
          "Dörrkarmar och dörrfack",
          "Fönsterputs in- och utvändigt",
          "Mattor dammsugs eller tvättas",
        ],
      },
      {
        title: "Ut- och invändig tvätt",
        priceId: "ut-och-invandig-tvatt",
        items: [
          "Allt i utvändig handtvätt",
          "Allt i invändig tvätt",
          "Kan kombineras med motortvätt",
          "Finns även med vaxning",
        ],
      },
    ],
    sections: [
      {
        title: "Därför tvättar vi för hand",
        body: [
          "Handtvätt är skonsammare och noggrannare än en automatisk tvätt. Vi minimerar risken för repor och slitage och når de små ytor som en maskin missar – hjulhus, fälgar, dörrkarmar.",
          "Avslutningsvis torkar vi bilen för hand, så att det inte blir fläckar av självtorkning.",
        ],
        photo: photos.handtvattHogtryck,
      },
      {
        title: "Insidan är lika viktig",
        body: [
          "Damm och partiklar sliter på textilier och plast. Vid en invändig tvätt går vi igenom hela kupén, och tryckluft används på svåråtkomliga ställen.",
          "Vill du ha mer än en tvätt? Med vaxning får lacken ett skyddande lager, och med en rekond fräschar vi upp bilen på djupet.",
        ],
        photo: photos.invandigRekond,
      },
    ],
    priceCategoryIds: ["bilvard"],
    faq: [
      {
        question: "Vad ingår i en utvändig handtvätt?",
        answer:
          "Vi avfettar, schamponerar, spolar hjulhusen och rengör fälgarna. Därefter torkar vi bilen för att undvika fläckar och repor.",
      },
      {
        question: "Vad ingår i en invändig biltvätt?",
        answer:
          "Vi dammsuger kupén och bagageutrymmet, rengör paneler, dörrkarmar, dörrfack och mattor och putsar fönstren in- och utvändigt. Tryckluft används på svåråtkomliga ställen.",
      },
      {
        question: "Vad är en heltvätt?",
        answer:
          "En heltvätt är både invändig och utvändig rengöring vid samma besök. Den kan kombineras med motortvätt.",
      },
      {
        question: "Hur lång tid tar en biltvätt?",
        answer:
          "Det beror på vilken tvätt du väljer. En utvändig handtvätt går snabbt, en komplett heltvätt tar längre tid. Fråga gärna när du bokar.",
      },
      {
        question: "Hur ofta bör jag tvätta bilen?",
        answer:
          "Det beror på körvanor, väder och årstid. På vintern samlas salt och smuts, så då behövs fler tvättar. På sommaren räcker det ofta med en tvätt var annan till var fjärde vecka.",
      },
      {
        question: "Använder ni miljövänliga produkter?",
        answer:
          "Ja. Våra rengöringsmedel är biologiskt nedbrytbara och vattnet från tvätten renas innan det går till avloppet.",
      },
      {
        question: "Hur bokar jag biltvätt?",
        answer:
          "Ring oss på 08-549 02 549, mejla kontakt@soderortsbilvard.se eller skicka en förfrågan via kontaktformuläret, så återkommer vi med en tid.",
      },
    ],
    related: ["bilrekond", "ovriga-tjanster", "dackbyte"],
  },
  {
    slug: "bilrekond",
    name: "Bilrekond",
    tagline: "Polering, vaxning och djuprengöring – in- och utvändigt.",
    startingPriceId: "minirekond-utvandig",
    booking: "request",
    seo: {
      title: "Bilrekond i Stockholm – helrekond, polering & lackskydd",
      description:
        "Bilrekond i Johanneshov, Stockholm. Utvändig och invändig rekond, polering, vaxning och lackskydd. Minirekond från 2 500 kr, helrekond från 6 500 kr.",
    },
    hero: {
      eyebrow: "Bilrekond · Polering",
      title: "Bilrekond i Stockholm",
      lead: "En rekond återställer bilen så nära nyskick som möjligt. Vi går igenom den i minsta detalj – polering, vaxning, motortvätt och rengöring av klädsel och inredning.",
      photo: photos.polering,
    },
    packagesTitle: "Så går rekonden till",
    packages: [
      {
        title: "Utvändig rekond",
        priceId: "minirekond-utvandig",
        items: [
          "Avfettning och schamponering",
          "Fälgrengöring och spolning av hjulhus",
          "Rengöring av dörrkarmar",
          "Utvändig fönsterputs och torkning",
          "Maskinell polering och vaxning av karossen",
        ],
      },
      {
        title: "Invändig rekond",
        items: [
          "Motortvätt",
          "Dammsugning av kupé och bagageutrymme",
          "Tvätt av mattor",
          "Invändig putsning av glasrutor",
          "Rengöring av paneler och dörrsidor",
          "Kemisk sätestvätt",
        ],
      },
      {
        title: "Helrekond",
        priceId: "helrekond",
        items: [
          "Både utvändig och invändig rekond",
          "Handtvätt, polering och vaxning",
          "Grundlig motortvätt",
          "Rengöring av säten, klädsel och inredning",
          "Tar vanligtvis 3–6 timmar",
        ],
      },
    ],
    sections: [
      {
        title: "Polering och vaxning – skillnaden",
        body: [
          "Vid polering slipas ett tunt lager av lacken bort för att ta bort mindre repor, swirls och oxidation. Vaxning lägger ett skyddande lager som ger glans och skyddar mot smuts och UV-strålning.",
          "Djupa repor kan en rekond inte ta bort – där krävs omlackering. Mindre repor kan däremot ofta poleras bort eller bli mindre synliga.",
        ],
      },
      {
        title: "Inför säsongen – eller försäljningen",
        body: [
          "Vi rekommenderar helrekond när bilen behöver fräschas upp inför en ny säsong, eller när det är dags att sälja. En välvårdad bil med ren interiör och exteriör är mer attraktiv på andrahandsmarknaden.",
          "Vill du skydda lacken längre? Lackförsegling och lackkonservering ger ett skydd som håller betydligt längre än vax.",
        ],
        photo: photos.interiorRatt,
      },
    ],
    priceCategoryIds: ["rekond"],
    faq: [
      {
        question: "Vad är en bilrekond?",
        answer:
          "En djupgående rengöring och uppfräschning av bilen, både invändigt och utvändigt – från tvätt, polering och vaxning av exteriören till dammsugning, fläckborttagning och behandling av interiören.",
      },
      {
        question: "Hur lång tid tar en bilrekond?",
        answer:
          "Det beror på omfattningen och bilens skick, men en fullständig rekond tar vanligtvis mellan 3 och 6 timmar.",
      },
      {
        question: "Hur ofta bör jag rekonda bilen?",
        answer:
          "Generellt rekommenderas en fullständig rekond minst en gång per år. Utsätts bilen för mycket smuts och salt kan det vara klokt att göra det oftare.",
      },
      {
        question: "Kan en rekond ta bort alla repor?",
        answer:
          "Nej. Mindre repor och swirls kan poleras bort eller bli mindre synliga, men djupare repor kräver omlackering.",
      },
      {
        question: "Kan en rekond hjälpa mot dålig lukt i bilen?",
        answer:
          "Ja. Med professionell rengöring och ozonbehandling kan vi ta bort oönskade lukter, till exempel cigarettrök eller fuktlukt.",
      },
      {
        question: "Kan en rekond hjälpa mot rost?",
        answer:
          "En rekond kan bidra till att förebygga rost genom att rengöra och skydda lacken. Befintlig rost kräver däremot särskild rostbehandling.",
      },
    ],
    related: ["biltvatt", "ovriga-tjanster", "dackhotell"],
  },
  {
    slug: "dackbyte",
    name: "Däckbyte",
    tagline: "Säsongsskifte med kontroll av mönsterdjup och balans.",
    startingPriceId: "dackskifte-personbil",
    booking: "tire",
    seo: {
      title: "Däckbyte & däckskifte i Stockholm – boka online",
      description:
        "Däckskifte för personbil 500 kr i Johanneshov, Stockholm. Boka tid direkt i vår onlinekalender. Vi kontrollerar mönsterdjup och placerar de bästa däcken bak.",
    },
    hero: {
      eyebrow: "Däckbyte · Däckskifte",
      title: "Däckbyte i Stockholm – boka online",
      lead: "Lämna in bilen för hjulskifte oavsett märke eller årsmodell. Du slipper tunga lyft och smutsiga händer – vi kontrollerar däcken och ser till att de sitter rätt.",
      photo: photos.hjulbyteLyft,
    },
    steps: [
      {
        title: "Boka tid online",
        body: "Välj datum och tid i vår bokningskalender och fyll i dina uppgifter.",
      },
      {
        title: "Vi förbereder",
        body: "Har du däcken på förvaring hos oss tar vi fram dem dagen innan, så att bytet går snabbt.",
      },
      {
        title: "Byte och kontroll",
        body: "Vi kontrollerar mönsterdjupet och placerar däcken med bäst mönster bak – det minskar risken för sladd.",
      },
      {
        title: "Efterdragning",
        body: "Efter cirka 5–10 mils körning ska hjulbultarna efterdras. Det är viktigt för att hjulen ska sitta säkert.",
      },
    ],
    facts: [
      { label: "Vinterdäck krävs", value: "1 dec – 31 mars vid vinterväglag" },
      { label: "Dubbdäck tillåtna", value: "1 okt – 15 april" },
      { label: "Minsta mönsterdjup", value: "3 mm vinter · 1,6 mm sommar" },
    ],
    sections: [
      {
        title: "Däckskifte eller däckbyte?",
        body: [
          "Vid ett däckskifte byter vi hela hjuluppsättningen – däck och fälg – från sommar till vinter eller tvärtom. Ett däckbyte innebär att själva däcket på fälgen byts ut, till exempel när det är slitet eller skadat.",
          "Vi hjälper dig med båda, och med balansering och lagning om däcken behöver det.",
        ],
        photo: photos.hjulmontering,
      },
    ],
    priceCategoryIds: ["dackservice"],
    priceIds: ["dackskifte-personbil", "punktering"],
    faq: [
      {
        question: "När ska jag byta till vinterdäck?",
        answer:
          "Dubbdäck är tillåtna från 1 oktober om det är vinterväglag, och vinterdäck är lag mellan 1 december och 31 mars vid vinterväglag. Många byter några veckor tidigare beroende på vädret.",
      },
      {
        question: "När ska jag byta till sommardäck?",
        answer:
          "Dubbdäck får användas till och med 15 april, längre om det är vinterväglag. Det är ofta bra att byta när temperaturen stadigt ligger över 7 grader.",
      },
      {
        question: "Hur ser jag om däcken behöver bytas?",
        answer:
          "Lagkravet är minst 1,6 mm mönsterdjup för sommardäck och 3 mm för vinterdäck. Vi rekommenderar byte vid 3 mm för sommardäck och 5 mm för vinterdäck. Kontrollera också sprickor, bulor och andra skador.",
      },
      {
        question: "Vad händer om jag inte byter i tid?",
        answer:
          "Kör du med sommardäck vid vinterväglag kan du få böter och riskerar att tappa kontrollen över bilen. Försäkringsskyddet kan också påverkas vid en olycka.",
      },
      {
        question: "Kostar det mer för stora hjul?",
        answer:
          "Ja, för fordon med tyngre eller större hjul tillkommer 450 kr. Det gäller bland annat vissa elbilar, arbetsfordon med C-däck och SUV:ar.",
      },
      {
        question: "Hur avbokar jag?",
        answer:
          "Kontakta oss så snart som möjligt och senast 24 timmar före bokad tid. Vid utebliven avbokning debiteras 500 kr.",
      },
    ],
    related: ["dackhotell", "dackverkstad", "biltvatt"],
  },
  {
    slug: "dackhotell",
    name: "Däckhotell",
    tagline: "Tvättade, kontrollerade och försäkrade däck mellan säsongerna.",
    startingPriceId: "silverforvaring",
    booking: "tire",
    seo: {
      title: "Däckhotell & däckförvaring i Stockholm",
      description:
        "Däckhotell i Johanneshov nära Globen. Dina hjul tvättas, kontrolleras och förvaras försäkrade mellan säsongerna. Silverförvaring 2 295 kr, Guldförvaring 2 495 kr.",
    },
    hero: {
      eyebrow: "Däckhotell · Däckförvaring",
      title: "Däckhotell i Stockholm",
      lead: "Slipp tunga lyft och fulla förråd. Vi tvättar dina hjul, kontrollerar skicket och förvarar dem svalt, torrt och försäkrade tills nästa säsong.",
      photo: photos.dackhotellGang,
    },
    packagesTitle: "Det här ingår alltid",
    packages: [
      {
        title: "Vid inlämning",
        items: [
          "Hjulen registreras och fotodokumenteras",
          "Digitalt förvaringsbevis via e-post",
          "Tvätt av däck och fälgar",
          "Kontroll av mönsterdjup, skador och slitage",
        ],
      },
      {
        title: "Under förvaringen",
        items: [
          "Förvaring svalt, torrt och mörkt",
          "Hjulen är försäkrade",
          "Inventering efter säsongen",
          "Vi kontaktar dig om däcken behöver bytas",
        ],
      },
    ],
    sections: [
      {
        title: "Nya däck utan extra besök",
        body: [
          "Inför nästa säsong ser vi över däcken och ger dig en tydlig rekommendation om de behöver bytas. Med ditt godkännande tar vi hem nya däck och monterar dem vid skiftet.",
          "Vi förvarar både sommar- och vinterdäck, och hjälper även till med transport av däck inom Stockholm mot överenskommelse.",
        ],
        photo: photos.dackhotellHylla,
      },
    ],
    priceCategoryIds: ["dackhotell"],
    faq: [
      {
        question: "Vad ingår i däckhotellet?",
        answer:
          "Hjulen registreras, fotodokumenteras, tvättas och kontrolleras. De förvaras svalt, torrt och mörkt, och efter säsongen inventerar vi dem och hör av oss om något behöver bytas.",
      },
      {
        question: "Är mina däck försäkrade?",
        answer:
          "Ja, dina hjul omfattas av försäkringsskydd under hela tiden de förvaras hos oss, enligt villkoren för däckförvaring.",
      },
      {
        question: "Hur länge gäller en förvaring?",
        answer:
          "En förvaring gäller en säsong, normalt cirka sex månader mellan två ordinarie hjulskiften. När du skiftar och lämnar in nästa uppsättning börjar en ny säsong.",
      },
      {
        question: "Ingår en tid för däckskifte?",
        answer:
          "Nej, däckskiftet bokas separat i vår bokningskalender. Har du däcken hos oss förbereder vi dem dagen innan ditt besök.",
      },
      {
        question: "Vad skiljer Silver och Guld?",
        answer:
          "Kontakta oss så berättar vi vad som ingår i respektive paket och vilket som passar dig bäst.",
      },
      {
        question: "Kan jag hämta ut däcken utan att byta?",
        answer:
          "Ja, men kontakta oss i god tid. Hjulen kan förvaras på en annan lagerplats, så omedelbar utlämning kan inte alltid garanteras.",
      },
    ],
    related: ["dackbyte", "dackverkstad", "biltvatt"],
  },
  {
    slug: "dackverkstad",
    name: "Däckverkstad",
    tagline: "Omläggning, balansering, lagning – och nya däck och fälgar.",
    startingPriceId: "omlaggning-17",
    booking: "tire",
    seo: {
      title: "Däckverkstad i Johanneshov – däck, fälgar & balansering",
      description:
        "Däckverkstad i Johanneshov, Stockholm. Omläggning och balansering från 425 kr/st, lagning av punktering 520 kr. Vi säljer sommar- och vinterdäck samt fälgar.",
    },
    hero: {
      eyebrow: "Däckverkstad · Däck & fälgar",
      title: "Däckverkstad i Johanneshov",
      lead: "Vi monterar, balanserar och lagar däck på bilar av alla märken och årsmodeller – och säljer nya sommar- och vinterdäck samt fälgar, med montering och balansering.",
      photo: photos.hjulskifteVinterdack,
    },
    packagesTitle: "Verkstadens tjänster",
    packages: [
      {
        title: "Omläggning och balansering",
        priceId: "omlaggning-17",
        items: ["Demontering av befintligt däck från fälg", "Montering av däck på fälg", "Balansering"],
      },
      {
        title: "Lagning av punktering",
        priceId: "punktering",
        items: ["Kontroll av skadan", "Lagning av däcket", "Så att du snabbt kommer ut på vägen igen"],
      },
      {
        title: "Nya däck och fälgar",
        items: [
          "Vanliga dimensioner i lager",
          "Övriga dimensioner inom några timmar upp till 2 dagar",
          "Dubb- och friktionsdäck",
          "Inklusive montering och balansering",
        ],
      },
    ],
    sections: [
      {
        title: "Rätt däck för din bil",
        body: [
          "Vi har de vanligaste däckstorlekarna i lager och kan ofta lösa ditt behov samma dag. Andra storlekar tar vi hem på allt från ett par timmar till två dagar, beroende på leverantörens lager.",
          "Vi hjälper dig att välja däck utifrån bilmodell, körstil, vägförhållanden och budget. Fälgar tar vi bland annat från Specialfälgar och OCL Brorssons.",
        ],
        photo: photos.dackhotellLager,
      },
      {
        title: "Balanserade hjul, jämnare körning",
        body: [
          "Obalanserade hjul kan ge vibrationer i ratten och ökat slitage på både däck och bil. Med balanserade hjul blir körningen jämnare och säkrare – och däcken håller längre.",
        ],
        photo: photos.falgDetalj,
      },
    ],
    priceCategoryIds: ["dackservice"],
    priceIds: ["omlaggning-17", "omlaggning-18-19", "omlaggning-20-22", "punktering"],
    faq: [
      {
        question: "Har ni däck i lager?",
        answer:
          "Ja, vi har däck i många populära storlekar för personbil och SUV. Finns inte din dimension hemma kan vi ofta ta hem den samma dag, annars vanligtvis inom 1–2 arbetsdagar.",
      },
      {
        question: "Hur vet jag vilken däckstorlek jag ska ha?",
        answer:
          "Storleken står på däckets sida, till exempel 205/55 R16. Ring oss gärna så hjälper vi dig att hitta rätt dimension och alternativ.",
      },
      {
        question: "Hur vet jag vilket däcktryck som är rätt?",
        answer:
          "Det rekommenderade trycket står i bilens instruktionsbok, på insidan av dörrkarmen eller i tanklocket. Kontrollera trycket regelbundet, särskilt när temperaturen ändras.",
      },
      {
        question: "Kan jag använda samma däck hela året?",
        answer:
          "Det finns året runt-däck, men de presterar inte lika bra som renodlade sommar- eller vinterdäck. För bäst säkerhet rekommenderar vi sommardäck på sommaren och vinterdäck på vintern.",
      },
      {
        question: "Hur förvarar jag däck bäst själv?",
        answer:
          "Svalt, mörkt och torrt. Däck utan fälg förvaras helst liggande, däck på fälg stående. Rengör dem innan förvaring – eller låt oss ta hand om dem i däckhotellet.",
      },
    ],
    related: ["dackbyte", "dackhotell", "ovriga-tjanster"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** The five core services in the order shown in the quick navigation. */
export const coreServiceOrder: ServiceSlug[] = ["biltvatt", "bilrekond", "dackbyte", "dackhotell", "dackverkstad"];
