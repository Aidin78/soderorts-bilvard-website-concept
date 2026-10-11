/**
 * Verified company information, sourced from soderortsbilvard.se
 * (footer, kontakt, villkor för däckförvaring). Update here only.
 */
export const business = {
  name: "Söderorts Bilvård",
  legalName: "Söderorts Bilvård AB",
  orgNumber: "556917-1019",
  foundedYear: 2012,
  address: {
    street: "Tjurhornsgränd 6",
    postalCode: "121 63",
    locality: "Johanneshov",
    region: "Stockholm",
    country: "SE",
  },
  /** Coordinates from the company's own Google Maps embed. */
  geo: { latitude: 59.29437, longitude: 18.06661 },
  landmarks:
    "Mellan Globen (Avicii Arena) och Årsta, vid Bolidenplan – några minuter från Gullmarsplan.",
  phone: { display: "08-549 02 549", href: "tel:+46854902549", e164: "+46854902549" },
  email: "kontakt@soderortsbilvard.se",
  openingHours: [{ days: "Mån–fre", dayCodes: ["Mo", "Tu", "We", "Th", "Fr"], opens: "07:00", closes: "17:00" }],
  openingHoursNote: "Vissa perioder har vi även öppet på lördagar – det ser du bland lediga tider i bokningen.",
  social: {
    instagram: { handle: "@soderorts_bilvard", url: "https://www.instagram.com/soderorts_bilvard/" },
    facebook: { url: "https://www.facebook.com/SoderortsBilvardAB/" },
  },
  reviews: {
    recoProfileUrl: "https://www.reco.se/soderorts-bilvard-ab-johanneshov",
    recoWidgetUrl: "https://widget.reco.se/v2/widget/3739686?mode=HORIZONTAL_QUOTE&inverted=false&border=true",
    googleMapsUrl: "https://maps.google.com/?cid=14015076818418889721",
  },
  maps: {
    placeUrl: "https://maps.google.com/?cid=14015076818418889721",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=S%C3%B6derorts+Bilv%C3%A5rd+AB%2C+Tjurhornsgr%C3%A4nd+6%2C+121+63+Johanneshov",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2037.3105216807448!2d18.066609515901273!3d59.29437098164666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7789a1555555%3A0xc27f8e1c7dab73f9!2sS%C3%B6derorts%20Bilv%C3%A5rd%20AB!5e0!3m2!1ssv!2sse",
  },
  documents: {
    tireStorageTerms: "/dokument/villkor-dack-och-hjulforvaring.pdf",
  },
} as const;

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.locality}`;

export const mailto = (subject?: string) =>
  `mailto:${business.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
