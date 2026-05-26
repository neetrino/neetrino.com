import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageBlockReveal } from "@/components/motion/PageBlockReveal";
import { interSans } from "@/lib/fonts";
import { getLocaleAlternates } from "@/lib/metadata";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import { cn } from "@/lib/utils";
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

export default async function TeamPage({ params }: TeamPageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-transparent">
      <main
        className={cn(
          "mx-auto max-w-3xl px-6 pt-30 pb-16",
          `lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})]`,
          interSans.className,
        )}
      >
        <PageBlockReveal index={0}>
          <header className="mt-9">
            <h1
              className={cn(
                "text-3xl font-normal text-white md:text-4xl",
                pageTitleMegatroxFontClass(locale),
              )}
            >
              {t("teamPage.title")}
            </h1>
            <p className="mt-4 text-lg text-white/70">{t("teamPage.placeholder")}</p>
          </header>
        </PageBlockReveal>
      </main>
    </div>
  );
}
