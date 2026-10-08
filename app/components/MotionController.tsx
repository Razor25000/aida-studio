"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Page-level scroll animations. Call this from `app/template.tsx` so it
 * re-runs on EVERY navigation (App Router re-mounts template per route).
 * Without this, client-side navigation would leave new `.reveal` nodes
 * stuck at their CSS opacity:0 default (the bug: hidden contact form).
 *
 * Returns a cleanup that reverts every tween created for the page.
 */
export function runPageAnimations(scope?: Element | null): () => void {
  if (typeof window === "undefined") return () => {};

  if (REDUCED_MOTION) {
    document
      .querySelectorAll(".reveal, .reveal-clip, .reveal-mask")
      .forEach((el) => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.clipPath = "none";
        (el as HTMLElement).style.transform = "none";
      });
    return () => {};
  }

  const ctx = gsap.context(() => {
    setupHero();
    setupHeroScroll();
    setupReveals();
    setupParallax();
    setupSplitText();
    setupPinnedHero();
    setupMagnetic();
    setupCountUp();
    setupDividers();
    setupImageReveals();
    setupLegacyReveal();
    setupStickyMeta();
  }, scope ?? document.body);

  // Failsafe: if any .reveal is still hidden after 1.5s, force it visible
  // (scroll triggers throttled, tab switch during init, JS edge cases…).
  const failsafe = window.setTimeout(() => {
    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      const o = parseFloat(getComputedStyle(el).opacity);
      if (!Number.isFinite(o) || o < 0.95) el.style.opacity = "1";
    });
  }, 1500);

  const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 300);

  return () => {
    window.clearTimeout(failsafe);
    window.clearTimeout(refreshTimer);
    ctx.revert();
  };
}

export function MotionController() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.classList.add("js");

    if (REDUCED_MOTION) return;

    // Lenis smooth scroll — synced with GSAP ticker so ScrollTrigger stays smooth
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const lenisRaf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(lenisRaf);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger when Lenis catches up (e.g. after font load)
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      setupCursor();
    });

    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 400);

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
      document.removeEventListener("visibilitychange", onVisibility);
      gsap.ticker.remove(lenisRaf);
      lenis.destroy();
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

  // Optional label element for text-mode cursor
  const label = document.createElement("div");
  label.className = "cursor-label";
  document.body.appendChild(label);

  let x = 0,
    y = 0,
    tx = 0,
    ty = 0;
  let labelOpacity = 0;

  const onMove = (e: MouseEvent) => {
    tx = e.clientX;
    ty = e.clientY;
  };
  const tick = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    label.style.transform = `translate(${x}px, ${y}px) translate(-50%, calc(-50% + 28px))`;
    label.style.opacity = String(labelOpacity);
    requestAnimationFrame(tick);
  };
  tick();

  document.addEventListener("mousemove", onMove);

  document.addEventListener("mouseover", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const hoverEl = target.closest("[data-cursor-hover]");
    const textEl = target.closest("[data-cursor-text]");
    if (hoverEl) {
      dot.classList.add("is-hover");
    }
    if (textEl) {
      const text = textEl.getAttribute("data-cursor-text") || "";
      label.textContent = text;
      labelOpacity = 1;
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest("[data-cursor-hover]")) {
      dot.classList.remove("is-hover");
    }
    if (target.closest("[data-cursor-text]")) {
      labelOpacity = 0;
    }
  });
}

function setupHeroScroll() {
  // Pinned scroll-scrubbed hero: image scales + drifts, title lifts out, grid draws
  document.querySelectorAll<HTMLElement>("[data-hero-scroll]").forEach((section) => {
    const image = section.querySelector<HTMLElement>(".hero-image");
    const title = section.querySelector<HTMLElement>(".hero-title");
    const content = section.querySelector<HTMLElement>(".hero-content");
    const hint = section.querySelector<HTMLElement>(".hero-scroll-hint");
    const hLines = section.querySelectorAll<SVGLineElement>(".grid-h");
    const vLines = section.querySelectorAll<SVGLineElement>(".grid-v");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    if (image) tl.to(image, { scale: 1.18, yPercent: -6, ease: "none" }, 0);
    if (content) tl.to(content, { y: -60, ease: "none" }, 0);
    if (title) tl.to(title, { opacity: 0.15, ease: "none" }, 0);
    if (hint) tl.to(hint, { opacity: 0, ease: "none" }, 0);

    if (hLines.length) {
      gsap.set(hLines, { scaleX: 0 });
      tl.to(hLines, { scaleX: 1, stagger: 0.08, ease: "none" }, 0);
    }
    if (vLines.length) {
      gsap.set(vLines, { scaleY: 0 });
      tl.to(vLines, { scaleY: 1, stagger: 0.08, ease: "none" }, 0.1);
    }
  });
}

