import Link from "next/link";
import type { Metadata } from "next";
import { ProjectCard } from "../components/ProjectCard";
import { architectureProjects, ArchitectureCategory } from "../data/projects";

const SITE_URL = "https://a-ida.fr";

export const metadata: Metadata = {
  title: "Projets d'architecture — 19 réalisations",
  description:
    "Découvrez les 19 projets d'architecture d'A'IDA : résidentiel, rénovation, commercial, intérieur, hôtellerie, recherche et concours. Paris, Singapour, Asie, Moyen-Orient et Argentine.",
  alternates: { canonical: "/architecture" },
  openGraph: {
    title: "Projets d'architecture A'IDA — 19 réalisations",
    description:
      "19 projets d'architecture entre Paris, Singapour, l'Asie et le Moyen-Orient : résidentiel, retail, hôtellerie, intérieur et recherche.",
    url: `${SITE_URL}/architecture`,
    type: "website",
  },
};

const CATEGORY_ORDER: ArchitectureCategory[] = [
  "Résidentiel",
  "Rénovation",
  "Commercial",
  "Hôtellerie",
  "Intérieur",
  "Recherche",
  "Concours",
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Architecture",
      item: `${SITE_URL}/architecture`,
    },
  ],
};

export default function ArchitectureIndex() {
  const groups = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: architectureProjects.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="container-x pt-20 pb-16 md:pt-32 md:pb-20">
        <p className="eyebrow reveal">19 projets · 5 catégories · 7 pays</p>
        <h1 className="h-display mt-6 reveal">Architecture.</h1>
        <p className="mt-8 max-w-2xl text-lg reveal">
          Des maisons individuelles en Argentine aux déploiements retail à
          travers l&rsquo;Asie. Le travail d&rsquo;architecture d&rsquo;A&rsquo;IDA
          équilibre savoir-faire, programme et budget à travers des projets
          résidentiels, de rénovation, commerciaux, d&rsquo;intérieur et de
          recherche.
        </p>
      </section>

      <div className="container-x space-y-24 md:space-y-32">
        {groups.map((g) => (
          <section key={g.cat}>
            <div className="flex items-baseline justify-between pb-4 mb-1">
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight">{g.cat}</h2>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {String(g.items.length).padStart(2, "0")} projets
              </p>
            </div>
            <div className="border-b border-[var(--color-line)] mb-10" />

            <div className={`grid grid-cols-1 ${g.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-x-6 gap-y-12`}>
              {g.items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="container-x py-24 md:py-32 border-t border-[var(--color-line)] mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-8 h-2">Un projet en tête&nbsp;?</h2>
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
