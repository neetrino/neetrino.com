import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { BlogAdminPanel } from "@/components/admin/blog/BlogAdminPanel";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { getAdminBlogPosts } from "@/lib/server/blog/admin";

export default async function AdminBlogPage() {
  await requireAdminSession();
  const posts = await getAdminBlogPosts();

  return (
    <AdminShell>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-[-0.04em]">Blog posts</h1>
          <p className="mt-2 text-sm text-black/55">Manage published and draft blog content.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Create new post
        </Link>
      </div>
      <BlogAdminPanel posts={posts} />
    </AdminShell>
  );
}
