"use client";

/**
 * CategoryDefinitions - glossary-style grid that defines each of the nine
 * product categories and service channels Unifayre supplies. Sits below
 * the Product Portfolio so a reader who isn't deep in foodservice
 * vocabulary understands what RTE Parathas, HORECA, Private Label etc.
 * actually mean.
 */

import { motion } from "framer-motion";
import {
  Sandwich,
  Utensils,
  Layers,
  Flame,
  Wheat,
  Soup,
  Tag,
  Building2,
  Store,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Entry = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  body: string;
};

const ENTRIES: Entry[] = [
  {
    icon: Layers,
    title: "RTE Parathas",
    body: "Ready-to-Eat layered Indian flatbreads, fully cooked. Heat from frozen on a tawa or grill in 60 seconds and serve.",
  },
  {
    icon: Sandwich,
    title: "Tortillas",
    body: "Soft, foldable wraps in refined wheat, whole wheat, beetroot and spinach variants. Multiple diameters for QSR builds.",
  },
  {
    icon: Utensils,
    title: "Roti Canai",
    body: "The flaky, layered Malaysian-style flatbread. Manufactured at commercial volume in India for the first time.",
  },
  {
    icon: Flame,
    title: "Frozen-to-Fry Snacks",
    body: "Individually quick-frozen snacks - samosas, kachoris, kebabs, pakoras, bhajis, falafel. Fry from frozen, crisp on first bite.",
  },
  {
    icon: Wheat,
    title: "Retort Rice",
    body: "Pre-cooked rice in retort-packed pouches. Ambient shelf-stable for months, ready to serve in 60 seconds.",
  },
  {
    icon: Soup,
    title: "Gravies & Pastes",
    body: "Restaurant-grade base gravies and pastes - Makhani, Manchurian, Thai red and green, biryani pastes. Plate as-is or build on.",
  },
  {
    icon: Tag,
    title: "Private Label",
    body: "Your brand on our lines. Custom spec, custom recipe, custom pack and label - manufactured at certified commercial scale.",
  },
  {
    icon: Building2,
    title: "HORECA",
    body: "Hotels, Restaurants and Catering. The full foodservice channel - five-star buffets, banquets, fine dining and contract catering.",
  },
  {
    icon: Store,
    title: "QSRs",
    body: "Quick Service Restaurants. The chains that need consistency, speed and supply that scales with every new store.",
  },
];

export default function CategoryDefinitions({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[color:var(--off-white-deep)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 flex flex-col items-start gap-2 md:mb-14"
        >
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-gold-deep)]">
            What we mean
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-tight tracking-tight text-[color:var(--royal-blue)]">
            The{" "}
            <em className="italic text-[color:var(--accent-gold-deep)]">
              categories
            </em>
            , defined.
          </h2>
          <p className="mt-2 max-w-2xl text-base font-light leading-relaxed text-[color:var(--text-on-light-muted)]">
            A quick reference for what each product line and service channel
            covers - so the rest of the page reads the way it should.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {ENTRIES.map((e, i) => (
            <motion.li
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.04 * i }}
              className="group flex flex-col gap-2 rounded-2xl border border-[color:var(--royal-blue)]/12 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent-gold)]/45 hover:shadow-[0_18px_36px_-18px_rgba(20,32,64,0.18)] md:p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--accent-gold)]/45 bg-[color:var(--accent-gold)]/10">
                <e.icon
                  className="h-5 w-5 text-[color:var(--accent-gold-deep)] transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.7}
                />
              </span>
              <h3 className="mt-2 font-display text-[1.15rem] font-light leading-tight tracking-tight text-[color:var(--royal-blue)] md:text-[1.25rem]">
                {e.title}
              </h3>
              <p className="text-[0.86rem] font-light leading-relaxed text-[color:var(--text-on-light-muted)]">
                {e.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
