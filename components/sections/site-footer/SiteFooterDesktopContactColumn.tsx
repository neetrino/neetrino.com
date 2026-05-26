import Image from "next/image";
import { useTranslations } from "next-intl";
import { CONTACT_DETAILS } from "@/components/contact/content";
import { SITE_FOOTER_MOBILE_539 } from "@/lib/site-footer-mobile-539-assets.constants";

const DM_SANS_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

/** Figma desktop footer — contact column (`10:304`). */
export function SiteFooterDesktopContactColumn() {
  const t = useTranslations();

  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[244px]"
      data-node-id="10:304"
      data-name="Footer Column"
    >
      <p
        className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
        data-node-id="10:305"
        style={DM_SANS_VARIATION}
      >
        {t("footer.contact")}
      </p>
      <div
        className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
        data-node-id="10:306"
        data-name="Footer Links"
      >
        <div
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:307"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:308"
            data-name="Master Link"
          >
            <div
              className="relative h-[18px] w-[14px] shrink-0"
              data-node-id="10:310"
              data-name="Vector"
            >
              <Image
                alt=""
                fill
                unoptimized
                className="object-contain"
                src={SITE_FOOTER_MOBILE_539.contactAddress}
                sizes="14px"
              />
            </div>
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:311"
              style={DM_SANS_VARIATION}
            >
              {t("footer.address")}
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex gap-[9px] items-center relative shrink-0"
          data-node-id="10:313"
        >
          <div
            className="relative h-[15px] w-[20px] shrink-0"
            data-node-id="10:314"
            data-name="Vector"
          >
            <Image
              alt=""
              fill
              unoptimized
              className="object-contain"
              src={SITE_FOOTER_MOBILE_539.contactEmail}
              sizes="20px"
            />
          </div>
          <a
            className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap"
            href={`mailto:${CONTACT_DETAILS.email}`}
            data-node-id="10:315"
            style={DM_SANS_VARIATION}
            target="_blank"
            rel="noreferrer"
          >
            <p
              className="cursor-pointer font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] text-[18px]"
              style={DM_SANS_VARIATION}
            >
              info@neetrino.com
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex gap-[9px] items-center relative shrink-0"
          data-node-id="10:316"
        >
          <div className="relative size-[18px] shrink-0" data-node-id="10:317" data-name="Vector">
            <Image
              alt=""
              fill
              unoptimized
              className="object-contain"
              src={SITE_FOOTER_MOBILE_539.contactPhone}
              sizes="18px"
            />
          </div>
          <a
            className="block font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[0px] text-center text-white whitespace-nowrap"
            href={CONTACT_DETAILS.phoneTelHref}
            data-node-id="10:318"
            style={DM_SANS_VARIATION}
            target="_blank"
            rel="noreferrer"
          >
            <p className="cursor-pointer leading-[18px] text-[16px]" style={DM_SANS_VARIATION}>
              +374 44 343 000
            </p>
          </a>
        </div>
        <div
          className="content-stretch flex gap-[9px] items-start relative shrink-0"
          data-node-id="10:319"
        >
          <div className="relative h-[21px] w-[21.5px] shrink-0" data-node-id="10:320">
            <Image
              alt=""
              fill
              unoptimized
              className="object-contain"
              src={SITE_FOOTER_MOBILE_539.contactHours}
              sizes="22px"
            />
          </div>
          <p
            className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[16px] text-white whitespace-pre"
            data-node-id="10:323"
            style={DM_SANS_VARIATION}
          >
            {`${t("footer.workingHoursLabel")}\u00a0`}
            <br aria-hidden="true" />
            {t("footer.workingHoursValue")}
          </p>
        </div>
      </div>
    </div>
  );
}
