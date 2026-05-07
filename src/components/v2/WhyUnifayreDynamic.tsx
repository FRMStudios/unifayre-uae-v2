"use client";

/**
 * WhyUnifayreDynamic — V3 split layout (no image gradient).
 *
 * Solid navy section background. Rotating factory imagery sits in a
 * contained rounded-rectangle frame on the right (clean, no overlay).
 * Headline + capability pointer cards sit on the navy bg on the left.
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Award,
  History,
  Store,
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
  label: string;
};

const POINTERS: Pointer[] = [
  { icon: Factory, metric: "18,000 MT", label: "Annual veg capacity" },
  { icon: Award, metric: "BRC + FSSC", label: "Certified lines" },
  { icon: History, metric: "30+ years", label: "Manufacturing heritage" },
  { icon: Store, metric: "5,000+", label: "Outlets served" },
  { icon: FlaskConical, metric: "R&D-led", label: "Custom builds, your menu" },
  { icon: ShieldCheck, metric: "Halal-line", label: "Ready, every SKU" },
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
      className="relative overflow-hidden bg-[color:var(--royal-blue-deep)] py-20 text-white md:py-28"
    >
      <div
        aria-hidden
        className="gold-blob pointer-events-none absolute -bottom-20 left-10 h-[420px] w-[420px] rounded-full opacity-40"
      />

      <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:px-10">
        {/* Left — heading & capability pointers */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col"
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
            className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]"
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
            Built To Deliver,
            <br />
            <em className="italic text-[color:var(--accent-gold)]">Always.</em>
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
            className="mt-5 max-w-[34rem] text-base font-light leading-relaxed text-white/85 md:text-lg"
          >
            Over 30 years of precision manufacturing, BRC-certified lines, and
            an R&amp;D team that builds to your menu, region, and palate.
          </motion.p>

          {/* Capability pointer cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE, delay: 0.15 },
              },
            }}
            className="mt-8 grid grid-cols-2 gap-3 md:gap-4"
          >
            {POINTERS.map((p) => (
              <div
                key={p.label}
                className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--accent-gold)]/20 bg-[color:var(--royal-blue)]/35 p-4 backdrop-blur-sm transition-all hover:border-[color:var(--accent-gold)]/55 md:p-5"
              >
                <p.icon
                  className="h-5 w-5 text-[color:var(--accent-gold)] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.6}
                />
                <span className="font-display text-xl font-light leading-none tracking-tight text-white md:text-2xl">
                  {p.metric}
                </span>
                <span className="text-[0.72rem] font-medium leading-snug text-white/75">
                  {p.label}
                </span>
              </div>
            ))}
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
            className="mt-8 flex flex-wrap items-center gap-3"
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
              className="btn-gold-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold"
            >
              See our pillars
            </a>
          </motion.div>
        </motion.div>

        {/* Right — contained rotating image (no gradient overlay) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, ease: EASE }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[color:var(--accent-gold)]/25 bg-[color:var(--royal-blue)]/25 md:aspect-square"
        >
          {SLIDES.map((s, i) => (
            <motion.div
              key={s.src}
              initial={false}
              animate={{
                opacity: i === idx ? 1 : 0,
                scale: i === idx ? 1.02 : 1.06,
              }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 7, ease: "easeOut" },
              }}
              className="absolute inset-0"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          ))}

          {/* Caption pill — contained, sits over the image, not a full-image gradient */}
          <div className="absolute bottom-4 left-4 z-10 md:bottom-6 md:left-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={`cap-${idx}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-gold)]/35 bg-[color:var(--royal-blue-deep)]/85 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold)] backdrop-blur"
              >
                <span className="h-1 w-1 rounded-full bg-[color:var(--accent-gold)]" />
                {slide.caption}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Slide indicator dots — bottom right */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 md:bottom-6 md:right-6">
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
        </motion.div>
      </div>
    </section>
  );
}
