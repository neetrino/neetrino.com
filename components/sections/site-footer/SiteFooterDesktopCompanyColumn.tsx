import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const DM_SANS_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

/** Figma desktop footer — company links column (`10:243`). */
export function SiteFooterDesktopCompanyColumn() {
  const t = useTranslations();

  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[114.275px]"
      data-node-id="10:243"
      data-name="Footer Column"
    >
      <p
        className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
        data-node-id="10:244"
        style={DM_SANS_VARIATION}
      >
        {t("footer.company")}
      </p>
      <div
        className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
        data-node-id="10:245"
        data-name="Footer Links"
      >
        <Link
          href="/about-us"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:246"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:247"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:249"
              style={DM_SANS_VARIATION}
            >
              {t("nav.about")}
            </p>
          </div>
        </Link>
        <Link
          href="/team"
          className="content-stretch flex gap-[6px] items-center relative shrink-0"
          data-node-id="10:251"
          data-name="Master Link"
        >
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
            data-node-id="10:253"
            style={DM_SANS_VARIATION}
          >
            {t("nav.team")}
          </p>
        </Link>
        <Link
          href="/contact"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:255"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:256"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:258"
              style={DM_SANS_VARIATION}
            >
              {t("footer.contactUs")}
            </p>
          </div>
        </Link>
        <Link
          href="/portfolio"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:260"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:261"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:263"
              style={DM_SANS_VARIATION}
            >
              {t("nav.portfolio")}
            </p>
          </div>
        </Link>
        <Link
          href="/services"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:265"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:266"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:268"
              style={DM_SANS_VARIATION}
            >
              {t("nav.services")}
            </p>
          </div>
        </Link>
        <Link
          href="/blog"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:270"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:271"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:273"
              style={DM_SANS_VARIATION}
            >
              {t("nav.blog")}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
