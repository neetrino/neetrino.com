import { getTranslations } from "next-intl/server";
import type { AppLocale } from "@/lib/i18n/locales";
import {
  getServicesCatalog,
  serviceDetailHref,
  serviceTitleSingleLine,
  type ServiceCatalogEntry,
  type ServiceSlug,
} from "./service-pages-data";
import {
  SERVICES_MOBILE_CATALOG_CARD_OUTER_CLASS,
  SERVICES_MOBILE_CATALOG_GRID_CLASS,
} from "./services-mobile-catalog-cards.constants";
import { ServicesCatalogCrmCard } from "./ServicesCatalogCrmCard";
import { ServicesCatalogSaasCard } from "./ServicesCatalogSaasCard";
import {
  ServicesCard3 as ServicesLowerCard3,
  ServicesCard2 as ServicesLowerCard2,
} from "./ServicesCardsBlockA";
import { ServicesCard, ServicesCard1 } from "./ServicesCardsBlockB";

type ServicesMobileCatalogCardsProps = {
  locale: AppLocale;
};

/** /services `<lg`: same six service tiles as desktop (gradients, orbit art, Continue pill). Two columns from `neetrino-layout-desktop`. */
export async function ServicesMobileCatalogCards({ locale }: ServicesMobileCatalogCardsProps) {
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

  const shell = SERVICES_MOBILE_CATALOG_CARD_OUTER_CLASS;

  return (
    <section className={SERVICES_MOBILE_CATALOG_GRID_CLASS}>
      <ServicesCatalogSaasCard
        className={shell}
        title={bySlug["saas-development"].title}
        description={bySlug["saas-development"].description}
        continueLabel={continueLabel}
        continueHref={serviceDetailHref("saas-development")}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["saas-development"].title)}`}
      />
      <ServicesCatalogCrmCard
        className={shell}
        title={bySlug["crm-systems"].title}
        description={bySlug["crm-systems"].description}
        continueLabel={continueLabel}
        continueHref={serviceDetailHref("crm-systems")}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["crm-systems"].title)}`}
      />
      <ServicesCard1
        className={shell}
        title={bySlug["website-development"].title}
        description={bySlug["website-development"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["website-development"].title)}`}
        continueLabel={continueLabel}
        continueGlow="violet"
        continueHref={serviceDetailHref("website-development")}
      />
      <ServicesCard
        className={shell}
        title={bySlug["mobile-app-development"].title}
        description={bySlug["mobile-app-development"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["mobile-app-development"].title)}`}
        continueLabel={continueLabel}
        continueGlow="cyan"
        continueHref={serviceDetailHref("mobile-app-development")}
      />
      <ServicesLowerCard2
        className={shell}
        title={bySlug["ai-product-development"].title}
        description={bySlug["ai-product-development"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["ai-product-development"].title)}`}
        continueLabel={continueLabel}
        continueGlow="green"
        continueHref={serviceDetailHref("ai-product-development")}
      />
      <ServicesLowerCard3
        className={shell}
        title={bySlug["erp-system"].title}
        description={bySlug["erp-system"].description}
        continueAriaLabel={`${continueLabel}: ${serviceTitleSingleLine(bySlug["erp-system"].title)}`}
        continueLabel={continueLabel}
        continueGlow="pink"
        continueHref={serviceDetailHref("erp-system")}
      />
    </section>
  );
}
