"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { AppLocale } from "@/lib/i18n/locales";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import {
  ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS,
  ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS,
  ABOUT_VALUES_HY_VALUE1_HEART_LINE_SHIFT_LEFT_CLASS,
  ABOUT_VALUES_HY_VALUE2_LINE_SHIFT_RIGHT_CLASS,
  ABOUT_VALUES_HY_VALUE3_LINE_SHIFT_LEFT_CLASS,
  ABOUT_VALUES_HY_VALUE4_LINE_SHIFT_LEFT_CLASS,
} from "@/lib/about-us-figma-layout.constants";
import { cn } from "@/lib/utils";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  ABOUT_DESIGN_OPTIONS_FEATURE_COPY_SHIFT_X_HY_CLASS,
  ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS_DEFAULT,
  ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS_HY,
  ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS_DEFAULT,
  ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS_HY,
  ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES_DEFAULT,
  ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES_HY,
  ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS_DEFAULT,
  ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS_HY,
} from "@/lib/about-us-why-choose-feature-icons.constants";
import {
  img02A0Ab86C3Fe4B8381Ab86B982Bb800C1,
  imgAboutPaletteDesignOptions,
  imgChatGptImageApr32026At011015Pm1,
  imgChatGptImageMar272026At064658Pm1,
  imgLayer1,
} from "@/lib/about-us-figma-asset-urls";
import { MeetOurTeamHeading } from "@/components/about-us/MeetOurTeamHeading";

const FEATURE_KEYS = [
  ["feature1Line1", "feature1Line2"],
  ["feature2Line1", "feature2Line2"],
  ["feature3Line1", "feature3Line2"],
  ["feature4Line1", "feature4Line2"],
] as const;

const VALUE_KEYS = ["value1", "value2", "value3", "value4"] as const;

/**
 * Mobile/tablet (<lg) About Us layout. Mirrors the same content/order/CTA copy as the
 * Figma-pixel desktop blocks (`AboutUsFigmaBlock1a..3`) but renders it in normal flow
 * with responsive Tailwind utilities. Desktop layout is untouched (kept in `figma/`).
 */
export function AboutUsMobile() {
  const t = useTranslations("aboutPage");

  const heroParagraphs = [t("storyShort"), t("storySpecialization")] as const;

  const heroStats: ReadonlyArray<StatItem> = [
    { value: "450+", label: t("statsHero.projectsDelivered"), gradient: GRADIENT_PURPLE() },
    { value: "6+", label: t("statsHero.coreServices"), gradient: GRADIENT_ORANGE() },
    { value: "24/7", label: t("statsHero.supportAvailable"), gradient: GRADIENT_GREEN_CYAN() },
  ];

  const bottomStats: ReadonlyArray<StatItem> = [
    { value: "380+", label: t("statsBottom.activeUsers"), gradient: GRADIENT_PURPLE() },
    { value: "400+", label: t("statsBottom.projectsDone"), gradient: GRADIENT_ORANGE() },
    { value: "25+", label: t("statsBottom.members"), gradient: GRADIENT_WHITE_PEACH() },
    { value: "8", label: t("statsBottom.yearsExperience"), gradient: GRADIENT_CYAN() },
  ];

  return (
    <div className="lg:hidden">
      <div className="section-container max-w-[720px] pb-16">
        <HeroSection
          heroParagraphs={heroParagraphs}
          heroStats={heroStats}
          heroWith={t("hero.with")}
          heroUs={t("hero.us")}
          heroEveryIdea={t("hero.everyIdea")}
          heroBecomes={t("hero.becomes")}
          heroPossible={t("hero.possible")}
        />
        <NeetrinoIntroSection intro={t("mobileNeetrinoIntro")} />
        <MissionVisionSection
          missionHeading={missionVisionHeading(t("the"), t("mission"))}
          missionBody={t("missionBody")}
          visionHeading={missionVisionHeading(t("the"), t("vision"))}
          visionBody={t("visionBody")}
        />
        <WhyChooseUsSection
          heading={
            <>
              {t("why")} <span className="text-[#ff7500]">{t("choose")}</span>
              {t("usQuestion")}
            </>
          }
          featureKeys={FEATURE_KEYS}
          t={t}
        />
        <ValuesSection
          heading={
            <>
              {prefixThe(t("the"))}
              <span className="text-[#ff7500]">{t("values")}</span> {t("valuesSuffix")}
            </>
          }
          valueKeys={VALUE_KEYS}
          t={t}
        />
        <CountriesSection
          countriesPrefix={t("countriesPrefix")}
          countriesAccent={t("countriesAccent")}
          worldMapAlt={t("worldMapAlt")}
        />
        <BottomStatsSection bottomStats={bottomStats} />
        <MeetOurTeamHeading variant="mobile" />
      </div>
    </div>
  );
}

function prefixThe(the: string): ReactNode {
  if (!the) {
    return null;
  }
  return <>{the} </>;
}

function missionVisionHeading(the: string, accent: string): ReactNode {
  return (
    <>
      {prefixThe(the)}
      <span className="text-[#ff7500]">{accent}</span>
    </>
  );
}

