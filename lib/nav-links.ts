/** Fallback route when quote UI is unavailable; primary CTA opens the quote modal. */
export const GET_A_QUOTE_HREF = "/contact" as const;

/** Click-to-call for header phone button (E.164 in tel URI, no spaces). */
export const COMPANY_PHONE_TEL_HREF = "tel:+37444343000" as const;

/** Desktop primary nav link (matches previous Navbar styling). */
export const PRIMARY_NAV_LINK_DESKTOP_CLASS =
  "font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-sm lg:text-base whitespace-nowrap transition-opacity hover:opacity-80";

/**
 * White hairline (`1px`) under nav labels: `::after` width animates **left → right** on
 * hover / focus-visible. Parent must be `relative`; keep **small** `pb-*` so the line sits
 * close to the text.
 */
export const PRIMARY_NAV_LINK_UNDERLINE_TRACK_CLASS =
  "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:max-w-full after:translate-y-px after:rounded-full after:bg-white after:transition-[width] after:duration-300 after:ease-out after:content-[''] hover:after:w-full focus-visible:after:w-full" as const;

/** Current route — underline stays full width. */
export const PRIMARY_NAV_LINK_UNDERLINE_ACTIVE_CLASS = "after:w-full" as const;

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
