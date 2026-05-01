"use client";

import { useLocale } from "next-intl";
import type { AppLocale } from "@/lib/i18n/locales";
import {
  ABOUT_MOBILE_HERO_EVERY_IDEA_SHIFT_HY_CLASS,
  ABOUT_MOBILE_HERO_HEADLINE_TEXT_HY_CLASS,
} from "@/lib/about-us-figma-layout.constants";
import {
  ABOUT_US_MOBILE_HERO_HEADLINE_LETTER_SPACING_PX,
  ABOUT_US_MOBILE_HERO_HEADLINE_STACK_GAP_PX,
  ABOUT_US_MOBILE_HERO_HEADLINE_PR_FOR_ROBOT_CLASS,
  ABOUT_US_MOBILE_HERO_STAT_GLOW_BLUR_PX,
  ABOUT_US_MOBILE_HERO_STAT_GLOW_OPACITY,
  ABOUT_US_MOBILE_ABOUT_GLASS_TILE_CLASS,
} from "@/lib/about-us-mobile-hero.constants";
import { AboutUsMobileHeroRobot } from "@/components/about-us/AboutUsMobileHeroRobot";
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
          "relative z-[10] max-w-[min(100%,22rem)] overflow-x-clip sm:max-w-none",
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

        <div className="mt-8 max-w-[17.5rem] space-y-4 text-[14px] font-normal leading-[1.62] tracking-[-0.01em] text-white/90 sm:max-w-[20rem] sm:text-[15px] sm:leading-relaxed">
          {heroParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <AboutUsMobileHeroStatsRow stats={heroStats} className="relative z-[20] mt-10" />
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
    <div className={cn("grid grid-cols-3 gap-2 sm:gap-4", className)} data-node-id="479:1251">
      {stats.map((s, i) => (
        <AboutUsMobileHeroStatCell
          key={s.value + s.label}
          value={s.value}
          label={s.label}
          gradient={s.gradient}
          glowFrom={STAT_GLOW_PRESETS[i]?.from ?? "#473dff"}
          glowTo={STAT_GLOW_PRESETS[i]?.to ?? "#6b5fff"}
        />
      ))}
    </div>
  );
}

function AboutUsMobileHeroStatCell({
  value,
  label,
  gradient,
  glowFrom,
  glowTo,
}: {
  value: string;
  label: string;
  gradient: string;
  glowFrom: string;
  glowTo: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-w-0 flex-1 flex-col items-center px-2 pb-4 pt-7 sm:px-3 sm:pb-5 sm:pt-8",
        ABOUT_US_MOBILE_ABOUT_GLASS_TILE_CLASS,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-9 w-[min(5.25rem,28vw)] -translate-x-1/2 rounded-full bg-gradient-to-r"
        style={{
          filter: `blur(${ABOUT_US_MOBILE_HERO_STAT_GLOW_BLUR_PX}px)`,
          opacity: ABOUT_US_MOBILE_HERO_STAT_GLOW_OPACITY,
          backgroundImage: `linear-gradient(90deg, ${glowFrom}, ${glowTo})`,
        }}
      />
      <p
        className="relative bg-clip-text text-center text-[clamp(1.75rem,7.5vw,2.8125rem)] font-black leading-none tracking-[0.02em] text-transparent"
        style={{ backgroundImage: gradient }}
      >
        {value}
      </p>
      <p
        className={cn(
          "relative mt-2 text-center text-[11px] font-normal leading-4 text-[#d9e0ed] sm:text-xs sm:leading-4",
          label.includes("\n") && "whitespace-pre-line",
        )}
      >
        {label}
      </p>
    </div>
  );
}
