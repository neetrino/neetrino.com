import { FIGMA_ASSETS } from "@/lib/figma-assets";

export type BlogIndexItem = {
  readonly id: string;
  /** URL segment — `/blog/[slug]`. */
  readonly slug: string;
  /** ISO 8601 date for `<time dateTime>`. */
  readonly dateIso: string;
  readonly dateLabel: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
};

export type BlogPostSection = {
  readonly heading: string;
  readonly paragraphs: readonly string[];
};

export type BlogPost = BlogIndexItem & {
  readonly intro: string;
  readonly sections: readonly BlogPostSection[];
};

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    id: "megatrox-intro",
    slug: "megatrox-intro",
    dateIso: "2026-03-07",
    dateLabel: "March 7, 2026",
    title: "Why we chose Megatrox for our orchestration layer",
    excerpt:
      "A quick look at how Megatrox fits into our stack and what it unlocks for client delivery and internal tooling.",
    imageSrc: FIGMA_ASSETS.imgUiDesign21,
    imageAlt: "UI design abstract preview",
    intro:
      "Orchestration glue is easy to underestimate until it becomes the bottleneck. Here is how we use Megatrox without turning every workflow into a maze.",
    sections: [
      {
        heading: "Fit with our delivery model",
        paragraphs: [
          "We ship in tight loops with design, engineering, and client stakeholders in the same room. Megatrox gives us a single place to describe flows so nobody has to reverse-engineer YAML across three repos.",
          "That clarity compounds: onboarding a teammate onto a client stack takes hours instead of days, because the orchestration story matches what we show in reviews.",
        ],
      },
      {
        heading: "What we watch out for",
        paragraphs: [
          "No tool replaces good boundaries. We keep Megatrox graphs shallow where possible, version changes like product features, and document failure modes next to the happy path.",
          "The result is orchestration that feels boring in production — which is exactly what we want when traffic spikes or an integration misbehaves.",
        ],
      },
    ],
  },
  {
    id: "megatrox-pipelines",
    slug: "megatrox-pipelines",
    dateIso: "2026-02-22",
    dateLabel: "February 22, 2026",
    title: "Pipelines that stay readable as they grow",
    excerpt:
      "Patterns we use to keep Megatrox workflows maintainable when requirements change mid-project.",
    imageSrc: FIGMA_ASSETS.imgCloudInfrastructure,
    imageAlt: "Cloud infrastructure illustration",
    intro:
      "Pipelines rarely fail on day one. They fail six months later when the team that built them is on another project. These are the patterns we lean on.",
    sections: [
      {
        heading: "Name stages like product milestones",
        paragraphs: [
          "We avoid anonymous “step 7” labels. Each stage reads like a sentence you could explain to a PM: ingest, validate, enrich, notify. That discipline pays off when we split or merge flows.",
          "Megatrox makes the graph visible; naming makes it legible.",
        ],
      },
      {
        heading: "Isolate experiments",
        paragraphs: [
          "Spikes and one-off client requests go behind feature flags or sibling graphs — never wedged into the trunk of a shared pipeline. We merge back only when the behavior is stable.",
          "That keeps the main path reviewable in a single screen and prevents “temporary” branches from fossilizing.",
        ],
      },
    ],
  },
  {
    id: "megatrox-observability",
    slug: "megatrox-observability",
    dateIso: "2026-01-15",
    dateLabel: "January 15, 2026",
    title: "Observability without the noise",
    excerpt:
      "Balancing metrics and logs when Megatrox sits between services — what we surface to teams first.",
    imageSrc: FIGMA_ASSETS.imgAnimation,
    imageAlt: "Motion and animation preview",
    intro:
      "When Megatrox sits between services, every alert can feel like the orchestrator’s fault. We pick a small set of signals and build dashboards around decisions, not raw volume.",
    sections: [
      {
        heading: "Golden signals first",
        paragraphs: [
          "Latency, error rate, and saturation at integration edges tell us whether users feel pain before we open trace waterfalls. Megatrox spans get correlation IDs so we can drill down when needed.",
          "We resist the temptation to chart everything — noisy dashboards hide regressions.",
        ],
      },
      {
        heading: "Who sees what",
        paragraphs: [
          "Engineers get traces and structured logs; client-facing teams get human-readable run summaries and SLA-style counters. The same run, two lenses, no duplicate paging.",
          "That split keeps on-call sustainable and avoids alert fatigue from orchestration plumbing.",
        ],
      },
    ],
  },
] as const;

export const BLOG_INDEX_ITEMS: readonly BlogIndexItem[] = BLOG_POSTS.map((post) => {
  const { intro: _i, sections: _s, ...index } = post;
  return index;
});

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
