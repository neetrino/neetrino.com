import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PortfolioMobile } from "@/components/portfolio/PortfolioMobile";
import { PortfolioDesktopConditional } from "@/components/portfolio/PortfolioDesktopConditional";
import type { AppLocale } from "@/lib/i18n/locales";
import { getLocaleAlternates } from "@/lib/metadata";
import { loadPublicPortfolioCards } from "@/lib/server/portfolio/load-public-portfolio-cards";

type PortfolioPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("portfolioPage.metaTitle"),
    description: t("portfolioPage.metaDescription"),
    alternates: getLocaleAlternates(locale, "/portfolio"),
  };
}

export default async function PortfolioPage() {
  const items = await loadPublicPortfolioCards();

  return (
    <>
      <PortfolioMobile items={items} />
      <PortfolioDesktopConditional items={items} />
    </>
  );
}
