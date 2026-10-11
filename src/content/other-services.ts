import { photos, type Photo } from "@/content/images";

export type OtherService = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  priceIds: string[];
  photo: Photo;
};

/** Additional services verified on soderortsbilvard.se (price list, articles and storage page). */
export const otherServices: OtherService[] = [
  {
    id: "motortvatt",
    title: "Motortvätt",
    body: [
      "Motorn sitter trångt och delarna runt den är känsliga för både vatten och rengöringsmedel. Därför kräver motortvätt en precis och skonsam metod.",
      "När motorn har svalnat rengör vi motorrummet och tar bort smuts och avlagringar. Känsliga delar skyddas under hela behandlingen.",
    ],
    priceIds: ["motortvatt"],
    photo: photos.motortvatt,
  },
  {
    id: "lackskydd",
    title: "Lackförsegling & lackkonservering",
    body: [
      "Lacken utsätts dagligen för sol, nederbörd och vägsalt, vilket gör att ytan mattas och smuts fäster lättare. En lackförsegling skyddar lacken under lång tid och gör bilen mer lättvättad.",
      "En behandlad lack tål avfettning vid salt- eller tjärstänk utan att skyddet försvinner. Är lacken lite matt polerar vi den först.",
    ],
    priceIds: ["lackforsegling", "lackkonservering"],
    photo: photos.polering,
  },
  {
    id: "ozonbehandling",
    title: "Ozonbehandling",
    body: [
      "Luktsanering som tar bort oönskade lukter i kupén, till exempel cigarettrök eller fuktlukt. Kan kombineras med invändig rengöring eller rekond.",
    ],
    priceIds: ["ozonbehandling"],
    photo: photos.interiorRatt,
  },
  {
    id: "kladsel",
    title: "Klädseltvätt & skinnbehandling",
    body: [
      "Kemisk tvätt av säten och klädsel tar bort smuts och fläckar som dammsugning inte når. Skinnklädsel rengörs och behandlas.",
    ],
    priceIds: ["kladseltvatt", "skinnbehandling"],
    photo: photos.kladseltvatt,
  },
  {
    id: "solfilm",
    title: "Solfilm",
    body: [
      "Solfilm ger insynsskydd, mindre bländning och en svalare bil. Den reducerar UV-strålningen kraftigt, vilket också hjälper interiören att behålla sina färger.",
      "Filmen finns i olika toner och med olika ljusinsläpp. Kontakta oss för ett prisförslag.",
    ],
    priceIds: ["solfilm"],
    photo: photos.solfilm,
  },
  {
    id: "forvaring",
    title: "Bil- och MC-förvaring",
    body: [
      "Bilförvaring, parkering och vinterförvaring av motorcykel i ett uppvärmt och kameraövervakat garage i Johanneshov. Bilplatsen når du dygnet runt.",
      "Antalet platser är begränsat, särskilt inför vintern. Fordonet ska vara försäkrat under förvaringstiden.",
    ],
    bullets: [
      "Uppvärmt – skyddar mot kyla, fukt och rost",
      "Kameraövervakat och larmat",
      "MC: underhållsladdning av batteriet ingår",
      "Kan kombineras med tvätt eller rekond",
    ],
    priceIds: ["bilforvaring", "mc-forvaring"],
    photo: photos.bilforvaring,
  },
];
