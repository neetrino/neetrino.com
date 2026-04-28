"use client";

import { deleteBlogPostAction } from "@/app/admin/blog/actions";

export function DeletePostButton({ postId }: { postId: string }) {
  return (
    <form
      action={deleteBlogPostAction}
      onSubmit={(event) => {
        if (!window.confirm("Delete this blog post? This action cannot be undone.")) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="postId" value={postId} />
      <button className="text-sm font-medium text-red-600 hover:text-red-700" type="submit">
        Delete
      </button>
    </form>
  );
}
