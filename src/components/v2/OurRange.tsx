"use client";

/**
 * OurRange — editorial menu-style range layout.
 *
 * Ported from the bright "MenuStyleRange" reference and re-skinned for the
 * royal-blue + gold palette. Header: gold ornament + serif "Our Range"
 * heading + small "Specially for you" eyebrow. Below: 4 menu-style category
 * columns (Flatbreads, Snacks, Gravies, Rice). Each column lists products
 * with name + tag, plus a featured photo on a rounded SQUARE plate (not
 * a circle — squarish per design direction).
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import {
  PRODUCTS,
  productsByCategory,
  type CategoryId,
  type Product,
} from "@/lib/products";
import ProductLightbox from "@/components/ui/ProductLightbox";

const EASE = [0.22, 1, 0.36, 1] as const;

type MenuColumn = {
  category: CategoryId;
  title: string;
  capacity: string;
  featuredImage: string;
  featuredAlt: string;
  itemsToShow: number;
};

const COLUMNS: MenuColumn[] = [
  {
    category: "flatbreads",
    title: "Flatbreads",
    capacity: "15,500+ pcs / hr",
    featuredImage: "/products/flatbreads/roti-canai.jpg",
    featuredAlt: "Roti Canai",
    itemsToShow: 5,
  },
  {
    category: "snacks",
    title: "Frozen-to-Fry Snacks",
    capacity: "1 lakh pcs / day",
    featuredImage: "/products/snacks/falafel.jpg",
    featuredAlt: "Falafel",
    itemsToShow: 5,
  },
  {
    category: "gravies",
    title: "Base Gravies & Pastes",
    capacity: "1,000 kg / hr",
    featuredImage: "/products/gravies/makhani.jpg",
    featuredAlt: "Makhani Base Gravy",
    itemsToShow: 5,
  },
  {
    category: "rice",
    title: "Retort Rice",
    capacity: "Ambient stable",
    featuredImage: "/products/rice/saffron.jpg",
    featuredAlt: "Saffron Rice",
    itemsToShow: 5,
  },
];

export default function OurRange({ id = "products" }: { id?: string }) {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const vegSkuCount = PRODUCTS.filter((p) => p.scope === "veg").length;

  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[color:var(--off-white)] py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-[1320px] px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mx-auto mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[color:var(--accent-gold)]" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--accent-gold-deep)]">
              Specially for you
            </span>
            <span className="h-px w-12 bg-[color:var(--accent-gold)]" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.04] tracking-tight text-[color:var(--royal-blue)]">
            Our{" "}
            <em className="italic text-[color:var(--accent-gold-deep)]">
              Range
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)]">
            Four categories, every line customisable to your menu. Names below;
            capacities right-aligned, like a chef&rsquo;s menu.
          </p>
        </motion.div>

        {/* Menu columns */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 md:gap-y-16 lg:gap-x-20">
          {COLUMNS.map((col, colIdx) => {
            const items = productsByCategory(col.category).slice(
              0,
              col.itemsToShow
            );
            return (
              <motion.div
                key={col.category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: EASE, delay: colIdx * 0.08 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_140px] md:gap-7 lg:grid-cols-[1fr_160px] lg:gap-8"
              >
                {/* Column items list */}
                <div>
                  <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-[color:var(--royal-blue)]/15 pb-3">
                    <h3 className="font-display text-[1.6rem] font-light tracking-tight text-[color:var(--royal-blue)] md:text-[1.8rem]">
                      {col.title}
                    </h3>
                    <span className="whitespace-nowrap text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent-gold-deep)]">
                      {col.capacity}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {items.map((p) => (
                      <li
                        key={p.name}
                        className="flex items-baseline gap-3 text-[0.94rem]"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveProduct(p)}
                          className="group flex flex-1 items-baseline gap-3 text-left transition-colors hover:text-[color:var(--accent-gold-deep)]"
                        >
                          <span className="font-medium text-[color:var(--royal-blue)] transition-colors group-hover:text-[color:var(--accent-gold-deep)]">
                            {p.name}
                          </span>
                          <span
                            className="flex-1 self-end border-b border-dotted border-[color:var(--royal-blue)]/25"
                            aria-hidden
                          />
                          {p.tag && (
                            <span className="shrink-0 rounded-full bg-[color:var(--accent-gold)]/15 px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[color:var(--accent-gold-deep)]">
                              {p.tag}
                            </span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured photo on a rounded-square plate (squarish, not circular) */}
                <button
                  type="button"
                  onClick={() => {
                    const featured = PRODUCTS.find(
                      (p) => p.image === col.featuredImage
                    );
                    if (featured) setActiveProduct(featured);
                  }}
                  className="group relative mx-auto aspect-square w-32 self-start overflow-hidden rounded-[22px] border border-[color:var(--accent-gold)]/40 bg-white shadow-[0_18px_36px_-18px_rgba(20,32,64,0.25)] transition-all hover:border-[color:var(--accent-gold)] hover:shadow-[0_22px_44px_-18px_rgba(201,169,97,0.4)] md:w-full md:max-w-[160px]"
                  aria-label={`View ${col.featuredAlt}`}
                >
                  <Image
                    src={col.featuredImage}
                    alt={col.featuredAlt}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:opacity-100">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent-gold)] text-[color:var(--royal-blue-deep)] shadow">
                      <Maximize2 className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-14 flex flex-col items-center gap-3 md:mt-20"
        >
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-gold-deep)]">
            {vegSkuCount}+ vegetarian SKUs available
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
