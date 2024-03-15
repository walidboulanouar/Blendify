export const metadata = {
  title: "About - Blendify",
  description: "Page description",
};

import Career from "@/components/career";
import CtaContact from "@/components/cta-contact";
import FeaturesAnimation from "@/components/features-animation";
import FeaturesGallery from "@/components/features-gallery";
import Hero from "@/components/hero-about";
import Team from "@/components/team";
import Timeline from "@/components/timeline";

export default function About() {
  return (
    <>
      <Hero />
      <FeaturesGallery />
      <Timeline />
      <Career />
      <FeaturesAnimation />
      <Team />
      <CtaContact />
    </>
  );
}
