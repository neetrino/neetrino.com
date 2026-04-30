import { cn } from "@/lib/utils";

/** Crossfade + shell/arrow — opacity eases well; bg/border/shadow follow same curve. */
const CONTINUE_PILL_DURATION_CLASS = "duration-[520ms]";
const CONTINUE_PILL_EASE_CLASS = "ease-[cubic-bezier(0.33,1,0.68,1)]";
const MOTION_REDUCE_TRANSITION_CLASS = "motion-reduce:transition-none motion-reduce:duration-0";

export const SERVICES_CONTINUE_GLOW_VARIANTS = [
  "cyan",
  "amber",
  "violet",
  "green",
  "pink",
] as const;

export type ServicesContinueGlowVariant = (typeof SERVICES_CONTINUE_GLOW_VARIANTS)[number];

const linkShellClassName = cn(
  "group relative z-10 flex min-h-[56px] shrink-0 cursor-pointer items-center gap-[4px] overflow-clip rounded-[40px] border border-transparent bg-white px-[24px] py-[16px] no-underline",
  `pointer-events-auto transition-[background-color,border-color,box-shadow] ${CONTINUE_PILL_DURATION_CLASS} ${CONTINUE_PILL_EASE_CLASS}`,
  MOTION_REDUCE_TRANSITION_CLASS,
  "hover:bg-[#101015]",
  "focus-visible:bg-[#101015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
);

const linkAccentByVariant: Record<ServicesContinueGlowVariant, string> = {
  cyan: cn(
    "hover:border-[#7eb6e0] hover:shadow-[inset_0_-10px_30px_-5px_rgba(40,110,200,0.42),inset_0_-1px_0_rgba(130,195,255,0.22)]",
    "focus-visible:border-[#7eb6e0] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(40,110,200,0.42),inset_0_-1px_0_rgba(130,195,255,0.22)]",
  ),
  amber: cn(
    "hover:border-[#f0c078] hover:shadow-[inset_0_-10px_30px_-5px_rgba(200,85,35,0.38),inset_0_-1px_0_rgba(255,220,150,0.28)]",
    "focus-visible:border-[#f0c078] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(200,85,35,0.38),inset_0_-1px_0_rgba(255,220,150,0.28)]",
  ),
  violet: cn(
    "hover:border-[#b794f6] hover:shadow-[inset_0_-10px_30px_-5px_rgba(110,55,210,0.45),inset_0_-1px_0_rgba(210,175,255,0.28)]",
    "focus-visible:border-[#b794f6] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(110,55,210,0.45),inset_0_-1px_0_rgba(210,175,255,0.28)]",
  ),
  green: cn(
    "hover:border-[#5ee097] hover:shadow-[inset_0_-10px_30px_-5px_rgba(25,130,70,0.42),inset_0_-1px_0_rgba(130,255,185,0.24)]",
    "focus-visible:border-[#5ee097] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(25,130,70,0.42),inset_0_-1px_0_rgba(130,255,185,0.24)]",
  ),
  pink: cn(
    "hover:border-[#f472b6] hover:shadow-[inset_0_-10px_30px_-5px_rgba(190,35,115,0.4),inset_0_-1px_0_rgba(255,185,225,0.26)]",
    "focus-visible:border-[#f472b6] focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(190,35,115,0.4),inset_0_-1px_0_rgba(255,185,225,0.26)]",
  ),
};

/** Gradient always on overlay; visibility is opacity-only for smooth crossfade. */
const labelGradientStaticByVariant: Record<ServicesContinueGlowVariant, string> = {
  cyan: "bg-gradient-to-r from-[#e8f8ff] via-[#a2d8ff] to-[#6d9fe8] bg-clip-text text-transparent",
  amber: "bg-gradient-to-r from-[#fff8ec] via-[#ffd9a2] to-[#e89550] bg-clip-text text-transparent",
  violet:
    "bg-gradient-to-r from-[#f5e8ff] via-[#d4b8ff] to-[#8b6fe8] bg-clip-text text-transparent",
  green: "bg-gradient-to-r from-[#e8fff2] via-[#a2ffc4] to-[#3d9f6d] bg-clip-text text-transparent",
  pink: "bg-gradient-to-r from-[#ffe8f4] via-[#ffa2d8] to-[#e86d9f] bg-clip-text text-transparent",
};

const arrowFilterByVariant: Record<ServicesContinueGlowVariant, string> = {
  cyan: "group-hover:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.2)_hue-rotate(175deg)] group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.2)_hue-rotate(175deg)]",
  amber:
    "group-hover:[filter:brightness(0)_invert(0.92)_sepia(1)_saturate(2.8)_hue-rotate(352deg)] group-focus-visible:[filter:brightness(0)_invert(0.92)_sepia(1)_saturate(2.8)_hue-rotate(352deg)]",
  violet:
    "group-hover:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3)_hue-rotate(250deg)] group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3)_hue-rotate(250deg)]",
  green:
    "group-hover:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.1)_hue-rotate(95deg)] group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.1)_hue-rotate(95deg)]",
  pink: "group-hover:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.2)_hue-rotate(300deg)] group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.2)_hue-rotate(300deg)]",
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

export function servicesContinueLinkClassName(variant: ServicesContinueGlowVariant): string {
  return cn(linkShellClassName, linkAccentByVariant[variant]);
}

/** Two stacked spans: solid fades out while gradient fades in (GPU-friendly). */
export function servicesContinueLabelStackClassName(): string {
  return "relative isolate inline-grid shrink-0 justify-items-start leading-[24px]";
}

export function servicesContinueLabelSolidLayerClassName(): string {
  return cn(
    labelTypographyClassName,
    "text-[#252525]",
    labelOpacityTransitionClassName,
    "group-hover:opacity-0 group-focus-visible:opacity-0",
  );
}

export function servicesContinueLabelGradientLayerClassName(
  variant: ServicesContinueGlowVariant,
): string {
  return cn(
    labelTypographyClassName,
    labelGradientStaticByVariant[variant],
    labelOpacityTransitionClassName,
    "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",
  );
}

export function servicesContinueArrowClassName(variant: ServicesContinueGlowVariant): string {
  return cn(arrowBaseClassName, arrowFilterByVariant[variant]);
}
