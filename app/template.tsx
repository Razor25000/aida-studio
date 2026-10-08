"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { runPageAnimations } from "./components/MotionController";

/**
 * Wraps page content. Next.js App Router re-mounts template.tsx on every
 * route change, so this component is the right place to:
 *   1. Play a page entrance animation.
 *   2. Re-initialise all scroll animations for the NEW page's DOM.
 *      (MotionController lives in the root layout and only runs once, so it
 *      cannot see elements created by a client-side navigation.)
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cleanupAnimations = runPageAnimations(ref.current);

    let ctx: gsap.Context | undefined;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
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
    }

    return () => {
      cleanupAnimations();
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={ref} className="page-enter">
      {children}
    </div>
  );
}
