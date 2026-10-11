import type { StaticImageData } from "next/image";
import bilforvaring from "@/assets/images/bilforvaring.jpg";
import biltvattSkolj from "@/assets/images/biltvatt-skolj.jpg";
import dackhotellGang from "@/assets/images/dackhotell-gang.jpg";
import dackhotellHylla from "@/assets/images/dackhotell-hylla.jpg";
import dackhotellLager from "@/assets/images/dackhotell-lager.jpg";
import falgDetalj from "@/assets/images/falg-detalj.jpg";
import falgtvatt from "@/assets/images/falgtvatt.jpg";
import handtvattHogtryck from "@/assets/images/handtvatt-hogtryck.jpg";
import hjulbyteLyft from "@/assets/images/hjulbyte-lyft.jpg";
import hjulmontering from "@/assets/images/hjulmontering.jpg";
import hjulskifteVinterdack from "@/assets/images/hjulskifte-vinterdack.jpg";
import interiorRatt from "@/assets/images/interior-ratt.jpg";
import invandigRekond from "@/assets/images/invandig-rekond.jpg";
import kladseltvatt from "@/assets/images/kladseltvatt.jpg";
import motortvatt from "@/assets/images/motortvatt.jpg";
import polering from "@/assets/images/polering.jpg";
import solfilm from "@/assets/images/solfilm.jpg";

export type Photo = { src: StaticImageData; alt: string };

/** Photography from the company's current website. Alt texts describe what is actually shown. */
export const photos = {
  handtvattHogtryck: {
    src: handtvattHogtryck,
    alt: "Medarbetare i Söderorts Bilvårds arbetskläder högtryckstvättar en röd bil täckt av skum i tvätthallen",
  },
  falgtvatt: {
    src: falgtvatt,
    alt: "Medarbetare handtvättar fälg och däck på en grå bil täckt av tvättskum",
  },
  polering: {
    src: polering,
    alt: "Medarbetare maskinpolerar lacken på en röd bil i verkstaden",
  },
  hjulbyteLyft: {
    src: hjulbyteLyft,
    alt: "Medarbetare demonterar hjulet på en röd bil som står på lyft i däckverkstaden",
  },
  hjulmontering: {
    src: hjulmontering,
    alt: "Medarbetare drar åt hjulbultarna med mutterdragare på en silverfärgad bil",
  },
  hjulskifteVinterdack: {
    src: hjulskifteVinterdack,
    alt: "Vinterdäck monteras på en röd bil i verkstaden",
  },
  dackhotellLager: {
    src: dackhotellLager,
    alt: "Medarbetare staplar däck i däckhotellets lager",
  },
  dackhotellGang: {
    src: dackhotellGang,
    alt: "Medarbetare i Söderorts Bilvårds tröja står i en gång mellan höga staplar av förvarade däck",
  },
  dackhotellHylla: {
    src: dackhotellHylla,
    alt: "Medarbetare lyfter ner ett däck från en hylla i däckförvaringen",
  },
  biltvattSkolj: {
    src: biltvattSkolj,
    alt: "En silverfärgad bil sköljs av med högtryck i tvätthallen",
  },
  invandigRekond: {
    src: invandigRekond,
    alt: "Instrumentpanelen torkas av med mikrofiberduk vid invändig rengöring",
  },
  interiorRatt: {
    src: interiorRatt,
    alt: "Närbild på ratten i en nyrengjord bilinteriör",
  },
  kladseltvatt: {
    src: kladseltvatt,
    alt: "Bilsäte tvättas med textilrengöringsmaskin",
  },
  motortvatt: {
    src: motortvatt,
    alt: "Rent motorrum med motorn synlig efter motortvätt",
  },
  solfilm: {
    src: solfilm,
    alt: "Solfilm monteras på en bils sidoruta",
  },
  falgDetalj: {
    src: falgDetalj,
    alt: "Närbild på en ren fälg och ett däck på en sportbil",
  },
  bilforvaring: {
    src: bilforvaring,
    alt: "Bilar parkerade i ett upplyst garage",
  },
} satisfies Record<string, Photo>;
