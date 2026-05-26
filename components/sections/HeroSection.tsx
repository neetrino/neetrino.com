"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HeroGetQuoteCta } from "@/components/sections/HeroGetQuoteCta";
import { HeroHandAnimationVideo } from "@/components/sections/HeroHandAnimationVideo";
import { HeroStatHandAtmosphereLayer } from "@/components/sections/HeroStatHandAtmosphereLayer";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY, HERO_IMAGE_QUALITY } from "@/lib/image-defaults";
import type { AppLocale } from "@/lib/i18n/locales";
import { interSans } from "@/lib/fonts";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import {
  getMobileHomeHeroHandSlotRightCss,
  MOBILE_HERO_STAT_WIDE,
  MOBILE_HERO_STAT_WIDE_HAND_SLOT_LAYOUT_CLASS,
  MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_LEFT_PX,
  MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_UP_PX,
  MOBILE_HERO_STAT_WIDE_VALUE_NUMERAL_CLASS,
  MOBILE_HERO_STATS_TOP,
} from "@/components/sections/mobile-home-hero.constants";
import { HERO_CONTACT_FIGMA_241_838_PRIMARY_PILL_CLASSNAME } from "@/lib/hero-contact-figma-pill.constants";
import {
  HOME_MOBILE_HERO_SURFACE_DUO_BODY_CLASS,
  HOME_MOBILE_HERO_SURFACE_DUO_TITLE_CLASS,
} from "@/lib/home-mobile-hero-surface-duo-layout.constants";
import { cn } from "@/lib/utils";

function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <Image
          src={FIGMA_ASSETS.imgPhilippHubertDVVjhUcdb30Unsplash1}
          alt=""
          fill
          className="object-cover"
          style={{ transform: "scaleY(-1)" }}
          sizes="100vw"
          quality={HERO_IMAGE_QUALITY}
          loading="eager"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[8] mix-blend-lighten opacity-60">
        <HeroHandAnimationVideo className="absolute inset-0 size-full object-cover" />
      </div>
    </>
  );
}

/**
 * Figma 241:827–828 — absolute title + robot (fixed px match 393px frame; no vh min-height).
 */
function HeroTitleAndRobot({ locale }: { locale: AppLocale }) {
  return (
    <>
      {/* Min left 24px — see MOBILE_HERO_TITLE_MIN_INSET_PX; keeps megatrox title off the edge on narrow viewports. */}
      <h1
        className={cn(
          "absolute left-[max(24px,calc(50%-191px))] top-[66px] z-30 max-w-[260px] text-[91px] font-normal leading-[78px] tracking-[-0.04em] text-[#fffcfc]",
          pageTitleMegatroxFontClass(locale),
          HOME_MOBILE_HERO_SURFACE_DUO_TITLE_CLASS,
        )}
      >
        <span className="block">NEET</span>
        <span className="block">RIN</span>
        <span className="block">O</span>
      </h1>

      {/* Full-bleed clip at viewport width; inner column preserves Figma left/% math vs 393px frame. */}
      <div
        className="pointer-events-none absolute left-1/2 top-[61px] z-[1] h-[759px] w-screen max-w-[100vw] -translate-x-1/2 overflow-x-clip"
        aria-hidden
      >
        <div className="relative mx-auto h-full w-full max-w-[393px]">
          <div className="pointer-events-none absolute left-[calc(50%+207px)] top-0 h-full w-[576px] max-w-[min(576px,148vw)] -translate-x-1/2 overflow-hidden">
            <div className="relative h-full w-full">
              {/* Figma 241:828 — crop inside 576×759 */}
              <Image
                src={FIGMA_ASSETS.img30}
                alt=""
                width={836}
                height={1491}
                priority
                quality={HERO_IMAGE_QUALITY}
                className="absolute left-[-22.58%] top-[-60.36%] h-[196.49%] w-[145.15%] max-w-none object-cover"
                sizes="576px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/** Figma 241:840 — vertical center at Y=549 (frame); inner top = 461px with -translate-y-1/2. */
function HeroBodyCopy() {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "absolute left-6 top-[461px] z-30 flex h-[200px] w-[227px] -translate-y-1/2 flex-col justify-center text-left text-base font-extralight leading-[23px] text-white",
        HOME_MOBILE_HERO_SURFACE_DUO_BODY_CLASS,
      )}
    >
      <p>{t("home.hero.body.line1")}</p>
      <p className="font-black">{t("home.hero.body.line2")}</p>
      <p className="mb-0">
        <span className="font-black">{t("home.hero.body.line3Strong")}</span>
        <span> </span>
      </p>
      <p>{t("home.hero.body.line4")}</p>
      <p>{t("home.hero.body.line5")}</p>
      <p>{t("home.hero.body.line6")}</p>
      <p>{t("home.hero.body.line7")}</p>
      <p>{t("home.hero.body.line8")}</p>
    </div>
  );
}

const HERO_CONTACT_CTA_LAYOUT_CLASS =
  "absolute left-1/2 top-[761px] z-[25] w-[min(393px,calc(100%-48px))] -translate-x-1/2";

