"use client";

/**
 * ImageFeatureSection — V3 Section 4.
 *
 * Off-white bg. Editorial multi-image split (structure borrowed from
 * Option 2's WelcomeStatement) — but explicitly rounded rectangles, NOT
 * circles. Headline left with key category words highlighted as gold +
 * royal-blue pill badges; two offset rounded-rect photos right.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export type ImageFeatureProps = {
  imageA: { src: string; alt: string };
  imageB: { src: string; alt: string };
};

export default function ImageFeatureSection({
  imageA,
  imageB,
}: ImageFeatureProps) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--off-white)] py-20 md:py-28">
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 lg:gap-20">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[color:var(--accent-gold-deep)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-gold-deep)]">
              Our Story
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--royal-blue)]">
            Enjoy Every Meal with{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span>Crisp</span>
              <span className="inline-flex items-center rounded-full bg-[color:var(--accent-gold)]/15 px-3 py-0.5 text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold-deep)]">
                Flatbreads
              </span>
            </span>
            , Hearty{" "}
            <span className="inline-flex items-center gap-2 align-middle">
              <span className="inline-flex items-center rounded-full bg-[color:var(--royal-blue)]/12 px-3 py-0.5 text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[color:var(--royal-blue)]">
                Gravies
              </span>
              <span>&amp;</span>
              <span className="inline-flex items-center rounded-full bg-[color:var(--accent-gold)]/15 px-3 py-0.5 text-[0.7em] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold-deep)]">
                Snacks
              </span>
            </span>
            .
          </h2>
          <p className="mt-6 max-w-[34rem] text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)] md:text-lg">
            Over thirty years of precision manufacturing, BRC-certified lines,
            and an R&amp;D team that builds to your menu, region and palate.
            Same spec, every shipment, every store. Across 5,000+ outlets
            served.
          </p>
          <div className="mt-8">
            <Link
              href="#products"
              className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold tracking-wide text-[color:var(--royal-blue)] transition-colors hover:text-[color:var(--accent-gold-deep)]"
            >
              <span className="border-b border-current pb-0.5">
                Explore the Range
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Right — two offset rounded-RECTANGLE photos */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="relative h-[440px] md:h-[520px]"
        >
          {/* Larger image — top right (rounded rectangle, NOT circle) */}
          <div className="absolute right-0 top-0 h-[60%] w-[68%] overflow-hidden rounded-3xl border border-[color:var(--accent-gold)]/20 bg-[color:var(--off-white-deep)] shadow-[0_18px_36px_-18px_rgba(30,58,138,0.18)]">
            <Image
              src={imageA.src}
              alt={imageA.alt}
              fill
              sizes="(max-width: 768px) 60vw, 380px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Smaller image — bottom left, overlapping (rounded rectangle) */}
          <div className="absolute bottom-0 left-0 h-[58%] w-[60%] overflow-hidden rounded-3xl border border-[color:var(--accent-gold)]/25 bg-[color:var(--off-white-deep)] shadow-[0_24px_44px_-22px_rgba(30,58,138,0.22)]">
            <Image
              src={imageB.src}
              alt={imageB.alt}
              fill
              sizes="(max-width: 768px) 60vw, 340px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Decorative gold dot between photos */}
          <div className="absolute left-[55%] top-[42%] hidden md:block">
            <span className="block h-2.5 w-2.5 rotate-45 bg-[color:var(--accent-gold)] shadow-[0_4px_12px_rgba(201,169,97,0.45)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
