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
  HOME_DESKTOP_HERO_TABLET_CANVAS_DESIGN_HEIGHT_PX,
  HOME_TABLET_HYBRID_CANVAS_WRAP_MODIFIER_CLASS,
  HOME_TABLET_HYBRID_HERO_NAV_GAP_OUTER_CLASS,
  HOME_TABLET_HYBRID_HERO_NAV_GAP_PULL_UP_CLASS,
  HOME_TABLET_HYBRID_WHO_WE_ARE_PULL_UP_CLASSNAME,
} from "@/lib/home-desktop-layout";
import { getLocaleAlternates } from "@/lib/metadata";
import { loadPublicPortfolioCards } from "@/lib/server/portfolio/load-public-portfolio-cards";
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

const NeetrinoHomeHeroCanvas = dynamic(
  () =>
    import("@/components/neetrino-home/NeetrinoHomeHeroCanvas").then((m) => ({
      default: m.NeetrinoHomeHeroCanvas,
    })),
  {
    loading: () => (
      <>
        <div className={HOME_TABLET_HYBRID_HERO_NAV_GAP_OUTER_CLASS}>
          <div
            className={cn(
              "relative w-full bg-[#151515]",
              HOME_TABLET_HYBRID_HERO_NAV_GAP_PULL_UP_CLASS,
            )}
            style={{
              minHeight: `min(100vh, ${HOME_DESKTOP_HERO_TABLET_CANVAS_DESIGN_HEIGHT_PX}px)`,
            }}
            aria-hidden
          />
        </div>
      </>
    ),
    ssr: true,
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
  const portfolioItems = await loadPublicPortfolioCards();

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {/* Below lg: one main — mobile hero, optional desktop hero canvas (tablet), then mobile stack. */}
      <div className="lg:hidden">
        <main>
          <div className="neetrino-layout-desktop:hidden">
            <HeroSection locale={locale} />
          </div>
          <div
            className={cn(
              "hidden w-full min-w-0 neetrino-layout-desktop:block",
              HOME_TABLET_HYBRID_HERO_NAV_GAP_OUTER_CLASS,
            )}
          >
            <div className={HOME_TABLET_HYBRID_HERO_NAV_GAP_PULL_UP_CLASS}>
              <CanvasScaler
                canvasHeight={HOME_DESKTOP_HERO_TABLET_CANVAS_DESIGN_HEIGHT_PX}
                wrapClassName={HOME_TABLET_HYBRID_CANVAS_WRAP_MODIFIER_CLASS}
              >
                <NeetrinoHomeHeroCanvas />
              </CanvasScaler>
            </div>
          </div>
          <div className={HOME_TABLET_HYBRID_WHO_WE_ARE_PULL_UP_CLASSNAME}>
            <WhoWeAre />
          </div>
          <WhatWeDo />
          <Projects items={portfolioItems} />
          <Partners />
        </main>
      </div>

      {/* lg+: full desktop canvas; Partners in flow above footer */}
      <div className={cn("relative hidden lg:block", HOME_DESKTOP_CANVAS_FOOTER_PULL_UP_CLASSNAME)}>
        <CanvasScaler canvasHeight={HOME_DESKTOP_CANVAS_DESIGN_HEIGHT_PX}>
          <NeetrinoHome portfolioItems={portfolioItems} />
        </CanvasScaler>
      </div>
      <div className="hidden w-full min-w-0 lg:block">
        <Partners />
      </div>
    </div>
  );
}
