import { cn } from "@/lib/utils";

/** Tile backgrounds in What we do — accents on hover are derived from these (dark pill shell unchanged). */
export const WHAT_WE_DO_CARD_SURFACE = {
  website: "#e8e8f4",
  mobile: "#ff7500",
  saas: "#292929",
  crm: "#473dff",
  ai: "#a2b8ee",
} as const;

export const WHAT_WE_DO_CONTINUE_VARIANTS = ["website", "mobile", "saas", "crm", "ai"] as const;

export type WhatWeDoContinueGlowVariant = (typeof WHAT_WE_DO_CONTINUE_VARIANTS)[number];

const CONTINUE_PILL_DURATION_CLASS = "duration-[520ms]";
const CONTINUE_PILL_EASE_CLASS = "ease-[cubic-bezier(0.33,1,0.68,1)]";
const MOTION_REDUCE_TRANSITION_CLASS = "motion-reduce:transition-none motion-reduce:duration-0";

/** White pill → dark shell on hover (original What we do interaction). */
const linkShellClassName = cn(
  "group relative z-10 flex min-h-[56px] shrink-0 cursor-pointer items-center gap-[4px] overflow-clip rounded-[40px] border border-transparent bg-white px-[24px] py-[16px] no-underline",
  `pointer-events-auto transition-[background-color,border-color,box-shadow] ${CONTINUE_PILL_DURATION_CLASS} ${CONTINUE_PILL_EASE_CLASS}`,
  MOTION_REDUCE_TRANSITION_CLASS,
  "hover:bg-[#101015]",
  "focus-visible:bg-[#101015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
);

/** Per-card border + inset glow (card hue, not generic violet/cyan). */
const linkAccentByVariant: Record<WhatWeDoContinueGlowVariant, string> = {
  website: cn(
    "hover:border-[#c4c4d8] hover:shadow-[inset_0_-10px_30px_-5px_rgba(160,160,190,0.42),inset_0_-1px_0_rgba(210,210,228,0.28)]",
    "focus-visible:border-[#c4c4d8] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(160,160,190,0.42),inset_0_-1px_0_rgba(210,210,228,0.28)]",
  ),
  mobile: cn(
    "hover:border-[#f0c078] hover:shadow-[inset_0_-10px_30px_-5px_rgba(200,85,35,0.38),inset_0_-1px_0_rgba(255,220,150,0.28)]",
    "focus-visible:border-[#f0c078] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(200,85,35,0.38),inset_0_-1px_0_rgba(255,220,150,0.28)]",
  ),
  saas: cn(
    "hover:border-[#8a8a8a] hover:shadow-[inset_0_-10px_30px_-5px_rgba(0,0,0,0.55),inset_0_-1px_0_rgba(140,140,140,0.26)]",
    "focus-visible:border-[#8a8a8a] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(0,0,0,0.55),inset_0_-1px_0_rgba(140,140,140,0.26)]",
  ),
  crm: cn(
    "hover:border-[#7eb6e0] hover:shadow-[inset_0_-10px_30px_-5px_rgba(40,80,220,0.48),inset_0_-1px_0_rgba(120,175,255,0.28)]",
    "focus-visible:border-[#7eb6e0] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(40,80,220,0.48),inset_0_-1px_0_rgba(120,175,255,0.28)]",
  ),
  ai: cn(
    "hover:border-[#8eb6e8] hover:shadow-[inset_0_-10px_30px_-5px_rgba(70,110,190,0.4),inset_0_-1px_0_rgba(170,200,245,0.24)]",
    "focus-visible:border-[#8eb6e8] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(70,110,190,0.4),inset_0_-1px_0_rgba(170,200,245,0.24)]",
  ),
};

const labelGradientStaticByVariant: Record<WhatWeDoContinueGlowVariant, string> = {
  website:
    "bg-gradient-to-r from-[#f4f4fa] via-[#d4d4e8] to-[#a8a8c0] bg-clip-text text-transparent",
  mobile:
    "bg-gradient-to-r from-[#fff8ec] via-[#ffd9a2] to-[#e89550] bg-clip-text text-transparent",
  saas: "bg-gradient-to-r from-[#f2f2f2] via-[#d6d6d6] to-[#ababab] bg-clip-text text-transparent",
  crm: "bg-gradient-to-r from-[#e8f8ff] via-[#9ec8ff] to-[#5a7ef8] bg-clip-text text-transparent",
  ai: "bg-gradient-to-r from-[#e8f4ff] via-[#a8c8f8] to-[#6d9fe8] bg-clip-text text-transparent",
};

const arrowFilterByVariant: Record<WhatWeDoContinueGlowVariant, string> = {
  website:
    "group-hover:[filter:brightness(0)_invert(0.88)_sepia(0.12)_saturate(1.4)_hue-rotate(210deg)] group-focus-visible:[filter:brightness(0)_invert(0.88)_sepia(0.12)_saturate(1.4)_hue-rotate(210deg)]",
  mobile:
    "group-hover:[filter:brightness(0)_invert(0.92)_sepia(1)_saturate(2.8)_hue-rotate(352deg)] group-focus-visible:[filter:brightness(0)_invert(0.92)_sepia(1)_saturate(2.8)_hue-rotate(352deg)]",
  saas: "group-hover:[filter:brightness(0)_invert(0.88)] group-focus-visible:[filter:brightness(0)_invert(0.88)]",
  crm: "group-hover:[filter:brightness(0)_invert(0.9)_sepia(0.45)_saturate(2.8)_hue-rotate(198deg)] group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(0.45)_saturate(2.8)_hue-rotate(198deg)]",
  ai: "group-hover:[filter:brightness(0)_invert(0.9)_sepia(0.5)_saturate(2.6)_hue-rotate(185deg)] group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(0.5)_saturate(2.6)_hue-rotate(185deg)]",
};

const arrowBaseClassName = cn(
  "absolute block size-full max-w-none",
  `transition-[filter] ${CONTINUE_PILL_DURATION_CLASS} ${CONTINUE_PILL_EASE_CLASS}`,
  MOTION_REDUCE_TRANSITION_CLASS,
);

const labelOpacityTransitionClassName = cn(
  `transition-opacity ${CONTINUE_PILL_DURATION_CLASS} ${CONTINUE_PILL_EASE_CLASS}`,
  MOTION_REDUCE_TRANSITION_CLASS,
);

const labelTypographyClassName =
  "col-start-1 row-start-1 whitespace-nowrap text-[18px] font-medium leading-[24px] not-italic";

export function whatWeDoContinueLinkClassName(variant: WhatWeDoContinueGlowVariant): string {
  return cn(linkShellClassName, linkAccentByVariant[variant]);
}

export function whatWeDoContinueLabelStackClassName(): string {
  return "relative isolate inline-grid shrink-0 justify-items-start leading-[24px]";
}

export function whatWeDoContinueLabelSolidLayerClassName(): string {
  return cn(
    labelTypographyClassName,
    "text-[#252525]",
    labelOpacityTransitionClassName,
    "group-hover:opacity-0 group-focus-visible:opacity-0",
  );
}

export function whatWeDoContinueLabelGradientLayerClassName(
  variant: WhatWeDoContinueGlowVariant,
): string {
  return cn(
    labelTypographyClassName,
    labelGradientStaticByVariant[variant],
    labelOpacityTransitionClassName,
    "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
  );
}

export function whatWeDoContinueArrowClassName(variant: WhatWeDoContinueGlowVariant): string {
  return cn(arrowBaseClassName, arrowFilterByVariant[variant]);
}
