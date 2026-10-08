import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "L'atelier — Trois fondateurs, une méthode",
  description:
    "A'IDA est un studio d'architecture, design et ingénierie fondé en 2020 par Romain Gaillard, Thibaut Etcheverry et Quentin Bellancourt. Basé à Paris (4ème), actif entre l'Europe et l'Asie du Sud-Est. Lauréat SRA Awards 2022 et UPSTARTS Asie.",
  alternates: { canonical: "https://www.a-ida.fr/about" },
  openGraph: {
    title: "L'atelier A'IDA — Trois fondateurs, une méthode",
    description:
      "Studio d'architecture, design et ingénierie fondé en 2020 par Romain Gaillard, Thibaut Etcheverry et Quentin Bellancourt.",
    url: "https://www.a-ida.fr/about",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.a-ida.fr" },
    { "@type": "ListItem", position: 2, name: "Studio", item: "https://www.a-ida.fr/about" },
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://www.a-ida.fr/about#about",
  url: "https://www.a-ida.fr/about",
  name: "À propos d'A'IDA",
  description:
    "Studio pluridisciplinaire d'architecture, design et ingénierie. Fondateurs, méthode, distinctions.",
  inLanguage: "fr-FR",
  about: { "@id": "https://www.a-ida.fr/#organization" },
};

const founders = [
  {
    name: "Romain Gaillard",
    role: "Architecte, Designer & Président",
    bio: "Né en 1990, grandi dans le Sud-Est de la France. Industrial Design à l'ECAL Lausanne (2014), Architecture à l'ENSAVT Paris (2016). A travaillé comme Designer-Architect en France, en Suisse et à Singapour avant de cofonder A'IDA.",
  },
  {
    name: "Thibaut Etcheverry",
    role: "Co-fondateur",
    bio: "Architecte-ingénieur de formation, Thibaut apporte au studio sa maîtrise des structures bois et métal ainsi que des outils de fabrication numérique.",
  },
  {
    name: "Quentin Bellancourt",
    role: "Co-fondateur",
    bio: "Designer et architecte d'intérieur, Quentin pilote les projets de scénographie commerciale et d'architecture intérieure.",
  },
];

const method = [
  {
    step: "01",
    title: "Écouter avant de dessiner",
    description:
      "Chaque projet commence par un dialogue approfondi avec le maître d'ouvrage. Programme, budget, contraintes, ambitions. Pas de brief, pas de projet.",
  },
  {
    step: "02",
    title: "Croiser les disciplines",
    description:
      "L'architecture, le design et l'ingénierie ne se succèdent pas : elles dialoguent dès l'esquisse. Une contrainte structurelle peut devenir un geste architectural. Un détail de mobilier peut résoudre un problème de circulation.",
  },
  {
    step: "03",
    title: "Construire avec le terrain",
    description:
      "Matériaux locaux, artisans régionaux, réglementations locales. À Paris, à Singapour ou à Riyad, le projet se construit avec ceux qui habitent et font le lieu.",
  },
  {
    step: "04",
    title: "Livrer un système, pas une image",
    description:
      "Nous livrons des bâtiments, du mobilier, des espaces qui continuent de fonctionner longtemps après la livraison. Pas de gestes spectaculaires sans usage.",
  },
];

const recognitions = [
  { year: "2022", title: "SRA Awards — Best Retail Experience in Singapore", context: "Pour la conception du réseau de boutiques Maison 21G." },
  { year: "2022", title: "UPSTARTS — Best Retail Experience in Asia", context: "Pour le déploiement M21G à l'échelle asiatique." },
  { year: "YAC", title: "Gold Honourable Mention — Young Architects Competitions", context: "Pour les projets RXE (passerelle, Italie) et Observatory Cabins (Alpes italiennes)." },
  { year: "2024", title: "PING PANG Store — publication ArchDaily", context: "Le flagship parisien (250 m²) référencé dans la base de données internationale d'architecture." },
];

const presences = [
  "Milan Design Week",
  "Paris Design Week",
  "Young Architects Competitions (YAC)",
  "Salone del Mobile (Milan)",
  "ArchDaily (publication)",
  "Houzz (profil 5/5, 9 avis)",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="container-x pt-20 pb-16 md:pt-32 md:pb-20">
        <p className="eyebrow reveal">L'atelier</p>
        <h1 className="text-4xl md:text-6xl mt-6 font-medium tracking-tight reveal">
          Trois Français, deux cultures, une méthode.
        </h1>
        <p className="mt-8 max-w-2xl text-lg reveal">
          A&rsquo;IDA (Atelier d&rsquo;Ingénieurs, Designers et Architectes) est
          un studio pluridisciplinaire fondé en 2020. Nous concevons des
          espaces, des objets et des structures en croisant systématiquement
          trois cultures&nbsp;: architecture, design, ingénierie.
        </p>
      </section>

      {/* ========== FONDATEURS ========== */}
      <section
        className="container-x py-16 md:py-24 border-t border-[var(--color-line)]"
        aria-labelledby="founders-heading"
      >
        <p className="eyebrow reveal">Les fondateurs</p>
        <h2
          id="founders-heading"
          className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
        >
          Trois parcours, un studio.
        </h2>

        <div className="mt-12 space-y-12">
          {founders.map((f) => (
            <article key={f.name} className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal">
              <div className="md:col-span-4">
                <h3 className="text-2xl font-medium tracking-tight">{f.name}</h3>
                <p className="mt-1 text-sm text-muted">{f.role}</p>
              </div>
              <p className="md:col-span-8 text-base leading-relaxed text-ink/85">
                {f.bio}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ========== MÉTHODE ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="method-heading"
      >
        <p className="eyebrow reveal">Méthode</p>
        <h2
          id="method-heading"
          className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
        >
          Quatre principes de travail.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {method.map((m) => (
            <article key={m.step} className="border-l-2 border-accent pl-6 reveal">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{m.step}</p>
              <h3 className="text-xl font-medium mt-3">{m.title}</h3>
              <p className="mt-3 text-base text-ink/85 leading-relaxed">
                {m.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ========== RECONNAISSANCE ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="recognition-heading"
      >
        <p className="eyebrow reveal">Reconnaissance</p>
        <h2
          id="recognition-heading"
          className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
        >
          Prix, publications, présence.
        </h2>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {recognitions.map((r) => (
            <li key={r.title} className="border-l-2 border-accent pl-6 reveal">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {r.year}
              </p>
              <h3 className="text-lg font-medium mt-2">{r.title}</h3>
              <p className="text-sm text-muted mt-1">{r.context}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-sm text-muted reveal">
          Présent également à&nbsp;: {presences.join(" · ")}.
        </p>
      </section>

      <section className="container-x py-24 md:py-32 border-t border-[var(--color-line)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-8 text-2xl md:text-4xl font-medium tracking-tight">
            Travaillons ensemble.
          </h2>
          <div className="md:col-span-4 flex md:justify-end">
            <Link href="/contact" className="btn-pill">
              Nous contacter →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
