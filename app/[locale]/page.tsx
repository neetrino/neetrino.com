import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Projects } from "@/components/sections/Projects";
import { Partners } from "@/components/sections/Partners";
import { CanvasScaler } from "@/components/layout/CanvasScaler";
import {
  HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX,
  HOME_DESKTOP_CANVAS_FOOTER_PULL_UP_CLASSNAME,
} from "@/lib/home-desktop-layout";
import { getLocaleAlternates } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import type { AppLocale } from "@/lib/i18n/locales";

const NeetrinoHome = dynamic(
  () =>
    import("@/components/neetrino-home/NeetrinoHome").then((m) => ({ default: m.NeetrinoHome })),
  {
    loading: () => (
      <>
        {/* 5006px = HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX (Tailwind literal for JIT). */}
        <div className="relative min-h-[min(100vh,5006px)] w-full bg-[#151515]" aria-hidden />
      </>
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

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {/* Mobile layout: section-based, hidden on lg+ */}
      <div className="lg:hidden">
        <main>
          <HeroSection locale={locale} />
          <WhoWeAre />
          <WhatWeDo />
          <Projects />
          <Partners />
        </main>
      </div>

      {/* Desktop: scaled canvas; Partners in normal flow so the strip sits flush above `<Footer>` in layout (no gap scroll). */}
      <div className={cn("hidden lg:block relative", HOME_DESKTOP_CANVAS_FOOTER_PULL_UP_CLASSNAME)}>
        <CanvasScaler canvasHeight={HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX}>
          <NeetrinoHome />
        </CanvasScaler>
      </div>
      <div className="hidden lg:block w-full min-w-0">
        <Partners />
      </div>
    </div>
  );
}
