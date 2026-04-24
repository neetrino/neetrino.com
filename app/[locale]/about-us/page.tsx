import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutUsMobile } from "@/components/about-us/AboutUsMobile";
import { AboutUsFigmaPageContent } from "@/components/about-us/figma/AboutUsFigmaPageContent";
import { getLocaleAlternates } from "@/lib/metadata";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";
import { interSans } from "@/lib/fonts";
import type { AppLocale } from "@/lib/i18n/locales";

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
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`w-full min-w-0 pb-20 pt-24 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <AboutUsMobile />
        <AboutUsFigmaPageContent />
      </main>
    </div>
  );
}
