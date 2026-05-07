import type { Metadata } from "next";
import VegLandingNav from "@/components/v2/VegLandingNav";
import LandingFooter from "@/components/v2/LandingFooter";
import PillarsDark from "@/components/v2/PillarsDark";
import TrustedByDark from "@/components/v2/TrustedByDark";
import LeadFormDark from "@/components/v2/LeadFormDark";
import CategoryCarousel from "@/components/v2/CategoryCarousel";
import HeroCarousel from "@/components/v2/HeroCarousel";
import ImageFeatureSection from "@/components/v2/ImageFeatureSection";
import OurRange from "@/components/v2/OurRange";
import WhyUnifayreDynamic from "@/components/v2/WhyUnifayreDynamic";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LifestyleStrip from "@/components/ui/LifestyleStrip";

export const metadata: Metadata = {
  title: "Unifayre Foods | Vegetarian Range for the UAE & Gulf",
  description:
    "Vegetarian frozen food, manufactured at scale for the Gulf's best kitchens. Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Halal-line ready, BRC certified, R&D-backed.",
};

export default function VegetarianLandingPage() {
  return (
    <>
      <ScrollProgress />
      <VegLandingNav />
      <main className="flex-1">
        {/* S1 — HERO IMAGE CAROUSEL (5 slides, royal blue overlay) */}
        <HeroCarousel
          intervalMs={6000}
          slides={[
            {
              image: "/images/veg/heroes/home-hero.png",
              alt: "Unifayre vegetarian range — chef's pass",
              headline: "Built to Deliver, Always.",
              subheadline: "From our kitchens to yours.",
              cta: { label: "Explore the Range", href: "#products" },
            },
            {
              image: "/images/veg/categories/flatbreads-banner.png",
              alt: "Malabari Paratha layers cinematic banner",
              headline: "Food you can trust, always.",
              subheadline: "India's QSR-grade flatbread specialist.",
              cta: { label: "See Flatbreads", href: "#products" },
            },
            {
              image: "/images/veg/categories/snacks-banner.png",
              alt: "Falafel mid-fry frozen-to-fry snacks banner",
              headline: "Frozen-to-Fry, Ready Always.",
              subheadline: "Crisp on first bite.",
              cta: { label: "See Snacks", href: "#products" },
            },
            {
              image: "/images/veg/categories/gravies-banner.png",
              alt: "Makhani gravy in copper pot banner",
              headline: "Restaurant Flavour. Engineered.",
              subheadline: "Built for kitchens that scale.",
              cta: { label: "See Gravies", href: "#products" },
            },
            {
              image: "/images/veg/categories/rice-banner.png",
              alt: "Biryani in clay handi banner",
              headline: "Shelf-Stable. Restaurant-Grade.",
              subheadline: "Months on shelf. Minutes to plate.",
              cta: { label: "See Rice", href: "#products" },
            },
          ]}
        />

        {/* S2 — HIGHLIGHTS BAND (off-white, royal blue text, gold accents) */}
        <section className="border-y border-[color:var(--accent-gold)]/20 bg-[color:var(--off-white)] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-10 px-5 md:grid-cols-4 md:gap-14 md:px-10">
            <CapabilityStat number="18,000" suffix=" MT" label="Veg Capacity" />
            <CapabilityStat number="194+" suffix="" label="Active SKUs" />
            <CapabilityStat number="5,000+" suffix="" label="Outlets Served" />
            <CapabilityStat number="100%" suffix="" label="Halal-line ready" />
          </div>
        </section>

        {/* S3 — CATEGORY CAROUSEL (royal blue, no structural change) */}
        <CategoryCarousel
          anchorId="products"
          autoplayMs={6000}
          slides={[
            {
              number: "01",
              title: "Flatbreads & Tortillas",
              shortLabel: "Flatbreads",
              description:
                "Malabar Paratha, Roti Canai, stuffed parathas and 4-grain tortillas. The flatbread engine for QSR wraps, breakfast platters, curry bases and dessert formats.",
              capacity: "15,500+ pcs / hr",
              bannerSrc: "/images/veg/categories/flatbreads-banner.png",
              bannerAlt: "Malabari Paratha layers cinematic banner",
              imageObjectPosition: "right center",
            },
            {
              number: "02",
              title: "Frozen-to-Fry Snacks",
              shortLabel: "Snacks",
              description:
                "Samosas, kebabs, tikkis, kachoris, bhaji, pakoras and falafel. Frozen at peak so every fry comes out crisp, golden and consistent at scale.",
              capacity: "1 lakh pcs / day",
              bannerSrc: "/images/veg/categories/snacks-banner.png",
              bannerAlt: "Falafel mid-fry frozen-to-fry snacks banner",
              imageObjectPosition: "right center",
            },
            {
              number: "03",
              title: "Base Gravies & Pastes",
              shortLabel: "Gravies",
              description:
                "Makhani, Manchurian, Thai red and green curry, biryani pastes and base sauces. The backbone of any restaurant menu, ready to plate or build on.",
              capacity: "1,000 kg / hr",
              bannerSrc: "/images/veg/categories/gravies-banner.png",
              bannerAlt: "Makhani gravy in copper pot banner",
              imageObjectPosition: "right center",
            },
            {
              number: "04",
              title: "Retort Rice",
              shortLabel: "Rice",
              description:
                "Eight aromatic rice varieties from Basmati and Jeera to Saffron and Cilantro Lime. Shelf-stable at ambient temperature, ready in minutes.",
              capacity: "Ambient shelf stable",
              bannerSrc: "/images/veg/categories/rice-banner.png",
              bannerAlt: "Biryani in clay handi banner",
              imageObjectPosition: "right center",
            },
          ]}
        />

        {/* S4 — IMAGE FEATURE SECTION (off-white, rounded rectangles, NOT circles) */}
        <ImageFeatureSection
          imageA={{
            src: "/images/veg/lifestyle/hotel-buffet.png",
            alt: "Five-star hotel buffet line plated with Unifayre flatbreads and gravies",
          }}
          imageB={{
            src: "/images/veg/plant/plant-hero.png",
            alt: "Mohali manufacturing plant exterior at golden hour",
          }}
        />

        {/* S5 — WHERE UNIFAYRE LANDS (royal blue, no structural change) */}
        <LifestyleStrip
          eyebrow="Where Unifayre lands"
          title={
            <>
              From QSR pass to{" "}
              <em className="italic">five-star buffet line.</em>
            </>
          }
          subline="The same SKU, plated across every Gulf restaurant context."
          frames={[
            {
              src: "/images/veg/lifestyle/qsr-plate.png",
              alt: "QSR menu — vegetarian burger build",
              caption: "QSR Menu",
            },
            {
              src: "/images/veg/lifestyle/cloud-kitchen.png",
              alt: "Cloud kitchen plating",
              caption: "Cloud Kitchen",
            },
            {
              src: "/images/veg/lifestyle/hotel-buffet.png",
              alt: "Hotel buffet spread",
              caption: "Hotel Buffet",
            },
            {
              src: "/images/veg/lifestyle/chef-plating.png",
              alt: "Chef plating mid-action, fine-dining",
              caption: "Fine-Dining Plating",
            },
            {
              src: "/images/veg/lifestyle/sizzle-closeup.png",
              alt: "Sizzle close-up — vegetarian snack on hot iron",
              caption: "Sensory Sizzle",
            },
          ]}
        />

        {/* S6 — OUR RANGE (off-white, editorial menu layout, rounded-square plates) */}
        <OurRange id="range" />

        {/* S7 — BUILT TO DELIVER, ALWAYS (royal blue, no structural change) */}
        <WhyUnifayreDynamic id="why" />

        {/* S7 — FOUR NON-NEGOTIABLES (off-white) */}
        <PillarsDark id="pillars" />

        {/* S8 — TRUSTED BY 30+ QSR BRANDS (off-white, greyscale logos) */}
        <TrustedByDark />

        {/* S9 — LEAD FORM (pure white) */}
        <LeadFormDark id="contact" />
      </main>
      <LandingFooter />
      <WhatsAppFloat />
    </>
  );
}

function CapabilityStat({
  number,
  suffix,
  label,
}: {
  number: string;
  suffix: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-px w-10 bg-[color:var(--accent-gold-deep)]" />
      <span className="whitespace-nowrap font-display text-5xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight text-[color:var(--royal-blue)]">
        {number}
        <span className="text-[color:var(--accent-gold-deep)]">{suffix}</span>
      </span>
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-on-light-muted)]">
        {label}
      </span>
    </div>
  );
}