type StatItem = { value: string; label: string; gradient: string };

function GRADIENT_PURPLE(): string {
  return "linear-gradient(90deg, #473dff 0%, #6b5fff 100%)";
}
function GRADIENT_ORANGE(): string {
  return "linear-gradient(90deg, #ff7500 0%, #ff9500 100%)";
}
function GRADIENT_GREEN_CYAN(): string {
  return "linear-gradient(90deg, #73ff00 0%, #46ffe9 100%)";
}
function GRADIENT_WHITE_PEACH(): string {
  return "linear-gradient(180deg, #ffffff 0%, #ffd0a9 100%)";
}
function GRADIENT_CYAN(): string {
  return "linear-gradient(265deg, #acf0ff 22%, #00c6f3 85%)";
}

type AboutPageT = ReturnType<typeof useTranslations<"aboutPage">>;

function HeroSection({
  heroParagraphs,
  heroStats,
  heroWith,
  heroUs,
  heroEveryIdea,
  heroBecomes,
  heroPossible,
}: {
  heroParagraphs: readonly [string, string];
  heroStats: ReadonlyArray<StatItem>;
  heroWith: string;
  heroUs: string;
  heroEveryIdea: string;
  heroBecomes: string;
  heroPossible: string;
}) {
  const locale = useLocale() as AppLocale;
  const hyHeadlineText = locale === "hy" && ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS;

  return (
    <section className="pt-2 pb-10 sm:pt-4 sm:pb-12">
      <h1
        className={cn(
          "text-[clamp(2.5rem,13vw,4.75rem)] tracking-tight text-white leading-[0.95]",
          pageTitleMegatroxFontClass(locale),
        )}
      >
        <span className={cn("block", hyHeadlineText)}>
          {heroWith}
          {heroUs ? (
            <>
              {" "}
              <span className="font-black italic">{heroUs}</span>
            </>
          ) : null}
        </span>
        <span
          className={cn(
            "block",
            locale === "hy" && ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS,
            hyHeadlineText,
          )}
        >
          {heroEveryIdea}
        </span>
        <span className={cn("block", hyHeadlineText)}>{heroBecomes}</span>
        <span className={cn("block font-normal not-italic tracking-normal", hyHeadlineText)}>
          {heroPossible}
        </span>
      </h1>
      <div className="mt-6 space-y-4 text-[15px] font-extralight leading-6 text-white/85 sm:text-base sm:leading-7">
        {heroParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <StatsCard stats={heroStats} className="mt-8" />
    </section>
  );
}

function StatsCard({ stats, className }: { stats: ReadonlyArray<StatItem>; className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-[rgba(40,43,103,0.38)] p-5 backdrop-blur-md sm:grid-cols-3 sm:gap-3 sm:p-6 ${className ?? ""}`}
    >
      {stats.map((s) => (
        <div key={s.value + s.label} className="min-w-0 text-center">
          <p
            className="bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl"
            style={{ backgroundImage: s.gradient }}
          >
            {s.value}
          </p>
          <p
            className={cn(
              "mt-2 text-sm font-light text-[#99a1af]",
              s.label.includes("\n") && "whitespace-pre-line",
            )}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

function NeetrinoIntroSection({ intro }: { intro: string }) {
  return (
    <section className="py-10">
      <p className="text-[15px] font-extralight leading-7 text-white/85 sm:text-base sm:leading-8">
        {intro}
      </p>
    </section>
  );
}

function MissionVisionSection({
  missionHeading,
  missionBody,
  visionHeading,
  visionBody,
}: {
  missionHeading: ReactNode;
  missionBody: string;
  visionHeading: ReactNode;
  visionBody: string;
}) {
  return (
    <section className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-6">
      <article className="min-w-0">
        <SectionHeading>{missionHeading}</SectionHeading>
        <p className="mt-4 text-[15px] font-extralight leading-7 text-white/85">{missionBody}</p>
      </article>
      <article className="min-w-0">
        <SectionHeading>{visionHeading}</SectionHeading>
        <p className="mt-4 text-[15px] font-extralight leading-7 text-white/85">{visionBody}</p>
      </article>
    </section>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-['Inter:Black_Italic',sans-serif] text-[clamp(1.5rem,6.5vw,2.125rem)] font-black italic uppercase leading-tight text-white">
      {children}
    </h2>
  );
}

function WhyChooseUsSection({
  heading,
  featureKeys,
  t,
}: {
  heading: ReactNode;
  featureKeys: typeof FEATURE_KEYS;
  t: AboutPageT;
}) {
  const locale = useLocale();
  const isHy = locale === "hy";

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
      <SectionHeading>{heading}</SectionHeading>
      <div
        className={cn(
          "mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5",
          isHy && "-translate-x-[15px] -translate-y-[30px]",
        )}
      >
        {featureKeys.map(([line1Key, line2Key]) => (
          <div
            key={line1Key}
            className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-visible p-4 text-[#f5f5f5]"
          >
            {line1Key === "feature2Line1" ? (
              <div
                className={cn(
                  "relative z-10 mx-auto mb-3 shrink-0",
                  isHy
                    ? `${ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS_HY} ${ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS_HY}`
                    : `${ABOUT_DESIGN_OPTIONS_PALETTE_FRAME_CLASS_DEFAULT} ${ABOUT_DESIGN_OPTIONS_PALETTE_TRANSLATE_Y_CLASS_DEFAULT}`,
                )}
              >
                <Image
                  alt=""
                  className="object-contain"
                  fill
                  sizes={
                    isHy
                      ? ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES_HY
                      : ABOUT_DESIGN_OPTIONS_PALETTE_IMAGE_SIZES_DEFAULT
                  }
                  src={imgAboutPaletteDesignOptions}
                  quality={DEFAULT_IMAGE_QUALITY}
                  loading="lazy"
                />
              </div>
            ) : null}
            {line1Key === "feature2Line1" ? (
              <div
                className={cn(
                  isHy
                    ? ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS_HY
                    : ABOUT_DESIGN_OPTIONS_FEATURE_COPY_TRANSLATE_Y_CLASS_DEFAULT,
                  isHy && ABOUT_DESIGN_OPTIONS_FEATURE_COPY_SHIFT_X_HY_CLASS,
                  isHy && "w-full text-left",
                )}
              >
                <p className="text-sm font-extrabold leading-snug">{t(line1Key)}</p>
                <p
                  className={cn(
                    "text-sm font-extrabold leading-snug",
                    isHy && t(line2Key).includes("\n") && "whitespace-pre-line",
                  )}
                >
                  {t(line2Key)}
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm font-extrabold leading-snug">{t(line1Key)}</p>
                <p
                  className={cn(
                    "text-sm font-extrabold leading-snug",
                    isHy && t(line2Key).includes("\n") && "whitespace-pre-line",
                  )}
                >
                  {t(line2Key)}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ValuesSection({
  heading,
  valueKeys,
  t,
}: {
  heading: ReactNode;
  valueKeys: typeof VALUE_KEYS;
  t: AboutPageT;
}) {
  const locale = useLocale();
  const isHy = locale === "hy";

  return (
    <section className="py-10">
      <SectionHeading>{heading}</SectionHeading>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {valueKeys.map((key) => (
          <li
            key={key}
            className={cn(
              "rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-sm font-extrabold leading-snug text-[#f5f5f5]",
              isHy ? (key === "value1" ? "text-right" : "text-left") : "text-center",
              isHy && key === "value1" && ABOUT_VALUES_HY_VALUE1_HEART_LINE_SHIFT_LEFT_CLASS,
              isHy && key === "value2" && ABOUT_VALUES_HY_VALUE2_LINE_SHIFT_RIGHT_CLASS,
              isHy && key === "value3" && ABOUT_VALUES_HY_VALUE3_LINE_SHIFT_LEFT_CLASS,
              isHy && key === "value4" && ABOUT_VALUES_HY_VALUE4_LINE_SHIFT_LEFT_CLASS,
            )}
          >
            {t(key)}
          </li>
        ))}
      </ul>
      <ValueImagesRow />
    </section>
  );
}

function ValueImagesRow() {
  const images: ReadonlyArray<{ src: string; alt: string }> = [
    { src: imgChatGptImageMar272026At064658Pm1, alt: "" },
    { src: imgChatGptImageApr32026At011015Pm1, alt: "" },
    { src: img02A0Ab86C3Fe4B8381Ab86B982Bb800C1, alt: "" },
  ];
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {images.map((img, i) => (
        <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            alt={img.alt}
            src={img.src}
            fill
            sizes="(max-width: 640px) 33vw, 220px"
            className="object-cover"
            quality={DEFAULT_IMAGE_QUALITY}
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
}

function CountriesSection({
  countriesPrefix,
  countriesAccent,
  worldMapAlt,
}: {
  countriesPrefix: string;
  countriesAccent: string;
  worldMapAlt: string;
}) {
  return (
    <section className="py-10">
      <h2 className="text-center font-['Inter:Black_Italic',sans-serif] text-[clamp(1.25rem,5.5vw,1.875rem)] font-black italic uppercase leading-tight text-white">
        {countriesPrefix} <span className="text-[#ff7500]">{countriesAccent}</span>
      </h2>
      <div className="relative mt-6 aspect-[1195/460] w-full overflow-hidden rounded-2xl">
        <Image
          alt={worldMapAlt}
          src={imgLayer1}
          fill
          sizes="(max-width: 720px) 100vw, 720px"
          className="object-contain"
          quality={DEFAULT_IMAGE_QUALITY}
          loading="lazy"
        />
      </div>
    </section>
  );
}

function BottomStatsSection({ bottomStats }: { bottomStats: ReadonlyArray<StatItem> }) {
  return (
    <section className="pt-6">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-4 sm:gap-3 sm:p-6">
        {bottomStats.map((s) => (
          <div key={s.value + s.label} className="min-w-0 text-center">
            <p
              className="bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-5xl"
              style={{ backgroundImage: s.gradient }}
            >
              {s.value}
            </p>
            <p className="mt-2 text-xs font-light text-[#99a1af] sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
