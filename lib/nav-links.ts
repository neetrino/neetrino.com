/** Fallback route when quote UI is unavailable; primary CTA opens the quote modal. */
export const GET_A_QUOTE_HREF = "/contact" as const;

/** Click-to-call for header phone button (E.164 in tel URI, no spaces). */
export const COMPANY_PHONE_TEL_HREF = "tel:+37444343000" as const;

/** Desktop primary nav link (matches previous Navbar styling). */
export const PRIMARY_NAV_LINK_DESKTOP_CLASS =
  "font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-sm lg:text-base whitespace-nowrap transition-opacity hover:opacity-80";

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
