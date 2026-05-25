import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { requireAdminSession } from "@/lib/server/auth/guards";

export default async function AdminNewProductPage() {
  await requireAdminSession();

  return (
    <AdminShell>
      <h1 className="mb-6 text-3xl font-semibold tracking-[-0.04em]">New product</h1>
      <ProductForm mode="create" />
    </AdminShell>
  );
}
