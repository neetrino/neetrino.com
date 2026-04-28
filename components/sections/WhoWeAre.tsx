import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { EllipseDeviceShowcase } from "@/components/neetrino-home/EllipseDeviceShowcase";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import { interSans } from "@/lib/fonts";

export function WhoWeAre() {
  const t = useTranslations();

  return (
    <section
      id="story"
      className={`section-container py-16 md:py-24 ${interSans.className}`}
      aria-labelledby="who-we-are-heading"
    >
      <div className="flex flex-col gap-10">
        <div className="w-full shrink-0">
          <p className="text-sm font-medium uppercase tracking-wider text-white">
            {t("home.whoWeAre.eyebrow")}
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-3 text-2xl font-black italic text-white md:text-3xl lg:text-[35px]"
          >
            <span className="text-white">{t("home.whoWeAre.titleBefore")} </span>
            <span className="text-[#ff7500]">{t("home.whoWeAre.titleAccent")}</span>
            <span className="text-white"> {t("home.whoWeAre.titleAfter")}</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-white md:text-base">
            <p>
              {t("home.whoWeAre.paragraph1Prefix")}{" "}
              <strong className="font-bold">Neetrino IT</strong>{" "}
              {t("home.whoWeAre.paragraph1Middle")}{" "}
              <strong className="font-extrabold">{t("home.whoWeAre.paragraph1Strong")}</strong>
              {t("home.whoWeAre.paragraph1Suffix")}
            </p>
            <p>
              {t("home.whoWeAre.paragraph2Prefix")}
              <strong className="font-extrabold">{t("home.whoWeAre.paragraph2Strong")}</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex justify-center">
        <div className="relative inline-flex items-center justify-center">
          <Link
            href="/contact"
            className="peer relative z-10 inline-flex rounded-full border border-[#6a92ff] bg-black px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            {t("cta.explore")}
          </Link>
          <ExploreHoverFlare positionClassName="left-1/2 top-1/2 h-[100px] w-[min(100vw-2rem,360px)] max-w-none -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="relative mt-0 flex w-full justify-center overflow-x-auto overflow-y-visible px-1 md:mt-0">
        <div className="origin-top scale-[0.42] min-[400px]:scale-[0.5] min-[480px]:scale-[0.58] sm:scale-[0.72] md:scale-[0.85]">
          <EllipseDeviceShowcase />
        </div>
      </div>
    </section>
  );
}
