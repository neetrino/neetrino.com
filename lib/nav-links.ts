import { cn } from "@/lib/utils";

/** Fallback route when quote UI is unavailable; primary CTA opens the quote modal. */
export const GET_A_QUOTE_HREF = "/contact" as const;

/** Click-to-call for header phone button (E.164 in tel URI, no spaces). */
export const COMPANY_PHONE_TEL_HREF = "tel:+37444343000" as const;

/** Desktop primary nav link (matches previous Navbar styling). */
export const PRIMARY_NAV_LINK_DESKTOP_CLASS =
  "font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-sm lg:text-base whitespace-nowrap transition-opacity hover:opacity-80";

/**
 * Hover / focus: `::after` grows left→right. Silky **horizontal taper** (feathered ends), glass **inset**
 * rim + cool **aurora** glow (tones aligned with pill hovers). Parent: `relative`.
 */
export const PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS = cn(
  "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:content-['']",
  "after:h-px after:max-w-full after:w-0 after:translate-y-[2px] after:rounded-full after:origin-left",
  "after:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(162,216,255,0.12)_5%,rgba(200,236,255,0.55)_14%,rgba(248,252,255,0.95)_32%,rgb(255,255,255)_50%,rgba(248,252,255,0.95)_68%,rgba(200,236,255,0.55)_86%,rgba(162,216,255,0.12)_95%,rgba(255,255,255,0)_100%)]",
  "after:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(65,120,200,0.12),0_0_4px_rgba(255,255,255,0.28),0_0_12px_rgba(170,220,255,0.38),0_0_28px_rgba(100,170,240,0.18)]",
  "after:transition-[width,box-shadow] after:duration-[340ms] after:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:after:w-full focus-visible:after:w-full",
);

/**
 * Active route: full width + **richer bloom** (tighter core + wide soft halo), overrides track shadows.
 */
export const PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS = cn(
  "after:w-full",
  "after:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(70,125,210,0.14),0_0_6px_rgba(255,255,255,0.35),0_0_16px_rgba(185,230,255,0.48),0_0_34px_rgba(130,195,255,0.34),0_0_52px_rgba(90,155,235,0.14)]",
);

export type NavSubLink = {
  readonly labelKey: string;
  readonly href: string;
};

export type NavItem =
  | { readonly kind: "link"; readonly labelKey: string; readonly href: string }
  | { readonly kind: "group"; readonly labelKey: string; readonly items: readonly NavSubLink[] };

export const PRIMARY_NAV_LINKS: readonly NavItem[] = [
  { kind: "link", labelKey: "home", href: "/" },
  { kind: "link", labelKey: "services", href: "/services" },
  { kind: "link", labelKey: "portfolio", href: "/portfolio" },
  { kind: "link", labelKey: "about", href: "/about-us" },
  { kind: "link", labelKey: "contact", href: "/contact" },
  {
    kind: "group",
    labelKey: "more",
    items: [
      { labelKey: "blog", href: "/blog" },
      { labelKey: "team", href: "/team" },
    ],
  },
] as const;
