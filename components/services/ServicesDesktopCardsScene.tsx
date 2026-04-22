import { LayoutGrid } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FigmaFillImage } from "@/components/shared/FigmaFillImage";
import {
  getServicesCatalog,
  type ServiceCatalogEntry,
  type ServiceSlug,
} from "./service-pages-data";
import { imgEllipse6, imgEllipse7, imgShieldDone } from "./services-assets";
import { serviceDetailHref } from "./service-pages-data";
import {
  ServicesCard3 as ServicesLowerCard3,
  ServicesCard2 as ServicesLowerCard2,
} from "./ServicesCardsBlockA";
import { ServicesCard, ServicesCard1 } from "./ServicesCardsBlockB";
import { ServicesCardContinueLink } from "./ServicesCardContinueLink";
import type { AppLocale } from "@/lib/i18n/locales";
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
        className="-translate-x-1/2 absolute content-stretch flex gap-[58px] items-center left-[calc(50%+0.5px)] top-[370px]"
        data-node-id="165:689"
      >
        <div
          className="content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]"
          data-name="Card 4"
          data-node-id="165:690"
        >
          <div
            aria-hidden="true"
            className="absolute bg-gradient-to-b from-[#0d0c12] inset-0 pointer-events-none rounded-[38px] to-[#0d111d]"
          />
          <div
            className="relative shrink-0 size-[40px]"
            data-name="Shield done"
            data-node-id="I165:690;406:2853"
          >
            <FigmaFillImage src={imgShieldDone} sizes="40px" />
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
            data-node-id="I165:690;406:2861"
          >
            <p
              className="font-black leading-[40px] relative shrink-0 text-[32px] text-white w-full"
              data-node-id="I165:690;406:2862"
            >
              {bySlug["saas-development"].title}
            </p>
            <p
              className="font-light leading-[26px] relative shrink-0 text-[#d1d5dc] text-[16px] w-full"
              data-node-id="I165:690;406:2863"
            >
              {bySlug["saas-development"].description}
            </p>
          </div>
          <div className="absolute flex h-[99.524px] items-center justify-center left-[-42px] top-[-59px] w-[97.992px]">
            <div className="flex-none rotate-[51.41deg]">
              <div className="h-[65.42px] relative w-[75.124px]" data-node-id="I165:690;406:2871">
                <div className="absolute inset-[-82.24%_-71.61%]">
                  <FigmaFillImage src={imgEllipse6} sizes="200px" />
                </div>
              </div>
            </div>
          </div>
          <ServicesCardContinueLink
            ariaLabel={`${continueLabel}: ${bySlug["saas-development"].title}`}
            glowVariant="cyan"
            href={serviceDetailHref("saas-development")}
            label={continueLabel}
          />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(102,148,255,0.2),inset_0px_-30px_12px_-1px_rgba(35,101,255,0.15),inset_0px_-24px_16.7px_-9px_rgba(255,255,255,0.64),inset_0px_-34px_26.7px_-10px_rgba(102,148,255,0.5),inset_0px_-30px_46.8px_-33px_#144ccd]" />
        </div>
        <div
          className="content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]"
          data-name="Card 2"
          data-node-id="165:691"
        >
          <div
            aria-hidden="true"
            className="absolute bg-gradient-to-b from-[#120a0b] inset-0 pointer-events-none rounded-[38px] to-[#1b0a03]"
          />
          <div
            className="relative flex shrink-0 size-[40px] items-center justify-center text-white"
            data-name="CRM grid"
            data-node-id="I165:691;406:3043"
          >
            <LayoutGrid aria-hidden className="size-[40px]" strokeWidth={1.5} />
          </div>
          <div
            className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full"
            data-node-id="I165:691;406:3047"
          >
            <p
              className="font-black leading-[40px] relative shrink-0 text-[32px] text-white w-full"
              data-node-id="I165:691;406:3048"
            >
              {bySlug["crm-systems"].title}
            </p>
            <p
              className="font-light leading-[26px] relative shrink-0 text-[#d1d5dc] text-[16px] w-full"
              data-node-id="I165:691;406:3049"
            >
              {bySlug["crm-systems"].description}
            </p>
          </div>
          <div className="absolute flex h-[99.524px] items-center justify-center left-[-42px] top-[-59px] w-[97.992px]">
            <div className="flex-none rotate-[51.41deg]">
              <div className="h-[65.42px] relative w-[75.124px]" data-node-id="I165:691;406:3057">
                <div className="absolute inset-[-82.24%_-71.61%]">
                  <FigmaFillImage src={imgEllipse7} sizes="200px" />
                </div>
              </div>
            </div>
          </div>
          <ServicesCardContinueLink
            ariaLabel={`${continueLabel}: ${bySlug["crm-systems"].title}`}
            glowVariant="cyan"
            href={serviceDetailHref("crm-systems")}
            label={continueLabel}
          />
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_10.8px_0px_rgba(255,237,102,0.2),inset_0px_-30px_12px_-1px_rgba(255,233,177,0.17),inset_0px_-37px_16px_-36px_rgba(255,255,255,0.25),inset_0px_-34px_26.7px_-15px_rgba(255,240,126,0.5),inset_0px_-40px_46.8px_-30px_#e63e28]" />
        </div>
        <ServicesCard1
          className="content-stretch flex flex-col gap-[30px] h-[463px] items-start overflow-clip px-[40px] py-[60px] relative rounded-[38px] shrink-0 w-[369px]"
          title={bySlug["website-development"].title}
          description={bySlug["website-development"].description}
          continueAriaLabel={`${continueLabel}: ${bySlug["website-development"].title}`}
          continueLabel={continueLabel}
          continueGlow="cyan"
          continueHref={serviceDetailHref("website-development")}
        />
      </div>
      <ServicesCard
        className="absolute content-stretch flex flex-col gap-[30px] h-[463px] items-start left-[108px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]"
        title={bySlug["mobile-app-development"].title}
        description={bySlug["mobile-app-development"].description}
        continueAriaLabel={`${continueLabel}: ${bySlug["mobile-app-development"].title}`}
        continueLabel={continueLabel}
        continueGlow="cyan"
        continueHref={serviceDetailHref("mobile-app-development")}
      />
      <ServicesLowerCard2
        className="absolute content-stretch flex flex-col gap-[30px] h-[463px] items-start left-[535px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]"
        title={bySlug["ai-product-development"].title}
        description={bySlug["ai-product-development"].description}
        continueAriaLabel={`${continueLabel}: ${bySlug["ai-product-development"].title}`}
        continueLabel={continueLabel}
        continueGlow="green"
        continueHref={serviceDetailHref("ai-product-development")}
      />
      <ServicesLowerCard3
        className="absolute content-stretch flex flex-col gap-[30px] h-[463px] items-start left-[962px] overflow-clip px-[40px] py-[60px] rounded-[38px] top-[906px] w-[369px]"
        title={bySlug["erp-system"].title}
        description={bySlug["erp-system"].description}
        continueAriaLabel={`${continueLabel}: ${bySlug["erp-system"].title}`}
        continueLabel={continueLabel}
        continueGlow="pink"
        continueHref={serviceDetailHref("erp-system")}
      />
    </>
  );
}
