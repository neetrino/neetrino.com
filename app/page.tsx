import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { DeviceShowcase } from "@/components/sections/DeviceShowcase";
import { Footer } from "@/components/sections/Footer";
import { NeetrinoHome } from "@/components/NeetrinoHome";
import { CanvasScaler } from "@/components/CanvasScaler";

export default function Home() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden">
      {/* Mobile layout: section-based, hidden on lg+ */}
      <div className="lg:hidden">
        <Navbar />
        <main>
          <HeroSection />
          <WhoWeAre />
          <WhatWeDo />
          <Projects />
          <DeviceShowcase />
          <Partners />
        </main>
        <Footer />
      </div>

      {/* Desktop layout: canvas (full 5600px with Footer v2 inside) + Partners overlay */}
      {/* position:relative here so Partners can be absolute inside without adding page height */}
      <div className="hidden lg:block relative">
        <CanvasScaler>
          <NeetrinoHome />
        </CanvasScaler>
        {/*
          Partners is absolutely positioned so it doesn't contribute to page height.
          bottom = (5600 - 4967) / 1440 * 100vw = 43.96vw (4967 = Footer start in canvas).
          Partners height ~124px fits in the 145px gap before Footer.
        */}
        <div
          className="absolute left-0 right-0 z-10 bg-[#151515]"
          style={{ bottom: "43.96vw" }}
        >
          <Partners />
        </div>
      </div>
    </div>
  );
}
