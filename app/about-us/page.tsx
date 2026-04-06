import { Footer } from "@/components/sections/Footer";
import { AboutUsHero } from "@/components/about-us/AboutUsHero";
import { AboutUsSections } from "@/components/about-us/AboutUsSections";
import { roboto } from "@/lib/fonts";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

export default function AboutUsPage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`pt-24 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${roboto.className}`}
      >
        <AboutUsHero />
        <AboutUsSections />
      </main>
      <Footer />
    </div>
  );
}
