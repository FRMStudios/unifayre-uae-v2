"use client";

/**
 * HeroCarousel - rotating-image hero with per-slide pillar copy.
 *
 * Transition is a Ken-Burns morph: the active image crossfades + scales
 * subtly while the next image enters underneath. Text overlay crossfades
 * in sync, so each slide carries its own headline / sub-line targeted at
 * one of the four brand pillars (Reliability, Consistency, Customisation,
 * Compliance).
 *
 * No horizontal slide, no Embla - it's all CSS opacity + transform.
 */

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type HeroSlide = {
  image: string;
  /** Optional mobile-specific image. Browsers will pick this below the
   *  768px breakpoint via a <picture><source> swap. */
  mobileImage?: string;
  /** Optional looping MP4/WEBM. When present, renders the video in place
   *  of the still image (image stays as poster for first-paint). */
  video?: string;
  alt: string;
  /** Small uppercase eyebrow above the headline. Optional. */
  eyebrow?: React.ReactNode;
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
};

export type HeroCarouselProps = {
  slides: HeroSlide[];
  /** Single CTA shared across all slides. */
  cta?: { label: string; href: string };
  /** Per-slide duration in ms. Default 5500. */
  intervalMs?: number;
};

const EASE = [0.22, 1, 0.36, 1] as const;
const DEFAULT_INTERVAL = 5500;

export default function HeroCarousel({
  slides,
  cta,
  intervalMs = DEFAULT_INTERVAL,
}: HeroCarouselProps) {
  const [idx, setIdx] = useState(0);
  const slideMap = useMemo(() => slides, [slides]);

  // Auto-advance. Runs continuously - we don't pause on hover because
  // landing with the cursor already over the hero would silently stall
  // the rotation. Users can still manually jump via the nav dots.
  useEffect(() => {
    if (slideMap.length < 2) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slideMap.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [slideMap.length, intervalMs]);

  if (slideMap.length === 0) return null;
  const active = slideMap[idx];

  return (
    <section
      className="relative isolate overflow-hidden bg-[color:var(--royal-blue-deep)] text-white"
      aria-label="Hero"
    >
      {/* Image stack - Ken Burns crossfade morph */}
      <div className="relative h-[56svh] w-full md:h-[68svh]">
        {slideMap.map((slide, i) => {
          const isActive = i === idx;
          return (
            <motion.div
              key={slide.image + i}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.08,
                filter: isActive ? "blur(0px)" : "blur(8px)",
              }}
              transition={{
                opacity: { duration: 1.4, ease: "easeInOut" },
                scale: {
                  duration: intervalMs / 1000 + 1.5,
                  ease: "easeOut",
                },
                filter: { duration: 1.2, ease: "easeInOut" },
              }}
              className="absolute inset-0"
            >
              {slide.video ? (
                <video
                  src={slide.video}
                  poster={slide.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              ) : (
                /* <picture> swaps source at the md breakpoint so the
                   browser only downloads the right asset. */
                <picture>
                  <source
                    media="(min-width: 768px)"
                    srcSet={slide.image}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.mobileImage ?? slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                  />
                </picture>
              )}
            </motion.div>
          );
        })}

        {/* Per-slide content - anchored to the TOP half of the banner.
            Centred horizontally on mobile, left-aligned on desktop. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center px-5 pt-12 text-center md:justify-start md:px-16 md:pt-20 md:text-left">
          <div className="pointer-events-auto max-w-md md:max-w-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${idx}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.65, ease: EASE }}
              >
                <div className="mx-auto mb-3 h-px w-12 bg-[color:var(--accent-gold)] md:mx-0 md:mb-4 md:w-16" />
                {active.eyebrow && (
                  <span
                    className="mb-3 block text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-gold)] md:mb-4 md:text-[0.7rem]"
                    style={{ textShadow: "0 2px 14px rgba(20,32,64,0.5)" }}
                  >
                    {active.eyebrow}
                  </span>
                )}
                <h1
                  className="mb-3 text-2xl font-light leading-tight tracking-tight text-white md:mb-4 md:text-4xl lg:text-5xl"
                  style={{ textShadow: "0 2px 18px rgba(20,32,64,0.5)" }}
                >
                  {active.headline}
                </h1>
                {active.subheadline && (
                  <p
                    className="mb-5 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/90 md:mb-7 md:text-lg lg:text-xl"
                    style={{ textShadow: "0 2px 14px rgba(20,32,64,0.5)" }}
                  >
                    {active.subheadline}
                  </p>
                )}
                {cta && (
                  <Link
                    href={cta.href}
                    className="group inline-flex items-center gap-2 border border-[color:var(--accent-gold)] px-5 py-2.5 text-[0.72rem] font-light uppercase tracking-[0.2em] text-[color:var(--accent-gold)] transition-all duration-300 hover:bg-[color:var(--accent-gold)] hover:text-[color:var(--royal-blue-deep)] md:px-7 md:py-3 md:text-[0.78rem]"
                  >
                    {cta.label}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 md:h-4 md:w-4" />
                  </Link>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Nav dots */}
      {slideMap.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slideMap.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx
                  ? "w-8 bg-[color:var(--accent-gold)]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
