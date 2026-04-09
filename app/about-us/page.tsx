import type { Metadata } from "next";
import { AboutUsFigmaPageContent } from "@/components/about-us/figma/AboutUsFigmaPageContent";
import { Footer } from "@/components/sections/Footer";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";
import { interSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "About Us",
  description: "Neetrino IT — digital solutions, mission, values, and global presence.",
};

export default function AboutUsRoutePage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`w-full min-w-0 pt-24 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <AboutUsFigmaPageContent />
      </main>
      <Footer />
    </div>
  );
}
