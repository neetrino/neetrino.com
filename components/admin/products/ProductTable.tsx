import Link from "next/link";
import { CopyProductUrlButton } from "@/components/admin/products/CopyProductUrlButton";
import { DeactivateProductButton } from "@/components/admin/products/DeactivateProductButton";
import { getPublicProductUrl } from "@/lib/products/public-product-url";
import type { AdminProductRow } from "@/lib/server/products/product-repository";

export function ProductTable({ products }: { products: readonly AdminProductRow[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-black/20 bg-white p-8 text-center text-sm text-black/55">
        No products yet. Create a hidden payment link product.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
      <table className="w-full min-w-[960px] text-left text-sm">
        <thead className="border-b border-black/10 bg-black/[0.03] text-xs uppercase tracking-[0.12em] text-black/50">
          <tr>
            <th className="px-5 py-4">Name</th>
            <th className="px-5 py-4">Price</th>
            <th className="px-5 py-4">Type</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Secret URL</th>
            <th className="px-5 py-4">Created</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10">
          {products.map((product) => {
            const publicUrl = getPublicProductUrl(product.secretSlug);
            return (
              <tr key={product.id}>
                <td className="px-5 py-4 font-medium">{product.name}</td>
                <td className="px-5 py-4">
                  {product.price} {product.currency}
                </td>
                <td className="px-5 py-4">{product.type}</td>
                <td className="px-5 py-4">{product.status}</td>
                <td className="max-w-[280px] px-5 py-4">
                  <p className="truncate font-mono text-xs text-black/70">{publicUrl}</p>
                  <div className="mt-2">
                    <CopyProductUrlButton url={publicUrl} />
                  </div>
                </td>
                <td className="px-5 py-4 text-black/60">{formatDate(product.createdAt)}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      className="font-medium text-[#473dff]"
                      href={`/admin/products/${product.id}/edit`}
                    >
                      Edit
                    </Link>
                    {product.status !== "INACTIVE" ? (
                      <DeactivateProductButton productId={product.id} />
                    ) : null}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function formatDate(value: Date): string {
  return value.toLocaleString();
}
