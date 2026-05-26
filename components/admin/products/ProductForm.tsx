"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CopyProductUrlButton } from "@/components/admin/products/CopyProductUrlButton";
import { getPublicProductUrl } from "@/lib/products/public-product-url";

type ProductTypeValue = "ONE_TIME" | "PERMANENT";
type ProductStatusValue = "ACTIVE" | "INACTIVE" | "SOLD";

type ProductFormProps = {
  readonly mode: "create" | "edit";
  readonly productId?: string;
  readonly embedded?: boolean;
  readonly onSaved?: () => void;
  readonly initial?: {
    readonly name: string;
    readonly description: string;
    readonly price: string;
    readonly type: ProductTypeValue;
    readonly status: ProductStatusValue;
    readonly secretSlug: string;
  };
};

export function ProductForm({
  mode,
  productId,
  initial,
  embedded = false,
  onSaved,
}: ProductFormProps) {
  const router = useRouter();
  const [name, setName] = useState(initial?.name ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [price, setPrice] = useState(initial?.price ?? "");
  const [type, setType] = useState<ProductTypeValue>(initial?.type ?? "ONE_TIME");
  const [status, setStatus] = useState<ProductStatusValue>(initial?.status ?? "ACTIVE");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [createdUrl, setCreatedUrl] = useState<string | null>(
    initial?.secretSlug ? getPublicProductUrl(initial.secretSlug) : null,
  );

  async function handleSubmit(event: React.FormEvent): Promise<void> {
    event.preventDefault();
    setError(null);
    setSaving(true);

    const priceAmd = Number(price);
    if (!Number.isFinite(priceAmd) || priceAmd <= 0) {
      setError("Price must be a positive number.");
      setSaving(false);
      return;
    }

    const payload =
      mode === "create"
        ? { name, description, priceAmd, type }
        : { name, description, priceAmd, type, status };

    try {
      const url =
        mode === "create" ? "/api/admin/products" : `/api/admin/products/${productId ?? ""}`;
      const res = await fetch(url, {
        method: mode === "create" ? "POST" : "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        product?: { id?: string; publicUrl?: string };
      };

      if (!res.ok || !data.success) {
        setError(data.error ?? "Could not save product.");
        return;
      }

      if (mode === "create" && data.product?.id) {
        if (data.product.publicUrl) {
          setCreatedUrl(data.product.publicUrl);
        }
        router.push(`/admin/products/${data.product.id}/edit`);
        router.refresh();
        return;
      }

      if (embedded) {
        onSaved?.();
        router.refresh();
        return;
      }

      router.push("/admin/products");
      router.refresh();
    } catch {
      setError("Could not save product.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form
      onSubmit={(e) => void handleSubmit(e)}
      className={
        embedded
          ? "space-y-5"
          : "max-w-xl space-y-5 rounded-3xl border border-black/10 bg-white p-8"
      }
    >
      {createdUrl ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <p className="font-medium">Product created. Share this secret URL with your client:</p>
          <p className="mt-2 break-all font-mono text-xs">{createdUrl}</p>
          <div className="mt-2">
            <CopyProductUrlButton url={createdUrl} />
          </div>
        </div>
      ) : null}

      <label className="block text-sm font-medium">
        Name
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-xl border border-black/15 px-4 py-2.5"
        />
      </label>

      <label className="block text-sm font-medium">
        Price (AMD)
        <input
          required
          type="number"
          min="0.01"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 w-full rounded-xl border border-black/15 px-4 py-2.5"
        />
      </label>

      <label className="block text-sm font-medium">
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-xl border border-black/15 px-4 py-2.5"
        />
      </label>

      <label className="block text-sm font-medium">
        Type
        <select
          value={type}
          onChange={(e) => setType(e.target.value as ProductTypeValue)}
          className="mt-1 w-full rounded-xl border border-black/15 px-4 py-2.5"
        >
          <option value="ONE_TIME">ONE_TIME (single purchase)</option>
          <option value="PERMANENT">PERMANENT (repeat purchases)</option>
        </select>
      </label>

      {mode === "edit" ? (
        <label className="block text-sm font-medium">
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as ProductStatusValue)}
            className="mt-1 w-full rounded-xl border border-black/15 px-4 py-2.5"
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
            <option value="SOLD">SOLD</option>
          </select>
        </label>
      ) : null}

      {initial?.secretSlug ? (
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3 text-sm">
          <p className="font-medium text-black/70">Secret public URL (read-only)</p>
          <p className="mt-2 break-all font-mono text-xs">
            {getPublicProductUrl(initial.secretSlug)}
          </p>
          <div className="mt-2">
            <CopyProductUrlButton url={getPublicProductUrl(initial.secretSlug)} />
          </div>
        </div>
      ) : null}

      {error ? <p className="text-sm text-red-700">{error}</p> : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save"}
        </button>
        {embedded ? null : (
          <Link
            href="/admin/products"
            className="rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-black/70"
          >
            Cancel
          </Link>
        )}
      </div>
    </form>
  );
}
