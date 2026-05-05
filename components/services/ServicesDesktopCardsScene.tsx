import { getTranslations } from "next-intl/server";
import {
  getServicesCatalog,
  serviceDetailHref,
  serviceTitleSingleLine,
  type ServiceCatalogEntry,
  type ServiceSlug,
} from "./service-pages-data";
import { ServicesCatalogCrmCard } from "./ServicesCatalogCrmCard";
import { ServicesCatalogSaasCard } from "./ServicesCatalogSaasCard";
import {
  ServicesCard3 as ServicesLowerCard3,
  ServicesCard2 as ServicesLowerCard2,
} from "./ServicesCardsBlockA";
import { ServicesCard, ServicesCard1 } from "./ServicesCardsBlockB";
import type { AppLocale } from "@/lib/i18n/locales";

const SERVICES_LOWER_ROW_DENSE_STACK_CLASS = "gap-[24px] pt-[32px] pb-[60px]";
const SERVICES_LOWER_ROW_DEFAULT_STACK_CLASS = "gap-[30px] py-[60px]";

/** Mobile card: lift inner stack for long copy (hy + ru). */
function servicesMobileLowerRowPaddingClass(locale: AppLocale): string {
  return locale === "hy" || locale === "ru"
    ? SERVICES_LOWER_ROW_DENSE_STACK_CLASS
    : SERVICES_LOWER_ROW_DEFAULT_STACK_CLASS;
}

/** AI card: lift inner stack for long hy copy only. */
function servicesAiLowerRowPaddingClass(locale: AppLocale): string {
  return locale === "hy"
    ? SERVICES_LOWER_ROW_DENSE_STACK_CLASS
    : SERVICES_LOWER_ROW_DEFAULT_STACK_CLASS;
}

const SERVICES_MOBILE_LOWER_CARD_BASE_CLASS =
  "absolute content-stretch flex min-h-0 flex-col h-[463px] items-start left-[108px] overflow-clip px-[40px] rounded-[38px] top-[906px] w-[369px]";

const SERVICES_AI_LOWER_CARD_BASE_CLASS =
  "absolute content-stretch flex min-h-0 flex-col h-[463px] items-start left-[535px] overflow-clip px-[40px] rounded-[38px] top-[906px] w-[369px]";

function servicesMobileLowerCardClassName(locale: AppLocale): string {
  return `${SERVICES_MOBILE_LOWER_CARD_BASE_CLASS} ${servicesMobileLowerRowPaddingClass(locale)}`;
}

function servicesAiLowerCardClassName(locale: AppLocale): string {
  return `${SERVICES_AI_LOWER_CARD_BASE_CLASS} ${servicesAiLowerRowPaddingClass(locale)}`;
}

/** Top card row + lower cards (inside Light Rays layer). */
type ServicesDesktopCardsSceneProps = {
  locale: AppLocale;
};

export async function ServicesDesktopCardsScene({ locale }: ServicesDesktopCardsSceneProps) {
  const t = await getTranslations();
  const continueLabel = t("cta.continue");
  const services = getServicesCatalog(locale);
  const bySlug = services.reduce(
    (acc, entry) => {
      acc[entry.slug] = entry;
      return acc;
    },
    {} as Record<ServiceSlug, ServiceCatalogEntry>,
  );

  return (
    <>
      <div
        className="-translate-x-1/2 absolute content-stretch flex gap-[58px] items-stretch left-[calc(50%+0.5px)] top-[370px]"
        data-node-id="165:689"
      >
        <ServicesCatalogSaasCard
          title={bySlug["saas-development"].title}
          description={bySlug["saas-development"].description}
          continueLabel={continueLabel}
          continueHref={serviceDetailHref("saas-development")}
          continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["saas-development"].title)}`}
        />
        <ServicesCatalogCrmCard
          title={bySlug["crm-systems"].title}
          description={bySlug["crm-systems"].description}
          continueLabel={continueLabel}
          continueHref={serviceDetailHref("crm-systems")}
          continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["crm-systems"].title)}`}
        />
        <ServicesCard1
          className="content-stretch flex min-h-0 flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]"
          title={bySlug["website-development"].title}
          description={bySlug["website-development"].description}
          continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["website-development"].title)}`}
          continueLabel={continueLabel}
          continueGlow="violet"
          continueHref={serviceDetailHref("website-development")}
        />
      </div>
      <ServicesCard
        className={servicesMobileLowerCardClassName(locale)}
        title={bySlug["mobile-app-development"].title}
        description={bySlug["mobile-app-development"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["mobile-app-development"].title)}`}
        continueLabel={continueLabel}
        continueGlow="cyan"
        continueHref={serviceDetailHref("mobile-app-development")}
      />
      <ServicesLowerCard2
        className={servicesAiLowerCardClassName(locale)}
        title={bySlug["ai-product-development"].title}
        description={bySlug["ai-product-development"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["ai-product-development"].title)}`}
        continueLabel={continueLabel}
        continueGlow="green"
        continueHref={serviceDetailHref("ai-product-development")}
      />
      <ServicesLowerCard3
        className="absolute content-stretch flex min-h-0 flex-col gap-[30px] h-[463px] items-start left-[962px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]"
        title={bySlug["erp-system"].title}
        description={bySlug["erp-system"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["erp-system"].title)}`}
        continueLabel={continueLabel}
        continueGlow="pink"
        continueHref={serviceDetailHref("erp-system")}
      />
    </>
  );
}
