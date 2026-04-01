import Link from "next/link";
import { HomeDesktopHeader } from "@/components/sections/HomeDesktopHeader";
import { NonHomeMobileHeader } from "@/components/sections/NonHomeMobileHeader";
import { Footer } from "@/components/sections/Footer";
import {
  CONTACT_CONTENT,
  CONTACT_DETAILS,
  CONTACT_METHODS,
  CONTACT_SOCIALS,
} from "@/components/contact/content";
import { ContactInquiryForm } from "@/components/contact/ContactInquiryForm";
import { interSans } from "@/lib/fonts";

export default function ContactPage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <NonHomeMobileHeader className="lg:hidden" />
      <HomeDesktopHeader />

      <main className={`pt-24 lg:pt-0 ${interSans.className}`}>
        <section className="section-container py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/90">
              {CONTACT_CONTENT.hero.eyebrow}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-megatrox)] text-4xl leading-tight text-white md:text-5xl">
              {CONTACT_CONTENT.hero.title}
            </h1>
            <p className="mt-6 text-base font-light leading-relaxed text-white/80 md:text-lg">
              {CONTACT_CONTENT.hero.body}
            </p>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            {CONTACT_CONTENT.sectionTitles.info}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Email
              </p>
              <Link
                href={`mailto:${CONTACT_DETAILS.email}`}
                className="mt-3 inline-block break-all text-base font-medium text-white transition hover:opacity-80 sm:text-lg"
              >
                {CONTACT_DETAILS.email}
              </Link>
            </article>
            <article className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Phone
              </p>
              <Link
                href="tel:+37444343000"
                className="mt-3 inline-block text-lg font-medium text-white transition hover:opacity-80"
              >
                {CONTACT_DETAILS.phone}
              </Link>
            </article>
            <article className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Working hours
              </p>
              <p className="mt-3 text-lg font-medium text-white">{CONTACT_DETAILS.workingHours}</p>
            </article>
            <article className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Address
              </p>
              <p className="mt-3 break-words text-base font-medium text-white sm:text-lg">
                {CONTACT_DETAILS.address}
              </p>
            </article>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            {CONTACT_CONTENT.sectionTitles.methods}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {CONTACT_METHODS.map((method) => (
              <article
                key={method.title}
                className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5"
              >
                <p className="text-lg font-semibold text-white">{method.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{method.description}</p>
                <Link
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#473dff] px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:w-auto"
                >
                  {method.cta}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <div className="rounded-[24px] border border-white/12 bg-[#181818] p-5 md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-black text-white md:text-3xl">
                {CONTACT_CONTENT.sectionTitles.location}
              </h2>
              <Link
                href={CONTACT_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Open in Google Maps
              </Link>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-white/10">
              <iframe
                title="Neetrino IT Company location map"
                src={CONTACT_DETAILS.mapsEmbedUrl}
                className="h-[340px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            {CONTACT_CONTENT.sectionTitles.socials}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {CONTACT_SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="section-container py-10 md:py-14">
          <div className="rounded-[24px] border border-white/12 bg-[#1a1a1a] p-6 md:p-8">
            <h2 className="text-2xl font-black text-white md:text-3xl">
              {CONTACT_CONTENT.sectionTitles.inquiry}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
              Share your idea, scope, or timeline. We will follow up and help you choose the fastest
              path to launch.
            </p>
            <div className="mt-6">
              <ContactInquiryForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
