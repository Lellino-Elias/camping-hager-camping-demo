import type { CampsiteConfig } from "../types";

/**
 * Park Camping Hager · Langkampfen (Tirol). Quelle ist sehr knapp (eine Preis-/Kontaktseite
 * + eigene Fotos). Inhalte streng aus raw/digest abgeleitet; Bergmotive durch die eigenen
 * Fotos belegt. Bilderarm: nur 7 platzeigene Fotos → Galerie blendet sich ehrlich aus.
 */
const IMG = "/campsites/camping-hager";

const campingHager: CampsiteConfig = {
  name: "Park Camping Hager",
  shortName: "Hager",
  slug: "camping-hager",
  ort: "Langkampfen",
  region: "Tirol",
  brandKind: "Park Camping",
  regionLong: "Langkampfen · Tiroler Unterinntal · Österreich",

  heroVariant: "center",

  claim: "Camping mit Bergblick in Tirol",
  claimEmphasis: "Bergblick",
  emailDetail: "die Bergkulisse rund um euren Campingplatz",
  intro:
    "Ebene Stellplätze für Wohnwagen, Wohnmobil und Zelt — mit Strom und Wasser, viel Grün ringsum und den Bergen des Unterinntals im Blick. Familie Hager empfängt dich in Langkampfen.",

  logo: { src: `${IMG}/logo-1db61c35ed.png`, alt: "Park Camping Hager Logo" },

  statement: {
    text: "Hier stehst du im Grünen — mit den Bergen des Unterinntals direkt vor dem Vorzelt.",
    emphasis: "im Grünen",
  },

  pillars: [
    {
      title: "Tiroler Bergkulisse",
      text: "Deine Stellplätze liegen auf weiten Wiesen, ringsum die Berge des Unterinntals im Blick.",
      image: { src: `${IMG}/gallery-e5cc1a5211.webp`, alt: "Wiesenstellplätze des Park Camping Hager vor den Bergen des Unterinntals" },
    },
    {
      title: "Schattige Plätze",
      text: "Gewachsene Bäume spenden Schatten, befestigte Wege führen bequem zu jedem Stellplatz.",
      image: { src: `${IMG}/gallery-8f7d626b1e.webp`, alt: "Beschattete Stellplätze entlang der Wege im Park Camping Hager" },
    },
    {
      title: "Familie Hager",
      text: "Den Platz führt Familie Hager persönlich — du wirst hier empfangen, nicht abgefertigt.",
      image: { src: `${IMG}/gallery-06ae7d78ef.webp`, alt: "Haupthaus der Familie Hager am Park Camping Hager" },
    },
  ],

  usps: ["Stellplätze mit Strom", "Wohnwagen & Zelt", "Dauerplätze ganzjährig", "Kinder bis 4 frei", "Familiär geführt"],

  trust: {
    heading: "Camping mit Tiroler Bergblick",
    headingEmphasis: "Tiroler Bergblick",
    intro:
      "Park Camping Hager liegt im grünen Unterinntal bei Langkampfen — ebene Stellplätze für Wohnwagen, Wohnmobil und Zelt, dazu Dauerplätze für Sommer und Winter. Familie Hager kümmert sich persönlich.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-4492f91922.webp`, alt: "Park Camping Hager: weite Wiesen vor dem Bergpanorama des Unterinntals" },
  },

  camping: {
    heading: "Camping bei Familie Hager",
    intro:
      "Vom ebenen Wiesenstellplatz bis zum Dauerplatz für Sommer und Winter — bei Hager stellst du dich aufs Grüne und hast alles Nötige in Reichweite.",
    features: [
      {
        title: "Mitten in der Natur",
        text: "Rundherum offene Wiesen und das Bergpanorama des Unterinntals — viel Grün und Ruhe abseits vom Trubel.",
        image: { src: `${IMG}/gallery-f40978f773.webp`, alt: "Offene Wiesen und Bergpanorama rund um den Park Camping Hager" },
      },
      {
        title: "Stellplatz mit Versorgung",
        text: "Dein Standplatz für Wohnwagen und Wohnmobil kommt mit Strom, Wasser, Müll und Ortsabgabe — alles inklusive.",
        image: { src: `${IMG}/gallery-bef683d207.webp`, alt: "Wohnwagen-Stellplatz mit Vorzelt und Versorgung im Park Camping Hager" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Langkampfen",
    modes: [
      { title: "Mit dem Auto", text: "Über die A12 Inntalautobahn, Abfahrt Kufstein-Süd, danach wenige Minuten Richtung Langkampfen." },
      { title: "Mit der Bahn", text: "Bahnhof Kufstein an der Linie München–Innsbruck, von dort rund zehn Minuten mit dem Auto." },
      { title: "Mit dem Flugzeug", text: "Flughafen Innsbruck in etwa einer Stunde, München in rund eineinhalb Stunden erreichbar." },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Platz",
    intro: "Ein paar Aufnahmen von Park Camping Hager und seiner Lage im Unterinntal.",
    tag: "Park Camping Hager",
    images: [],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "deinen Stellplatz",
    intro: "Wähle Platzart, Zeitraum und Personen — Familie Hager bestätigt dir deine Buchung persönlich.",
    pricesArePlaceholder: false,
    priceNote: "Preise 2025/2026 · Preis für 2 Personen · Wohnwagen inkl. Strom, Wasser, Müll & Ortsabgabe · Zelt inkl. Wasser, Müll & Ortsabgabe · Kinder bis 4 Jahre frei · keine Kartenzahlung",
    highlight: { title: "Kinder bis 4 frei", text: "Kinder von 0 bis 4 Jahren übernachten kostenlos mit." },
    categories: [
      { id: "wohnwagen", label: "Wohnwagen / Wohnmobil", perNight: 37, perExtraGuest: 12 },
      { id: "zelt", label: "Zeltplatz", perNight: 27 },
    ],
  },

  kontakt: {
    tel: "+43 5372/64170",
    telHref: "tel:+43537264170",
    mail: "camping@hager.tirol",
    adresse: "Kufsteiner Str. 38 · 6336 Langkampfen · Tirol",
    coords: { lat: 47.566, lng: 12.1260364 },
  },

  languages: ["DE"],

  nav: [
    { label: "Camping", href: "#camping" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingHager;
