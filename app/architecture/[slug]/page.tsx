import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHero } from "../../components/ProjectHero";
import { ProjectGallery } from "../../components/ProjectGallery";
import { architectureProjects, ArchitectureProject } from "../../data/projects";

const SITE_URL = "https://a-ida.fr";

export function generateStaticParams() {
  return architectureProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = architectureProjects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = `${project.name} — ${project.category} à ${project.location.split(",")[0]}`;
  const description =
    project.description[0].slice(0, 200).replace(/&rsquo;|&nbsp;/g, " ").trim() +
    (project.description[0].length > 200 ? "…" : "");

  return {
    title,
    description,
    alternates: { canonical: `/architecture/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.category}`,
      description,
      url: `${SITE_URL}/architecture/${project.slug}`,
      type: "article",
      images: [{ url: project.cover, width: 1200, height: 800, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — A'IDA`,
      description,
      images: [project.cover],
    },
  };
}

function projectJsonLd(project: ArchitectureProject) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/architecture/${project.slug}#project`,
    name: project.name,
    description: project.description.join(" "),
    url: `${SITE_URL}/architecture/${project.slug}`,
    image: `${SITE_URL}${project.cover}`,
    dateCreated: project.year,
    keywords: [project.category, project.location, "architecture", "A'IDA"],
    creator: { "@id": `${SITE_URL}/#organization` },
    provider: { "@id": `${SITE_URL}/#business` },
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    about: project.category,
  };
}

function breadcrumbJsonLd(project: ArchitectureProject) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Architecture",
        item: `${SITE_URL}/architecture`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${SITE_URL}/architecture/${project.slug}`,
      },
    ],
  };
}

export default async function ArchitectureDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = architectureProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const next = nextProject(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(project)) }}
      />

      <article>
        <section className="container-x pt-12 pb-8">
          <Link
            href="/architecture"
            className="text-xs uppercase tracking-[0.2em] text-muted link-underline"
          >
            ← Tous les projets
          </Link>
          <div className="mt-8" data-reveal-group>
            <div className="flex items-baseline gap-4" data-reveal-child>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                {project.num}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                {project.category}
              </span>
            </div>
            <h1 className="h-display mt-4" data-reveal-child>{project.name}</h1>
            <p className="mt-2 text-lg text-muted" data-reveal-child>{project.location}</p>
          </div>
        </section>

        <ProjectHero project={project} />

        <section className="container-x py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6 reveal-mask">
            {project.description.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <dl className="md:col-span-4 md:col-start-9 space-y-6 text-sm reveal" data-reveal-group>
            <div data-reveal-child>
              <dt className="eyebrow">Catégorie</dt>
              <dd className="mt-1">{project.category}</dd>
            </div>
            <div data-reveal-child>
              <dt className="eyebrow">Localisation</dt>
              <dd className="mt-1">{project.location}</dd>
            </div>
            <div data-reveal-child>
              <dt className="eyebrow">Statut</dt>
              <dd className="mt-1">{project.status}</dd>
            </div>
            <div data-reveal-child>
              <dt className="eyebrow">Année</dt>
              <dd className="mt-1">{project.year}</dd>
            </div>
            {project.area && (
              <div data-reveal-child>
                <dt className="eyebrow">Surface</dt>
                <dd className="mt-1">{project.area}</dd>
              </div>
            )}
          </dl>
        </section>

        <div className="container-x">
          <ProjectGallery project={project} />
        </div>
      </article>

      {next && (
        <section className="container-x py-24 border-t border-[var(--color-line)] mt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow">Projet suivant</p>
              <h3 className="h-2 mt-4">{next.name}</h3>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href={`/architecture/${next.slug}`}
                className="btn-pill"
                data-magnetic="0.25"
                data-cursor-text="Continuer →"
              >
                Continuer →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function nextProject(currentSlug: string) {
  const idx = architectureProjects.findIndex((p) => p.slug === currentSlug);
  if (idx === -1) return architectureProjects[0];
  return architectureProjects[(idx + 1) % architectureProjects.length];
}
