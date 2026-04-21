import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { serviceDetailHref, type ServiceSlug } from "@/components/services/service-pages-data";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { interSans } from "@/lib/fonts";

const services: readonly {
  titleLines: readonly string[];
  subtitleLines: readonly string[];
  titleLineKeys: readonly string[];
  subtitleLineKeys: readonly string[];
  bg: string;
  textColor: string;
  image: string;
  imageClassName: string;
  slug: ServiceSlug;
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
    imageClassName: "object-contain object-left scale-[1.15]",
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
    imageClassName: "object-contain object-left scale-[1.05]",
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
    imageClassName: "object-contain object-left",
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
export function WhatWeDo() {
  const t = useTranslations();

  return (
    <section className={`bg-[#151515] py-12 ${interSans.className}`}>
      <div className="mx-auto w-full max-w-[480px] px-4 md:px-6">
        <header className="mb-8">
          <p className="text-base font-medium uppercase leading-[35px] tracking-normal text-white">
            {t("nav.services")}
          </p>
          <h2 className="mt-1 font-black italic text-[35px] leading-[35px] text-white">
            {t("home.whatWeDo.titleBefore")}{" "}
            <span className="text-[#ff7500]">{t("home.whatWeDo.titleAccent")}</span>
          </h2>
        </header>

        <div className="flex flex-col gap-4">
          {services.map((service) => (
            <article
              key={service.titleLines.join("-")}
              className={`relative flex h-[194px] min-h-[194px] w-full overflow-hidden rounded-[19px] ${service.bg}`}
            >
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
              <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between px-3 py-3 pr-2">
                <div>
                  {service.titleLineKeys.map((lineKey, index) => (
                    <h3
                      key={`${lineKey}-${index}`}
                      className={`font-bold text-lg leading-tight ${service.textColor}`}
                    >
                      {t(lineKey)}
                    </h3>
                  ))}
                  <div
                    className={`mt-1 text-base font-extralight leading-[19px] ${service.textColor}`}
                  >
                    {service.subtitleLineKeys.map((lineKey, index) => (
                      <p key={`${lineKey}-${index}`}>{t(lineKey)}</p>
                    ))}
                  </div>
                </div>
                <Link
                  href={serviceDetailHref(service.slug)}
                  className="ml-auto inline-flex w-fit items-center gap-2 self-end rounded-[40px] bg-white px-5 py-3 text-[18px] font-medium text-[#252525] transition-opacity hover:opacity-90"
                >
                  {t("cta.continue")}
                  <Image
                    src={FIGMA_ASSETS.imgSafearea}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
