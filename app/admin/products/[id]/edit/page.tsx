import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { getAdminProductById } from "@/lib/server/products/product-repository";

type EditProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminEditProductPage({ params }: EditProductPageProps) {
  await requireAdminSession();
  const { id } = await params;
  const product = await getAdminProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <AdminShell>
      <h1 className="mb-6 text-3xl font-semibold tracking-[-0.04em]">Edit product</h1>
      <ProductForm
        mode="edit"
        productId={product.id}
        initial={{
          name: product.name,
          description: product.description ?? "",
          price: product.price,
          type: product.type,
          status: product.status,
          secretSlug: product.secretSlug,
        }}
      />
    </AdminShell>
  );
}
