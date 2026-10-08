import Image from "next/image";
import Link from "next/link";
import type { ArchitectureProject } from "../data/projects";

function altFor(p: ArchitectureProject): string {
  return `${p.name} — ${p.category.toLowerCase()} à ${p.location.split(",")[0].trim()} (${p.year}${p.area ? `, ${p.area}` : ""})`;
}

export function ProjectCardFeatured({ project, index }: { project: ArchitectureProject; index: number }) {
  return (
    <Link
      href={`/architecture/${project.slug}`}
      className="group block reveal"
      data-cursor-hover
      aria-label={`${project.name} — ${project.category}, ${project.location}`}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-[var(--color-line)]">
        <Image
          src={project.cover}
          alt={altFor(project)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.2em] text-bg/90">
          {String(index + 1).padStart(2, "0")} / 06
        </span>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-medium">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">{project.location} · {project.category}</p>
      </div>
    </Link>
  );
}