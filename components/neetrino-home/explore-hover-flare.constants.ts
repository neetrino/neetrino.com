import { assetUrl } from "@/lib/assets";

/**
 * Lens flare asset for Explore hover — black areas blend away with `mix-blend-screen`.
 */
export const EXPLORE_HOVER_FLARE_SRC = assetUrl("images/neetrino-home/explore-hover-flare.png");

/** Pill-shaped Explore controls (`MeetOurTeamExplorePill` — about + home Who we are; legacy `Group2` if reused). */
export const EXPLORE_PILL_HOVER_FLARE_POSITION_CLASS = "inset-[-118%_-96%]";

export const EXPLORE_PILL_HOVER_FLARE_EXTRA_CLASS =
  "duration-[480ms] group-hover:brightness-[1.22] group-focus-within:brightness-[1.22]";
