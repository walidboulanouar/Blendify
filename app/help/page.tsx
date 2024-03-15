export const metadata = {
  title: "Help - Blendify",
  description: "Page description",
};

import Hero from "@/components/hero-help";
import PageIllustration from "@/components/page-illustration";
import RelatedLinks from "@/components/related-links";
import Content from "./content";

export default function Help() {
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
      <Content />
      <RelatedLinks />
    </>
  );
}
