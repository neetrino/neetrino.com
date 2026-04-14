import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/sections/Footer";
import { BLOG_POSTS, getBlogPostBySlug, type BlogPost } from "@/lib/blog-posts-data";
import { interSans } from "@/lib/fonts";
import {
  NEETRINO_DESKTOP_CANVAS_WIDTH_PX,
  NEETRINO_DESKTOP_HEADER_CLEARANCE_RELAXED_DESIGN_PX,
} from "@/lib/desktop-header-layout.constants";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function blogTitleMegatroxParts(title: string): {
  before: string;
  accent: string;
  after: string;
} {
  const parts = title.trim().split(/\s+/);
  if (parts.length >= 2) {
    return {
      before: `${parts[0]} `,
      accent: parts[1] ?? "",
      after: parts.length > 2 ? ` ${parts.slice(2).join(" ")}` : "",
    };
  }
  const mid = Math.ceil(title.length / 2);
  return {
    before: title.slice(0, mid),
    accent: "",
    after: title.slice(mid),
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Blog" };
  }
  return {
    title: `${post.title} | Neetrino`,
    description: post.excerpt,
  };
}

function BlogPostHeader({ post }: { post: BlogPost }) {
  const titleParts = blogTitleMegatroxParts(post.title);

  return (
    <header className="border-b border-white/[0.06] pb-10 md:pb-12">
      <time className="text-sm font-medium tabular-nums text-white/50" dateTime={post.dateIso}>
        {post.dateLabel}
      </time>
      <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-megatrox)] text-3xl font-normal leading-[0.98] tracking-[-0.04em] text-[#fffcfc] sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.02]">
        {titleParts.accent ? (
          <>
            <span className="text-white">{titleParts.before}</span>
            <span className="text-[#ff7500]">{titleParts.accent}</span>
            <span className="text-white">{titleParts.after}</span>
          </>
        ) : (
          <>
            <span className="text-white">{titleParts.before}</span>
            <span className="text-[#ff7500]">{titleParts.after}</span>
          </>
        )}
      </h1>
      <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-white/82 md:text-lg">
        {post.intro}
      </p>
    </header>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div
      className={`min-h-dvh w-full min-w-0 overflow-x-hidden bg-[#151515] ${interSans.className}`}
    >
      <main
        className={`section-container pb-20 pt-28 lg:pt-[calc(${NEETRINO_DESKTOP_HEADER_CLEARANCE_RELAXED_DESIGN_PX}*100vw/${NEETRINO_DESKTOP_CANVAS_WIDTH_PX})]`}
      >
        <nav
          className="flex flex-wrap items-center gap-2 text-sm text-white/65"
          aria-label="Breadcrumb"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-white/90 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <ArrowLeft className="size-3.5 shrink-0 opacity-70" aria-hidden strokeWidth={2} />
            Blog
          </Link>
          <span className="text-white/35" aria-hidden>
            /
          </span>
          <span className="max-w-[min(100%,320px)] truncate text-white/70">{post.title}</span>
        </nav>

        <div className="mt-8 md:mt-10">
          <div className="relative aspect-[21/9] max-h-[320px] w-full overflow-hidden rounded-[20px] border border-white/[0.08] bg-black/40 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:max-h-[380px] md:rounded-[28px]">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, min(1152px, 90vw)"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151515]/90 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <BlogPostHeader post={post} />
        </div>

        <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
          {post.sections.map((section) => (
            <section
              key={section.heading}
              className="rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-[#1a1a1a] to-[#141414] p-6 shadow-[inset_0_-1px_0_0_rgba(102,148,255,0.1)] md:p-8"
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#ff7500]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-sm font-light leading-relaxed text-white/78 md:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-white/60 md:text-[15px]">
          {post.excerpt}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#252525] transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden strokeWidth={2} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-full border border-[#6a92ff] bg-black px-7 py-3 text-sm font-medium text-white transition-colors hover:border-[#8aa8ff] hover:bg-[#0a0a0a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6a92ff]"
          >
            All posts
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
