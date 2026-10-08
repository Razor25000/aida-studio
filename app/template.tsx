"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Wraps page content and plays an entrance animation on every navigation.
 * Next.js App Router re-mounts template.tsx on each route change, so this
 * runs on every page transition (no exit animation — that needs View
 * Transitions or a custom router; entry alone reads well).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          // Clear BOTH props so no transform/opacity persists and breaks
          // sticky positioning or stacking contexts on the page below.
          clearProps: "transform,opacity",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
