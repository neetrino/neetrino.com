"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { AboutUsMobileHero } from "@/components/about-us/AboutUsMobileHero";
import { AboutUsMobileCountriesHeading } from "@/components/about-us/AboutUsMobileCountriesHeading";
import { AboutUsMobileCountriesHeadingAtmosphere } from "@/components/about-us/AboutUsMobileCountriesHeadingAtmosphere";
import {
  ABOUT_MOBILE_BOTTOM_STAT_VALUE_380_PLUS_GRADIENT,
  aboutMobileBottomStatGlowBackdropTextClass,
} from "@/lib/about-us-mobile-bottom-stats.constants";
import { cn } from "@/lib/utils";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { imgLayer1 } from "@/lib/about-us-figma-asset-urls";
import { AboutUsMobileMissionVisionSection } from "@/components/about-us/AboutUsMobileMissionVisionBlock";
import { AboutUsMobileMissionMeetTube } from "@/components/about-us/AboutUsMobileMissionMeetTube";
import { AboutUsMobileMissionMeetTubeBottom } from "@/components/about-us/AboutUsMobileMissionMeetTubeBottom";
import { AboutUsMobileStickyCone } from "@/components/about-us/AboutUsMobileStickyCone";
import { AboutUsMobileWhyChooseUs } from "@/components/about-us/AboutUsMobileWhyChooseUs";
import { MeetOurTeamHeading } from "@/components/about-us/MeetOurTeamHeading";
import {
  ABOUT_MOBILE_COUNTRIES_MAP_FLOW_MARGIN_TOP_CLASS,
  ABOUT_MOBILE_COUNTRIES_MAP_VISUAL_TRANSLATE_Y_CLASS,
  ABOUT_MOBILE_COUNTRIES_SECTION_CLASS,
  ABOUT_MOBILE_COUNTRIES_SECTION_FOREGROUND_STACK_CLASS,
} from "@/lib/about-us-mobile-countries-map.constants";
import { ABOUT_MEET_OUR_TEAM_MOBILE_MARGIN_TOP_CLASS } from "@/lib/about-us-meet-our-team.constants";
import { ABOUT_MOBILE_NEETRINO_INTRO_PARAGRAPH_CLASS } from "@/lib/about-us-mobile-neetrino-intro.constants";
import { ABOUT_MOBILE_WHY_CHOOSE_ABOVE_COUNTRIES_ATMOSPHERE_STACK_CLASS } from "@/lib/about-us-mobile-why-choose.constants";

/**
 * Narrow About Us layout below `neetrino-layout-desktop` (~744px). Mirrors the same content/order/CTA copy as the
 * Figma-pixel desktop blocks (`AboutUsFigmaBlock1a..3`) but renders it in normal flow
 * with responsive Tailwind utilities. Tablet hybrid uses scaled `AboutUsFigmaCanvasInner` on `/about-us`.
 */
export function AboutUsMobile() {
  const missionTubeStackRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("aboutPage");

  const heroParagraphs = [t("storyShortMobile"), t("storySpecialization")] as const;

  const heroStats: ReadonlyArray<StatItem> = [
    { value: "450+", label: t("statsHero.projectsDelivered"), gradient: GRADIENT_PURPLE() },
    { value: "6+", label: t("statsHero.coreServices"), gradient: GRADIENT_ORANGE() },
    { value: "24/7", label: t("statsHero.supportAvailable"), gradient: GRADIENT_GREEN_CYAN() },
  ];

  const bottomStats: ReadonlyArray<StatItem> = [
    {
      value: "380+",
      label: t("statsBottom.activeUsers"),
      gradient: ABOUT_MOBILE_BOTTOM_STAT_VALUE_380_PLUS_GRADIENT,
    },
    { value: "400+", label: t("statsBottom.projectsDone"), gradient: GRADIENT_ORANGE() },
    { value: "25+", label: t("statsBottom.members"), gradient: GRADIENT_WHITE_PEACH() },
  ];

  return (
    <div className="pt-24">
      <div className="section-container max-w-[720px] pb-0">
        <AboutUsMobileHero
          heroParagraphs={heroParagraphs}
          heroStats={heroStats}
          heroWith={t("hero.with")}
          heroUs={t("hero.us")}
          heroEveryIdea={t("hero.everyIdea")}
          heroBecomes={t("hero.becomes")}
          heroPossible={t("hero.possible")}
        />
        <NeetrinoIntroSection />
        <div className="relative" ref={missionTubeStackRef}>
          <AboutUsMobileMissionMeetTube />
          <AboutUsMobileStickyCone containerRef={missionTubeStackRef} />
          <div className="relative z-10 isolate">
            <AboutUsMobileMissionVisionSection
              missionHeading={missionVisionHeading(t("the"), t("mission"))}
              missionBody={t("missionBodyMobile")}
              visionHeading={missionVisionHeading(t("the"), t("vision"))}
              visionBody={t("visionBodyMobile")}
            />
            <div className={ABOUT_MOBILE_WHY_CHOOSE_ABOVE_COUNTRIES_ATMOSPHERE_STACK_CLASS}>
              <AboutUsMobileWhyChooseUs />
            </div>
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

function NeetrinoIntroSection() {
  const introT = useTranslations("aboutPage");
  return (
    <section className="-mt-3 flex -translate-y-[2px] justify-center pt-3 pb-9 sm:-mt-2 sm:pt-4 sm:pb-10">
      <p className={ABOUT_MOBILE_NEETRINO_INTRO_PARAGRAPH_CLASS}>
        {introT.rich("mobileNeetrinoIntro", {
          bold: (chunks) => <strong className="font-bold">{chunks}</strong>,
        })}
      </p>
    </section>
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
    <section
      className={ABOUT_MOBILE_COUNTRIES_SECTION_CLASS}
      aria-labelledby="about-mobile-countries-heading"
    >
      <AboutUsMobileCountriesHeadingAtmosphere />
      <div className={ABOUT_MOBILE_COUNTRIES_SECTION_FOREGROUND_STACK_CLASS}>
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
            <div className="relative inline-grid place-items-center overflow-visible">
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none col-start-1 row-start-1 text-3xl font-black leading-none opacity-55 blur-md sm:text-4xl sm:opacity-50 sm:blur-lg",
                  aboutMobileBottomStatGlowBackdropTextClass(s.value),
                )}
              >
                {s.value}
              </span>
              <p
                className="relative z-[1] col-start-1 row-start-1 bg-clip-text text-3xl font-black leading-none text-transparent sm:text-4xl"
                style={{ backgroundImage: s.gradient }}
              >
                {s.value}
              </p>
            </div>
            <p className="mt-2 text-xs font-light text-white sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
