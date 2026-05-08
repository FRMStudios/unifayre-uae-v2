import type { Metadata } from "next";
import VegLandingNav from "@/components/v2/VegLandingNav";
import LandingFooter from "@/components/v2/LandingFooter";
import TrustedByDark from "@/components/v2/TrustedByDark";
import LeadFormDark from "@/components/v2/LeadFormDark";
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
    "Vegetarian frozen food, manufactured at scale for the world's best kitchens. Flatbreads, frozen-to-fry snacks, base gravies and retort rice. Halal-line ready, BRC certified, R&D-backed.",
};

export default function VegetarianLandingPage() {
  return (
    <>
      <ScrollProgress />
      <VegLandingNav />
      <main className="flex-1">
        {/* S1 — HERO (single banner) */}
        <HeroCarousel
          intervalMs={6000}
          slides={[
            {
              image: "/images/veg/categories/flatbreads-banner.png",
              alt: "Malabari Paratha, gravy and rice — Unifayre cinematic banner",
              headline: "Food You Can Trust, Always.",
              subheadline: "India's QSR-grade flatbread specialist.",
              cta: { label: "Explore the Range", href: "#range" },
            },
          ]}
        />

        {/* S2 — HIGHLIGHTS BAND */}
        <section className="border-y border-[color:var(--accent-gold)]/20 bg-[color:var(--off-white)] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1320px] grid-cols-2 gap-10 px-5 md:grid-cols-4 md:gap-14 md:px-10">
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

        {/* S3 — OUR STORY (manufacturing-led, rounded rectangles) */}
        <ImageFeatureSection
          imageA={{
            src: "/images/veg/plant/plant-hero.png",
            alt: "Mohali manufacturing plant exterior",
          }}
          imageB={{
            src: "/images/veg/lifestyle/chef-plating.png",
            alt: "Chef plating from Unifayre's frozen range",
          }}
        />

        {/* S4 — WHERE WE FIT */}
        <LifestyleStrip
          eyebrow="Where We Fit"
          title={
            <>
              Wherever food is{" "}
              <em className="italic">served at scale.</em>
            </>
          }
          subline="The same SKUs, plated across every kitchen format we ship to."
          frames={[
            {
              src: "/images/veg/lifestyle/qsr-plate.png",
              alt: "QSR plate — vegetarian burger build",
              caption: "QSR",
            },
            {
              src: "/images/veg/lifestyle/hotel-buffet.png",
              alt: "Hotel buffet spread",
              caption: "Hotels",
            },
            {
              src: "/images/veg/lifestyle/chef-plating.png",
              alt: "Catering chef plating mid-action",
              caption: "Catering",
            },
            {
              src: "/images/veg/lifestyle/cloud-kitchen.png",
              alt: "Cloud kitchen plating line",
              caption: "Cloud Kitchen",
            },
            {
              src: "/images/veg/lifestyle/sizzle-closeup.png",
              alt: "Inflight tray-style plated meal close-up",
              caption: "Airlines",
            },
          ]}
        />

        {/* S5 — PRODUCT PORTFOLIO (formerly Our Range) */}
        <OurRange id="range" />

        {/* S6 — WHY UNIFAYRE (single section, four non-negotiables embedded) */}
        <WhyUnifayreDynamic id="why" />

        {/* S7 — TRUSTED BY 30+ QSR BRANDS */}
        <TrustedByDark />

        {/* S8 — LEAD FORM */}
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
