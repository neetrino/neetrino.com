import { CONTACT_DETAILS, CONTACT_SOCIAL_LINKS } from "@/components/contact/content";
import { FIGMA_ASSETS } from "@/lib/figma-assets";

export const SITE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_COMPANY_LINKS = SITE_NAV_LINKS;

export const FOOTER_SERVICE_OVERVIEW_LINKS = [
  { href: "/services", label: "All services" },
] as const;

export const FOOTER_SERVICE_LABELS = [
  "Website Development",
  "AI & Bot Solutions",
  "Mobile App Development",
  "CRM Systems",
  "Cloud Solutions",
  "SaaS Platforms",
] as const;

export const FOOTER_SOCIALS = [
  {
    href: CONTACT_SOCIAL_LINKS.find(({ label }) => label === "Facebook")?.href,
    icon: FIGMA_ASSETS.imgSocialMediaIconSquareFacebook,
    label: "Facebook",
  },
  {
    href: CONTACT_SOCIAL_LINKS.find(({ label }) => label === "Instagram")?.href,
    icon: FIGMA_ASSETS.imgSocialMediaIconSquareInstagram,
    label: "Instagram",
  },
  {
    href: CONTACT_SOCIAL_LINKS.find(({ label }) => label === "LinkedIn")?.href,
    icon: FIGMA_ASSETS.imgGroup73,
    label: "LinkedIn",
  },
  {
    href: CONTACT_SOCIAL_LINKS.find(({ label }) => label === "Telegram")?.href,
    icon: FIGMA_ASSETS.imgGroup,
    label: "Telegram",
  },
  {
    href: CONTACT_SOCIAL_LINKS.find(({ label }) => label === "WhatsApp")?.href,
    icon: FIGMA_ASSETS.imgGroup74,
    label: "WhatsApp",
  },
  {
    href: CONTACT_SOCIAL_LINKS.find(({ label }) => label === "Viber")?.href,
    icon: FIGMA_ASSETS.imgVector6,
    label: "Viber",
  },
].filter((item) => Boolean(item.href)) as { href: string; icon: string; label: string }[];

export const FOOTER_CONTACT_LINKS = {
  address: {
    label: CONTACT_DETAILS.address,
    href: CONTACT_DETAILS.mapsUrl,
  },
  email: {
    label: CONTACT_DETAILS.email,
    href: `mailto:${CONTACT_DETAILS.email}`,
  },
  phone: {
    label: CONTACT_DETAILS.phoneDisplay,
    href: CONTACT_DETAILS.phoneTelHref,
  },
  hours: CONTACT_DETAILS.workingHours,
} as const;

export const FOOTER_CTA_LINKS = [
  { href: "/contact", label: "Start a project" },
  { href: `mailto:${CONTACT_DETAILS.email}`, label: "Email us" },
] as const;

export const PHONE_LINK = "tel:+37444343000";
