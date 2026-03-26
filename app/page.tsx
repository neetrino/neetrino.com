import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { DeviceShowcase } from "@/components/sections/DeviceShowcase";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden">
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
  );
}
