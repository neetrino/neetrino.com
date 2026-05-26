import Image from "next/image";
import { useTranslations } from "next-intl";
import { SITE_FOOTER_SOCIAL_ROW_ICONS } from "@/lib/site-footer-social-row-icons.constants";
import { cn } from "@/lib/utils";

const DM_SANS_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

/** Figma desktop footer — social row + copyright (`10:343`, `10:366`). */
export function SiteFooterDesktopSocialCopyright() {
  const t = useTranslations();

  return (
    <>
      <div
        className="absolute z-10 content-stretch flex gap-[22px] items-center justify-center left-[1075px] top-[527px]"
        data-node-id="10:343"
        data-name="Social Media Container"
      >
        {SITE_FOOTER_SOCIAL_ROW_ICONS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="relative block shrink-0 text-white transition-opacity hover:opacity-80"
          >
            <span className={cn("relative block", item.wrapperClass)}>
              {item.innerClass ? (
                <span
                  className={cn("pointer-events-none relative block size-full", item.innerClass)}
                >
                  <Image
                    alt=""
                    fill
                    unoptimized
                    className="object-contain"
                    src={item.src}
                    sizes="32px"
                  />
                </span>
              ) : (
                <span className="pointer-events-none relative block size-full">
                  <Image
                    alt=""
                    fill
                    unoptimized
                    className="object-contain"
                    src={item.src}
                    sizes="32px"
                  />
                </span>
              )}
            </span>
          </a>
        ))}
      </div>
      <p
        className="absolute z-10 font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] left-[110px] text-[#dcd5d5] text-[18px] top-[536.01px] whitespace-nowrap"
        data-node-id="10:366"
        style={DM_SANS_VARIATION}
      >
        {t("footer.copyright")}
      </p>
    </>
  );
}
