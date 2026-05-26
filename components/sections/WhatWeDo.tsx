import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { serviceDetailHref } from "@/components/services/service-pages-data";
import type { WhatWeDoCardSlug } from "@/lib/what-we-do-continue-glow";
import { Reveal } from "@/components/motion/Reveal";
import { WhatWeDoContinueLink } from "@/components/sections/WhatWeDoContinueLink";
import { SCROLL_REVEAL_SLOW_STAGGER_MS } from "@/lib/motion/scroll-reveal.constants";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { imageUnoptimizedForSrc } from "@/lib/image-asset-optimization";
import { interSans } from "@/lib/fonts";
import { DEFAULT_IMAGE_QUALITY } from "@/lib/image-defaults";
import {
  WHAT_WE_DO_MOBILE_AI_LAST_CARD_ATMOSPHERE_NUDGE_Y_CLASS,
  WHAT_WE_DO_MOBILE_FIRST_CARD_ARTICLE_ABOVE_ATMOSPHERE_CLASS,
  WHAT_WE_DO_MOBILE_FIRST_CARD_ATMOSPHERE_241_854_INSET_WRAPPER_CLASS,
  WHAT_WE_DO_MOBILE_FIRST_CARD_ATMOSPHERE_BELOW_CARD_CLASS,
  WHAT_WE_DO_MOBILE_FIRST_CARD_STACK_ROOT_CLASS,
} from "@/lib/what-we-do-mobile-first-card-atmosphere-241-854.constants";
import {
  isWhatWeDoCardCopyCenteredLocale,
  whatWeDoHyCrmSubtitleLiftOnlyClassName,
  whatWeDoHyCrmSubtitleToContinueGapClassName,
} from "@/lib/what-we-do-desktop-continue-cta-layout";
import { cn } from "@/lib/utils";
import {
  WHAT_WE_DO_MOBILE_CARD_CONTINUE_BUTTON_LIFT_Y_CLASS,
  WHAT_WE_DO_MOBILE_CARD_COPY_COLUMN_PAD_CLASS,
  WHAT_WE_DO_MOBILE_CARD_SUBTITLE_BLOCK_CLASS,
  WHAT_WE_DO_MOBILE_CARD_SUBTITLE_METRICS_CLASS,
  WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_MT_CLASS,
  WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_PL_CLASS,
  WHAT_WE_DO_MOBILE_CARD_TITLE_SIZE_CLASS,
} from "@/lib/what-we-do-mobile-card-text.constants";
import {
  WHAT_WE_DO_MOBILE_CARD_MOBILE_APP_IMAGE_SCALE_CLASS,
  WHAT_WE_DO_MOBILE_CARD_PC_CLOUD_IMAGE_TRANSLATE_X_CLASS,
  WHAT_WE_DO_MOBILE_CARD_SAAS_IMAGE_SCALE_CLASS,
  WHAT_WE_DO_MOBILE_CARD_WEBSITE_IMAGE_SCALE_CLASS,
} from "@/lib/what-we-do-mobile-card-image.constants";
import {
  WHAT_WE_DO_MOBILE_LAST_CARD_GALAXY_Z_FOLD_COVER_COPY_NUDGE_X_CLASS,
  WHAT_WE_DO_MOBILE_LAST_CARD_SLUG,
} from "@/lib/what-we-do-galaxy-z-fold-cover-layout.constants";

