import Image from "next/image";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { SITE_FOOTER_MOBILE_539_1826_ATMOSPHERE_CLASS } from "@/lib/site-footer-mobile-539-1826-atmosphere.constants";
import { SITE_FOOTER_MOBILE_539 } from "@/lib/site-footer-mobile-539-assets.constants";
import { cn } from "@/lib/utils";

/** Grid SVG natural size — `aspect-ratio` matches local asset. */
const GRID_NATURAL_H = 855;
const GRID_NATURAL_W = 400;

/** Footer-sized container so grid can use `cqw` / `cqh` (taller than viewport when needed). */
const FOOTER_MOBILE_BACKDROP_ROOT_CLASS =
  "pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#151515] [container-type:size]" as const;

/** Pre-rotate width: footer's max axis (cq) so grid covers full block after `rotate-90`. */
const FOOTER_GRID_PRE_ROTATE_WIDTH_CLASS =
  "relative max-w-none [width:min(calc(max(100cqw,_100cqh)*1.12),4000px)]" as const;

/** Full-bleed grid shell — under mobile atmosphere wash (`z-[1]` vs `z-[2]` in globals). */
const FOOTER_MOBILE_GRID_SHELL_CLASS =
  "absolute inset-0 z-[1] flex items-center justify-center overflow-hidden mix-blend-overlay" as const;

const FOOTER_MOBILE_ROBOT_STRIP_CLASS =
  "pointer-events-none absolute inset-y-0 right-0 z-[4] w-[min(82vw,620px)] min-w-[260px] overflow-hidden";

const FOOTER_MOBILE_ROBOT_IMAGE_CLASS =
  "object-cover object-left-top origin-left-top scale-[1.35] -translate-y-[22%]";

/**
 * Decorative layers for mobile footer — Figma `539:1824` grid/line/robot; atmosphere `539:1826` (blue L→R).
 */
export function SiteFooterMobileBackdrop539() {
  return (
    <div className={FOOTER_MOBILE_BACKDROP_ROOT_CLASS} aria-hidden>
      <div className={FOOTER_MOBILE_GRID_SHELL_CLASS}>
        <div className="flex-none origin-center rotate-90">
          <div
            className={FOOTER_GRID_PRE_ROTATE_WIDTH_CLASS}
            style={{ aspectRatio: `${GRID_NATURAL_H} / ${GRID_NATURAL_W}` }}
          >
            <Image
              alt=""
              src={SITE_FOOTER_MOBILE_539.vectorGrid}
              fill
              className="object-cover object-left-top"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      <div className={SITE_FOOTER_MOBILE_539_1826_ATMOSPHERE_CLASS} />

      <div className="absolute inset-x-0 -top-px z-[3] px-3 sm:px-4">
        <div className="relative mx-auto h-px w-full max-w-none">
          <Image
            alt=""
            src={SITE_FOOTER_MOBILE_539.topLine}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      <div className={FOOTER_MOBILE_ROBOT_STRIP_CLASS}>
        <div className="relative h-full min-h-[380px] w-full">
          <Image
            alt=""
            src={FIGMA_ASSETS.imgMobileFooterRobotProfile}
            fill
            sizes="(max-width: 1024px) 82vw, 0"
            className={cn("pointer-events-none", FOOTER_MOBILE_ROBOT_IMAGE_CLASS)}
          />
        </div>
      </div>
    </div>
  );
}
