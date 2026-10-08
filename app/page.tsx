import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProjectCardFeatured } from "./components/ProjectCardFeatured";
import {
  architectureProjects,
  featuredProjectSlugs,
} from "./data/projects";

const SITE_URL = "https://a-ida.fr";

export const metadata: Metadata = {
  title: "Architecture, Design & Ingénierie entre Paris et Singapour",
  description:
    "A'IDA est un atelier pluridisciplinaire d'architectes, designers et ingénieurs fondé en 2020 par Romain Gaillard, Thibaut Etcheverry et Quentin Bellancourt. Projets résidentiels, retail haut de gamme et recherche entre Paris et Singapour. Lauréat SRA Awards 2022 et UPSTARTS Asie.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "A'IDA — Architecture, Design & Ingénierie entre Paris et Singapour",
    description:
      "Atelier pluridisciplinaire d'architectes, designers et ingénieurs fondé en 2020. Projets résidentiels, retail haut de gamme et recherche entre Paris et Singapour.",
    url: SITE_URL,
    type: "website",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "A'IDA",
  image: `${SITE_URL}/opengraph-image`,
  url: SITE_URL,
  telephone: "+33-7-6484-7571",
  email: "studio@a-ida.fr",
  priceRange: "€€€",
  description:
    "Atelier d'architectes, designers et ingénieurs. Projets résidentiels, retail et recherche entre Paris et Singapour.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 rue des Blancs Manteaux",
    addressLocality: "Paris",
    postalCode: "75004",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Qatar" },
    { "@type": "Country", name: "Vietnam" },
    { "@type": "Country", name: "South Korea" },
    { "@type": "Country", name: "China" },
    { "@type": "Country", name: "Argentina" },
  ],
  knowsAbout: [
    "Architecture résidentielle",
    "Architecture commerciale",
    "Rénovation",
    "Architecture intérieure",
    "Design retail",
    "Architecture hôtelière",
    "Concours d'architecture",
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

const services = [
  {
    id: "architecture",
    name: "Architecture",
    description:
      "Conception architecturale pour projets résidentiels, retail, hôtellerie et recherche. De l'esquisse au suivi de chantier, en France et en Asie.",
    serviceType: "Architecture",
  },
  {
    id: "design",
    name: "Design",
    description:
      "Mobilier sur mesure, scénographie commerciale, signalétique retail. L'objet pensé comme une architecture à petite échelle.",
    serviceType: "Design",
  },
  {
    id: "ingenierie",
    name: "Ingénierie",
    description:
      "Structure bois et métal, performance thermique, fabrication numérique et prototypage rapide. Le projet exécutable.",
    serviceType: "Ingénierie",
  },
];

const faqs = [
  {
    q: "Combien coûte un projet d'architecture avec A'IDA ?",
    a: "Chaque projet fait l'objet d'un devis adapté à sa complexité, sa surface et son programme. Pour un appartement parisien de 100 à 150 m² en rénovation, comptez entre 8 % et 12 % de la valeur du bien pour une mission complète (esquisse, APD, permis, suivi de chantier). Pour un retail haut de gamme à l'international, les honoraires sont établis sur la base d'un forfait ou d'un pourcentage du budget travaux. Nous fournissons une proposition détaillée sous 10 jours ouvrés après un premier rendez-vous.",
  },
  {
    q: "Travaillez-vous en dehors de la France ?",
    a: "Oui. A'IDA est basé à Paris et intervient régulièrement en Asie du Sud-Est (Singapour, Chine, Corée du Sud, Vietnam) et au Moyen-Orient (Arabie Saoudite, Qatar). Nous pilotons les projets à distance avec des équipes locales d'ingénieurs et d'artisans que nous avons constituées depuis 2020. Les projets internationaux représentent plus de la moitié de notre activité.",
  },
  {
    q: "Combien de temps prend un projet avec A'IDA ?",
    a: "De l'esquisse à la livraison, comptez 12 à 24 mois pour un projet résidentiel (incluant les autorisations administratives), 6 à 12 mois pour un retail clé en main, 3 à 6 mois pour un projet d'intérieur pur. Ces durées dépendent fortement des autorisations locales et du planning de chantier.",
  },
  {
    q: "Combien de projets menez-vous en parallèle ?",
    a: "Le studio limite volontairement sa charge à 6 à 8 projets actifs simultanément, tous fondateurs impliqués. Cette contrainte garantit à chaque client un interlocuteur senior du début à la fin, et c'est l'une des raisons pour lesquelles nos délais sont tenus.",
  },
  {
    q: "Acceptez-vous les projets de moins de 50 m² ?",
    a: "Oui, si le programme est intéressant. A'IDA intervient régulièrement sur des projets de scénographie, d'architecture intérieure, de mobilier sur mesure ou de rénovation partielle. La taille n'est pas un critère de sélection : la qualité du brief et l'ambition du maître d'ouvrage le sont.",
  },
];

const servicesJsonLd = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service-${s.id}`,
  serviceType: s.serviceType,
  name: s.name,
  description: s.description,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Singapore" },
  ],
}));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const lastUpdated = "2026-10-08";

const disciplines = [
  {
    label: "Architecture",
    count: "19 projets",
    blurb:
      "Du logement à l'intérieur résidentiel, en passant par la rénovation et les concours de recherche.",
  },
  {
    label: "Design",
    count: "10 projets",
    blurb:
      "Mobilier, scénographie, packaging. Penser l'objet comme une architecture à petite échelle.",
  },
  {
    label: "Ingénierie",
    count: "5 projets",
    blurb:
      "Structure bois et métal, performance thermique, fabrication numérique et prototypage rapide.",
  },
];

const credentials = [
  { label: "2020", value: "Année de fondation" },
  { label: "8 pays", value: "de projets livrés" },
  { label: "3 fondateurs", value: "Architectes, designers, ingénieurs" },
  { label: "3 awards", value: "SRA · UPSTARTS · YAC" },
];

const awards = [
  {
    year: "2022",
    location: "Singapour",
    title: "SRA Awards — Best Retail Experience",
    description:
      "Pour la conception du réseau de boutiques Maison 21G à Singapour.",
  },
  {
    year: "2022",
    location: "Asie",
    title: "UPSTARTS — Best Retail Experience in Asia",
    description:
      "Décerné pour le déploiement M21G à l'échelle asiatique.",
  },
  {
    year: "YAC",
    location: "International",
    title: "Gold Honourable Mention — Young Architects Competitions",
    description:
      "Pour les projets RXE (passerelle piétonne, Italie) et Observatory Cabins (Alpes).",
  },
  {
    year: "2024",
    location: "International",
    title: "PING PANG Store — publication ArchDaily",
    description:
      "Le flagship parisien (250 m²) référencé dans la base de données internationale d'architecture.",
  },
];

const methodSteps = [
  {
    step: "01",
    title: "Architecture",
    blurb:
      "Programmer l'espace. Résidentiel, retail, hôtellerie. Du concours de recherche à la livraison, en France et en Asie.",
  },
  {
    step: "02",
    title: "Design",
    blurb:
      "Penser l'objet. Mobilier, scénographie, signalétique. L'objet comme une architecture à petite échelle.",
  },
  {
    step: "03",
    title: "Ingénierie",
    blurb:
      "Maîtriser la matière. Structure bois et métal, performance thermique, fabrication numérique. Le projet exécutable.",
  },
];

const press = [
  {
    label: "ArchDaily — Ping Pang Sports Space (2024)",
    href: "https://www.archdaily.com/1024274/ping-pang-sports-space-aida",
  },
  {
    label: "ArchDaily — Profil A'IDA",
    href: "https://www.archdaily.com/office/aida-atelier-dingenieurs-designers-et-architectes",
  },
  {
    label: "Houzz — Profil & avis 5/5",
    href: "https://www.houzz.fr/professionnels/architecte/a-ida-pfvwfr-pf~1330726528",
  },
  {
    label: "Ordre des Architectes",
    href: "https://www.architectes-pour-tous.fr/architectes-pour-tous/atelier-dingenieurs-designers-architectes-aida",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/a-ida",
  },
  {
    label: "Site officiel",
    href: "https://www.a-ida.fr",
  },
];

const reviews = [
  {
    source: "Houzz",
    rating: 5,
    count: 9,
    href: "https://www.houzz.fr/professionnels/architecte/a-ida-pfvwfr-pf~1330726528",
  },
  {
    source: "ArchDaily",
    rating: 5,
    count: 1,
    href: "https://www.archdaily.com/1024274/ping-pang-sports-space-aida",
  },
];

export default function Home() {
  const featured = featuredProjectSlugs
    .map((slug) => architectureProjects.find((p) => p.slug === slug)!)
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {servicesJsonLd.map((s, i) => (
        <script
          key={`service-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ========== HERO ========== */}
      <section
        className="relative h-[78vh] md:h-[88vh] overflow-hidden"
        data-pinned-hero
        aria-label="Présentation A'IDA"
      >
        <Image
          src="/img/imgi_72_%C2%A9JUANJEREZ_A_IDA-PING-PANG-PARIS-0986.jpg"
          alt="Vue intérieure du flagship PING PANG Store, Paris 13e — projet retail piloté par A'IDA en 2021"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover hero-image parallax-img"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="container-x pb-16 md:pb-24">
            <p className="eyebrow text-bg reveal">Paris · Singapour · depuis 2020</p>
            <h1
              className="h-display mt-4 md:mt-6 text-bg max-w-4xl"
              data-split
            >
              Architecture. Design. Ingénierie.
            </h1>
            <p className="mt-6 max-w-xl text-bg/90 reveal">
              A&rsquo;IDA est un atelier pluridisciplinaire qui pense l&rsquo;espace comme un système&nbsp;: structure, usage, matière. Cinq ans de projets entre l&rsquo;Europe et l&rsquo;Asie.
            </p>
          </div>
        </div>
      </section>

      {/* ========== 3 DISCIPLINES ========== */}
      <section
        className="container-x py-24 md:py-32"
        aria-labelledby="disciplines-heading"
      >
        <h2 id="disciplines-heading" className="sr-only">
          Trois disciplines, une méthode
        </h2>
        <p className="eyebrow reveal">3 disciplines · 1 méthode</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {disciplines.map((d, i) => (
            <div key={d.label} className="reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="text-eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mt-3">{d.label}</h3>
              <p className="mt-1 text-xs text-muted">{d.count}</p>
              <p className="mt-5 text-base leading-relaxed text-ink/85">
                {d.blurb}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section
        className="container-x pt-24 md:pt-32 pb-24 md:pb-32"
        aria-labelledby="featured-heading"
      >
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <p className="eyebrow">Featured · 2023 – 2025</p>
            <h2
              id="featured-heading"
              className="text-3xl md:text-5xl mt-3 max-w-md font-medium tracking-tight"
            >
              Six projets récents, trois continents.
            </h2>
          </div>
          <Link href="/architecture" className="hidden md:inline-flex btn-ghost">
            Tous les projets →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {featured.map((p, i) => (
            <ProjectCardFeatured key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link href="/architecture" className="btn-ghost w-full justify-center">
            Tous les projets →
          </Link>
        </div>
      </section>

      {/* ========== ABOUT / E-E-A-T (enrichi) ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="about-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow reveal">L'atelier</p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
            >
              Trois Français, deux cultures, une méthode.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-base leading-relaxed text-ink/85 reveal">
            <p>
              A&rsquo;IDA (Atelier d&rsquo;Ingénieurs, Designers et Architectes) est
              un studio pluridisciplinaire fondé en 2020 par Romain Gaillard,
              Thibaut Etcheverry et Quentin Bellancourt. L&rsquo;équipe se
              reconnaît dans un travail qu&rsquo;elle qualifie de{" "}
              <em>fonctionnel, harmonieux et innovant</em>.
            </p>
            <p>
              Les trois fondateurs partagent une conviction&nbsp;: la rencontre
              de l&rsquo;architecture, du design et de l&rsquo;ingénierie produit
              des projets plus précis, plus utiles et plus durables. Romain
              Gaillard, président, s&rsquo;est formé à l&rsquo;ECAL Lausanne
              (Industrial Design, 2014) puis à l&rsquo;ENSAVT Paris
              (Architecture, 2016) avant de travailler en France, en Suisse
              et à Singapour — terrain qui forge la sensibilité internationale
              du studio.
            </p>
            <p>
              L&rsquo;atelier intervient à Paris (4<sup>ème</sup>) et en Asie du
              Sud-Est, en résidentiel, retail haut de gamme, hôtellerie et
              recherche. Il collabore avec des marques internationales (Maison
              21G, PING PANG Paris) et des institutions culturelles, et
              travaille en réseau avec des ingénieurs, artisans et
              consultants locaux. Pour discuter d&rsquo;un projet&nbsp;:{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-accent">
                écrivez-nous
              </Link>{" "}
              ou prenez rendez-vous à l&rsquo;une des deux adresses.
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--color-line)] pt-12">
          {credentials.map((c) => (
            <div key={c.label}>
              <dt className="text-3xl md:text-4xl font-medium tracking-tight">{c.label}</dt>
              <dd className="mt-2 text-sm text-muted">{c.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ========== RECONNAISSANCE (E-E-A-T awards) ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="awards-heading"
      >
        <p className="eyebrow reveal">Reconnaissance</p>
        <h2
          id="awards-heading"
          className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
        >
          Distinctions et publications.
        </h2>

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((a) => (
            <li key={a.title} className="border-l-2 border-accent pl-6 reveal">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {a.year} — {a.location}
              </p>
              <h3 className="text-lg font-medium mt-2">{a.title}</h3>
              <p className="text-sm text-muted mt-1">{a.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== MÉTHODE (vocabulaire SEO sémantique) ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="method-heading"
      >
        <p className="eyebrow reveal">Méthode</p>
        <h2
          id="method-heading"
          className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
        >
          Trois disciplines, un seul processus.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {methodSteps.map((m) => (
            <div key={m.step} className="reveal">
              <p className="text-eyebrow text-muted">{m.step} — {m.title}</p>
              <h3 className="text-xl font-medium mt-3">
                {m.step === "01" && "Programmer l'espace"}
                {m.step === "02" && "Penser l'objet"}
                {m.step === "03" && "Maîtriser la matière"}
              </h3>
              <p className="mt-3 text-base text-ink/85">{m.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== FAQ (AI citation + featured snippets) ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="faq-heading"
      >
        <p className="eyebrow reveal">Questions fréquentes</p>
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl mt-4 font-medium tracking-tight reveal"
        >
          Tout ce qu&rsquo;on nous demande avant de signer.
        </h2>

        <div className="mt-12 max-w-3xl space-y-6">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group border-t border-[var(--color-line)] pt-6 reveal"
            >
              <summary className="flex justify-between items-baseline cursor-pointer list-none">
                <h3 className="text-lg font-medium pr-8">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="text-2xl text-muted shrink-0 group-open:rotate-45 transition-transform"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-ink/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ========== PRESSE (liens externes = E-E-A-T off-page) ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="press-heading"
      >
        <p className="eyebrow reveal">Presse &amp; annuaires</p>
        <h2 id="press-heading" className="sr-only">
          Mentions dans la presse et annuaires professionnels
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {reviews.map((r) => (
            <a
              key={r.source}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-l-2 border-accent pl-6 hover:bg-[var(--color-line)]/30 transition-colors py-4"
              aria-label={`${r.source} — note ${r.rating} sur 5, ${r.count} avis`}
            >
              <div
                className="flex items-center gap-1 text-accent text-lg"
                aria-hidden="true"
              >
                {"★★★★★".slice(0, r.rating)}
              </div>
              <p className="mt-2 text-sm font-medium">
                {r.rating}/5 · {r.count} avis{r.count > 1 ? "" : ""}
              </p>
              <p className="text-xs text-muted mt-1">
                sur {r.source} ↗
              </p>
            </a>
          ))}
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-4 text-sm text-muted">
          {press.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink underline-offset-4 hover:underline"
              >
                {p.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ========== CTA ========== */}
      <section
        className="container-x py-24 md:py-32 border-t border-[var(--color-line)]"
        aria-labelledby="cta-heading"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <h2
            id="cta-heading"
            className="md:col-span-8 text-2xl md:text-4xl font-medium tracking-tight"
          >
            Vous avez un projet en tête&nbsp;?
          </h2>
          <div className="md:col-span-4 flex md:justify-end">
            <Link href="/contact" className="btn-pill">
              Nous contacter →
            </Link>
          </div>
        </div>
        <p className="mt-12 text-xs text-muted">
          Dernière mise à jour&nbsp;:{" "}
          <time dateTime={lastUpdated} itemProp="dateModified">8 octobre 2026</time>
        </p>
      </section>
    </>
  );
}
