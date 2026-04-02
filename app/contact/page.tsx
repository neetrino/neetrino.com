import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { ContactSocialIcon } from "@/components/contact/ContactSocialIcon";
import {
  CONTACT_CONTENT,
  CONTACT_DETAILS,
  CONTACT_SOCIAL_LINKS,
} from "@/components/contact/content";
import { ContactInquiryForm } from "@/components/contact/ContactInquiryForm";
import { interSans } from "@/lib/fonts";

export default function ContactPage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main className={`pt-24 lg:pt-0 ${interSans.className}`}>
        <section className="section-container border-b border-white/[0.06] py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/90">
              {CONTACT_CONTENT.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-megatrox)] text-4xl leading-tight text-white md:text-5xl">
              {CONTACT_CONTENT.hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg">
              {CONTACT_CONTENT.hero.body}
            </p>
          </div>
        </section>

        <section className="section-container py-12 md:py-16">
          <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
            {CONTACT_CONTENT.sectionTitles.reachUs}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="flex min-h-[120px] flex-col justify-between rounded-2xl border border-white/10 bg-[#1a1a1a] p-6">
              <div className="flex items-center gap-3 text-white/50">
                <Mail className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">Email</span>
              </div>
              <Link
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="mt-4 break-all text-lg font-semibold text-white transition hover:opacity-85"
              >
                {CONTACT_DETAILS.email}
              </Link>
            </article>
            <article className="flex min-h-[120px] flex-col justify-between rounded-2xl border border-white/10 bg-[#1a1a1a] p-6">
              <div className="flex items-center gap-3 text-white/50">
                <Phone className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">Phone</span>
              </div>
              <Link
                href={CONTACT_DETAILS.phoneTelHref}
                className="mt-4 text-lg font-semibold text-white transition hover:opacity-85"
              >
                {CONTACT_DETAILS.phoneDisplay}
              </Link>
            </article>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
            {CONTACT_CONTENT.sectionTitles.office}
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="min-w-0 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6">
              <div className="flex items-start gap-3 text-white">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-[#473dff]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-base font-medium leading-relaxed text-white/80">
                  {CONTACT_DETAILS.address}
                </span>
              </div>
            </article>
            <article className="min-w-0 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6">
              <div className="flex items-start gap-3 text-white">
                <Clock
                  className="mt-0.5 size-5 shrink-0 text-[#473dff]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-base font-medium leading-relaxed text-white/80">
                  {CONTACT_DETAILS.workingHours}
                </span>
              </div>
            </article>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#181818] p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
                {CONTACT_CONTENT.sectionTitles.location}
              </h2>
              <Link
                href={CONTACT_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Open in Google Maps
              </Link>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Neetrino IT Company location map"
                src={CONTACT_DETAILS.mapsEmbedUrl}
                className="h-[300px] w-full md:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
            {CONTACT_CONTENT.sectionTitles.followUs}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {CONTACT_SOCIAL_LINKS.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:border-[#473dff]/50 hover:bg-[#473dff]/15"
              >
                <ContactSocialIcon id={social.id} />
              </Link>
            ))}
          </div>
        </section>

        <section className="section-container py-12 md:py-16">
          <div className="rounded-[28px] border border-white/10 bg-[#1a1a1a] p-6 md:p-10">
            <h2 className="text-xl font-black uppercase tracking-[0.08em] text-white/90 md:text-2xl">
              {CONTACT_CONTENT.sectionTitles.inquiry}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
              Share your idea or timeline — we will reply on business days.
            </p>
            <div className="mt-8">
              <ContactInquiryForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
