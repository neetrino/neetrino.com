import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { interSans } from "@/lib/fonts";
import { getLocaleAlternates } from "@/lib/metadata";
import type { AppLocale } from "@/lib/i18n/locales";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

type TeamPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("teamPage.metaTitle"),
    description: t("teamPage.metaDescription"),
    alternates: getLocaleAlternates(locale, "/team"),
  };
}

export default async function TeamPage() {
  const t = await getTranslations();

  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`mx-auto max-w-3xl px-6 pt-24 pb-16 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <h1 className="text-3xl font-bold text-white md:text-4xl">{t("teamPage.title")}</h1>
        <p className="mt-4 text-lg text-white/70">{t("teamPage.placeholder")}</p>
      </main>
    </div>
  );
}
