"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import { deleteBlogPostInSheetAction, updateBlogPostInSheetAction } from "@/app/admin/blog/actions";
import { BlogPostForm } from "@/components/admin/blog/BlogPostForm";
import { AdminDetailSheet } from "@/components/admin/ui/admin-detail-sheet";
import { AdminList, AdminListEmpty, AdminListRow } from "@/components/admin/ui/admin-list";
import { AdminStatusBadge } from "@/components/admin/ui/admin-status-badge";
import { useAdminDetailSheet } from "@/components/admin/ui/use-admin-detail-sheet";
import { formatAdminDate } from "@/lib/admin/admin-format";
import { locales } from "@/i18n/routing";
import type { AdminBlogPost } from "@/lib/server/blog/admin";

type BlogAdminPanelProps = {
  readonly posts: readonly AdminBlogPost[];
};

export function BlogAdminPanel({ posts }: BlogAdminPanelProps) {
  const sheet = useAdminDetailSheet<string>();
  const selectedPost = posts.find((post) => post.id === sheet.selectedId) ?? null;

  if (posts.length === 0) {
    return <AdminListEmpty message="No blog posts yet." />;
  }

  return (
    <>
      <AdminList>
        {posts.map((post) => (
          <AdminListRow
            key={post.id}
            onClick={() => sheet.open(post.id)}
            primary={post.displayTitle}
            secondary={getMissingTranslationsLabel(post)}
            meta={formatAdminDate(post.publishedAt)}
            badge={<AdminStatusBadge entity="blog" status={post.status} />}
            leading={
              post.coverImageUrl ? (
                <Image
                  src={post.coverImageUrl}
                  alt=""
                  width={56}
                  height={40}
                  className="size-14 shrink-0 rounded-xl object-cover"
                />
              ) : (
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#151515]/[0.04] text-[#151515]/35">
                  <FileText className="size-5" aria-hidden />
                </span>
              )
            }
          />
        ))}
      </AdminList>

      <AdminDetailSheet
        open={sheet.isOpen}
        onClose={sheet.close}
        title={selectedPost?.displayTitle ?? "Blog post"}
        subtitle={selectedPost ? formatAdminDate(selectedPost.publishedAt) : undefined}
        icon={<FileText className="size-4" aria-hidden />}
        badge={
          selectedPost ? <AdminStatusBadge entity="blog" status={selectedPost.status} /> : null
        }
        footer={
          selectedPost ? (
            <form
              action={deleteBlogPostInSheetAction}
              onSubmit={(event) => {
                if (!window.confirm("Delete this blog post? This action cannot be undone.")) {
                  event.preventDefault();
                  return;
                }
                sheet.close();
              }}
            >
              <input type="hidden" name="postId" value={selectedPost.id} />
              <button
                type="submit"
                className="text-sm font-medium text-red-600 transition-colors hover:text-red-700"
              >
                Delete post
              </button>
            </form>
          ) : null
        }
      >
        {selectedPost ? (
          <BlogPostForm
            post={selectedPost}
            action={updateBlogPostInSheetAction}
            embedded
            onSaved={sheet.close}
          />
        ) : null}
      </AdminDetailSheet>
    </>
  );
}

function getMissingTranslationsLabel(post: AdminBlogPost): string {
  const missingLocales = locales.filter((locale) => !post.translations[locale]);
  return missingLocales.length === 0
    ? "All translations complete"
    : `Missing: ${missingLocales.join(", ")}`;
}
