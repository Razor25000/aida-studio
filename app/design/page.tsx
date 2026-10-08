import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design — Mobilier, scénographie, signalétique",
  description:
    "Le pôle design d'A'IDA pense l'objet comme une architecture à petite échelle. Mobilier sur mesure, scénographie commerciale, signalétique retail. Projets pour Maison 21G, PING PANG Paris et autres marques internationales.",
  alternates: { canonical: "https://www.a-ida.fr/design" },
  openGraph: {
    title: "Design A'IDA — Mobilier, scénographie, signalétique",
    description:
      "Mobilier sur mesure, scénographie commerciale et signalétique retail entre Paris et l'Asie.",
    url: "https://www.a-ida.fr/design",
    type: "website",
  },
};

const designProjects = [
  {
    title: "Système de présentoirs M21G",
    context: "Maison 21G — 8 boutiques en Asie",
    year: "2021 – 2023",
    description:
      "Système modulaire de présentoirs en aluminium recyclé, reconfigurable selon les collections. Déploiement à Singapour (Duxton, MBS), Séoul, Shenzhen, Hainan, Doha, Riyad et Hô Chi Minh.",
  },
  {
    title: "Table de ping-pong centrale",
    context: "PING PANG Store Paris 13",
    year: "2024",
    description:
      "Pièce maîtresse du flagship : une table de ping-pong centrale autour de laquelle s'organisent les présentoirs et essayages. Concept retail fondé sur l'usage plutôt que l'exposition.",
  },
  {
    title: "Mobilier scénographique",
    context: "Pop-ups Milan & Paris Design Week",
    year: "2022 – 2023",
    description:
      "Mobilier éphémère pour les installations du studio à la Milan Design Week et à la Paris Design Week. Systèmes démontables, matériaux recyclables.",
  },
  {
    title: "Scénographie résidentielle",
    context: "Appartements Paris 9, 11, 17",
    year: "2020 – 2023",
    description:
      "Menuiseries sur mesure, cuisines, rangements intégrés. Chaque pièce est dessinée comme un prolongement de l'architecture.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.a-ida.fr" },
    { "@type": "ListItem", position: 2, name: "Design", item: "https://www.a-ida.fr/design" },
  ],
};

export default function DesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="container-x pt-20 pb-16 md:pt-32 md:pb-20">
        <p className="eyebrow reveal">Pôle design</p>
        <h1 className="text-4xl md:text-6xl mt-6 font-medium tracking-tight reveal">
          Penser l&rsquo;objet comme une architecture à petite échelle.
        </h1>
        <p className="mt-8 max-w-2xl text-lg reveal">
          Mobilier sur mesure, scénographie commerciale, signalétique retail.
          Le pôle design d&rsquo;A&rsquo;IDA prolonge le travail architectural du
          studio&nbsp;: un objet bien conçu dialogue avec l&rsquo;espace qui
          l&rsquo;accueille.
        </p>
      </section>

      <div className="container-x space-y-16 md:space-y-24 pb-24 md:pb-32">
        {designProjects.map((p, i) => (
          <article
            key={p.title}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-t border-[var(--color-line)] pt-8 md:pt-12 reveal"
          >
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {String(i + 1).padStart(2, "0")} · {p.year}
              </p>
              <p className="mt-1 text-xs text-muted">{p.context}</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight">
                {p.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                {p.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="container-x py-24 md:py-32 border-t border-[var(--color-line)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <h2 className="md:col-span-8 text-2xl md:text-4xl font-medium tracking-tight">
            Un objet à dessiner&nbsp;?
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
