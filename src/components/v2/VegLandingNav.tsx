"use client";

/**
 * VegLandingNav - anchor-only navigation for the standalone /vegetarian
 * one-pager. All links scroll within the page; no route-out links.
 */

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#why", label: "Who We Are" },
  { href: "#range", label: "Product Portfolio" },
  { href: "#contact", label: "Contact Us" },
];

export default function VegLandingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/92 backdrop-blur-xl"
          : "border-b border-transparent bg-[color:var(--bg-deep)]/60 backdrop-blur-md"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 transition-[height] duration-300 ease-out md:px-10 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="#top"
          aria-label="Unifayre - home"
          className={`flex origin-left items-center transition-transform duration-300 ease-out ${
            scrolled ? "scale-90" : "scale-100"
          }`}
        >
          {/* Plain <img> preserves the SVG's intrinsic viewBox aspect ratio
              cleanly; next/image was clipping the right edge. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/unifayre-logo-dark.svg"
            alt="Unifayre"
            className="block h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[0.82rem] font-medium text-[color:var(--text-secondary)] transition-all hover:bg-white/[0.04] hover:text-[color:var(--text-primary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={`btn-gold hidden items-center gap-2 rounded-full font-semibold transition-all duration-300 sm:inline-flex ${
              scrolled ? "px-4 py-2 text-[0.78rem]" : "px-5 py-2.5 text-[0.82rem]"
            }`}
          >
            Request Factory Visit / Sample
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-subtle)] text-[color:var(--text-primary)] transition-colors hover:border-[color:var(--accent-gold)] hover:text-[color:var(--accent-gold)] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--border-subtle)] bg-[color:var(--bg-deep)]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-5 md:px-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[0.92rem] font-medium text-[color:var(--text-secondary)] transition-all hover:bg-white/[0.04] hover:text-[color:var(--text-primary)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.86rem] font-semibold"
            >
              Request Factory Visit / Sample
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
