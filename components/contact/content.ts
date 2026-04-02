import { COMPANY_PHONE_TEL_HREF } from "@/lib/nav-links";

/** Single source for phone display + tel: / wa.me / viber. */
const PHONE_E164_DIGITS = "37444343000" as const;

export const CONTACT_CONTENT = {
  hero: {
    eyebrow: "GET IN TOUCH",
    title: "CONTACT US",
    body: "Reach us by email or phone, visit our office, or send a project inquiry — we respond on business days.",
  },
  sectionTitles: {
    reachUs: "Reach us",
    office: "Office",
    location: "Location",
    followUs: "Follow us",
    inquiry: "Send an inquiry",
  },
} as const;

export const CONTACT_DETAILS = {
  email: "info@neetrino.com",
  /** Formatted for display */
  phoneDisplay: "+374 44 343 000",
  phoneTelHref: COMPANY_PHONE_TEL_HREF,
  workingHours: "Mon - Fri, 10:00 - 19:00",
  address: "108/10 Andranik Zoravar St., Yerevan, Armenia",
  mapsUrl:
    "https://www.google.com/maps/place/Neetrino+IT+Company/@40.1684411,44.3634731,12z/data=!4m6!3m5!1s0x6a7d86fee77d7891:0x1a931845d2acd1e2!8m2!3d40.1684703!4d44.4458742!16s%2Fg%2F11tjg95w_6?entry=tts",
  mapsEmbedUrl: "https://www.google.com/maps?q=40.1684703,44.4458742&z=15&output=embed",
} as const;

/**
 * Social / messenger links — shown as icons only (labels are for accessibility).
 * No duplicate of email/phone blocks; messaging apps listed here only.
 */
export const CONTACT_SOCIAL_LINKS = [
  { id: "facebook", href: "https://www.facebook.com/Neetrino", label: "Facebook" },
  { id: "instagram", href: "https://www.instagram.com/neetrino_it_agency/", label: "Instagram" },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/neetrino-it-agency/",
    label: "LinkedIn",
  },
  { id: "telegram", href: "https://telegram.me/neetrino", label: "Telegram" },
  { id: "whatsapp", href: `https://wa.me/${PHONE_E164_DIGITS}`, label: "WhatsApp" },
  {
    id: "viber",
    href: `viber://chat?number=%2B${PHONE_E164_DIGITS}`,
    label: "Viber",
  },
] as const;

export type ContactSocialId = (typeof CONTACT_SOCIAL_LINKS)[number]["id"];
