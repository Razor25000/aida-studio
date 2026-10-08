"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function MotionController() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.add("js");

    if (REDUCED_MOTION) {
      // Strip reveal flags so content is visible without animation
      document
        .querySelectorAll(".reveal, .reveal-clip")
        .forEach((el) => el.classList.remove("reveal", "reveal-clip"));
      return;
    }

    const ctx = gsap.context(() => {
      setupCursor();
      setupHero();
      setupReveals();
      setupParallax();
      setupSplitText();
      setupPinnedHero();
    });

    // Wait for fonts/layout before refreshing ScrollTrigger
    const refreshTimer = window.setTimeout(
      () => ScrollTrigger.refresh(),
      400
    );

    // Failsafe: if any .reveal is still hidden after 1.5s (e.g. ScrollTrigger
    // didn't run because the user tabbed away during init), force it visible.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        const o = parseFloat(getComputedStyle(el).opacity);
        if (!Number.isFinite(o) || o < 0.95) el.style.opacity = "1";
      });
    }, 1500);

    // Re-evaluate triggers when the tab regains focus (background throttling
    // can leave ScrollTrigger stale and freeze reveals).
    const onVisibility = () => {
      if (!document.hidden) {
        ScrollTrigger.refresh();
        document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
          const o = parseFloat(getComputedStyle(el).opacity);
          if (!Number.isFinite(o) || o < 0.95) el.style.opacity = "1";
        });
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearTimeout(refreshTimer);
      window.clearTimeout(failsafe);
      document.removeEventListener("visibilitychange", onVisibility);
      ctx.revert();
    };
  }, []);

  return null;
}

/* ---------------- helpers ---------------- */

function setupCursor() {
  if (window.matchMedia("(max-width: 1024px), (hover: none)").matches) return;

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  document.body.appendChild(dot);

  let x = 0,
    y = 0,
    tx = 0,
    ty = 0;

  const onMove = (e: MouseEvent) => {
    tx = e.clientX;
    ty = e.clientY;
  };

  const tick = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  document.addEventListener("mousemove", onMove);

  // Hover state
  document.addEventListener("mouseover", (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest("[data-cursor-hover]")) {
      dot.classList.add("is-hover");
    }
  });
  document.addEventListener("mouseout", (e) => {
    const target = e.target as HTMLElement | null;
    if (target?.closest("[data-cursor-hover]")) {
      dot.classList.remove("is-hover");
    }
  });
}

function setupHero() {
  // .hero-image inside <section class="hero"> clips in then scales down
  document.querySelectorAll<HTMLElement>(".hero-image").forEach((img) => {
    gsap.fromTo(
      img,
      { clipPath: "inset(100% 0 0 0)", scale: 1.2 },
      {
        clipPath: "inset(0% 0 0 0)",
        scale: 1,
        duration: 1.6,
        ease: "power4.out",
        delay: 0.15,
      }
    );
  });
}

function setupReveals() {
  // Fade-in reveal. immediateRender:false keeps elements at their CSS state
  // (visible) until ScrollTrigger actually fires, so a tab switch or JS error
  // can never leave content blank.
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Cinematic clip-path reveal (unfurl from center horizontally)
  document.querySelectorAll<HTMLElement>(".reveal-clip").forEach((el) => {
    gsap.to(el, {
      clipPath: "inset(0% 0 0 0)",
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function setupParallax() {
  document.querySelectorAll<HTMLElement>(".parallax-img").forEach((img) => {
    const parent = img.closest("section") || img.parentElement;
    if (!parent) return;
    gsap.to(img, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: parent,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      },
    });
  });
}

function setupSplitText() {
  // Lightweight word-reveal using SplitType (free alternative to GSAP SplitText premium)
  import("split-type").then(({ default: SplitType }) => {
    document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
      const split = new SplitType(el, { types: "words,chars" });
      gsap.from(split.chars || [], {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });
}

function setupPinnedHero() {
  // Hero parallax scale-down during scroll (Snøhetta-style)
  document.querySelectorAll<HTMLElement>("[data-pinned-hero]").forEach((hero) => {
    const img = hero.querySelector(".parallax-img") as HTMLElement | null;
    if (!img) return;

    gsap.to(img, {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.4,
      },
    });
  });
}