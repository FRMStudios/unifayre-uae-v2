"use client";

/**
 * OurRange — Product Portfolio (combined banner + range listing).
 *
 * Each of the 4 categories renders as a wide cinematic banner card. The
 * category image fills the card; a translucent panel on the left lists the
 * full product range so you see WHAT we make and WHAT IT LOOKS LIKE in one
 * glance. Replaces the previous separate "carousel banner" + "menu range"
 * sections so the page reads tighter.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  PRODUCTS,
  productsByCategory,
  type CategoryId,
  type Product,
} from "@/lib/products";
import ProductLightbox from "@/components/ui/ProductLightbox";

const EASE = [0.22, 1, 0.36, 1] as const;

type CategoryBanner = {
  number: string;
  category: CategoryId;
  title: string;
  bannerSrc: string;
  bannerAlt: string;
  imageObjectPosition?: string;
};

const BANNERS: CategoryBanner[] = [
  {
    number: "01",
    category: "flatbreads",
    title: "Flatbreads & Tortillas",
    bannerSrc: "/images/veg/categories/flatbreads-banner.png",
    bannerAlt: "Layered Malabari paratha banner",
    imageObjectPosition: "right center",
  },
  {
    number: "02",
    category: "snacks",
    title: "Frozen-to-Fry Snacks",
    bannerSrc: "/images/veg/categories/snacks-banner.png",
    bannerAlt: "Falafel mid-fry frozen-to-fry snacks banner",
    imageObjectPosition: "right center",
  },
  {
    number: "03",
    category: "gravies",
    title: "Gravies & Pastes",
    bannerSrc: "/images/veg/categories/gravies-banner.png",
    bannerAlt: "Makhani gravy banner",
    imageObjectPosition: "right center",
  },
  {
    number: "04",
    category: "rice",
    title: "Retort Rice",
    bannerSrc: "/images/veg/categories/rice-banner.png",
    bannerAlt: "Saffron rice in clay handi banner",
    imageObjectPosition: "right center",
  },
];

export default function OurRange({ id = "range" }: { id?: string }) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const vegSkuCount = PRODUCTS.filter((p) => p.scope === "veg").length;

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[color:var(--off-white)] py-16 md:py-24"
    >
      {/* Heading is contained; the 4 banners below break out full-bleed */}
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 text-center md:mb-14"
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[color:var(--accent-gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--accent-gold-deep)]">
              The Range
            </span>
            <span className="h-px w-12 bg-[color:var(--accent-gold)]" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.04] tracking-tight text-[color:var(--royal-blue)]">
            Product{" "}
            <em className="italic text-[color:var(--accent-gold-deep)]">
              Portfolio
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)]">
            Four categories. {vegSkuCount}+ vegetarian SKUs in production.
            Every line builds-to-brief for your menu, format and palate.
          </p>
        </motion.div>
      </div>

      {/* 2x2 banner grid — FULL BLEED, no outer padding, no gaps. The
          four images tile edge-to-edge to fill the entire section width. */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {BANNERS.map((b, i) => (
          <CategoryBannerCard
            key={b.category}
            banner={b}
            index={i}
            onSelect={setActiveProduct}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 flex flex-col items-center gap-3 md:mt-16"
        >
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold-deep)]">
            Briefs to our R&amp;D team welcome on every line
          </span>
          <Link
            href="#contact"
            className="group btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.86rem] font-semibold tracking-wide shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
          >
            Get the full catalogue
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>

      <ProductLightbox
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}

function CategoryBannerCard({
  banner,
  index,
  onSelect,
}: {
  banner: CategoryBanner;
  index: number;
  onSelect: (p: Product) => void;
}) {
  const items = productsByCategory(banner.category);
  const skuCount = items.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className="group relative overflow-hidden bg-[color:var(--royal-blue-deep)]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={banner.bannerSrc}
          alt={banner.bannerAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
          style={{
            objectPosition: banner.imageObjectPosition ?? "right center",
          }}
        />
      </div>
      {/* Soft gradient on left side ONLY so the panel reads while the image stays clean on the right */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[color:var(--royal-blue-deep)]/85 via-[color:var(--royal-blue-deep)]/40 to-transparent md:from-[color:var(--royal-blue-deep)]/85 md:via-[color:var(--royal-blue-deep)]/30"
      />

      {/* Content panel */}
      <div className="relative flex min-h-[440px] flex-col justify-between gap-6 p-6 md:min-h-[480px] md:p-8 lg:min-h-[520px] lg:max-w-[58%]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-gold)]/40 bg-[color:var(--royal-blue-deep)]/55 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-gold)] backdrop-blur-md">
            <span className="font-display text-[0.78rem] font-light text-[color:var(--accent-gold)]">
              {banner.number}
            </span>
            <span className="h-3 w-px bg-[color:var(--accent-gold)]/45" />
            {skuCount}&nbsp;SKUs
          </span>
          <h3 className="mt-4 font-display text-2xl font-light leading-tight tracking-tight text-white md:text-[1.85rem] lg:text-[2.1rem]">
            {banner.title}
          </h3>
        </div>

        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {items.map((p) => (
            <li key={p.name}>
              <button
                type="button"
                onClick={() => onSelect(p)}
                className="group/item flex w-full items-center gap-2 rounded-md px-1 py-0.5 text-left text-[0.82rem] font-light leading-snug text-white/85 transition-colors hover:text-[color:var(--accent-gold)]"
              >
                <span
                  aria-hidden
                  className="block h-1 w-1 shrink-0 rounded-full bg-[color:var(--accent-gold)]/55 transition-colors group-hover/item:bg-[color:var(--accent-gold)]"
                />
                <span className="flex-1 truncate">{p.name}</span>
                {p.tag && (
                  <span className="shrink-0 rounded-full bg-[color:var(--accent-gold)]/20 px-1.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[color:var(--accent-gold)]">
                    {p.tag}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
