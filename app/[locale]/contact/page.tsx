import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactSocialIcon } from "@/components/contact/ContactSocialIcon";
import { CONTACT_DETAILS, CONTACT_SOCIAL_LINKS } from "@/components/contact/content";
import { ContactInquiryForm } from "@/components/contact/ContactInquiryForm";
import { PageBlockReveal } from "@/components/motion/PageBlockReveal";
import { interSans } from "@/lib/fonts";
import type { AppLocale } from "@/lib/i18n/locales";
import { getLocaleAlternates } from "@/lib/metadata";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";
import { cn } from "@/lib/utils";

/** Shared shell for the two hero cards (inquiry panel size + chrome). */
const CONTACT_HERO_CARD_CLASSNAME =
  "flex h-full min-h-0 flex-col rounded-[30px] border border-white/15 bg-gradient-to-br from-[#302f55]/65 via-[#1e1d31]/78 to-[#17171b]/92 p-7 shadow-[0_25px_80px_rgba(20,10,70,0.42)] backdrop-blur-xl md:p-10";

type ContactPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations();
  return {
    title: t("contactPage.metaTitle"),
    description: t("contactPage.metaDescription"),
    alternates: getLocaleAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations();

  return (
    <div className="w-full min-w-0 overflow-x-hidden bg-transparent">
      <main
        className={`relative isolate pb-16 pt-24 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px] bg-[radial-gradient(circle_at_18%_14%,rgba(71,61,255,0.52),transparent_42%),radial-gradient(circle_at_80%_2%,rgba(147,77,255,0.35),transparent_38%),radial-gradient(circle_at_86%_62%,rgba(56,135,255,0.2),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent)]" />

        <div className="section-container flex flex-col gap-5 md:gap-6 lg:gap-8">
          <section className="pt-10 pb-6 md:pt-14 md:pb-8">
            <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
              <PageBlockReveal index={0}>
                <article className={CONTACT_HERO_CARD_CLASSNAME}>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                    <Sparkles className="size-3.5" aria-hidden />
                    {t("contactPage.heroEyebrow")}
                  </p>
                  <h1
                    className={cn(
                      "mt-5 text-4xl leading-tight text-white md:text-6xl md:leading-[1.05]",
                      pageTitleMegatroxFontClass(locale),
                    )}
                  >
                    {t("contactPage.heroTitle")}
                  </h1>
                  <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/80 md:text-lg">
                    {t("contactPage.heroBody")}
                  </p>

                  <div className="mt-7 grid gap-3">
                    <Link
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-white transition hover:border-[#8b84ff] hover:bg-[#8b84ff]/15"
                    >
                      <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                        <Mail className="size-4" aria-hidden />
                        {t("contactPage.email")}
                      </span>
                      <span className="text-base font-semibold">{CONTACT_DETAILS.email}</span>
                    </Link>
                    <Link
                      href={CONTACT_DETAILS.phoneTelHref}
                      className="group inline-flex items-center justify-between rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-white transition hover:border-[#8b84ff] hover:bg-[#8b84ff]/15"
                    >
                      <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/70">
                        <Phone className="size-4" aria-hidden />
                        {t("contactPage.phone")}
                      </span>
                      <span className="text-base font-semibold">
                        {CONTACT_DETAILS.phoneDisplay}
                      </span>
                    </Link>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm uppercase tracking-[0.14em] text-white/55">
                      {t("contactPage.followUs")}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {CONTACT_SOCIAL_LINKS.map((social) => (
                        <Link
                          key={social.id}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="inline-flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white transition hover:-translate-y-0.5 hover:border-[#6c63ff] hover:bg-[#473dff]/30"
                        >
                          <ContactSocialIcon id={social.id} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </article>
              </PageBlockReveal>

              <PageBlockReveal index={1}>
                <article className={CONTACT_HERO_CARD_CLASSNAME}>
                  <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
                    {t("contactPage.inquiry")}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/72 md:text-base">
                    {t("contactPage.inquiryDescription")}
                  </p>
                  <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
                    <ContactInquiryForm />
                  </div>
                </article>
              </PageBlockReveal>
            </div>
          </section>

          <PageBlockReveal index={2}>
            <section>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#181818] p-4 md:p-5">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 md:gap-4">
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
                      {t("contactPage.office")}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/75">
                        <MapPin className="size-4 text-[#6e65ff]" aria-hidden />
                        {t("contactPage.address")}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/75">
                        <Clock className="size-4 text-[#6e65ff]" aria-hidden />
                        {t("contactPage.workingHours")}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={CONTACT_DETAILS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    {t("contactPage.openMaps")}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </Link>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/15">
                  <iframe
                    title={t("contactPage.mapTitle")}
                    src={CONTACT_DETAILS.mapsEmbedUrl}
                    className="h-[300px] w-full md:h-[400px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/85">
                    <MapPin className="size-3.5 text-[#7f77ff]" aria-hidden />
                    Neetrino HQ
                  </div>
                </div>
              </div>
            </section>
          </PageBlockReveal>
        </div>
      </main>
    </div>
  );
}
