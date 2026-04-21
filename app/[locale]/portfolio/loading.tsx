/**
 * Lightweight route transition feedback (Suspense boundary for the portfolio segment).
 */
import { getTranslations } from "next-intl/server";

export default async function PortfolioLoading() {
  const t = await getTranslations();

  return (
    <div className="min-h-dvh w-full bg-[#151515]" aria-busy="true" aria-label={t("loading.page")}>
      <div className="h-0.5 w-full animate-pulse bg-white/15" />
    </div>
  );
}
