import { FIGMA_ASSETS } from "@/lib/figma-assets";

export const BLOG_PAGE_TITLE = "Blog";

export type BlogIndexItem = {
  readonly id: string;
  /** ISO 8601 date for `<time dateTime>`. */
  readonly dateIso: string;
  readonly dateLabel: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export const BLOG_INDEX_ITEMS: readonly BlogIndexItem[] = [
  {
    id: "megatrox-intro",
    dateIso: "2026-03-07",
    dateLabel: "March 7, 2026",
    title: "Why we chose Megatrox for our orchestration layer",
    excerpt:
      "A quick look at how Megatrox fits into our stack and what it unlocks for client delivery and internal tooling.",
    imageSrc: FIGMA_ASSETS.imgUiDesign21,
    imageAlt: "UI design abstract preview",
  },
  {
    id: "megatrox-pipelines",
    dateIso: "2026-02-22",
    dateLabel: "February 22, 2026",
    title: "Pipelines that stay readable as they grow",
    excerpt:
      "Patterns we use to keep Megatrox workflows maintainable when requirements change mid-project.",
    imageSrc: FIGMA_ASSETS.imgCloudInfrastructure,
    imageAlt: "Cloud infrastructure illustration",
  },
  {
    id: "megatrox-observability",
    dateIso: "2026-01-15",
    dateLabel: "January 15, 2026",
    title: "Observability without the noise",
    excerpt:
      "Balancing metrics and logs when Megatrox sits between services — what we surface to teams first.",
    imageSrc: FIGMA_ASSETS.imgAnimation,
    imageAlt: "Motion and animation preview",
  },
] as const;
