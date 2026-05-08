"use client";

/**
 * WhyUnifayreDynamic — V3 full-banner layout (back from split).
 *
 * Full-bleed rotating factory imagery (no full-image gradient). Headline +
 * capability pointer cards sit on top of the image, each grounded in its
 * own translucent navy patch (bg-royal-blue-deep/55 backdrop-blur) so text
 * reads cleanly without darkening the whole image.
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  History,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Slide = {
  src: string;
  alt: string;
  caption: string;
};

const SLIDES: Slide[] = [
  {
    src: "/images/veg/plant/plant-hero.png",
    alt: "Mohali plant exterior at golden hour",
    caption: "Mohali · Manufacturing",
  },
  {
    src: "/plant/plant-house.jpg",
    alt: "Plant interior with production line",
    caption: "Production line · Interior",
  },
];

type Pointer = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  metric: string;
  unit?: string;
  label: string;
};

/**
 * The four non-negotiables — credentials, not promises. Promises live in
 * the hero copy and the highlights band; this section is what's audited,
 * documented and on the wall at the plant.
 */
const POINTERS: Pointer[] = [
  {
    icon: Award,
    metric: "BRC + FSSC 22000",
    label: "Certified lines · audit-ready",
  },
  {
    icon: History,
    metric: "30+ years",
    label: "Manufacturing heritage · est. 1990s",
  },
  {
    icon: FlaskConical,
    metric: "R&D-led",
    label: "Custom builds for your menu",
  },
  {
    icon: ShieldCheck,
    metric: "Halal-line",
    label: "Every SKU. Every shipment.",
  },
];

export default function WhyUnifayreDynamic({ id = "why" }: { id?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[idx];

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-[color:var(--royal-blue-deep)] text-white"
    >
      {/* Full-bleed rotating background images — no overlay gradient */}
      <div className="absolute inset-0">
        {SLIDES.map((s, i) => (
          <motion.div
            key={s.src}
            initial={false}
            animate={{
              opacity: i === idx ? 1 : 0,
              scale: i === idx ? 1 : 1.06,
            }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 7, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto grid min-h-[88svh] max-w-[1320px] items-center gap-12 px-5 py-24 md:grid-cols-[1fr_1.05fr] md:items-stretch md:gap-14 md:px-10 md:py-28">
        {/* Left — heading inside a translucent navy patch */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="rounded-2xl border border-[color:var(--accent-gold)]/15 bg-[color:var(--royal-blue-deep)]/55 p-6 backdrop-blur-md md:rounded-3xl md:p-8"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0.4 },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.9, ease: EASE },
              },
            }}
            style={{ transformOrigin: "0 50%" }}
            className="gold-line w-24 md:w-32"
          />
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, ease: EASE },
              },
            }}
            className="mt-6 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]"
          >
            Why Unifayre
          </motion.span>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.95, ease: EASE },
              },
            }}
            className="mt-5 font-display text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl"
          >
            Four{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              non-negotiables.
            </em>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE },
              },
            }}
            className="mt-5 max-w-[34rem] text-base font-light leading-relaxed text-white/90 md:text-lg"
          >
            Certifications on the wall. Heritage in the ledger. R&amp;D on the
            floor. Halal in every line. The four credentials we&rsquo;ve earned
            over decades &mdash; renewed every year, audited every quarter,
            documented on every shipment.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE, delay: 0.15 },
              },
            }}
            className="mt-7 flex items-center gap-4"
          >
            <div className="flex items-center gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx
                      ? "w-6 bg-[color:var(--accent-gold)]"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={`cap-${idx}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.4 }}
                className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold)]"
              >
                {slide.caption}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE, delay: 0.25 },
              },
            }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
            >
              Request Sample
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#pillars"
              className="btn-gold-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold backdrop-blur"
            >
              See our pillars
            </a>
          </motion.div>
        </motion.div>

        {/* Right — capability pointer cards, each on its own translucent
            navy patch so they read against any image */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="grid grid-cols-2 gap-x-5 gap-y-4 md:h-full md:auto-rows-fr md:gap-x-7 md:gap-y-5 lg:gap-x-9"
        >
          {POINTERS.map((p) => (
            <motion.div
              key={p.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: EASE },
                },
              }}
              whileHover={{ y: -3 }}
              className="group flex h-full min-h-[120px] flex-col rounded-2xl border border-[color:var(--accent-gold)]/20 bg-[color:var(--royal-blue-deep)]/65 p-4 backdrop-blur-md transition-all hover:border-[color:var(--accent-gold)]/55 md:min-h-0 md:p-5"
            >
              <p.icon
                className="h-5 w-5 text-[color:var(--accent-gold)] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.6}
              />
              <span className="mt-auto block font-display text-[1.5rem] font-light leading-none tracking-tight text-white md:text-[1.7rem]">
                {p.metric}
                {p.unit && (
                  <span className="ml-1.5 align-baseline text-[0.85rem] font-medium tracking-wide text-white/80 md:text-[0.95rem]">
                    {p.unit}
                  </span>
                )}
              </span>
              <span className="mt-2 block text-[0.72rem] font-medium leading-snug text-white/80">
                {p.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
