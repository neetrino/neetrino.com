import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { DeviceShowcase } from "@/components/sections/DeviceShowcase";
import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { getLocaleAlternates } from "@/lib/metadata";
import type { AppLocale } from "@/lib/i18n/locales";

const NeetrinoHome = dynamic(
  () =>
    import("@/components/neetrino-home/NeetrinoHome").then((m) => ({ default: m.NeetrinoHome })),
  {
    loading: () => (
      <div className="relative min-h-[min(100vh,4162px)] w-full bg-[#151515]" aria-hidden />
    ),
  },
);

type HomePageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("meta.siteTitle"),
    description: t("meta.siteDescription"),
    alternates: getLocaleAlternates(locale, "/"),
  };
}

export default function Home() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {/* Mobile layout: section-based, hidden on lg+ */}
      <div className="lg:hidden pb-24">
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
      </div>

      {/* Desktop layout: Figma canvas (1440×4162) + Partners overlay (no footer) */}
      {/* position:relative here so Partners can be absolute inside without adding page height */}
      <div className="hidden lg:block relative">
        <CanvasScaler canvasHeight={4162}>
          <NeetrinoHome />
        </CanvasScaler>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Partners />
        </div>
      </div>
    </div>
  );
}
