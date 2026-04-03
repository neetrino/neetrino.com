import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { ABOUT_CONTENT, ABOUT_STATS } from "@/components/about-us/content";
import { interSans } from "@/lib/fonts";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

export default function AboutUsPage() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515]">
      <main
        className={`pt-24 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})] ${interSans.className}`}
      >
        <section className="section-container relative overflow-hidden py-16 md:py-20">
          <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-48 w-[90%] max-w-5xl rounded-full bg-[#473dff]/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="min-w-0">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/90">
                {ABOUT_CONTENT.hero.eyebrow}
              </p>
              <h1 className="mt-3 text-3xl font-black italic leading-tight text-white sm:text-4xl md:text-5xl">
                <span>WHO </span>
                <span className="text-[#ff7500]">WE</span>
                <span> ARE</span>
              </h1>
              <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-white/85 sm:text-base md:text-lg">
                {ABOUT_CONTENT.hero.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl min-w-0">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#ff7500]/25 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#473dff]/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1b1b1b]/80 p-4 backdrop-blur-md">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
                  <Image
                    src={FIGMA_ASSETS.img1}
                    alt="Neetrino team visual"
                    fill
                    unoptimized
                    className="object-cover object-center mix-blend-exclusion"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                  />
                </div>
                <p className="mt-4 text-sm font-light leading-relaxed text-white/75">
                  A team focused on product quality, speed, and long-term partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <div className="overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-br from-[#191919] via-[#141414] to-[#1a1421]">
            <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <h2 className="text-2xl font-black text-white md:text-3xl">
                  {ABOUT_CONTENT.differentiator.title}
                </h2>
                <div className="mt-5 space-y-4 text-base font-light leading-relaxed text-white/80">
                  {ABOUT_CONTENT.differentiator.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-3xl font-black text-[#ff7500]">100K+</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70">
                    Design options
                  </p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-3xl font-black text-[#473dff]">10x</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/70">
                    Faster delivery
                  </p>
                </article>
                <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
                  <p className="text-base font-light leading-relaxed text-white/80">
                    Platform-first development gives your business a strong launchpad with speed,
                    quality, and ongoing support built in.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="min-w-0 rounded-[24px] border border-white/12 bg-[#1b1b1b] p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/65">
                Purpose
              </p>
              <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
                {ABOUT_CONTENT.mission.title}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-white/80">
                {ABOUT_CONTENT.mission.body}
              </p>
            </article>
            <article className="min-w-0 rounded-[24px] border border-white/12 bg-[#1b1b1b] p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-white/65">
                Future
              </p>
              <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
                {ABOUT_CONTENT.vision.title}
              </h2>
              <p className="mt-4 text-base font-light leading-relaxed text-white/80">
                {ABOUT_CONTENT.vision.body}
              </p>
            </article>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            {ABOUT_CONTENT.whyChooseUs.title}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ABOUT_CONTENT.whyChooseUs.items.map((item, index) => (
              <article
                key={item}
                className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/85">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            {ABOUT_CONTENT.values.title}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_CONTENT.values.items.map((item) => (
              <article
                key={item}
                className="min-w-0 rounded-2xl border border-white/12 bg-gradient-to-b from-[#1e1e1e] to-[#151515] p-5 text-center"
              >
                <p className="text-lg font-semibold text-white">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <div className="rounded-[24px] border border-white/12 bg-[#181818] p-6 md:p-8">
            <h2 className="text-2xl font-black text-white md:text-3xl">
              {ABOUT_CONTENT.geography.title}
            </h2>
            <p className="mt-4 text-base font-light leading-relaxed text-white/80">
              {ABOUT_CONTENT.geography.body}
            </p>
          </div>
        </section>

        <section className="section-container py-8 md:py-12">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            {ABOUT_CONTENT.stats.title}
          </h2>
          <p className="mt-3 text-sm text-white/60">{ABOUT_CONTENT.stats.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_STATS.map((stat) => (
              <article
                key={stat.label}
                className="min-w-0 rounded-2xl border border-white/12 bg-[#1a1a1a] p-5"
              >
                <p className="text-3xl font-black text-[#ff7500] md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-white/70">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-container py-10 md:py-14">
          <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#1a1a1a] p-7 md:p-10">
            <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-[#473dff]/30 blur-3xl" />
            <h2 className="relative text-2xl font-black text-white md:text-4xl">
              {ABOUT_CONTENT.cta.title}
            </h2>
            <p className="relative mt-4 max-w-3xl text-base font-light leading-relaxed text-white/80">
              {ABOUT_CONTENT.cta.body}
            </p>
            <div className="relative mt-7 flex flex-wrap items-center gap-3">
              <Link
                href={ABOUT_CONTENT.cta.primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-[#473dff] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {ABOUT_CONTENT.cta.primaryLabel}
              </Link>
              <Link
                href={ABOUT_CONTENT.cta.secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                {ABOUT_CONTENT.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
