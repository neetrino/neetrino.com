"use client";

import {
  HERO_ATMOSPHERE_CYCLE_MS,
  HERO_BACKGROUND_ATMOSPHERE_BEAMS_DESKTOP,
  HERO_BACKGROUND_ATMOSPHERE_BEAMS_MOBILE,
} from "@/lib/hero-background-atmosphere.constants";
import { cn } from "@/lib/utils";

type HeroBackgroundAtmosphereProps = {
  readonly className?: string;
  readonly variant?: "desktop" | "mobile";
};

/**
 * Lightweight hero light streaks — CSS `transform` + `opacity` only (no video/GIF decode).
 * Replaces legacy hero hand wash loop on desktop and mobile home heroes.
 */
export function HeroBackgroundAtmosphere({
  className,
  variant = "desktop",
}: HeroBackgroundAtmosphereProps) {
  const beams =
    variant === "mobile"
      ? HERO_BACKGROUND_ATMOSPHERE_BEAMS_MOBILE
      : HERO_BACKGROUND_ATMOSPHERE_BEAMS_DESKTOP;

  return (
    <div
      className={cn(
        "hero-background-atmosphere pointer-events-none absolute overflow-hidden",
        className,
      )}
      style={{ ["--hero-atmosphere-cycle-ms" as string]: `${HERO_ATMOSPHERE_CYCLE_MS}ms` }}
      aria-hidden
    >
      {beams.map((beam) => (
        <span
          key={`${variant}-${beam.leftPercent}-${beam.widthPx}`}
          className="hero-background-atmosphere-beam"
          style={{
            left: `${beam.leftPercent}%`,
            width: beam.widthPx,
            animationDelay: `${beam.delayMs}ms`,
            ["--hero-beam-opacity" as string]: beam.peakOpacity,
          }}
        />
      ))}
    </div>
  );
}
