import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const DM_SANS_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

/** Figma desktop footer — services links column (`10:275`). */
export function SiteFooterDesktopServicesColumn() {
  const t = useTranslations();

  return (
    <div
      className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[130.078px]"
      data-node-id="10:275"
      data-name="Footer Column"
    >
      <p
        className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[20px] text-white whitespace-nowrap"
        data-node-id="10:276"
        style={DM_SANS_VARIATION}
      >
        {t("footer.services")}
      </p>
      <div
        className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0"
        data-node-id="10:277"
        data-name="Footer Links"
      >
        <Link
          href="/services/website-development"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:278"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:279"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:281"
              style={DM_SANS_VARIATION}
            >
              {t("footer.serviceLabels.website")}
            </p>
          </div>
        </Link>
        <Link
          href="/services/mobile-app-development"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:283"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:284"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:286"
              style={DM_SANS_VARIATION}
            >
              {t("footer.serviceLabels.mobileApp")}
            </p>
          </div>
        </Link>
        <Link
          href="/services/crm-systems"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:288"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:289"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:291"
              style={DM_SANS_VARIATION}
            >
              {t("footer.serviceLabels.crmSystems")}
            </p>
          </div>
        </Link>
        <Link
          href="/services/saas-development"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:293"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:294"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:296"
              style={DM_SANS_VARIATION}
            >
              {t("footer.serviceLabels.saasPlatforms")}
            </p>
          </div>
        </Link>
        <Link
          href="/services/ai-product-development"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:298"
          data-name="Link"
        >
          <div
            className="content-stretch flex gap-[6px] items-center relative shrink-0"
            data-node-id="10:299"
            data-name="Master Link"
          >
            <p
              className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
              data-node-id="10:301"
              style={DM_SANS_VARIATION}
            >
              {t("footer.serviceLabels.aiIntegration")}
            </p>
          </div>
        </Link>
        <Link
          href="/services"
          className="content-stretch flex items-start relative shrink-0"
          data-node-id="10:303"
        >
          <p
            className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap"
            style={DM_SANS_VARIATION}
          >
            {t("footer.serviceLabels.all")}
          </p>
        </Link>
      </div>
    </div>
  );
}
