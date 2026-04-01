import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { CONTACT_SOCIALS } from "@/components/contact/content";

export const companyLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  { href: "/services", label: "Website" },
  { href: "/services", label: "Mobile App" },
  { href: "/services", label: "CRM Systems" },
  { href: "/services", label: "SAAS Platforms" },
  { href: "/services", label: "AI integration" },
  { href: "/services", label: "All" },
] as const;

const contactSocialHrefByLabel = Object.fromEntries(
  CONTACT_SOCIALS.map(({ label, href }) => [label, href]),
) as Record<string, string>;

export const socialLinks = [
  {
    href: contactSocialHrefByLabel.Facebook,
    icon: FIGMA_ASSETS.imgSocialMediaIconSquareFacebook,
    label: "Facebook",
  },
  {
    href: contactSocialHrefByLabel.Instagram,
    icon: FIGMA_ASSETS.imgSocialMediaIconSquareInstagram,
    label: "Instagram",
  },
  {
    href: contactSocialHrefByLabel.LinkedIn,
    icon: FIGMA_ASSETS.imgGroup73,
    label: "LinkedIn",
  },
  {
    href: contactSocialHrefByLabel.Telegram,
    icon: FIGMA_ASSETS.imgGroup,
    label: "Telegram",
  },
  {
    href: contactSocialHrefByLabel.WhatsApp,
    icon: FIGMA_ASSETS.imgGroup74,
    label: "WhatsApp",
  },
  {
    href: contactSocialHrefByLabel.Viber,
    icon: FIGMA_ASSETS.imgVector6,
    label: "Viber",
  },
] as const;
