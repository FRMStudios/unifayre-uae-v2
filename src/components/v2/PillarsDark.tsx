"use client";

/**
 * PillarsDark — V2 four uniform pillar tiles in a horizontal scroller.
 *
 * Each tile is identical in size and treatment. Strip scrolls horizontally
 * to keep the page short. Prev / next arrow buttons hover over the strip
 * (desktop) so mouse users can advance even with the scrollbar hidden.
 * Touch / trackpad users get native swipe.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  LayoutGrid,
  FlaskConical,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type IconType = React.ComponentType<{
  className?: string;
  strokeWidth?: number;
}>;

type Pillar = {
  number: string;
  title: string;
  body: string;
  icon: IconType;
  image: string;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Reliability you can forecast.",
    body: "Predictable lead times. On-time shipments. Built for export schedules, cold-chain and dry-freight.",
    icon: Clock,
    image: "/images/veg/lifestyle/cloud-kitchen.png",
  },
  {
    number: "02",
    title: "Consistency at scale.",
    body: "Same spec, every shipment, every store. Across 5,000+ outlets served. Repeatable down to the gram.",
    icon: LayoutGrid,
    image: "/images/veg/plant/plant-hero.png",
  },
  {
    number: "03",
    title: "Customisation, built-in.",
    body: "Science-backed R&D. Built to your menu, region, and palate.",
    icon: FlaskConical,
    image: "/images/veg/lifestyle/chef-plating.png",
  },
  {
    number: "04",
    title: "Compliance & safety.",
    body: "BRC · FSSC 22000 · Halal · FDA. Audited, certified, documented.",
    icon: ShieldCheck,
    image: "/images/veg/lifestyle/hotel-buffet.png",
  },
];

export default function PillarsDark({ id = "pillars" }: { id?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByDir = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstTile = el.firstElementChild as HTMLElement | null;
    const tileWidth = firstTile?.offsetWidth ?? 320;
    const gap = 20;
    const distance = tileWidth + gap;
    el.scrollBy({
      left: dir === "prev" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={id}
      className="relative bg-[color:var(--off-white)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 flex flex-col items-start justify-between gap-5 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold-deep)]">
              Why Unifayre
            </span>
            <h2 className="mt-3 max-w-[20ch] font-display text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-[color:var(--royal-blue)]">
              Four{" "}
              <em className="italic text-[color:var(--accent-gold-deep)]">
                non-negotiables.
              </em>
            </h2>
          </div>
          <div className="flex items-end gap-5">
            <p className="max-w-[26rem] text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)]">
              Built for partners who can&rsquo;t afford inconsistency. Built
              for menus that scale.
            </p>
            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <ScrollButton
                onClick={() => scrollByDir("prev")}
                disabled={!canPrev}
                ariaLabel="Previous pillar"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
              </ScrollButton>
              <ScrollButton
                onClick={() => scrollByDir("next")}
                disabled={!canNext}
                ariaLabel="Next pillar"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
              </ScrollButton>
            </div>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 md:-mx-10 md:gap-5 md:px-10"
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.number}
              className="w-[78%] shrink-0 snap-start sm:w-[48%] md:w-[40%] lg:w-[32%] xl:w-[28%]"
            >
              <PillarTile pillar={p} delay={i * 0.08} />
            </div>
          ))}
        </div>
        <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[color:var(--text-on-light-muted)]/60 md:hidden">
          Swipe to see more →
        </p>
      </div>
    </section>
  );
}

function ScrollButton({
  onClick,
  disabled,
  ariaLabel,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--royal-blue)]/20 bg-[color:var(--pure-white)]/80 text-[color:var(--royal-blue)] backdrop-blur-md transition-all hover:border-[color:var(--accent-gold-deep)] hover:text-[color:var(--accent-gold-deep)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[color:var(--royal-blue)]/20 disabled:hover:text-[color:var(--royal-blue)]"
    >
      {children}
    </button>
  );
}

function PillarTile({ pillar, delay }: { pillar: Pillar; delay: number }) {
  const Icon = pillar.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      whileHover={{ y: -4 }}
      className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[24px] border border-[color:var(--royal-blue)]/15 bg-white text-[color:var(--royal-blue)] transition-all hover:border-[color:var(--accent-gold)]/60 sm:aspect-[5/4]"
    >
      {/* Image fills the upper portion of the tile — clean, no gradient */}
      <div className="relative h-[58%] overflow-hidden">
        <Image
          src={pillar.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        {/* Number + icon float over the image as small contained chips */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 md:p-5">
          <span className="inline-flex items-center rounded-full border border-[color:var(--accent-gold)]/45 bg-[color:var(--royal-blue-deep)]/85 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[color:var(--accent-gold)] backdrop-blur">
            {pillar.number}
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--accent-gold)]/45 bg-[color:var(--royal-blue-deep)]/85 backdrop-blur transition-transform duration-300 group-hover:scale-110">
            <Icon
              className="h-4 w-4 text-[color:var(--accent-gold)]"
              strokeWidth={1.6}
            />
          </span>
        </div>
      </div>

      {/* Solid navy panel hosting the title + body — clean separation, no
          image-wide gradient required for text legibility. */}
      <div className="flex flex-1 flex-col justify-end bg-[color:var(--royal-blue-deep)] p-6 text-white md:p-7">
        <h3 className="font-display text-[1.3rem] md:text-[1.5rem] font-light leading-tight tracking-tight">
          {pillar.title}
        </h3>
        <p className="mt-3 text-[0.9rem] font-light leading-relaxed text-white/85">
          {pillar.body}
        </p>
      </div>
    </motion.div>
  );
}
