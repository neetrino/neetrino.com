"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { FIGMA_ASSETS } from "@/components/assets";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "900"],
  style: ["normal", "italic"],
});

const projects = [
  { image: FIGMA_ASSETS.imgStanislavHristov3, title: "Web Design" },
  { image: FIGMA_ASSETS.imgUiDesign21, title: "UI Design" },
  { image: FIGMA_ASSETS.img2661, title: "E-Commerce" },
  { image: FIGMA_ASSETS.imgBiotechLogo1, title: "Biotech" },
  {
    image: FIGMA_ASSETS.imgKleverKleverIoInstagramPhotosAndVideos3,
    title: "Blockchain",
  },
] as const;

export function Projects() {
  return (
    <section
      id="blog"
      className={`section-container py-16 md:py-24 ${inter.className}`}
      aria-labelledby="projects-heading"
    >
      <header className="mb-10 md:mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-white">
          PORTFOLIO
        </p>
        <h2
          id="projects-heading"
          className="mt-2 text-2xl font-black italic md:text-3xl lg:text-[35px]"
        >
          <span className="text-white">OUR</span>
          <span className="text-[#ff7500]"> PROJECTS</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-6 lg:gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={
              index < 3
                ? "lg:col-span-2"
                : "lg:col-span-3"
            }
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl md:rounded-3xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
        <button
          type="button"
          className="rounded-full border border-[#6a92ff] bg-black px-8 py-4 text-lg font-medium text-white transition-opacity hover:opacity-90"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
