import Image from "next/image";
import Link from "next/link";
import type { ArchitectureProject } from "../data/projects";

function altFor(p: ArchitectureProject): string {
  return `${p.name} — ${p.category.toLowerCase()} à ${p.location.split(",")[0].trim()} (${p.year}${p.area ? `, ${p.area}` : ""})`;
}

export function ProjectCard({ project }: { project: ArchitectureProject }) {
  return (
    <Link
      href={`/architecture/${project.slug}`}
      className="group block"
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
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-bg bg-ink/40 backdrop-blur-sm px-2 py-1">
          {project.num}
        </span>
        <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] text-ink bg-bg/85 px-2 py-1">
          {project.category}
        </span>
      </div>
      <div className="mt-4 flex justify-between items-baseline gap-4">
        <h3 className="text-base font-medium">{project.name}</h3>
        <span className="text-xs text-muted shrink-0">{project.location}</span>
      </div>
    </Link>
  );
}