"use client";

/**
 * CategoryRangeModal - opened when a Product Portfolio banner is clicked.
 * Shows the banner image at the top, the category title and an SKU grid.
 * Clicking any SKU bubbles up to the parent which opens the existing
 * ProductLightbox with full product detail.
 */

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import {
  productsByCategory,
  type CategoryId,
  type Product,
} from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;

export type CategoryRangeCategory = {
  category: CategoryId;
  title: string;
  /** Image used by the portfolio tile (closer to square). */
  bannerSrc: string;
  bannerAlt: string;
  /** Optional wider image used inside the modal header. Falls back to
   *  `bannerSrc` if not supplied. */
  modalBannerSrc?: string;
};

export default function CategoryRangeModal({
  category,
  onClose,
  onSelectProduct,
}: {
  category: CategoryRangeCategory | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (category) {
      window.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [category, onClose]);

  const items = category ? productsByCategory(category.category) : [];

  return (
    <AnimatePresence>
      {category && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={category.title}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[color:var(--royal-blue-deep)]/80 p-4 backdrop-blur-md md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full max-w-[1080px] flex-col overflow-hidden rounded-[24px] border border-[color:var(--royal-blue)]/12 bg-white shadow-[0_30px_70px_-20px_rgba(20,32,64,0.45)]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[color:var(--royal-blue)] shadow-[0_4px_12px_rgba(20,32,64,0.18)] transition-all hover:bg-[color:var(--accent-gold)] hover:text-[color:var(--royal-blue-deep)]"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            {/* Banner header - prefer the wider modal banner if supplied */}
            <div className="relative h-[180px] w-full shrink-0 overflow-hidden md:h-[240px]">
              <Image
                src={category.modalBannerSrc ?? category.bannerSrc}
                alt={category.bannerAlt}
                fill
                sizes="(max-width: 768px) 100vw, 1080px"
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-r from-[color:var(--royal-blue-deep)]/80 via-[color:var(--royal-blue-deep)]/40 to-transparent"
              />
              <div className="absolute inset-0 flex items-end p-5 md:p-7">
                <div>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-gold)]">
                    {items.length} SKUs
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-light leading-tight tracking-tight text-white md:text-[2rem]">
                    {category.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* SKU grid */}
            <div className="grid grid-cols-2 gap-3 overflow-y-auto p-5 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:p-7 lg:grid-cols-5">
              {items.map((p, i) => (
                <motion.button
                  key={p.name}
                  type="button"
                  onClick={() => onSelectProduct(p)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: EASE,
                    delay: Math.min(i * 0.03, 0.4),
                  }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-[color:var(--royal-blue)]/12 bg-white text-left transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent-gold)]/55 hover:shadow-[0_18px_36px_-18px_rgba(20,32,64,0.25)]"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--off-white-deep)]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                    {p.tag && (
                      <div className="absolute left-2 top-2">
                        <span className="inline-flex items-center rounded-full bg-[color:var(--accent-gold)] px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.14em] text-[color:var(--royal-blue-deep)]">
                          {p.tag}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="px-3 py-2.5 md:px-3.5 md:py-3">
                    <h4 className="font-display text-[0.88rem] font-light leading-tight tracking-tight text-[color:var(--royal-blue)] md:text-[0.95rem]">
                      {p.name}
                    </h4>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
