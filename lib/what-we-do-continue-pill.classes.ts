import { cn } from "@/lib/utils";

/**
 * Desktop “Continue” pill on What we do card tiles: white default; hover / focus-visible
 * dark pill, cyan border, inner blue glow, gradient label + tinted arrow (matches design ref).
 */
export const whatWeDoContinuePillLinkInteractiveClassName = cn(
  "group flex gap-[4px] content-stretch items-center overflow-clip rounded-[40px] border border-transparent bg-white px-[24px] py-[16px] no-underline",
  "transition-[background-color,border-color,box-shadow] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
  "hover:border-[#7eb6e0] hover:bg-[#101015]",
  "hover:shadow-[inset_0_-10px_30px_-5px_rgba(40,110,200,0.42),inset_0_-1px_0_rgba(130,195,255,0.22)]",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60",
  "focus-visible:border-[#7eb6e0] focus-visible:bg-[#101015]",
  "focus-visible:shadow-[inset_0_-10px_30px_-5px_rgba(40,110,200,0.42),inset_0_-1px_0_rgba(130,195,255,0.22)]",
);

const whatWeDoContinuePillLabelGradientClassName = cn(
  "group-hover:bg-gradient-to-r group-hover:from-[#e8f8ff] group-hover:via-[#a2d8ff] group-hover:to-[#6d9fe8]",
  "group-hover:bg-clip-text group-hover:text-transparent",
  "group-focus-visible:bg-gradient-to-r group-focus-visible:from-[#e8f8ff] group-focus-visible:via-[#a2d8ff] group-focus-visible:to-[#6d9fe8]",
  "group-focus-visible:bg-clip-text group-focus-visible:text-transparent",
);

export const whatWeDoContinuePillLabelClassName = cn(
  "relative shrink-0 whitespace-nowrap text-[18px] font-medium leading-[24px] not-italic text-[#252525]",
  "transition-[color,background-image] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
  whatWeDoContinuePillLabelGradientClassName,
);

/** Arrow bitmap is dark-on-white; on hover/focus tint toward cyan to match label. */
export const whatWeDoContinuePillArrowImageClassName = cn(
  "absolute block size-full max-w-none",
  "transition-[filter] duration-[280ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
  "group-hover:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.2)_hue-rotate(175deg)]",
  "group-focus-visible:[filter:brightness(0)_invert(0.9)_sepia(1)_saturate(3.2)_hue-rotate(175deg)]",
);
