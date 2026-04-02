/** Click-to-call for header phone button (E.164 in tel URI, no spaces). */
export const COMPANY_PHONE_TEL_HREF = "tel:+37444343000" as const;

/** Desktop primary nav link (matches previous Navbar styling). */
export const PRIMARY_NAV_LINK_DESKTOP_CLASS =
  "font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-sm lg:text-base whitespace-nowrap transition-opacity hover:opacity-80";

export const PRIMARY_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
] as const;

export type PrimaryNavLink = (typeof PRIMARY_NAV_LINKS)[number];
