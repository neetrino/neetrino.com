import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutUsMobile } from "@/components/about-us/AboutUsMobile";
import { AboutUsFigmaCanvasInner } from "@/components/about-us/figma/AboutUsFigmaCanvasInner";
import { AboutUsFigmaPageContent } from "@/components/about-us/figma/AboutUsFigmaPageContent";
import { CanvasScaler } from "@/components/layout/CanvasScaler";
import { getLocaleAlternates } from "@/lib/metadata";
import { interSans } from "@/lib/fonts";
import type { AppLocale } from "@/lib/i18n/locales";
import { ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX } from "@/lib/about-us-figma-layout.constants";
import {
  HOME_TABLET_HYBRID_CANVAS_WRAP_MODIFIER_CLASS,
  HOME_TABLET_HYBRID_HERO_NAV_GAP_OUTER_CLASS,
  HOME_TABLET_HYBRID_HERO_NAV_GAP_PULL_UP_CLASS,
} from "@/lib/home-desktop-layout";
import { cn } from "@/lib/utils";

type AboutUsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: AboutUsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("aboutPage.metaTitle"),
    description: t("aboutPage.metaDescription"),
    alternates: getLocaleAlternates(locale, "/about-us"),
  };
}

export default function AboutUsRoutePage() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-transparent">
      <main className={`w-full min-w-0 pb-0 md:pb-20 ${interSans.className}`}>
        <div className="neetrino-layout-desktop:hidden">
          <AboutUsMobile />
        </div>
        <div
          className={cn(
            "hidden w-full min-w-0 neetrino-layout-desktop:block lg:hidden",
            HOME_TABLET_HYBRID_HERO_NAV_GAP_OUTER_CLASS,
          )}
        >
          <div className={HOME_TABLET_HYBRID_HERO_NAV_GAP_PULL_UP_CLASS}>
            <CanvasScaler
              canvasHeight={ABOUT_FIGMA_ROOT_MIN_HEIGHT_PX}
              wrapClassName={HOME_TABLET_HYBRID_CANVAS_WRAP_MODIFIER_CLASS}
            >
              <AboutUsFigmaCanvasInner />
            </CanvasScaler>
          </div>
        </div>
        <AboutUsFigmaPageContent />
      </main>
    </div>
  );
}
