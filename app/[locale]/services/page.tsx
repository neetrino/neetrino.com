import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ServicesMobileCatalogCards } from "@/components/services/ServicesMobileCatalogCards";
import { ServicesMobilePageBackdrop } from "@/components/services/ServicesMobilePageBackdrop";
import { cn } from "@/lib/utils";
import { ServicesHeroTitle } from "@/components/services/ServicesHeroTitle";
import { ServicesTechMarquee } from "@/components/services/ServicesTechMarquee";
import { getLocaleAlternates } from "@/lib/metadata";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import type { AppLocale } from "@/lib/i18n/locales";
import { SERVICES_DESKTOP_CANVAS_MIN_H_CLASS } from "@/lib/canvas-route-placeholders";
import { interSans } from "@/lib/fonts";

const ServicesDesktopCanvas = dynamic(
  () =>
    import("@/components/services/ServicesDesktopCanvas").then((m) => ({
      default: m.ServicesDesktopCanvas,
    })),
  {
    loading: () => (
      <div
        className={`pointer-events-none hidden w-full bg-[#151515] lg:block ${SERVICES_DESKTOP_CANVAS_MIN_H_CLASS}`}
        aria-hidden
      />
    ),
    ssr: true,
  },
);

type ServicesPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("servicesPage.metaTitle"),
    description: t("servicesPage.metaDescription"),
    alternates: getLocaleAlternates(locale, "/services"),
  };
}

export default async function Services({ params }: ServicesPageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <>
      <div
        className={`relative isolate w-full min-w-0 overflow-x-hidden bg-[#151515] pb-10 lg:hidden ${interSans.className}`}
      >
        <ServicesMobilePageBackdrop />
        <main className="section-container relative z-0 pb-16 pt-24">
          <section className="border-b border-white/[0.06] pb-12 pt-6 md:pb-14 md:pt-8">
            <ServicesHeroTitle
              as="h1"
              before={t("servicesPage.heroTitleBefore")}
              accent={t("servicesPage.heroTitleAccent")}
              after={t("servicesPage.heroTitleAfter")}
              className={cn(
                "max-w-[18ch] text-4xl font-normal leading-[0.95] tracking-[-0.04em] text-[#fffcfc] md:text-5xl",
                pageTitleMegatroxFontClass(locale),
              )}
              neutralClassName="text-white"
            />
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              {t("servicesPage.description")}
            </p>
          </section>

          <ServicesMobileCatalogCards locale={locale} />
        </main>
        <ServicesTechMarquee compact className="relative z-0 -mt-4" />
      </div>

      <ServicesDesktopCanvas locale={locale} />
    </>
  );
}
