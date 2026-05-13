"use client";

/**
 * ImageFeatureSection - V3 Section 4.
 *
 * Off-white bg. Editorial multi-image split (structure borrowed from
 * Option 2's WelcomeStatement) - but explicitly rounded rectangles, NOT
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
    <section className="relative overflow-hidden bg-[color:var(--off-white)] pb-20 pt-12 md:pb-24 md:pt-16">
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 lg:gap-20">
        {/* Left - copy */}
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
            Unveiling our new{" "}
            <em className="italic text-[color:var(--accent-gold-deep)]">
              Vegetarian plant.
            </em>
          </h2>
          <p className="mt-6 max-w-[34rem] text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)] md:text-lg">
            Purpose-built for foodservice. Engineered for international
            shipment. Run by a team that has quietly supplied the
            world&rsquo;s kitchens for three decades.
          </p>
          <p className="mt-4 max-w-[34rem] text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)] md:text-lg">
            Eighteen thousand metric tons. Multi-format freezing. In-house
            R&amp;D. A halal-only line. BRC, FSSC&nbsp;22000, ISO&nbsp;22000
            and HACCP certified.
          </p>
          <p className="mt-4 max-w-[34rem] text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)] md:text-lg">
            The plant is the proof. We will let it speak.
          </p>
          <div className="mt-8">
            <Link
              href="#range"
              className="group inline-flex items-center gap-2 text-[0.92rem] font-semibold tracking-wide text-[color:var(--royal-blue)] transition-colors hover:text-[color:var(--accent-gold-deep)]"
            >
              <span className="border-b border-current pb-0.5">
                See the Product Portfolio
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Right - two offset rounded-RECTANGLE photos */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="relative h-[440px] md:h-[520px]"
        >
          {/* Larger image - top right (rounded rectangle, NOT circle) */}
          <div className="absolute right-0 top-0 h-[60%] w-[68%] overflow-hidden rounded-3xl border border-[color:var(--accent-gold)]/20 bg-[color:var(--off-white-deep)] shadow-[0_18px_36px_-18px_rgba(30,58,138,0.18)]">
            <Image
              src={imageA.src}
              alt={imageA.alt}
              fill
              sizes="(max-width: 768px) 60vw, 380px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          {/* Smaller image - bottom left, overlapping (rounded rectangle) */}
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