function setupStickyMeta() {
  // Fade sticky metadata panel in as it locks (project detail pages)
  document.querySelectorAll<HTMLElement>("[data-sticky-meta]").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function setupHero() {
  // Hero image: clip-path reveal from top + scale-down (architectural "unveiling")
  document.querySelectorAll<HTMLElement>(".hero-image").forEach((img) => {
    gsap.fromTo(
      img,
      { clipPath: "inset(100% 0 0 0)", scale: 1.08 },
      {
        clipPath: "inset(0% 0 0 0)",
        scale: 1,
        duration: 1.8,
        ease: "expo.out",
        delay: 0.2,
      }
    );
  });

  // Hero subtitle + eyebrow fade in after image reveals
  document.querySelectorAll<HTMLElement>(".hero-fade").forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 + i * 0.12 }
    );
  });
}

function setupReveals() {
  // Stagger reveal for grouped elements (e.g. cards in a grid)
  document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const children = group.querySelectorAll<HTMLElement>("[data-reveal-child]");
    const stagger = parseFloat(group.dataset.revealStagger || "0.08");
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: group,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Single reveal with mask (clip-path slide up) — for headings and paragraphs
  document.querySelectorAll<HTMLElement>(".reveal-mask").forEach((el) => {
    gsap.fromTo(
      el,
      { clipPath: "inset(0 0 100% 0)", y: 30 },
      {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Cinematic clip-path reveal for gallery items (unfurl from center)
  document.querySelectorAll<HTMLElement>(".reveal-clip").forEach((el) => {
    gsap.to(el, {
      clipPath: "inset(0% 0 0 0)",
      duration: 1.4,
      ease: "expo.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

function setupLegacyReveal() {
  // Backward-compat: simple opacity reveal for elements with .reveal but
  // NOT inside a [data-reveal-group] (which handles its own children).
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    if (el.closest("[data-reveal-group]")) return;
    if (el.closest("[data-reveal-child]")) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function setupParallax() {
  // Subtle yPercent parallax for hero / large images
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

  // Section-level parallax (gentle drift on inner text/image)
  document.querySelectorAll<HTMLElement>("[data-parallax-y]").forEach((el) => {
    const y = parseFloat(el.dataset.parallaxY || "-20");
    gsap.to(el, {
      yPercent: y,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") || el,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.4,
      },
    });
  });
}

function setupSplitText() {
  import("split-type").then(({ default: SplitType }) => {
    // Hero h1: word-by-word reveal (architectural, not character chaos)
    document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
      const split = new SplitType(el, { types: "words" });
      const words = split.words || [];
      gsap.from(words, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
  });
}

function setupPinnedHero() {
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

function setupMagnetic() {
  // Magnetic pull on CTAs and links — subtle, not full-on Webflow-magnet
  if (window.matchMedia("(hover: none)").matches) return;

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const strength = parseFloat(el.dataset.magnetic || "0.3");
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      xTo(dx);
      yTo(dy);
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
  });
}

function setupCountUp() {
  // Animated number counter on scroll
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count || "0");
    const suffix = el.dataset.countSuffix || "";
    const duration = parseFloat(el.dataset.countDuration || "1.6");

    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        const isFloat = target % 1 !== 0;
        el.textContent = (isFloat ? obj.val.toFixed(1) : Math.round(obj.val).toString()) + suffix;
      },
    });
  });
}

function setupDividers() {
  // Animate border-top dividers (section separators) drawing left-to-right
  document.querySelectorAll<HTMLElement>(".divider-draw").forEach((el) => {
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "expo.out",
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}

function setupImageReveals() {
  // Image reveal: scale + opacity on scroll (for cards, gallery items)
  document.querySelectorAll<HTMLElement>(".img-reveal").forEach((el) => {
    const img = el.tagName === "IMG" ? el : el.querySelector("img");
    if (!img) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    // Subtle scale-down on the inner image (parallax-like reveal)
    if (el !== img) {
      gsap.fromTo(
        img as HTMLElement,
        { scale: 1.12 },
        {
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });
}
