import type { Metadata } from "next";
import VegLandingNav from "@/components/v2/VegLandingNav";
import LandingFooter from "@/components/v2/LandingFooter";
import TrustedByDark from "@/components/v2/TrustedByDark";
import LeadFormDark from "@/components/v2/LeadFormDark";
import HeroCarousel from "@/components/v2/HeroCarousel";
import ImageFeatureSection from "@/components/v2/ImageFeatureSection";
import OurRange from "@/components/v2/OurRange";
import WhereWeFit from "@/components/v2/WhereWeFit";
import WhyUnifayreDynamic from "@/components/v2/WhyUnifayreDynamic";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "Unifayre Foods | Food Re-imagined",
  description:
    "Food Re-imagined. A new frozen-foods manufacturing facility in Mohali - flatbreads, frozen-to-fry snacks, gravies and retort rice. BRC + FSSC 22000 certified, halal-line. Built for QSRs, hotels, catering, cloud kitchens, airlines, private label and modern trade.",
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <VegLandingNav />
      <main className="flex-1">
        {/* S1 - HERO (Ken-Burns morph + per-slide pillar copy) */}
        <HeroCarousel
          intervalMs={5500}
          cta={{ label: "Explore the Range", href: "#range" }}
          slides={[
            {
              image: "/images/veg/heroes/hero-1.png",
              alt: "Reliability - Unifayre frozen food range",
              eyebrow: "Food Re-imagined.",
              headline: (
                <>
                  Reliability you can{" "}
                  <em className="italic text-[color:var(--accent-gold)]">
                    forecast.
                  </em>
                </>
              ),
              subheadline:
                "Predictable lead times. On-time shipments, every consignment.",
            },
            {
              image: "/images/veg/heroes/hero-2.png",
              alt: "Consistency at scale - Unifayre product lines",
              eyebrow: "Food Re-imagined.",
              headline: (
                <>
                  Consistency,{" "}
                  <em className="italic text-[color:var(--accent-gold)]">
                    at scale.
                  </em>
                </>
              ),
              subheadline:
                "Same spec, every batch. Repeatable down to the gram.",
            },
            {
              image: "/images/veg/heroes/hero-3.png",
              alt: "Customisation - Unifayre R&D-led builds",
              eyebrow: "Food Re-imagined.",
              headline: (
                <>
                  Customisation,{" "}
                  <em className="italic text-[color:var(--accent-gold)]">
                    built-in.
                  </em>
                </>
              ),
              subheadline:
                "R&D-led recipes for your menu, region and palate.",
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
            <CapabilityStat number="30" suffix="" label="Years of legacy" />
            <CapabilityStat
              number="5,000"
              suffix=""
              label="Foodservice Outlets Served"
            />
            <CapabilityStat number="100%" suffix="" label="Halal Line" />
          </div>
        </section>

        {/* S3 - PRODUCT PORTFOLIO (4 banners, single row, modal on click) */}
        <OurRange id="range" />

        {/* S4 - OUR STORY (plant images) */}
        <ImageFeatureSection
          imageA={{
            src: "/images/veg/story/story-1.png",
            alt: "Unifayre Mohali plant",
          }}
          imageB={{
            src: "/images/veg/story/story-2.png",
            alt: "Unifayre production facility",
          }}
        />

        {/* S5 - WHERE WE FIT */}
        <WhereWeFit />

        {/* S6 - WHY UNIFAYRE (rotates plant interior shots) */}
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
