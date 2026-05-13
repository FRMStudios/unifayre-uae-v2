"use client";

/**
 * WhyUnifayreDynamic - Why Unifayre.
 *
 * Full-bleed rotating plant imagery as background. ONE single translucent
 * navy panel on the left holds the eyebrow, headline, body copy and a
 * compact 2x2 grid of the four pillars. Right side stays clean image -
 * no separate pointer cards covering the photo.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  LayoutGrid,
  FlaskConical,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  {
    src: "/images/veg/why/why-1.png",
    alt: "Unifayre plant interior - production hall",
  },
  {
    src: "/images/veg/why/why-2.png",
    alt: "Unifayre plant interior - clean-room line",
  },
  {
    src: "/images/veg/why/why-3.png",
    alt: "Unifayre plant interior - process detail",
  },
];

type Pillar = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Clock,
    title: "Reliability",
    body: "Lead times you can forecast. Shipments that meet the calendar.",
  },
  {
    icon: LayoutGrid,
    title: "Consistency at scale",
    body: "Same standard, every batch, every market.",
  },
  {
    icon: FlaskConical,
    title: "Customisation",
    body: "Custom builds, in-house. Your menu, your region, your palate.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & safety",
    body: "BRC, FSSC 22000, ISO 22000, HACCP. Audited, documented. Every batch.",
  },
];

export default function WhyUnifayreDynamic({ id = "why" }: { id?: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (SLIDES.length < 2) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-[color:var(--royal-blue-deep)] text-white"
    >
      {/* Full-bleed rotating background images - no overlay gradient */}
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

      {/* Single content panel - left column, image stays clean to the right */}
      <div className="relative mx-auto grid min-h-[80svh] max-w-[1320px] items-center px-5 py-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10 md:px-10 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="rounded-2xl border border-[color:var(--accent-gold)]/15 bg-[color:var(--royal-blue-deep)]/72 p-6 backdrop-blur-md md:rounded-3xl md:p-9 lg:p-10"
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
            className="gold-line w-20 md:w-28"
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
            className="mt-5 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold)]"
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
            className="mt-4 font-display text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl"
          >
            Earned,{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              not announced.
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
            className="mt-5 max-w-[34rem] text-base font-light leading-relaxed text-white/85 md:text-[1.05rem]"
          >
            Four standards behind every order. Audited. Documented. Carried
            by the team that has done this for three decades.
          </motion.p>

          {/* 2x2 pillar grid inside the SAME panel - no separate cards. */}
          <motion.ul
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
            className="mt-7 grid grid-cols-1 gap-5 border-t border-[color:var(--accent-gold)]/15 pt-6 sm:grid-cols-2 md:gap-6"
          >
            {PILLARS.map((p) => (
              <motion.li
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: EASE },
                  },
                }}
                className="flex gap-3"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent-gold)]/35 bg-[color:var(--royal-blue-deep)]/45">
                  <p.icon
                    className="h-4 w-4 text-[color:var(--accent-gold)]"
                    strokeWidth={1.7}
                  />
                </span>
                <div>
                  <span className="block font-display text-[1.05rem] font-light leading-tight tracking-tight text-white md:text-[1.15rem]">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-[0.78rem] font-light leading-snug text-white/75">
                    {p.body}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: EASE, delay: 0.2 },
              },
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-[0.86rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
            >
              Request Factory Visit / Sample
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
