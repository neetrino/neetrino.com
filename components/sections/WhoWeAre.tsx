import { useTranslations } from "next-intl";
import { MeetOurTeamExplorePill } from "@/components/about-us/MeetOurTeamExplorePill";
import { EllipseDeviceShowcase } from "@/components/neetrino-home/EllipseDeviceShowcase";
import { interSans } from "@/lib/fonts";
import { WHO_WE_ARE_ELLIPSE_SHOWCASE_SCALE_CLASSNAME } from "@/lib/who-we-are-showcase-scale";

export function WhoWeAre() {
  const t = useTranslations();

  return (
    <section
      id="story"
      className={`section-container py-10 md:py-16 ${interSans.className}`}
      aria-labelledby="who-we-are-heading"
    >
      <div className="flex flex-col gap-5">
        <div className="w-full shrink-0">
          <p className="text-sm font-medium uppercase tracking-wider text-white">
            {t("home.whoWeAre.eyebrow")}
          </p>
          <h2
            id="who-we-are-heading"
            className="mt-2 text-2xl font-black italic text-white md:text-3xl lg:text-[35px]"
          >
            <span className="text-white">{t("home.whoWeAre.titleBefore")} </span>
            <span className="text-[#ff7500]">{t("home.whoWeAre.titleAccent")}</span>
            <span className="text-white"> {t("home.whoWeAre.titleAfter")}</span>
          </h2>
          <div className="mt-4 space-y-3 text-sm font-light leading-relaxed text-white md:text-base">
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

      <div className="relative z-10 mt-5 flex justify-start">
        <MeetOurTeamExplorePill align="start" href="/contact" />
      </div>

      <div className="relative mt-4 flex w-full min-w-0 justify-center overflow-x-clip overflow-y-visible px-1 md:mt-3">
        <div className={WHO_WE_ARE_ELLIPSE_SHOWCASE_SCALE_CLASSNAME}>
          <EllipseDeviceShowcase />
        </div>
      </div>
    </section>
  );
}