const services: readonly {
  titleLines: readonly string[];
  subtitleLines: readonly string[];
  titleLineKeys: readonly string[];
  subtitleLineKeys: readonly string[];
  bg: string;
  textColor: string;
  image: string;
  imageClassName: string;
  slug: WhatWeDoCardSlug;
}[] = [
  {
    titleLines: ["WEBSITE"],
    titleLineKeys: ["home.whatWeDo.cards.website.title1"],
    subtitleLines: ["Custom", "Development"],
    subtitleLineKeys: [
      "home.whatWeDo.cards.website.subtitle1",
      "home.whatWeDo.cards.website.subtitle2",
    ],
    bg: "bg-[#e8e8f4]",
    textColor: "text-black",
    image: FIGMA_ASSETS.imgPc,
    imageClassName: cn(
      "object-contain object-left",
      WHAT_WE_DO_MOBILE_CARD_WEBSITE_IMAGE_SCALE_CLASS,
      WHAT_WE_DO_MOBILE_CARD_PC_CLOUD_IMAGE_TRANSLATE_X_CLASS,
    ),
    slug: "website-development",
  },
  {
    titleLines: ["MOBILE APP"],
    titleLineKeys: ["home.whatWeDo.cards.mobile.title1"],
    subtitleLines: ["App", "Development"],
    subtitleLineKeys: [
      "home.whatWeDo.cards.mobile.subtitle1",
      "home.whatWeDo.cards.mobile.subtitle2",
    ],
    bg: "bg-[#ff7500]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgPc1,
    imageClassName: cn(
      "object-contain object-left",
      WHAT_WE_DO_MOBILE_CARD_MOBILE_APP_IMAGE_SCALE_CLASS,
    ),
    slug: "mobile-app-development",
  },
  {
    titleLines: ["SAAS", "PLATFORMS"],
    titleLineKeys: ["home.whatWeDo.cards.saas.title1", "home.whatWeDo.cards.saas.title2"],
    subtitleLines: ["Cloud Solutions"],
    subtitleLineKeys: ["home.whatWeDo.cards.saas.subtitle1"],
    bg: "bg-[#292929]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgCloudInfrastructure,
    imageClassName: cn(
      "object-contain object-left",
      WHAT_WE_DO_MOBILE_CARD_SAAS_IMAGE_SCALE_CLASS,
      WHAT_WE_DO_MOBILE_CARD_PC_CLOUD_IMAGE_TRANSLATE_X_CLASS,
    ),
    slug: "saas-development",
  },
  {
    titleLines: ["CRM SYSTEMS"],
    titleLineKeys: ["home.whatWeDo.cards.crm.title1"],
    subtitleLines: ["Process", "Automation"],
    subtitleLineKeys: ["home.whatWeDo.cards.crm.subtitle1", "home.whatWeDo.cards.crm.subtitle2"],
    bg: "bg-[#473dff]",
    textColor: "text-white",
    image: FIGMA_ASSETS.imgSports00065,
    imageClassName: "object-cover object-center scale-[0.86]",
    slug: "crm-systems",
  },
  {
    titleLines: ["AI", "INTEGRATIONS"],
    titleLineKeys: ["home.whatWeDo.cards.ai.title1", "home.whatWeDo.cards.ai.title2"],
    subtitleLines: ["AI Automation"],
    subtitleLineKeys: ["home.whatWeDo.cards.ai.subtitle1"],
    bg: "bg-[#a2b8ee]",
    textColor: "text-[#0f0f0f]",
    image: FIGMA_ASSETS.img2761,
    imageClassName: "object-contain object-left scale-[0.88]",
    slug: "ai-product-development",
  },
];

