"use client";

import { useState } from "react";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { ProductsAdminPanel } from "@/components/admin/products/ProductsAdminPanel";
import { AdminFormDialog } from "@/components/admin/ui/admin-form-dialog";
import type { AdminProductRow } from "@/lib/server/products/product-repository";

type ProductsAdminPageClientProps = {
  readonly products: readonly AdminProductRow[];
};

export function ProductsAdminPageClient({ products }: ProductsAdminPageClientProps) {
  const [createOpen, setCreateOpen] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const openCreate = () => {
    setFormKey((key) => key + 1);
    setCreateOpen(true);
  };

  const closeCreate = () => {
    setCreateOpen(false);
  };

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-[-0.04em]">Products</h1>
          <p className="mt-2 text-sm text-black/55">
            Hidden payment-link products. Not listed on the public site.
          </p>
        </div>
        <button
          type="button"
          onClick={openCreate}
          className="rounded-full bg-[#151515] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          New product
        </button>
      </div>

      <ProductsAdminPanel products={products} />

      <AdminFormDialog
        open={createOpen}
        onClose={closeCreate}
        title="New product"
        description="Create a hidden payment-link product for your client."
      >
        <ProductForm
          key={formKey}
          mode="create"
          embedded
          onSaved={closeCreate}
          onCancel={closeCreate}
        />
      </AdminFormDialog>
    </>
  );
}
