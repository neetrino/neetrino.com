import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutUsMobile } from "@/components/about-us/AboutUsMobile";
import { AboutUsFigmaPageContent } from "@/components/about-us/figma/AboutUsFigmaPageContent";
import { getLocaleAlternates } from "@/lib/metadata";
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
    <div className="w-full min-w-0 overflow-x-hidden bg-transparent">
      <main
        className={`w-full min-w-0 pb-0 pt-24 max-lg:about-mobile-about-page-atmosphere lg:pb-20 lg:pt-0 ${interSans.className}`}
      >
        <AboutUsMobile />
        <AboutUsFigmaPageContent />
      </main>
    </div>
  );
}
