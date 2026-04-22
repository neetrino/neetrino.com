import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { getServicesCatalog, serviceDetailHref } from "@/components/services/service-pages-data";
import { ServicesTechMarquee } from "@/components/services/ServicesTechMarquee";
import { getLocaleAlternates } from "@/lib/metadata";
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
  const servicesCatalog = getServicesCatalog(locale);

  return (
    <>
      <div
        className={`min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] lg:hidden ${interSans.className}`}
      >
        <main className="section-container pb-16 pt-24">
          <section className="border-b border-white/[0.06] pb-12 pt-6 md:pb-14 md:pt-8">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/90">
              {t("servicesPage.eyebrow")}
            </p>
            <h1 className="mt-3 max-w-[18ch] font-[family-name:var(--font-megatrox)] text-4xl font-normal leading-[0.95] tracking-[-0.04em] text-[#fffcfc] md:text-5xl">
              <span className="text-white">SERV</span>
              <span className="text-[#ff7500]">ICE</span>
              <span className="text-white">S</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              {t("servicesPage.description")}
            </p>
          </section>

          <section className="grid grid-cols-1 gap-5 pt-12 sm:gap-6 md:grid-cols-2 md:pt-14">
            {servicesCatalog.map((item, index) => (
              <article
                key={item.slug}
                className="group relative min-w-0 overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-[#1a1a1a] to-[#121212] p-6 shadow-[inset_0_-1px_0_0_rgba(102,148,255,0.12)] sm:p-7"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_0%,rgba(71,61,255,0.14)_0%,transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="relative">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-xl font-black leading-tight text-white md:text-2xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/75 md:text-[15px]">
                    {item.description}
                  </p>
                  <Link
                    href={serviceDetailHref(item.slug)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#6a92ff] bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#8aa8ff] hover:bg-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]"
                  >
                    {t("cta.continue")}
                    <ArrowRight className="size-4 opacity-80" aria-hidden strokeWidth={2} />
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </main>
        <ServicesTechMarquee compact />
        <Footer />
      </div>

      <ServicesDesktopCanvas locale={locale} />
    </>
  );
}
