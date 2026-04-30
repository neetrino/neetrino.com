import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ExploreHoverFlare } from "@/components/neetrino-home/ExploreHoverFlare";
import { FIGMA_ASSETS } from "@/lib/figma-assets";
import { interSans } from "@/lib/fonts";

const projects = [
  { image: FIGMA_ASSETS.imgStanislavHristov3, titleKey: "home.projects.items.webDesign" },
  { image: FIGMA_ASSETS.imgUiDesign21, titleKey: "home.projects.items.uiDesign" },
  { image: FIGMA_ASSETS.img2661, titleKey: "home.projects.items.ecommerce" },
  { image: FIGMA_ASSETS.imgBiotechLogo1, titleKey: "home.projects.items.biotech" },
  {
    image: FIGMA_ASSETS.imgKleverKleverIoInstagramPhotosAndVideos3,
    titleKey: "home.projects.items.blockchain",
  },
] as const;

export function Projects() {
  const t = useTranslations();

  return (
    <section
      id="blog"
      className={`section-container pt-16 pb-15 md:py-24 ${interSans.className}`}
      aria-labelledby="projects-heading"
    >
      <header className="mb-10 md:mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-white">
          {t("portfolioPage.eyebrow")}
        </p>
        <h2
          id="projects-heading"
          className="mt-2 text-2xl font-black italic md:text-3xl lg:text-[35px]"
        >
          <span className="text-white">{t("home.projects.titleBefore")}</span>
          <span className="text-[#ff7500]"> {t("home.projects.titleAccent")}</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-6 lg:gap-6">
        {projects.map((project, index) => (
          <article key={project.titleKey} className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={project.image}
                alt={t(project.titleKey)}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/55 to-transparent"
                aria-hidden
              />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="group relative inline-flex items-center justify-center">
          <Link
            href="/portfolio"
            className="relative z-10 inline-flex items-center gap-2 rounded-full border border-[#6a92ff] bg-black px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
          >
            {t("cta.explore")}
            <Image
              src={FIGMA_ASSETS.imgSafearea}
              alt=""
              width={20}
              height={20}
              className="size-5 shrink-0 brightness-0 invert"
              aria-hidden
            />
          </Link>
          <ExploreHoverFlare positionClassName="left-1/2 top-1/2 h-[100px] w-[min(100vw-2rem,360px)] max-w-none -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
}
