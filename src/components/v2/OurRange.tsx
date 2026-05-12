"use client";

/**
 * OurRange - Product Portfolio.
 *
 * Four category banners in a single horizontal row. Each banner shows
 * only the category title centred on the image. Click the banner to open
 * a CategoryRangeModal listing every SKU in that category; click a SKU
 * to open the existing ProductLightbox with full detail.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductLightbox from "@/components/ui/ProductLightbox";
import CategoryRangeModal, {
  type CategoryRangeCategory,
} from "@/components/v2/CategoryRangeModal";

const EASE = [0.22, 1, 0.36, 1] as const;

const BANNERS: CategoryRangeCategory[] = [
  {
    category: "flatbreads",
    title: "Flatbreads & Tortillas",
    bannerSrc: "/images/veg/categories/flatbreads-portfolio.png",
    modalBannerSrc: "/images/veg/categories/flatbreads-banner.png",
    bannerAlt: "Layered Malabari paratha banner",
  },
  {
    category: "snacks",
    title: "Frozen-to-Fry Snacks",
    bannerSrc: "/images/veg/categories/snacks-portfolio.png",
    modalBannerSrc: "/images/veg/categories/snacks-banner.png",
    bannerAlt: "Falafel mid-fry frozen-to-fry snacks banner",
  },
  {
    category: "gravies",
    title: "Gravies & Pastes",
    bannerSrc: "/images/veg/categories/gravies-portfolio.png",
    modalBannerSrc: "/images/veg/categories/gravies-banner.png",
    bannerAlt: "Makhani gravy banner",
  },
  {
    category: "rice",
    title: "Retort Rice",
    bannerSrc: "/images/veg/categories/rice-portfolio.png",
    modalBannerSrc: "/images/veg/categories/rice-banner.png",
    bannerAlt: "Saffron rice in clay handi banner",
  },
];

export default function OurRange({ id = "range" }: { id?: string }) {
  const [openCategory, setOpenCategory] =
    useState<CategoryRangeCategory | null>(null);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[color:var(--off-white)] pb-10 pt-12 md:pb-12 md:pt-16"
    >
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8 text-center md:mb-10"
        >
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.04] tracking-tight text-[color:var(--royal-blue)]">
            Product{" "}
            <em className="italic text-[color:var(--accent-gold-deep)]">
              Portfolio
            </em>
          </h2>
        </motion.div>
      </div>

      {/* 4 banners in a single row, full-bleed and edge-to-edge */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {BANNERS.map((b, i) => (
          <BannerTile
            key={b.category}
            banner={b}
            index={i}
            onClick={() => setOpenCategory(b)}
          />
        ))}
      </div>

      <CategoryRangeModal
        category={openCategory}
        onClose={() => setOpenCategory(null)}
        onSelectProduct={(p) => {
          setOpenCategory(null);
          setActiveProduct(p);
        }}
      />
      <ProductLightbox
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  );
}

function BannerTile({
  banner,
  index,
  onClick,
}: {
  banner: CategoryRangeCategory;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Open ${banner.title} range`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
      className="group relative h-[320px] w-full overflow-hidden bg-[color:var(--royal-blue-deep)] text-left md:h-[380px] lg:h-[420px]"
    >
      <Image
        src={banner.bannerSrc}
        alt={banner.bannerAlt}
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
        style={{ objectPosition: "center" }}
      />
      {/* Soft bottom-up gradient so the title reads against any photo */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[color:var(--royal-blue-deep)]/85 via-[color:var(--royal-blue-deep)]/15 to-transparent transition-opacity duration-500 group-hover:from-[color:var(--royal-blue-deep)]/90"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 p-5 text-center md:p-7">
        <h3
          className="font-display text-[1.4rem] font-light leading-tight tracking-tight text-white md:text-[1.65rem] lg:text-[1.85rem]"
          style={{ textShadow: "0 2px 14px rgba(20,32,64,0.45)" }}
        >
          {banner.title}
        </h3>
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Range &rarr;
        </span>
      </div>
    </motion.button>
  );
}
