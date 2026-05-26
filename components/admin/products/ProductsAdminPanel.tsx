"use client";

import { Package } from "lucide-react";
import { DeactivateProductButton } from "@/components/admin/products/DeactivateProductButton";
import { ProductForm } from "@/components/admin/products/ProductForm";
import { AdminDetailSheet } from "@/components/admin/ui/admin-detail-sheet";
import { AdminList, AdminListEmpty, AdminListRow } from "@/components/admin/ui/admin-list";
import { AdminStatusBadge } from "@/components/admin/ui/admin-status-badge";
import { useAdminDetailSheet } from "@/components/admin/ui/use-admin-detail-sheet";
import { formatAdminDateTime } from "@/lib/admin/admin-format";
import { formatMoneyAMDWithCurrency } from "@/lib/format-money-amd";
import type { AdminProductRow } from "@/lib/server/products/product-repository";

type ProductsAdminPanelProps = {
  readonly products: readonly AdminProductRow[];
};

export function ProductsAdminPanel({ products }: ProductsAdminPanelProps) {
  const sheet = useAdminDetailSheet<string>();
  const selectedProduct = products.find((product) => product.id === sheet.selectedId) ?? null;

  if (products.length === 0) {
    return <AdminListEmpty message="No products yet. Create a hidden payment link product." />;
  }

  return (
    <>
      <AdminList>
        {products.map((product) => (
          <AdminListRow
            key={product.id}
            onClick={() => sheet.open(product.id)}
            primary={product.name}
            secondary={formatMoneyAMDWithCurrency(product.price, product.currency)}
            meta={
              <span>
                {product.type.replaceAll("_", " ")} · {formatAdminDateTime(product.createdAt)}
              </span>
            }
            badge={<AdminStatusBadge entity="product" status={product.status} />}
          />
        ))}
      </AdminList>

      <AdminDetailSheet
        open={sheet.isOpen}
        onClose={sheet.close}
        title={selectedProduct?.name ?? "Product"}
        subtitle={
          selectedProduct
            ? formatMoneyAMDWithCurrency(selectedProduct.price, selectedProduct.currency)
            : undefined
        }
        icon={<Package className="size-4" aria-hidden />}
        badge={
          selectedProduct ? (
            <AdminStatusBadge entity="product" status={selectedProduct.status} />
          ) : null
        }
        footer={
          selectedProduct && selectedProduct.status !== "INACTIVE" ? (
            <DeactivateProductButton productId={selectedProduct.id} onDeactivated={sheet.close} />
          ) : null
        }
      >
        {selectedProduct ? (
          <ProductForm
            mode="edit"
            productId={selectedProduct.id}
            embedded
            onSaved={sheet.close}
            initial={{
              name: selectedProduct.name,
              description: selectedProduct.description ?? "",
              price: selectedProduct.price,
              type: selectedProduct.type,
              status: selectedProduct.status,
              secretSlug: selectedProduct.secretSlug,
            }}
          />
        ) : null}
      </AdminDetailSheet>
    </>
  );
}
