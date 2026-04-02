import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { DeviceShowcase } from "@/components/sections/DeviceShowcase";
import { Footer } from "@/components/sections/Footer";
import { CanvasScaler } from "@/components/layout/CanvasScaler";

const NeetrinoHome = dynamic(
  () =>
    import("@/components/neetrino-home/NeetrinoHome").then((m) => ({ default: m.NeetrinoHome })),
  {
    loading: () => (
      <div className="relative min-h-[min(100dvh,4752px)] w-full bg-[#151515]" aria-hidden />
    ),
  },
);

export default function Home() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden">
      {/* Mobile layout: section-based, hidden on lg+ */}
      <div className="lg:hidden">
        <main>
          <HeroSection />
          <WhoWeAre />
          <WhatWeDo />
          <Projects />
          <div className="hidden">
            <DeviceShowcase />
          </div>
          <Partners />
        </main>
        <Footer />
      </div>

      {/* Desktop layout: canvas (full 4752px with Footer v2 inside) + Partners overlay */}
      {/* position:relative here so Partners can be absolute inside without adding page height */}
      <div className="hidden lg:block relative">
        <CanvasScaler canvasHeight={4752}>
          <NeetrinoHome />
        </CanvasScaler>
        {/*
          Partners is absolutely positioned so it doesn't contribute to page height.
          bottom = (4752 - 4162) / 1440 * 100vw = 40.97vw (4162 = Footer start in canvas).
          Partners height ~124px fits in the 145px gap before Footer.
        */}
        <div className="absolute left-0 right-0 z-10" style={{ bottom: "40.97vw" }}>
          <Partners />
        </div>
      </div>
    </div>
  );
}
