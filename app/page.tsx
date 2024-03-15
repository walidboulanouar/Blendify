export const metadata = {
  title: "Home - Blendify",
  description: "Page description",
};

import Carousel from "@/components/carousel";
import Cta from "@/components/cta";
import FeaturesBlocks from "@/components/features-blocks";
import Hero from "@/components/hero-home";
import PageIllustration from "@/components/page-illustration";
import PricingTables from "@/components/pricing-tables";
import Process from "@/components/process";
import Stats from "@/components/stats";
import Tabs from "@/components/tabs";
import TestimonialsBlocks from "@/components/testimonials-blocks";

export default function Home() {
  return (
    <>
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>
      <Hero />
      <Stats />
      <Carousel />
      <Tabs />
      <Process />
      <PricingTables />
      <TestimonialsBlocks />
      <FeaturesBlocks />
      <Cta />
    </>
  );
}
