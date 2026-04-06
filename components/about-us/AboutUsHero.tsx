import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { ABOUT_CONTENT } from "@/components/about-us/content";
import { AboutGradientStat } from "@/components/about-us/AboutGradientStat";

export function AboutUsHero() {
  const { hero, heroStats } = ABOUT_CONTENT;
  return (
    <section className="section-container relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-10">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#473dff]/15 blur-[100px] md:h-[520px] md:w-[520px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-[#ff7500]/10 blur-[90px]" />

      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
        <div className="min-w-0 space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/80">
            {hero.eyebrow}
          </p>
          <h1 className="font-black tracking-[0.06em] text-white text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95]">
            <span className="block">
              <span className="font-normal not-italic">WITH </span>
              <span className="italic">US</span>
            </span>
            <span className="mt-1 block not-italic">EVERY IDEA</span>
            <span className="mt-1 block not-italic">BECOMES</span>
            <span className="mt-1 block italic">POSSIBLE</span>
          </h1>

          <div className="grid gap-6 pt-2 sm:grid-cols-2 sm:gap-8">
            {hero.paragraphs.map((p) => (
              <p
                key={p}
                className="text-base font-extralight leading-relaxed text-white/90 sm:text-[0.9375rem]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[min(100%,520px)]">
          <div className="relative aspect-[749/1000] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d12]">
            <Image
              src={FIGMA_ASSETS.imgAboutHeroRobot}
              alt="Neetrino creative technology"
              fill
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>
      </div>

      <div className="relative mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-6">
        {heroStats.map((s) => (
          <AboutGradientStat key={s.label} value={s.value} label={s.label} tone={s.tone} />
        ))}
      </div>
    </section>
  );
}
