"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { AppLocale } from "@/lib/i18n/locales";
import { pageTitleMegatroxFontClass } from "@/lib/page-title-megatrox-font.constants";
import {
  ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS,
  ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS,
} from "@/lib/about-us-figma-layout.constants";
import { AboutUsMobileCountriesHeading } from "@/components/about-us/AboutUsMobileCountriesHeading";
import { cn } from "@/lib/utils";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { imgLayer1 } from "@/lib/about-us-figma-asset-urls";
import { AboutUsMobileMissionMeetTube } from "@/components/about-us/AboutUsMobileMissionMeetTube";
import { AboutUsMobileMissionMeetTubeBottom } from "@/components/about-us/AboutUsMobileMissionMeetTubeBottom";
import { AboutUsMobileWhyChooseUs } from "@/components/about-us/AboutUsMobileWhyChooseUs";
import { MeetOurTeamHeading } from "@/components/about-us/MeetOurTeamHeading";
import {
  ABOUT_MOBILE_COUNTRIES_MAP_FLOW_MARGIN_TOP_CLASS,
  ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS,
} from "@/lib/about-us-mobile-countries-map.constants";
import { ABOUT_MEET_OUR_TEAM_MOBILE_MARGIN_TOP_CLASS } from "@/lib/about-us-meet-our-team.constants";

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
  ];

  return (
    <div className="lg:hidden">
      <div className="section-container max-w-[720px] pb-0">
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
        <div className="relative">
          <AboutUsMobileMissionMeetTube />
          <div className="relative z-10 isolate">
            <MissionVisionSection
              missionHeading={missionVisionHeading(t("the"), t("mission"))}
              missionBody={t("missionBody")}
              visionHeading={missionVisionHeading(t("the"), t("vision"))}
              visionBody={t("visionBody")}
            />
            <AboutUsMobileWhyChooseUs />
            <CountriesSection
              countriesPrefix={t("countriesPrefix")}
              countriesAccent={t("countriesAccent")}
              worldMapAlt={t("worldMapAlt")}
            />
            <BottomStatsSection bottomStats={bottomStats} />
          </div>
          <AboutUsMobileMissionMeetTubeBottom />
        </div>
        <div className={ABOUT_MEET_OUR_TEAM_MOBILE_MARGIN_TOP_CLASS}>
          <MeetOurTeamHeading variant="mobile" />
        </div>
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
    <section className="pt-6 pb-10" aria-labelledby="about-mobile-countries-heading">
      <AboutUsMobileCountriesHeading
        countriesPrefix={countriesPrefix}
        countriesAccent={countriesAccent}
      />
      <div
        className={cn(
          "relative -mx-3 aspect-[1195/520] w-[calc(100%+1.5rem)] max-w-none overflow-hidden rounded-2xl sm:-mx-4 sm:w-[calc(100%+2rem)]",
          ABOUT_MOBILE_COUNTRIES_MAP_FLOW_MARGIN_TOP_CLASS,
          ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS,
        )}
      >
        <Image
          alt={worldMapAlt}
          src={imgLayer1}
          fill
          sizes="(max-width: 720px) 100vw, min(900px, 95vw)"
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
    <section className="translate-y-13 pt-8">
      <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-4 sm:gap-x-12">
        {bottomStats.map((s) => (
          <div key={s.value + s.label} className="min-w-0 text-center">
            <p
              className="bg-clip-text text-3xl font-black leading-none text-transparent sm:text-4xl"
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
