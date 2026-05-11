import type { Metadata } from "next";
import VegLandingNav from "@/components/v2/VegLandingNav";
import LandingFooter from "@/components/v2/LandingFooter";
import TrustedByDark from "@/components/v2/TrustedByDark";
import LeadFormDark from "@/components/v2/LeadFormDark";
import HeroCarousel from "@/components/v2/HeroCarousel";
import ImageFeatureSection from "@/components/v2/ImageFeatureSection";
import OurRange from "@/components/v2/OurRange";
import CategoryDefinitions from "@/components/v2/CategoryDefinitions";
import WhereWeFit from "@/components/v2/WhereWeFit";
import WhyUnifayreDynamic from "@/components/v2/WhyUnifayreDynamic";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Unifayre Foods | Frozen Food, Manufactured at Scale",
  description:
    "Vegetarian frozen food manufactured at scale by Chatha Foods, Mohali. Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Halal-line ready, BRC + FSSC 22000 certified, R&D-backed. Built for QSR, hotels, catering, cloud kitchens, airlines.",
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <VegLandingNav />
      <main className="flex-1">
        {/* S1 - HERO (single banner) */}
        <HeroCarousel
          intervalMs={6000}
          slides={[
            {
              image: "/images/veg/categories/flatbreads-banner.png",
              alt: "Malabari Paratha, gravy and rice - Unifayre cinematic banner",
              headline: "Food You Can Trust, Always.",
              subheadline: "India's QSR-grade flatbread specialist.",
              cta: { label: "Explore the Range", href: "#range" },
            },
          ]}
        />

        {/* S2 - HIGHLIGHTS BAND (compact) */}
        <section className="border-y border-[color:var(--accent-gold)]/20 bg-[color:var(--off-white)] py-10 md:py-12">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:gap-10 md:px-10">
            <CapabilityStat
              number="100"
              suffix=" MT"
              label="Vegetarian Plant Capacity"
            />
            <CapabilityStat number="194+" suffix="" label="SKUs" />
            <CapabilityStat
              number="5,000"
              suffix=""
              label="Foodservice Outlets Served"
            />
            <CapabilityStat number="100%" suffix="" label="Halal Line" />
          </div>
        </section>

        {/* S3 - PRODUCT PORTFOLIO (full-bleed 2x2 banner grid) */}
        <OurRange id="range" />

        {/* S3b - CATEGORIES DEFINED (glossary block) */}
        <CategoryDefinitions />

        {/* S4 - OUR STORY (new plant in Mohali) */}
        <ImageFeatureSection
          imageA={{
            src: "/plant/plant.png",
            alt: "Unifayre's new Mohali frozen-foods plant",
          }}
          imageB={{
            src: "/plant/hygenic.png",
            alt: "Hygienic production line interior",
          }}
        />

        {/* S5 - WHERE WE FIT */}
        <WhereWeFit />

        {/* S6 - WHY UNIFAYRE (single section, four pillars embedded) */}
        <WhyUnifayreDynamic id="why" />

        {/* S7 - TRUSTED BY 30+ QSR BRANDS */}
        <TrustedByDark />

        {/* S8 - LEAD FORM */}
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
    <div className="flex flex-col gap-1.5">
      <div className="h-px w-8 bg-[color:var(--accent-gold-deep)]" />
      <span className="whitespace-nowrap font-display text-3xl md:text-4xl lg:text-[2.6rem] font-light leading-none tracking-tight text-[color:var(--royal-blue)]">
        {number}
        <span className="text-[color:var(--accent-gold-deep)]">{suffix}</span>
      </span>
      <span className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--text-on-light-muted)]">
        {label}
      </span>
    </div>
  );
}
