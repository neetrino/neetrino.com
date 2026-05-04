"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/lib/i18n/locales";
import {
  ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS,
  ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS,
} from "@/lib/about-us-figma-layout.constants";
import {
  ABOUT_US_MOBILE_HERO_HEADLINE_LETTER_SPACING_PX,
  ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX,
  ABOUT_US_MOBILE_HERO_COPY_STACK_CLASS,
  ABOUT_US_MOBILE_HERO_HEADLINE_PR_FOR_ROBOT_CLASS,
  ABOUT_US_MOBILE_HERO_STORY_INTRO_PARAGRAPH_BASE_CLASS,
  ABOUT_US_MOBILE_HERO_STAT_GLOW_BLUR_PX,
  ABOUT_US_MOBILE_HERO_STAT_GLOW_OPACITY,
  ABOUT_US_MOBILE_HERO_STATS_BREAKOUT_CLASS,
  ABOUT_US_MOBILE_HERO_STATS_FOREGROUND_SHIFT_CLASS,
  ABOUT_US_MOBILE_HERO_STATS_PANEL_BG_SRC,
  ABOUT_US_MOBILE_HERO_STATS_PANEL_SHELF_CLASS,
} from "@/lib/about-us-mobile-hero.constants";
import { AboutUsMobileHeroRobot } from "@/components/about-us/AboutUsMobileHeroRobot";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import { interSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export type AboutUsMobileHeroStat = { value: string; label: string; gradient: string };

export type AboutUsMobileHeroProps = {
  heroParagraphs: readonly [string, string];
  heroStats: ReadonlyArray<AboutUsMobileHeroStat>;
  heroWith: string;
  heroUs: string;
  heroEveryIdea: string;
  heroBecomes: string;
  heroPossible: string;
};

/**
 * Mobile About hero — Figma `479:1237`–`479:1251`: stacked headline + robot `479:1236` + intro + stat row.
 */
export function AboutUsMobileHero({
  heroParagraphs,
  heroStats,
  heroWith,
  heroUs,
  heroEveryIdea,
  heroBecomes,
  heroPossible,
}: AboutUsMobileHeroProps) {
  const locale = useLocale() as AppLocale;
  const hyHeadline = locale === "hy" && ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS;

  return (
    <section
      className="relative isolate overflow-visible pb-10 pt-0 sm:pb-12"
      data-name="About mobile hero"
      data-node-id="479:1237"
    >
      <AboutUsMobileHeroRobot />

      <div
        className={cn(
          ABOUT_US_MOBILE_HERO_COPY_STACK_CLASS,
          (locale === "en" || locale === "ru") && interSans.className,
        )}
      >
        <div
          className={cn(
            "relative max-w-[min(100%,22rem)] overflow-x-clip sm:max-w-none",
            ABOUT_US_MOBILE_HERO_HEADLINE_PR_FOR_ROBOT_CLASS,
          )}
        >
          <h1
            className={cn(
              "font-normal text-white",
              "text-[clamp(1.875rem,10.5vw,2.875rem)] leading-[0.95] tracking-normal",
              hyHeadline,
            )}
            style={{ letterSpacing: `${ABOUT_US_MOBILE_HERO_HEADLINE_LETTER_SPACING_PX}px` }}
          >
            <span
              className="block whitespace-nowrap"
              style={{ marginBottom: ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX }}
            >
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
                (locale === "en" || locale === "ru") && "whitespace-nowrap",
                locale === "hy" && ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS,
              )}
              style={{ marginBottom: ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX }}
            >
              {heroEveryIdea}
            </span>
            <span
              className="block"
              style={{ marginBottom: ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX }}
            >
              {heroBecomes}
            </span>
            <span className="block font-black italic">{heroPossible}</span>
          </h1>
        </div>

        <div
          className={cn(
            "mt-3 max-w-[min(100%,22rem)] overflow-x-auto overflow-y-visible",
            ABOUT_US_MOBILE_HERO_HEADLINE_PR_FOR_ROBOT_CLASS,
          )}
        >
          <p
            className={cn(
              ABOUT_US_MOBILE_HERO_STORY_INTRO_PARAGRAPH_BASE_CLASS,
              locale === "en" ? "whitespace-pre" : "whitespace-pre-line",
            )}
          >
            {heroParagraphs[0]}
            {"\n\n"}
            {heroParagraphs[1]}
          </p>
        </div>

        <div className={ABOUT_US_MOBILE_HERO_STATS_BREAKOUT_CLASS}>
          <AboutUsMobileHeroStatsRow stats={heroStats} />
        </div>
      </div>
    </section>
  );
}

const STAT_GLOW_PRESETS = [
  { from: "#473dff", to: "#6b5fff" },
  { from: "#ff7500", to: "#ff9500" },
  { from: "#73ff00", to: "#46ffe9" },
] as const;

function AboutUsMobileHeroStatsRow({
  stats,
  className,
}: {
  stats: ReadonlyArray<AboutUsMobileHeroStat>;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mt-4 min-h-[13rem] aspect-[826/217] sm:mt-5",
        ABOUT_US_MOBILE_HERO_STATS_PANEL_SHELF_CLASS,
        className,
      )}
      data-name="Rectangle 17399"
      data-node-id="479:1246"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src={ABOUT_US_MOBILE_HERO_STATS_PANEL_BG_SRC}
          alt=""
          fill
          unoptimized
          quality={DEFAULT_IMAGE_QUALITY}
          className="pointer-events-none object-fill select-none scale-x-[-1]"
          sizes="100vw"
        />
      </div>
      <div
        className={cn(
          "relative z-[2] grid w-full grid-cols-3 gap-2 px-2 pb-8 pt-18 sm:gap-2 sm:px-4 sm:pb-9 sm:pt-14",
          ABOUT_US_MOBILE_HERO_STATS_FOREGROUND_SHIFT_CLASS,
        )}
        data-node-id="479:1251"
      >
        {stats.map((s, statIndex) => {
          const glowPreset = STAT_GLOW_PRESETS[statIndex] ?? STAT_GLOW_PRESETS[0];
          return (
            <div
              key={s.value + s.label}
              className={cn(
                "flex min-w-0 flex-col items-center px-0.5",
                statIndex === 1 && "translate-x-[calc(-5rem+5px)] sm:translate-x-0",
                statIndex === 2 && "-translate-x-39 sm:translate-x-0",
              )}
            >
              <div className="relative flex h-[4rem] w-full items-center justify-center sm:h-[4.5rem]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-12 w-[min(7.25rem,36vw)] max-w-[min(100%,7.25rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r sm:h-14 sm:w-[min(7.75rem,30vw)] sm:max-w-none"
                  data-name="Stat glow"
                  style={{
                    filter: `blur(${ABOUT_US_MOBILE_HERO_STAT_GLOW_BLUR_PX}px)`,
                    opacity: ABOUT_US_MOBILE_HERO_STAT_GLOW_OPACITY,
                    backgroundImage: `linear-gradient(90deg, ${glowPreset.from}, ${glowPreset.to})`,
                  }}
                />
                <p
                  className="relative z-[1] bg-clip-text text-center text-[clamp(2.25rem,9vw,3.35rem)] font-black leading-none tracking-[0.02em] text-transparent"
                  style={{ backgroundImage: s.gradient }}
                >
                  {s.value}
                </p>
              </div>
              <p
                className={cn(
                  "relative z-[1] mt-2 max-w-[15rem] text-center text-xs font-normal leading-tight text-[#d9e0ed] sm:mt-3 sm:max-w-none sm:text-xl sm:leading-8",
                  s.label.includes("\n") && "whitespace-pre-line",
                )}
              >
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
