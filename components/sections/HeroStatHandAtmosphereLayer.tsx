import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  getMobileHomeHeroHandSlotRightCss,
  MOBILE_HERO_STAT_HAND_ATMOSPHERE_ANCHOR_OFFSET_Y_PX,
  MOBILE_HERO_STAT_HAND_ATMOSPHERE_STATS_COLUMN_TOP_CLASS,
} from "@/components/sections/mobile-home-hero.constants";
import {
  MOBILE_HOME_HERO_STAT_HAND_ATMOSPHERE_241_824_INSET_WRAPPER_CLASS,
  MOBILE_HOME_HERO_STAT_HAND_ATMOSPHERE_241_824_TRANSLATE_X_CLASS,
} from "@/lib/mobile-home-hero-stat-hand-atmosphere-241-824.constants";
import { cn } from "@/lib/utils";

const HERO_STAT_HAND_ATMOSPHERE_ANCHOR_BOX_CLASS =
  "pointer-events-none absolute h-[287px] w-[271px] -translate-y-1/2 max-[380px]:h-[252px] max-[380px]:w-[235px]" as const;

/**
 * Figma `241:824` glow — lowest paint layer in the mobile home hero (`z-0` under `HeroBackground`).
 * Position stays in sync with `HeroSection` (`pt-[88px]`, `min-h-[853px]`) and stat card stack via
 * `MOBILE_HERO_STAT_HAND_ATMOSPHERE_*` constants.
 */
export function HeroStatHandAtmosphereLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 w-full max-w-[393px] -translate-x-1/2 px-6",
          MOBILE_HERO_STAT_HAND_ATMOSPHERE_STATS_COLUMN_TOP_CLASS,
          "bottom-0",
        )}
      >
        <div className="relative h-full min-h-px">
          <div
            className={HERO_STAT_HAND_ATMOSPHERE_ANCHOR_BOX_CLASS}
            style={{
              top: MOBILE_HERO_STAT_HAND_ATMOSPHERE_ANCHOR_OFFSET_Y_PX,
              right: getMobileHomeHeroHandSlotRightCss(),
            }}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 overflow-visible",
                MOBILE_HOME_HERO_STAT_HAND_ATMOSPHERE_241_824_TRANSLATE_X_CLASS,
              )}
            >
              <div className="relative size-full min-h-px min-w-px">
                <div className={MOBILE_HOME_HERO_STAT_HAND_ATMOSPHERE_241_824_INSET_WRAPPER_CLASS}>
                  <div className="relative size-full min-h-px min-w-px">
                    <Image
                      src={FIGMA_ASSETS.imgRectangle17416}
                      alt=""
                      fill
                      unoptimized
                      className="pointer-events-none block max-w-none object-fill select-none"
                      sizes="(max-width: 768px) 400px, 400px"
                      quality={DEFAULT_IMAGE_QUALITY}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
