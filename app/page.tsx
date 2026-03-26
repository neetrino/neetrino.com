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
      <div className="hidden lg:block">
        <CanvasScaler>
          <NeetrinoHome />
        </CanvasScaler>
        {/*
          Partners positioned at canvas y=4822px.
          Canvas height = 5600 * (vw/1440).
          Gap from canvas end = (5600-4822)/1440 * 100vw = 54.03vw.
          Negative margin pulls Partners up to its correct canvas position.
        */}
        <div className="relative z-10 bg-[#151515]" style={{ marginTop: "calc(-43.96vw - 124px)" }}>
          <Partners />
        </div>
      </div>
    </div>
  );
}
