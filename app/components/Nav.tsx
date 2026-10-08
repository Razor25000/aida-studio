"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Index" },
  { href: "/architecture", label: "Architecture" },
  { href: "/design", label: "Design" },
  { href: "/about", label: "Studio" },
  { href: "/publication", label: "Presse" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-[var(--color-line)]">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-medium tracking-tight">A'IDA</span>
          <span className="hidden md:inline text-[10px] text-muted uppercase tracking-[0.2em]">
            Atelier · Paris · Singapour · depuis 2020
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.18em]">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Menu"
          aria-expanded={open}
        >
          <span
            className={`h-px bg-ink transition-transform duration-300 ${open ? "rotate-45 translate-y-[4px]" : ""}`}
          />
          <span
            className={`h-px bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px bg-ink transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[4px]" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--color-line)] bg-bg">
          <ul className="container-x py-6 flex flex-col gap-4 text-2xl">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}