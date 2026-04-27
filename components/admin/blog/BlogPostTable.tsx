import Image from "next/image";
import Link from "next/link";
import { DeletePostButton } from "@/components/admin/blog/DeletePostButton";
import { locales } from "@/i18n/routing";
import type { AdminBlogPost } from "@/lib/server/blog/admin";

export function BlogPostTable({ posts }: { posts: readonly AdminBlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-black/20 bg-white p-8 text-center text-sm text-black/55">
        No blog posts yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
      <table className="w-full min-w-[860px] text-left text-sm">
        <thead className="border-b border-black/10 bg-black/[0.03] text-xs uppercase tracking-[0.12em] text-black/50">
          <tr>
            <th className="px-5 py-4">Post</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Published</th>
            <th className="px-5 py-4">Translations</th>
            <th className="px-5 py-4">Cover</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10">
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="px-5 py-4 font-medium">{post.displayTitle}</td>
              <td className="px-5 py-4">{post.status}</td>
              <td className="px-5 py-4 text-black/60">{formatPublishedAt(post.publishedAt)}</td>
              <td className="px-5 py-4 text-black/60">{getMissingTranslationsLabel(post)}</td>
              <td className="px-5 py-4">
                {post.coverImageUrl ? <CoverPreview post={post} /> : "-"}
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <Link className="font-medium text-[#473dff]" href={`/admin/blog/${post.id}/edit`}>
                    Edit
                  </Link>
                  <DeletePostButton postId={post.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CoverPreview({ post }: { post: AdminBlogPost }) {
  if (!post.coverImageUrl) {
    return null;
  }

  return (
    <Image
      src={post.coverImageUrl}
      alt=""
      width={84}
      height={52}
      className="h-[52px] w-[84px] rounded-xl object-cover"
    />
  );
}

function formatPublishedAt(date: Date | null): string {
  return date ? date.toISOString().slice(0, 10) : "-";
}

function getMissingTranslationsLabel(post: AdminBlogPost): string {
  const missingLocales = locales.filter((locale) => !post.translations[locale]);
  return missingLocales.length === 0 ? "All" : `Missing: ${missingLocales.join(", ")}`;
}