function HeroCtas() {
  const t = useTranslations();

  return (
    <>
      <HeroGetQuoteCta />
      <Link
        href="/contact"
        className={cn(
          HERO_CONTACT_CTA_LAYOUT_CLASS,
          HERO_CONTACT_FIGMA_241_838_PRIMARY_PILL_CLASSNAME,
        )}
      >
        {t("cta.contact")}
      </Link>
    </>
  );
}

function HeroStatsTop() {
  const t = useTranslations();

  return (
    <div className="relative z-40 mt-0 grid grid-cols-2 gap-3 px-6">
      {MOBILE_HERO_STATS_TOP.map((item) => (
        <div
          key={item.value}
          className={`rounded-[39px] px-5 pb-6 pt-7 text-left ${item.bg} ${item.text}`}
        >
          <p className="text-[56px] font-black leading-9">{item.value}</p>
          <div className="mt-2 text-base font-extralight leading-[18px]">
            {item.labelLineKeys.map((lineKey: string) => (
              <p key={lineKey}>{t(lineKey)}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Stat block (8+ / 97+ → 450+) — same blue + cell SVG as desktop hero lower band (`NeetrinoHomeSegment1`, Figma `10:426`).
 * Full-bleed strip at `z-0`. Wrapper `z-[18]` clears the lower frosted panel (`z-[16]`). Top pair `z-40` above
 * `HeroStatWide` (`z-10`). `241:824` glow is `HeroStatHandAtmosphereLayer` at section `z-0` under backgrounds.
 */
function HeroStatsRegionWithGrid() {
  return (
    <div className="relative z-[18] w-full">
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 w-screen max-w-[100vw] -translate-x-1/2"
        aria-hidden
      >
        <div className="relative h-full w-full min-h-[1px]">
          <div className="absolute inset-0 -scale-y-100 rotate-180">
            <Image
              alt=""
              src={FIGMA_ASSETS.imgRectangle17399}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={DEFAULT_IMAGE_QUALITY}
              loading="eager"
            />
          </div>
        </div>
      </div>
      <HeroStatsTop />
      <HeroStatWide />
    </div>
  );
}

function HeroStatWide() {
  const t = useTranslations();
  const s = MOBILE_HERO_STAT_WIDE;

  return (
    <div className="relative z-10 mt-[34px] min-h-[167px] w-full min-w-0 px-6">
      <div
        className={`relative w-full overflow-visible rounded-[39px] px-8 pb-8 pt-8 text-left ${s.bg}`}
      >
        <div
          className="relative z-20 max-w-[56%]"
          style={{
            transform: `translate(calc(-1 * ${MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_LEFT_PX}px), calc(-1 * ${MOBILE_HERO_STAT_WIDE_TEXT_NUDGE_UP_PX}px))`,
          }}
        >
          <p className={cn(MOBILE_HERO_STAT_WIDE_VALUE_NUMERAL_CLASS, s.text)}>{s.value}</p>
          <p className={`mt-1 text-base font-extralight ${s.text}`}>{t(s.labelKey)}</p>
        </div>
        <div
          className={cn(MOBILE_HERO_STAT_WIDE_HAND_SLOT_LAYOUT_CLASS, "z-[1]")}
          style={{ right: getMobileHomeHeroHandSlotRightCss() }}
          aria-hidden
        >
          <div className="relative size-full overflow-hidden">
            <div className="absolute inset-0 -scale-y-100 rotate-180">
              <Image
                src={FIGMA_ASSETS.img28A}
                alt=""
                fill
                className="object-cover object-right"
                sizes="(max-width: 768px) 271px, 271px"
                quality={DEFAULT_IMAGE_QUALITY}
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile home hero — Figma 241:821 absolute layout (Y / padding vs frame in mobile-home-hero.constants).
 * `min-h-[853px]` positions flow stats at frame Y=941 (88 + 853).
 */
/** Blur panel: top edge aligned with first CTA (pt-[88px] + top-[693px]) — no empty frosted strip above buttons. */
const HERO_LOWER_BLUR_TOP = "top-[calc(88px+660px)]";
const HERO_LOWER_BLUR_RADIUS = "rounded-[32px]";

export function HeroSection({ locale }: { locale: AppLocale }) {
  return (
    <section
      className={`relative isolate min-w-0 overflow-x-clip touch-pan-y [overscroll-behavior-x:contain] bg-[#151515] pb-10 ${interSans.className}`}
    >
      <HeroStatHandAtmosphereLayer />
      <HeroBackground />
      {/* Full viewport width: absolutes are laid out from the 393px column but overflow must clip at the screen edge, not the column edge. */}
      <div className="relative z-20 w-full min-w-0 overflow-x-clip">
        <div className="relative mx-auto w-full max-w-[393px] pt-[88px] text-left">
          <div
            className={`pointer-events-none absolute inset-x-0 ${HERO_LOWER_BLUR_TOP} bottom-0 z-[16] ${HERO_LOWER_BLUR_RADIUS} bg-gradient-to-b from-[#151515]/25 to-[#151515]/80`}
            aria-hidden
          />
          <div className="relative min-h-[853px] w-full min-w-0">
            <HeroTitleAndRobot locale={locale} />
            <HeroBodyCopy />
            <HeroCtas />
          </div>
          <HeroStatsRegionWithGrid />
        </div>
      </div>
    </section>
  );
}
