import Image from "next/image";
import type { ArchitectureProject } from "../data/projects";

export function ProjectHero({ project }: { project: ArchitectureProject }) {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-[var(--color-line)]">
      <Image
        src={project.cover}
        alt={`${project.name} — ${project.category} à ${project.location.split(",")[0].trim()} (${project.year}${project.area ? `, ${project.area}` : ""})`}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover hero-image"
        style={{ aspectRatio: "16/9" }}
      />
    </section>
  );
}