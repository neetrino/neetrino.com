/**
 * Lightweight route transition feedback for /contact.
 */
import { getTranslations } from "next-intl/server";

export default async function ContactLoading() {
  const t = await getTranslations();

  return (
    <div
      className="w-full min-h-[100vh] bg-[#151515]"
      aria-busy="true"
      aria-label={t("loading.page")}
    >
      <div className="h-0.5 w-full animate-pulse bg-white/15" />
    </div>
  );
}
