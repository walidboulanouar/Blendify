export const metadata = {
  title: "Testimonials - Blendify",
  description: "Page description",
};

import Clients from "@/components/clients";
import Cta from "@/components/cta";
import Hero from "@/components/hero-testimonials";
import Carousel from "@/components/testimonials-carousel";
import Circles from "@/components/testimonials-circles";
import Video from "@/components/testimonials-video";

export default function Testimonials() {
  return (
    <>
      <Hero />
      <Clients />
      <Video />
      <Carousel />
      <Circles />
      <Cta />
    </>
  );
}
