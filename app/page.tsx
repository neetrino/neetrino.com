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
          <Partners />
          <DeviceShowcase />
        </main>
        <Footer />
      </div>

      {/* Desktop layout: original 1440px canvas from commit 37bd480, shown on lg+ */}
      <div className="hidden lg:block">
        <CanvasScaler>
          <NeetrinoHome />
        </CanvasScaler>
      </div>
    </div>
  );
}
