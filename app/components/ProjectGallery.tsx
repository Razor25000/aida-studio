import Image from "next/image";
import type { ArchitectureProject } from "../data/projects";

/**
 * Kononenko-style 7-cycle asymmetric gallery.
 * 4 images → full + pair + single
 * 5       → + trio(1)
 * 7       → full cycle
 * 8       → + full
 */
export function ProjectGallery({ project }: { project: ArchitectureProject }) {
  const g = project.gallery;
  const pattern = buildPattern(g.length);

  return (
    <div className="gallery">
      {pattern.map((kind, i) => {
        const src = g[i] ?? g[0];
        return (
          <div key={`${kind}-${i}`} className={`g-${kind.toLowerCase()} reveal-clip`}>
            <Image
              src={src}
              alt={`${project.name} — vue ${i + 1} (${project.category}, ${project.location.split(",")[0].trim()})`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  );
}

type Kind = "full" | "pair" | "single" | "trio";

function buildPattern(count: number): Kind[] {
  // Cycle: full → pair → single → pair → trio → full → single
  const cycle: Kind[] = ["full", "pair", "single", "pair", "trio", "full", "single"];
  if (count <= cycle.length) return cycle.slice(0, count);
  // For longer galleries repeat + give first empty
  const out: Kind[] = [...cycle];
  for (let i = cycle.length; i < count; i++) out.push(cycle[i % cycle.length]);
  return out;
}