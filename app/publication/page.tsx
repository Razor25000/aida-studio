import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Presse & publications",
  description:
    "Sélection de publications et de mentions presse d'A'IDA : ArchDaily, Houzz, Ordre des architectes, Paris Design Week, Milan Design Week, SRA Awards 2022, UPSTARTS Asie.",
  alternates: { canonical: "https://www.a-ida.fr/publication" },
  openGraph: {
    title: "Presse & publications A'IDA",
    description:
      "ArchDaily, SRA Awards 2022, UPSTARTS Asie, Paris Design Week, Milan Design Week, Ordre des architectes.",
    url: "https://www.a-ida.fr/publication",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.a-ida.fr" },
    { "@type": "ListItem", position: 2, name: "Presse", item: "https://www.a-ida.fr/publication" },
  ],
};

const pressArticles = [
  {
    year: "2024",
    title: "Ping Pang Sports Space",
    source: "ArchDaily",
    href: "https://www.archdaily.com/1024274/ping-pang-sports-space-aida",
    description:
      "Publication du flagship PING PANG Store Paris 13 (250 m²) dans la base de données internationale d'architecture ArchDaily. Photographies © Juan Jerez Studio.",
  },
  {
    year: "2022",
    title: "SRA Awards — Best Retail Experience in Singapore",
    source: "Singapore Retailers Association",
    description:
      "Distinction décernée pour la conception du réseau de boutiques Maison 21G à Singapour (Duxton, Marina Bay Sands).",
  },
  {
    year: "2022",
    title: "UPSTARTS — Best Retail Experience in Asia",
    source: "UPSTARTS Awards",
    description:
      "Prix décerné pour le déploiement de l'expérience retail M21G à l'échelle asiatique (8 villes, 8 pays).",
  },
  {
    year: "YAC",
    title: "Gold Honourable Mention — Young Architects Competitions",
    source: "YAC",
    description:
      "Pour les projets RXE (passerelle piétonne, Italie) et Observatory Cabins (unités d'observation alpines).",
  },
];

const profiles = [
  { label: "ArchDaily — Profil A'IDA", href: "https://www.archdaily.com/office/aida-atelier-dingenieurs-designers-et-architectes" },
  { label: "Houzz — Profil & avis (5/5 sur 9 avis)", href: "https://www.houzz.fr/professionnels/architecte/a-ida-pfvwfr-pf~1330726528" },
  { label: "Ordre des architectes", href: "https://www.architectes-pour-tous.fr/architectes-pour-tous/atelier-dingenieurs-designers-architectes-aida" },
  { label: "LinkedIn", href: "https://linkedin.com/company/a-ida" },
  { label: "Site officiel a-ida.fr", href: "https://www.a-ida.fr" },
  { label: "Instagram", href: "https://instagram.com/aida.paris" },
];

const events = [
  { year: "2024", label: "Milan Design Week — installation PING PANG" },
  { year: "2023", label: "Paris Design Week — scénographie éphémère" },
  { year: "2022", label: "SRA Awards Singapore" },
  { year: "2022", label: "Salone del Mobile, Milan" },
  { year: "2021", label: "YAC — Observatory Cabins (Alpes italiennes)" },
  { year: "2020", label: "YAC — RXE (passerelle, Italie)" },
];

export default function PublicationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="container-x pt-20 pb-16 md:pt-32 md:pb-20">
        <p className="eyebrow reveal">Presse &amp; publications</p>
        <h1 className="text-4xl md:text-6xl mt-6 font-medium tracking-tight reveal">
          Sélection de mentions et de publications.
        </h1>
        <p className="mt-8 max-w-2xl text-lg reveal">
          Le travail d&rsquo;A&rsquo;IDA a été distingué par les SRA Awards
          (Singapour, 2022) et les UPSTARTS (Asie, 2022), référencé par
          ArchDaily et l&rsquo;Ordre des architectes, et présenté à la Milan
          Design Week et à la Paris Design Week.
        </p>
      </section>

      <section
        className="container-x pb-16 md:pb-24"
        aria-labelledby="articles-heading"
      >
        <h2 id="articles-heading" className="sr-only">Articles et distinctions</h2>
        <div className="space-y-12">
          {pressArticles.map((a) => (
            <article
              key={a.title}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-[var(--color-line)] pt-8 reveal"
            >
              <div className="md:col-span-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{a.year}</p>
                <p className="mt-1 text-sm font-medium">{a.source}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-medium tracking-tight">
                  {a.href ? (
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent underline-offset-4 hover:underline"
                    >
                      {a.title} ↗
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink/85">
                  {a.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="container-x py-16 md:py-24 border-t border-[var(--color-line)]"
        aria-labelledby="profiles-heading"
      >
        <p className="eyebrow reveal">Annuaires &amp; profils</p>
        <h2 id="profiles-heading" className="sr-only">Annuaires et profils professionnels</h2>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          {profiles.map((p) => (
            <li key={p.href} className="border-b border-[var(--color-line)] py-3">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink flex items-center justify-between"
              >
                <span className="underline-offset-4 hover:underline">{p.label}</span>
                <span className="text-muted">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="container-x py-16 md:py-24 border-t border-[var(--color-line)]"
        aria-labelledby="events-heading"
      >
        <p className="eyebrow reveal">Événements</p>
        <h2 id="events-heading" className="sr-only">Présence en événements</h2>
        <ul className="mt-8 space-y-3 text-sm">
          {events.map((e) => (
            <li key={e.year + e.label} className="flex gap-4 border-b border-[var(--color-line)] py-3">
              <span className="text-muted w-16 shrink-0">{e.year}</span>
              <span>{e.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x py-24 md:py-32 border-t border-[var(--color-line)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-8 text-2xl md:text-4xl font-medium tracking-tight">
            Demande presse ou partenariat&nbsp;?
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
