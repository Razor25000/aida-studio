import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { MotionController } from "./components/MotionController";

const SITE_URL = "https://www.a-ida.fr";
const SITE_NAME = "A'IDA";
const SITE_DESCRIPTION =
  "Atelier pluridisciplinaire d'architectes, designers et ingénieurs. Projets résidentiels, retail et recherche entre Paris et Singapour depuis 2020.";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "A'IDA — Atelier d'Ingénieurs, Designers et Architectes",
  alternateName: "AIDA",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description: SITE_DESCRIPTION,
  foundingDate: "2020",
  numberOfEmployees: 3,
  taxID: "88411984300016",
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "China" },
    { "@type": "Country", name: "South Korea" },
    { "@type": "Country", name: "Vietnam" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Argentina" },
  ],
  knowsAbout: [
    "Architecture résidentielle",
    "Architecture commerciale",
    "Architecture intérieure",
    "Design retail",
    "Architecture hôtelière",
    "Structure bois",
    "Structure métal",
    "Rénovation",
    "Concours d'architecture",
  ],
  award: [
    "SRA Awards 2022 — Best Retail Experience in Singapore",
    "UPSTARTS 2022 — Best Retail Experience in Asia",
    "Young Architects Competitions — Gold Honourable Mention",
  ],
  founder: [
    { "@type": "Person", name: "Romain Gaillard", jobTitle: "Architecte & Président" },
    { "@type": "Person", name: "Thibaut Etcheverry" },
    { "@type": "Person", name: "Quentin Bellancourt" },
  ],
  sameAs: [
    "https://www.a-ida.fr",
    "https://www.archdaily.com/office/aida-atelier-dingenieurs-designers-et-architectes",
    "https://www.houzz.fr/professionnels/architecte/a-ida-pfvwfr-pf~1330726528",
    "https://linkedin.com/company/a-ida",
    "https://www.architectes-pour-tous.fr/architectes-pour-tous/atelier-dingenieurs-designers-architectes-aida",
    "https://instagram.com/aida.paris",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "studio@a-ida.fr",
    telephone: "+33-7-6484-7571",
    availableLanguage: ["French", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 rue des Blancs Manteaux",
    addressLocality: "Paris",
    postalCode: "75004",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8598,
    longitude: 2.3551,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    reviewCount: 10,
    bestRating: 5,
    worstRating: 1,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Organization", name: "Houzz" },
      datePublished: "2024-08-15",
      reviewBody:
        "Travail remarquable sur notre projet de rénovation. L'équipe d'A'IDA a su écouter, proposer et livrer un résultat à la hauteur de nos attentes.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Juan Jerez" },
      jobTitle: "Photographe d'architecture",
      datePublished: "2024-12-05",
      reviewBody:
        "Le PING PANG Store figure parmi les espaces retail les plus aboutis que j'aie pu photographier. Une vraie signature spatiale.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
  ],
};

const romainGaillardJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#romain-gaillard`,
  name: "Romain Gaillard",
  jobTitle: "Architecte, Designer & Président",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "ECAL — University of Art and Design Lausanne",
      sameAs: "https://www.ecal.ch",
    },
    {
      "@type": "EducationalOrganization",
      name: "ENSAVT — École nationale supérieure d'architecture de la Ville et des Territoires Paris",
    },
  ],
  knowsAbout: [
    "Industrial Design",
    "Architecture",
    "Retail Design",
    "Résidentiel",
    "Asia-Pacific architecture",
  ],
  nationality: { "@type": "Country", name: "France" },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FCFCFC",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Atelier d'Architectes, Designers & Ingénieurs | Paris · Singapour`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "atelier d'architecture Paris",
    "architecte Paris Singapour",
    "design retail Asie",
    "rénovation appartement Paris",
    "boutique M21G",
    "studio architecture pluridisciplinaire",
  ],
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Atelier d'Architectes, Designers & Ingénieurs | Paris · Singapour`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "A'IDA — Atelier d'Architectes, Designers & Ingénieurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Atelier d'Architectes, Designers & Ingénieurs | Paris · Singapour`,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(romainGaillardJsonLd) }}
        />
      </head>
      <body className="bg-bg text-ink antialiased">
        <a href="#main" className="skip-link">Aller au contenu</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MotionController />
      </body>
    </html>
  );
}
