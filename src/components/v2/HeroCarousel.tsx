"use client";

/**
 * HeroCarousel - rotating-image hero with a single static content overlay.
 *
 * Images crossfade automatically; the headline, subline and CTA stay
 * fixed across all rotations so the brand message reads as one consistent
 * statement rather than a new pitch every 6 seconds.
 *
 * Each slide accepts an optional `video` for an MP4/WEBM dropped in
 * later; the image acts as the poster.
 */

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type HeroSlide = {
  image: string;
  /** Optional looping MP4/WEBM. When present, renders the video in place
   *  of the still image (image stays as poster for first-paint). */
  video?: string;
  alt: string;
};

export type HeroContent = {
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  cta?: { label: string; href: string };
};

export type HeroCarouselProps = {
  slides: HeroSlide[];
  content: HeroContent;
  /** Slide duration in ms. Default 6000. */
  intervalMs?: number;
};

const DEFAULT_INTERVAL = 6000;

export default function HeroCarousel({
  slides,
  content,
  intervalMs = DEFAULT_INTERVAL,
}: HeroCarouselProps) {
  const autoplay = useRef(
    Autoplay({
      delay: intervalMs,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 35 },
    [autoplay.current]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressFrame = useRef<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    let start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(elapsed / intervalMs, 1) * 100;
      setProgress(pct);
      if (pct < 100) {
        progressFrame.current = requestAnimationFrame(tick);
      }
    };
    setProgress(0);
    progressFrame.current = requestAnimationFrame(tick);
    return () => {
      if (progressFrame.current !== null) {
        cancelAnimationFrame(progressFrame.current);
      }
    };
  }, [activeIndex, intervalMs]);

  const scrollTo = useCallback(
    (i: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(i);
    },
    [emblaApi]
  );

  const slideMap = useMemo(() => slides, [slides]);
  if (slideMap.length === 0) return null;

  return (
    <section
      className="relative isolate overflow-hidden bg-[color:var(--royal-blue-deep)] text-white"
      aria-label="Hero"
    >
      {/* Image carousel - images only, no per-slide text */}
      <div className="relative h-[56svh] w-full md:h-[68svh]">
        <div
          className="absolute inset-0 overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex h-full">
            {slideMap.map((slide, i) => (
              <div
                key={slide.image + i}
                className="relative h-full w-full shrink-0 grow-0 basis-full"
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
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Static content overlay - stays fixed across all rotations */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center px-5 md:px-16">
          <div className="pointer-events-auto max-w-md md:max-w-xl">
            <div className="mb-3 h-px w-12 bg-[color:var(--accent-gold)] md:mb-4 md:w-16" />
            <h1
              className="mb-3 text-2xl font-light leading-tight tracking-tight text-white md:mb-4 md:text-4xl lg:text-5xl"
              style={{ textShadow: "0 2px 18px rgba(20,32,64,0.45)" }}
            >
              {content.headline}
            </h1>
            {content.subheadline && (
              <p
                className="mb-5 max-w-md text-sm font-light leading-relaxed tracking-wide text-white/90 md:mb-7 md:text-lg lg:text-xl"
                style={{ textShadow: "0 2px 14px rgba(20,32,64,0.4)" }}
              >
                {content.subheadline}
              </p>
            )}
            {content.cta && (
              <Link
                href={content.cta.href}
                className="group inline-flex items-center gap-2 border border-[color:var(--accent-gold)] px-5 py-2.5 text-[0.72rem] font-light uppercase tracking-[0.2em] text-[color:var(--accent-gold)] transition-all duration-300 hover:bg-[color:var(--accent-gold)] hover:text-[color:var(--royal-blue-deep)] md:px-7 md:py-3 md:text-[0.78rem]"
              >
                {content.cta.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 md:h-4 md:w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Nav dots */}
      {slideMap.length > 1 && (
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {slideMap.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === activeIndex}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-[color:var(--accent-gold)]"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {slideMap.length > 1 && (
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-20 hidden h-0.5 bg-white/10 md:block"
        >
          <div
            className="h-full bg-[color:var(--accent-gold)] transition-[width] ease-linear"
            style={{ width: `${progress}%`, transitionDuration: "100ms" }}
          />
        </div>
      )}
    </section>
  );
}
