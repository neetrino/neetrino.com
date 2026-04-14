import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogIndexItem } from "@/lib/blog-page.constants";
import { cn } from "@/lib/utils";

export type BlogIndexCardProps = {
  item: BlogIndexItem;
  className?: string;
};

/**
 * Blog index tile — dark glass card aligned with site header tokens (border-white/10, soft shadow).
 */
export function BlogIndexCard({ item, className }: BlogIndexCardProps) {
  const anchorHref = `/blog/${item.slug}`;

  return (
    <article
      id={item.id}
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[rgba(40,43,103,0.22)] shadow-[0_12px_40px_rgba(8,10,24,0.35)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-5">
        <time className="text-xs font-medium text-white/45" dateTime={item.dateIso}>
          {item.dateLabel}
        </time>
        <h2 className="text-lg font-bold leading-snug text-white md:text-xl">{item.title}</h2>
        <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-white/65">{item.excerpt}</p>
        <Link
          href={anchorHref}
          className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-[#473dff] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#473dff]/80"
        >
          Read more
          <ChevronRight className="size-4 shrink-0" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
