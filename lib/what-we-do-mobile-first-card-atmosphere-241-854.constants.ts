/**
 * Mobile What we do — atmosphere stack (Figma `241:854`, Rectangle 17417) under the tile, card above.
 * Used for: Website, SaaS platforms, AI integrations (`website-development`, `saas-development`, `ai-product-development`).
 * MCP export: asset wrapper `inset-[-62.8%_-32.37%_-64.46%_-32.37%]` vs `size-full` slot.
 */

/** Wraps atmosphere + `article` so glow is a separate layer below the card in z-order. */
export const WHAT_WE_DO_MOBILE_FIRST_CARD_STACK_ROOT_CLASS = "relative isolate w-full" as const;

/** Fills the stack slot behind the card (`z-0`); same footprint as the tile, glow bleeds via inset. */
export const WHAT_WE_DO_MOBILE_FIRST_CARD_ATMOSPHERE_BELOW_CARD_CLASS =
  "pointer-events-none absolute inset-0 z-0 overflow-visible" as const;

/** Card paints above the atmosphere layer. */
export const WHAT_WE_DO_MOBILE_FIRST_CARD_ARTICLE_ABOVE_ATMOSPHERE_CLASS = "relative z-10" as const;

export const WHAT_WE_DO_MOBILE_FIRST_CARD_ATMOSPHERE_241_854_INSET_WRAPPER_CLASS =
  "absolute inset-[-62.8%_-32.37%_-64.46%_-32.37%]" as const;

/** Last tile (AI integrations) — glow lower than Website / SaaS in the same stack slot. */
export const WHAT_WE_DO_MOBILE_AI_LAST_CARD_ATMOSPHERE_NUDGE_Y_CLASS = "translate-y-15" as const;
