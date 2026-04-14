/** Fallback route when quote UI is unavailable; primary CTA opens the quote modal. */
export const GET_A_QUOTE_HREF = "/contact" as const;

/** Click-to-call for header phone button (E.164 in tel URI, no spaces). */
export const COMPANY_PHONE_TEL_HREF = "tel:+37444343000" as const;

/** Desktop primary nav link (matches previous Navbar styling). */
export const PRIMARY_NAV_LINK_DESKTOP_CLASS =
  "font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-sm lg:text-base whitespace-nowrap transition-opacity hover:opacity-80";

export type NavSubLink = {
  readonly label: string;
  readonly href: string;
};

export type NavItem =
  | { readonly kind: "link"; readonly label: string; readonly href: string }
  | { readonly kind: "group"; readonly label: string; readonly items: readonly NavSubLink[] };

export const PRIMARY_NAV_LINKS: readonly NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  { kind: "link", label: "Services", href: "/services" },
  { kind: "link", label: "Portfolio", href: "/portfolio" },
  { kind: "link", label: "About", href: "/about-us" },
  { kind: "link", label: "Contact", href: "/contact" },
  {
    kind: "group",
    label: "More",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Team", href: "/team" },
    ],
  },
] as const;