/** Mobile-only section — matches Figma 241:821 service cards (horizontal tiles). */
export async function WhatWeDo() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isCenteredTileCopy = isWhatWeDoCardCopyCenteredLocale(locale);

  return (
    <section className={cn("relative bg-transparent py-12", interSans.className)}>
      <div className="mx-auto w-full max-w-[480px] px-4 md:px-6">
        <Reveal profile="slow" className="mb-8">
          <header>
            <p className="text-base font-medium uppercase leading-[35px] tracking-normal text-white">
              {t("nav.services")}
            </p>
            <h2 className="mt-1 font-black italic text-[35px] leading-[35px] text-white">
              {t("home.whatWeDo.titleBefore")}{" "}
              <span className="text-[#ff7500]">{t("home.whatWeDo.titleAccent")}</span>
            </h2>
          </header>
        </Reveal>

        <div className="flex flex-col gap-4">
          {services.map((service, cardIndex) => {
            const isHyTitleCenterSlug =
              locale === "hy" &&
              (service.slug === "mobile-app-development" ||
                service.slug === "saas-development" ||
                service.slug === "ai-product-development" ||
                service.slug === "crm-systems");
            const isHySubtitleCenterSlug =
              locale === "hy" &&
              (service.slug === "mobile-app-development" ||
                service.slug === "saas-development" ||
                service.slug === "ai-product-development");
            const isCardTitleCentered = locale === "ru" || isHyTitleCenterSlug;
            const isCardSubtitleCentered = locale === "ru" || isHySubtitleCenterSlug;
            const isCrmStacked = isCenteredTileCopy && service.slug === "crm-systems";
            const isAiNoWrap = isCenteredTileCopy && service.slug === "ai-product-development";
            const continueLinkClassName = cn(
              "mx-auto w-fit",
              WHAT_WE_DO_MOBILE_CARD_CONTINUE_BUTTON_LIFT_Y_CLASS,
            );
            const continueLabel = t("cta.continue");

            const isLastWhatWeDoCard = service.slug === WHAT_WE_DO_MOBILE_LAST_CARD_SLUG;

            const isWhatWeDoMobileAtmosphereStackCard =
              service.slug === "website-development" ||
              service.slug === "saas-development" ||
              isLastWhatWeDoCard;

            const rowKey = service.titleLines.join("-");

            const whatWeDoCardShellClass = cn(
              "relative flex h-[194px] min-h-[194px] w-full overflow-hidden rounded-[19px]",
              service.bg,
            );

            const atmosphereBelowCard = isWhatWeDoMobileAtmosphereStackCard ? (
              <div
                className={cn(
                  WHAT_WE_DO_MOBILE_FIRST_CARD_ATMOSPHERE_BELOW_CARD_CLASS,
                  service.slug === "ai-product-development" &&
                    WHAT_WE_DO_MOBILE_AI_LAST_CARD_ATMOSPHERE_NUDGE_Y_CLASS,
                )}
                aria-hidden
                data-node-id="241:854"
                data-what-we-do-atmosphere-stack={service.slug}
              >
                <div className="relative size-full min-h-px min-w-px">
                  <div
                    className={WHAT_WE_DO_MOBILE_FIRST_CARD_ATMOSPHERE_241_854_INSET_WRAPPER_CLASS}
                  >
                    <div className="relative size-full min-h-px min-w-px">
                      <Image
                        src={FIGMA_ASSETS.imgRectangle17417}
                        alt=""
                        fill
                        unoptimized={imageUnoptimizedForSrc(FIGMA_ASSETS.imgRectangle17417)}
                        className="pointer-events-none block max-w-none object-fill select-none"
                        sizes="(max-width: 480px) 100vw, 512px"
                        quality={DEFAULT_IMAGE_QUALITY}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null;

            const whatWeDoCardInner = (
              <>
                <div className="relative h-full w-[48%] shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className={`${service.imageClassName}`}
                    sizes="(max-width: 1024px) 48vw, 240px"
                    loading="lazy"
                  />
                </div>
                <div
                  className={cn(
                    "flex min-h-0 min-w-0 flex-1 flex-col justify-between",
                    WHAT_WE_DO_MOBILE_CARD_COPY_COLUMN_PAD_CLASS,
                    isLastWhatWeDoCard &&
                      WHAT_WE_DO_MOBILE_LAST_CARD_GALAXY_Z_FOLD_COVER_COPY_NUDGE_X_CLASS,
                  )}
                >
                  <div
                    className={cn(
                      WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_PL_CLASS,
                      WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_MT_CLASS,
                    )}
                  >
                    {service.titleLineKeys.map((lineKey, index) => (
                      <h3
                        key={`${lineKey}-${index}`}
                        className={cn(
                          `font-bold ${WHAT_WE_DO_MOBILE_CARD_TITLE_SIZE_CLASS} ${service.textColor}`,
                          isCardTitleCentered && "w-full text-center",
                          isAiNoWrap && "whitespace-nowrap",
                          isCrmStacked && "whitespace-nowrap",
                        )}
                      >
                        {t(lineKey)}
                      </h3>
                    ))}
                    {!isCrmStacked ? (
                      <div
                        className={cn(
                          WHAT_WE_DO_MOBILE_CARD_SUBTITLE_BLOCK_CLASS,
                          service.textColor,
                          isCardSubtitleCentered && "w-full text-center",
                          isAiNoWrap && "whitespace-nowrap",
                        )}
                      >
                        {service.subtitleLineKeys.map((lineKey, index) => (
                          <p key={`${lineKey}-${index}`}>{t(lineKey)}</p>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  {isCrmStacked ? (
                    <div
                      className={cn(
                        "flex flex-col items-center",
                        whatWeDoHyCrmSubtitleToContinueGapClassName,
                      )}
                    >
                      <div
                        className={cn(
                          "flex w-full max-w-full flex-col items-center text-center",
                          WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_PL_CLASS,
                          WHAT_WE_DO_MOBILE_CARD_TEXT_ONLY_EXTRA_MT_CLASS,
                          WHAT_WE_DO_MOBILE_CARD_SUBTITLE_METRICS_CLASS,
                          service.textColor,
                          whatWeDoHyCrmSubtitleLiftOnlyClassName,
                        )}
                      >
                        {service.subtitleLineKeys.map((lineKey) => (
                          <p key={lineKey}>{t(lineKey)}</p>
                        ))}
                      </div>
                      <WhatWeDoContinueLink
                        slug={service.slug}
                        href={serviceDetailHref(service.slug)}
                        label={continueLabel}
                        className={continueLinkClassName}
                      />
                    </div>
                  ) : (
                    <WhatWeDoContinueLink
                      slug={service.slug}
                      href={serviceDetailHref(service.slug)}
                      label={continueLabel}
                      className={continueLinkClassName}
                    />
                  )}
                </div>
              </>
            );

            const cardDelayMs = cardIndex * SCROLL_REVEAL_SLOW_STAGGER_MS;

            if (isWhatWeDoMobileAtmosphereStackCard) {
              return (
                <Reveal key={rowKey} profile="slow" delayMs={cardDelayMs}>
                  <div className={WHAT_WE_DO_MOBILE_FIRST_CARD_STACK_ROOT_CLASS}>
                    {atmosphereBelowCard}
                    <article
                      className={cn(
                        whatWeDoCardShellClass,
                        WHAT_WE_DO_MOBILE_FIRST_CARD_ARTICLE_ABOVE_ATMOSPHERE_CLASS,
                      )}
                    >
                      {whatWeDoCardInner}
                    </article>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={rowKey} profile="slow" delayMs={cardDelayMs}>
                <article className={whatWeDoCardShellClass}>{whatWeDoCardInner}</article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
