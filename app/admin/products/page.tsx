import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductTable } from "@/components/admin/products/ProductTable";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { listAdminProducts } from "@/lib/server/products/product-repository";

export default async function AdminProductsPage() {
  await requireAdminSession();
  const products = await listAdminProducts();

  return (
    <AdminShell>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-[-0.04em]">Products</h1>
          <p className="mt-2 text-sm text-black/55">
            Hidden payment-link products. Not listed on the public site.
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white"
        >
          New product
        </Link>
      </div>
      <ProductTable products={products} />
    </AdminShell>
  );
}
