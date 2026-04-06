import Image from "next/image";
import Link from "next/link";
import { GetQuoteCtaButton } from "@/components/quote/get-quote-cta-button";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { ABOUT_CONTENT, ABOUT_STATS } from "@/components/about-us/content";
import { AboutGradientStat } from "@/components/about-us/AboutGradientStat";
import { AboutReflectedHeading } from "@/components/about-us/AboutReflectedHeading";

const WHY_ICON_SRC = {
  rocket: FIGMA_ASSETS.imgAboutWhyRocket,
  spark: FIGMA_ASSETS.imgAboutWhySpark,
  helmet: FIGMA_ASSETS.imgAboutWhyHelmet,
} as const;

const VALUE_ICON_SRC = {
  v7: FIGMA_ASSETS.imgVector7,
  v8: FIGMA_ASSETS.imgVector8,
  v9: FIGMA_ASSETS.imgVector9,
  v10: FIGMA_ASSETS.imgVector10,
} as const;

export function AboutUsSections() {
  const { differentiator, mission, vision, whyChooseUs, values, geography, stats, cta } =
    ABOUT_CONTENT;

  return (
    <>
      <section className="section-container py-10 md:py-14">
        <h2 className="text-xl font-black text-white md:text-2xl">{differentiator.title}</h2>
        <p className="mt-6 max-w-4xl text-lg font-extralight leading-relaxed text-white/90">
          {differentiator.bodyRich.map((seg, i) =>
            seg.bold ? (
              <span key={`${i}-${seg.text.slice(0, 12)}`} className="font-extrabold">
                {seg.text}
              </span>
            ) : (
              <span key={`${i}-${seg.text.slice(0, 12)}`}>{seg.text}</span>
            ),
          )}
        </p>
      </section>

      <section className="section-container py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <AboutReflectedHeading left="THE " accent="MISSION" />
            <p className="text-base font-extralight leading-relaxed text-white/85">
              {mission.body}
            </p>
          </div>
          <div className="space-y-4">
            <AboutReflectedHeading left="THE " accent="VISION" />
            <p className="text-base font-extralight leading-relaxed text-white/85">{vision.body}</p>
          </div>
        </div>
      </section>

      <section className="section-container py-10 md:py-16">
        <div className="mb-10 flex justify-center lg:justify-start">
          <AboutReflectedHeading left="WHY " accent="CHOOSE" right=" US?" align="left" />
        </div>
        <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#14141a]/90 p-6 backdrop-blur-md md:min-h-[26rem] md:p-10">
          <div className="pointer-events-none absolute inset-0 z-0">
            <Image
              src={FIGMA_ASSETS.imgAboutWhyPanel}
              alt=""
              fill
              className="object-cover opacity-25"
              aria-hidden
            />
          </div>
          <div className="relative z-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.items.map((item, idx) => (
              <div key={`why-${idx}`} className="flex flex-col items-center text-center">
                {item.icon !== "none" ? (
                  <div className="relative mb-4 h-[7.5rem] w-full max-w-[13.5rem]">
                    <Image
                      src={WHY_ICON_SRC[item.icon]}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(min-width: 1280px) 22vw, 200px"
                    />
                  </div>
                ) : (
                  <div className="mb-4 h-[7.5rem] w-full max-w-[13.5rem]" aria-hidden />
                )}
                <div className="font-extrabold leading-snug text-[#f5f5f5] text-[1rem]">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-10 md:py-16">
        <div className="mb-8 flex justify-center text-center lg:mb-10">
          <AboutReflectedHeading
            left="THE "
            accent="VALUES"
            right=" THAT ALWAYS DRIVE US"
            align="center"
          />
        </div>
        <div className="mb-8 w-full">
          <Image
            src={FIGMA_ASSETS.imgAboutValuesBar}
            alt=""
            width={1195}
            height={61}
            className="h-auto w-full max-w-4xl mx-auto"
            aria-hidden
          />
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {values.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="relative h-12 w-12">
                <Image src={VALUE_ICON_SRC[item.icon]} alt="" fill className="object-contain" />
              </div>
              <p className="font-extrabold text-[#f5f5f5] text-[1rem] leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container py-10 md:py-16">
        <div className="mb-8 text-center lg:mb-10">
          <AboutReflectedHeading
            left="WE WORK WITH MORE THAN "
            accent="10 COUNTRIES"
            align="center"
          />
        </div>
        <p className="mb-8 text-center text-base font-light text-white/75">{geography.body}</p>
        <div className="relative mx-auto aspect-[1195/664] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={FIGMA_ASSETS.imgLayer1}
            alt="Global reach"
            fill
            className="object-contain object-center"
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
        </div>
      </section>

      <section className="section-container py-10 md:py-14">
        <h2 className="text-2xl font-black text-white md:text-3xl">{stats.title}</h2>
        <p className="mt-3 text-sm text-white/60">{stats.subtitle}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_STATS.map((s) => (
            <AboutGradientStat key={s.label} value={s.value} label={s.label} tone={s.tone} />
          ))}
        </div>
      </section>

      <section className="section-container py-10 md:pb-16">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#1a1a1a] p-7 md:p-10">
          <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-[#473dff]/30 blur-3xl" />
          <h2 className="relative text-2xl font-black text-white md:text-4xl">{cta.title}</h2>
          <p className="relative mt-4 max-w-3xl text-base font-light leading-relaxed text-white/80">
            {cta.body}
          </p>
          <div className="relative mt-7 flex flex-wrap items-center gap-3">
            <GetQuoteCtaButton className="inline-flex items-center justify-center rounded-full bg-[#473dff] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
              {cta.primaryLabel}
            </GetQuoteCtaButton>
            <Link
              href={cta.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              {cta.secondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
