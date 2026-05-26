import { AdminShell } from "@/components/admin/AdminShell";
import { ProductsAdminPageClient } from "@/components/admin/products/ProductsAdminPageClient";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { listAdminProducts } from "@/lib/server/products/product-repository";

export default async function AdminProductsPage() {
  await requireAdminSession();
  const products = await listAdminProducts();

  return (
    <AdminShell>
      <ProductsAdminPageClient products={products} />
    </AdminShell>
  );
}
