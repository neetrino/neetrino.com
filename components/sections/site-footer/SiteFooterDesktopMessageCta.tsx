import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE_FOOTER_MOBILE_539 } from "@/lib/site-footer-mobile-539-assets.constants";
import { cn } from "@/lib/utils";
import type { SiteFooterDesktopSendCtaLayout } from "./site-footer-desktop-send-cta-layout";

const DM_SANS_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

type SiteFooterDesktopMessageCtaProps = SiteFooterDesktopSendCtaLayout;

/** Figma desktop footer — message column + send CTA (`10:324`–`10:342`). */
export function SiteFooterDesktopMessageCta({
  footerSendWidthClassName,
  footerSendIconLeftClassName,
}: SiteFooterDesktopMessageCtaProps) {
  const t = useTranslations();

  return (
    <div
      className="absolute z-10 content-stretch flex flex-col items-start left-[912.88px] top-[116.02px] w-[426.122px]"
      data-node-id="10:324"
      data-name="Footer Column"
    >
      <div
        className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[436px]"
        data-node-id="10:325"
        data-name="24px"
      >
        <div
          className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0"
          data-node-id="10:326"
        >
          <p
            className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#eee3e3] text-[20px] whitespace-nowrap"
            data-node-id="10:327"
            style={DM_SANS_VARIATION}
          >
            {t("footer.messageUs")}
          </p>
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#dcd5d5] text-[18px] w-[358.364px]"
            data-node-id="10:328"
            style={DM_SANS_VARIATION}
          >
            {t("footer.messageDescription")}
          </p>
        </div>
        <div
          className="content-stretch flex flex-col items-start relative shrink-0 w-[426px]"
          data-node-id="10:329"
          data-name="16px"
        >
          <div
            className="h-[68px] relative shrink-0 w-full"
            data-node-id="10:330"
            data-name="Input Text"
          >
            <div
              className="absolute bg-white border border-[#d9dbe9] border-solid inset-0 rounded-[108px] shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]"
              data-node-id="10:332"
              data-name="Input"
            />
            <div
              className="absolute content-stretch flex gap-[8px] items-center left-[23px] top-[25px]"
              data-node-id="10:339"
              data-name="Input Left"
            >
              <p
                className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#dcd5d5] text-[16px] whitespace-nowrap"
                data-node-id="10:341"
                style={DM_SANS_VARIATION}
              >
                {t("footer.placeholder")}
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/contact"
          className={cn(
            "relative block h-[56px] shrink-0 cursor-pointer rounded-[35px]",
            footerSendWidthClassName,
          )}
          data-node-id="10:342"
          data-name="Send Button"
        >
          <div
            className="absolute bg-[#4a3aff] inset-0 rounded-[35px]"
            data-node-id="I10:342;2:6"
          />
          <div
            className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[28.57%_50.83%_28.57%_15%] justify-center leading-[0] not-italic text-[16px] text-left text-white whitespace-nowrap"
            data-node-id="I10:342;2:7"
          >
            <p className="leading-[24px]">{t("footer.send")}</p>
          </div>
          <div
            className={cn("absolute top-[7px] size-[42px]", footerSendIconLeftClassName)}
            data-node-id="I10:342;2:8"
          >
            <Image
              alt=""
              fill
              unoptimized
              className="object-contain"
              src={SITE_FOOTER_MOBILE_539.sendArrow}
              sizes="42px"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
