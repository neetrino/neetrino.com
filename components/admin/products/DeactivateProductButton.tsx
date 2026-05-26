"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DeactivateProductButtonProps = {
  readonly productId: string;
  readonly onDeactivated?: () => void;
};

export function DeactivateProductButton({
  productId,
  onDeactivated,
}: DeactivateProductButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDeactivate(): Promise<void> {
    if (
      !window.confirm("Deactivate this product? The secret link will stop accepting new orders.")
    ) {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/products/${productId}`, { method: "DELETE" });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        window.alert(data.error ?? "Could not deactivate product.");
        return;
      }
      router.refresh();
      onDeactivated?.();
    } catch {
      window.alert("Could not deactivate product.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      disabled={loading}
      onClick={() => void handleDeactivate()}
      className="font-medium text-red-700 hover:text-red-900 disabled:opacity-50"
    >
      {loading ? "…" : "Deactivate"}
    </button>
  );
}
