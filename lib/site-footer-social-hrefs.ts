import { CONTACT_SOCIAL_LINKS } from "@/components/contact/content";

/** Footer social row order — matches desktop `SiteFooter` (Facebook → … → Telegram). */
export const FOOTER_SOCIAL_ICON_HREFS = [
  CONTACT_SOCIAL_LINKS[0].href,
  CONTACT_SOCIAL_LINKS[1].href,
  CONTACT_SOCIAL_LINKS[2].href,
  "https://www.behance.net/",
  "https://www.youtube.com/",
  CONTACT_SOCIAL_LINKS[4].href,
  CONTACT_SOCIAL_LINKS[3].href,
] as const;
