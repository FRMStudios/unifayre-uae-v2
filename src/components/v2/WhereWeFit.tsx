"use client";

/**
 * WhereWeFit — left-side editorial copy with the foodservice formats listed
 * inline, right-side 2x2 image collage covering the entire right half of
 * the section so the imagery has real presence on the page.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Utensils,
  Hotel,
  ChefHat,
  Cloud,
  Plane,
  GlassWater,
  Coffee,
  ShoppingBag,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Industry = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
};

const INDUSTRIES: Industry[] = [
  { icon: Utensils, label: "QSR" },
  { icon: Hotel, label: "Hotels" },
  { icon: ChefHat, label: "Catering" },
  { icon: Cloud, label: "Cloud Kitchens" },
  { icon: Plane, label: "Airlines" },
  { icon: GlassWater, label: "Casual Dining" },
  { icon: Coffee, label: "Cafes & Coffee Chains" },
  { icon: ShoppingBag, label: "Modern Trade & Retail" },
];

type Frame = { src: string; alt: string; caption: string };

const FRAMES: Frame[] = [
  {
    src: "/images/veg/lifestyle/qsr-plate.png",
    alt: "QSR plate — vegetarian burger build",
    caption: "QSR",
  },
  {
    src: "/images/veg/lifestyle/hotel-buffet.png",
    alt: "Hotel buffet spread",
    caption: "Hotels",
  },
  {
    src: "/images/veg/lifestyle/cloud-kitchen.png",
    alt: "Cloud kitchen plating",
    caption: "Cloud Kitchen",
  },
  {
    src: "/images/veg/lifestyle/chef-plating.png",
    alt: "Catering chef plating mid-action",
    caption: "Catering",
  },
];

export default function WhereWeFit() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg-deep)] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 md:grid-cols-2 md:gap-14 md:px-10 lg:gap-20">
        {/* LEFT — copy + industry list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[color:var(--accent-gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-gold)]">
              Where We Fit
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.8rem] font-light leading-[1.08] tracking-tight text-white">
            Wherever food is{" "}
            <em className="italic text-[color:var(--accent-gold)]">
              served at scale.
            </em>
          </h2>
          <p className="mt-5 max-w-[34rem] text-base font-light leading-relaxed text-white/80 md:text-lg">
            One spec, eight kinds of kitchens. The same SKUs ship to QSR
            chains, hotel buffets and inflight trays — and to the cloud
            kitchens, cafes and modern-trade freezers in between.
          </p>

          {/* Industry list — 2-col grid of pills with icons */}
          <ul className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {INDUSTRIES.map((ind, i) => (
              <motion.li
                key={ind.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: 0.05 * i,
                }}
                className="group flex items-center gap-3 rounded-xl border border-[color:var(--border-subtle)] bg-white/[0.03] px-3.5 py-2.5 backdrop-blur-sm transition-all hover:border-[color:var(--accent-gold)]/55 hover:bg-white/[0.06]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent-gold)]/35 bg-[color:var(--bg-deep)]/60">
                  <ind.icon
                    className="h-4 w-4 text-[color:var(--accent-gold)] transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.7}
                  />
                </span>
                <span className="text-[0.92rem] font-medium tracking-tight text-white/90">
                  {ind.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT — 2x2 image collage filling the right half */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="grid h-full min-h-[460px] grid-cols-2 grid-rows-2 gap-3 md:min-h-[560px] md:gap-4"
        >
          {FRAMES.map((f, i) => (
            <motion.figure
              key={f.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                ease: EASE,
                delay: 0.05 + i * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-warm-shadow)]"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--royal-blue-deep)]/85 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-3 pb-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold)] md:px-4 md:pb-3">
                {f.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
