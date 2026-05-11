"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf, Drumstick, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import type { Product } from "@/lib/products";

const EASE = [0.22, 1, 0.36, 1] as const;

const CATEGORY_LABEL: Record<string, string> = {
  flatbreads: "Flatbreads & Tortillas",
  snacks: "Frozen-to-Fry Snacks",
  rice: "Retort Rice",
  gravies: "Base Gravies & Pastes",
  appetizers: "Chicken Appetizers",
  wings: "Wings",
  kebabs: "Kebabs",
  patties: "Patties",
  sausages: "Sausages",
  coldcuts: "Cold Cuts",
};

export default function ProductLightbox({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (product) {
      window.addEventListener("keydown", onKey);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--royal-blue-deep)]/80 p-4 backdrop-blur-md md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[92vh] w-full max-w-[920px] overflow-hidden rounded-[24px] border border-[color:var(--royal-blue)]/12 bg-white shadow-[0_30px_70px_-20px_rgba(20,32,64,0.45)] md:grid-cols-[1.1fr_0.9fr]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[color:var(--royal-blue)] shadow-[0_4px_12px_rgba(20,32,64,0.18)] transition-all hover:bg-[color:var(--accent-gold)] hover:text-[color:var(--royal-blue-deep)]"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--off-white-deep)] md:aspect-auto">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
              {product.tag && (
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-[color:var(--accent-gold)] px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.14em] text-[color:var(--royal-blue-deep)] shadow-[0_6px_18px_-6px_rgba(201,169,97,0.55)]">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center gap-4 p-6 md:p-9">
              <span
                className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] ${
                  product.scope === "veg"
                    ? "bg-emerald-500/12 text-emerald-700"
                    : "bg-[color:var(--accent-gold)]/15 text-[color:var(--accent-gold-deep)]"
                }`}
              >
                {product.scope === "veg" ? (
                  <Leaf className="h-3 w-3" strokeWidth={2.4} />
                ) : (
                  <Drumstick className="h-3 w-3" strokeWidth={2.4} />
                )}
                {product.scope === "veg" ? "Vegetarian" : "Non-Vegetarian"}
              </span>

              <h3 className="font-display text-[1.7rem] font-light leading-tight tracking-tight text-[color:var(--royal-blue)] md:text-[2rem]">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 text-[0.84rem] text-[color:var(--text-on-light-muted)]">
                <span className="font-medium text-[color:var(--royal-blue)]">
                  {CATEGORY_LABEL[product.category] ?? product.category}
                </span>
              </div>

              <p className="text-[0.92rem] leading-relaxed text-[color:var(--text-on-light-muted)]">
                Manufactured at commercial scale across India, available for
                export to the UAE, Gulf and global markets. Customisable spec,
                pack size and regional flavour profile.
              </p>

              <a
                href="#contact"
                onClick={onClose}
                className="group btn-gold mt-2 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[0.88rem] font-semibold shadow-[0_14px_36px_-12px_rgba(201,169,97,0.5)]"
              >
                Request sample
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
