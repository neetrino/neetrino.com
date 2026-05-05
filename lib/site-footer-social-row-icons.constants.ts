import { FOOTER_SOCIAL_ICON_HREFS } from "@/lib/site-footer-social-hrefs";
import { SITE_FOOTER_MOBILE_539 } from "@/lib/site-footer-mobile-539-assets.constants";

/** Shared footer social row — same SVGs + order as Figma `539:1824` (`SITE_FOOTER_MOBILE_539`). */
export type SiteFooterSocialRowIconItem = {
  readonly href: (typeof FOOTER_SOCIAL_ICON_HREFS)[number];
  readonly label: string;
  readonly src: string;
  readonly wrapperClass: string;
  readonly innerClass?: string;
};

export const SITE_FOOTER_SOCIAL_ROW_ICONS: readonly SiteFooterSocialRowIconItem[] = [
  {
    href: FOOTER_SOCIAL_ICON_HREFS[0],
    label: "Facebook",
    src: SITE_FOOTER_MOBILE_539.socialFacebook,
    wrapperClass: "h-[19px] w-[11px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[1],
    label: "Instagram",
    src: SITE_FOOTER_MOBILE_539.socialInstagram,
    wrapperClass: "size-[19px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[2],
    label: "LinkedIn",
    src: SITE_FOOTER_MOBILE_539.socialLinkedIn,
    wrapperClass: "h-[18px] w-[19px]",
    innerClass: "absolute inset-[4.58%_0.79%_0.19%_4.47%]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[3],
    label: "Behance",
    src: SITE_FOOTER_MOBILE_539.socialBehance,
    wrapperClass: "h-[15px] w-[24px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[4],
    label: "YouTube",
    src: SITE_FOOTER_MOBILE_539.socialYouTube,
    wrapperClass: "h-[15px] w-[21px]",
    innerClass: "absolute inset-[2.64%_1.19%_4.05%_4.52%]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[5],
    label: "WhatsApp",
    src: SITE_FOOTER_MOBILE_539.socialWhatsApp,
    wrapperClass: "size-[20px]",
  },
  {
    href: FOOTER_SOCIAL_ICON_HREFS[6],
    label: "Telegram",
    src: SITE_FOOTER_MOBILE_539.socialTelegram,
    wrapperClass: "h-[20.472px] w-[18.796px]",
  },
];
