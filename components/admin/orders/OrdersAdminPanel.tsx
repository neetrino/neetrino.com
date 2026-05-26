"use client";

import { useCallback, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { CopyProductUrlButton } from "@/components/admin/products/CopyProductUrlButton";
import { AdminDetailField, AdminDetailSection } from "@/components/admin/ui/admin-detail-field";
import { AdminDetailSheet } from "@/components/admin/ui/admin-detail-sheet";
import { AdminList, AdminListEmpty, AdminListRow } from "@/components/admin/ui/admin-list";
import { AdminStatusBadge } from "@/components/admin/ui/admin-status-badge";
import { useAdminDetailSheet } from "@/components/admin/ui/use-admin-detail-sheet";
import { formatAdminDateTime } from "@/lib/admin/admin-format";
import { formatMoneyAMDWithCurrency } from "@/lib/format-money-amd";
import type { AdminOrderRow } from "@/lib/server/orders/order-repository";

type OrdersAdminPanelProps = {
  readonly orders: readonly AdminOrderRow[];
};

type OrderDetailResponse = {
  success?: boolean;
  error?: string;
  order?: {
    id: string;
    orderNumber: string;
    productName: string;
    amount: string;
    currency: string;
    customerName: string | null;
    customerEmail: string | null;
    customerPhone: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
    paidAt: string | null;
    failedAt: string | null;
    cancelledAt: string | null;
    productPublicUrl?: string;
  };
};

export function OrdersAdminPanel({ orders }: OrdersAdminPanelProps) {
  const sheet = useAdminDetailSheet<string>();
  const [detail, setDetail] = useState<OrderDetailResponse["order"] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openOrder = useCallback(
    (id: string) => {
      sheet.open(id);
      setLoading(true);
      setError(null);
      setDetail(null);

      void fetch(`/api/admin/orders/${id}`, { credentials: "include" })
        .then(async (res) => {
          const data = (await res.json()) as OrderDetailResponse;
          if (!res.ok || !data.success || !data.order) {
            throw new Error(data.error ?? "Could not load order.");
          }
          setDetail(data.order);
        })
        .catch((fetchError: unknown) => {
          setDetail(null);
          setError(fetchError instanceof Error ? fetchError.message : "Could not load order.");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [sheet],
  );

  const closeOrder = useCallback(() => {
    sheet.close();
    setDetail(null);
    setError(null);
    setLoading(false);
  }, [sheet]);

  if (orders.length === 0) {
    return <AdminListEmpty message="No orders yet." />;
  }

  const selectedRow = orders.find((order) => order.id === sheet.selectedId);

  return (
    <>
      <AdminList>
        {orders.map((order) => (
          <AdminListRow
            key={order.id}
            onClick={() => openOrder(order.id)}
            primary={order.orderNumber}
            secondary={order.productName}
            meta={
              <span>
                {order.customerName ?? "No customer"} ·{" "}
                {formatMoneyAMDWithCurrency(order.amount, order.currency)} ·{" "}
                {formatAdminDateTime(order.createdAt)}
              </span>
            }
            badge={<AdminStatusBadge entity="order" status={order.status} />}
          />
        ))}
      </AdminList>

      <AdminDetailSheet
        open={sheet.isOpen}
        onClose={closeOrder}
        title={selectedRow?.orderNumber ?? "Order"}
        subtitle={selectedRow?.productName}
        icon={<ShoppingBag className="size-4" aria-hidden />}
        badge={selectedRow ? <AdminStatusBadge entity="order" status={selectedRow.status} /> : null}
      >
        {loading ? <SheetLoadingState /> : null}
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        {!loading && !error && detail ? (
          <div className="space-y-6">
            <AdminDetailSection title="Order">
              <AdminDetailField label="Order number" value={detail.orderNumber} mono />
              <AdminDetailField label="Product" value={detail.productName} />
              <AdminDetailField
                label="Amount"
                value={formatMoneyAMDWithCurrency(detail.amount, detail.currency)}
              />
              <AdminDetailField
                label="Status"
                value={<AdminStatusBadge entity="order" status={detail.status} />}
              />
            </AdminDetailSection>

            <AdminDetailSection title="Customer">
              <AdminDetailField label="Name" value={detail.customerName} />
              <AdminDetailField label="Email" value={detail.customerEmail} />
              <AdminDetailField label="Phone" value={detail.customerPhone} />
            </AdminDetailSection>

            <AdminDetailSection title="Timeline">
              <AdminDetailField label="Created" value={formatAdminDateTime(detail.createdAt)} />
              <AdminDetailField label="Updated" value={formatAdminDateTime(detail.updatedAt)} />
              <AdminDetailField label="Paid at" value={formatAdminDateTime(detail.paidAt)} />
              <AdminDetailField label="Failed at" value={formatAdminDateTime(detail.failedAt)} />
              <AdminDetailField
                label="Cancelled at"
                value={formatAdminDateTime(detail.cancelledAt)}
              />
            </AdminDetailSection>

            {detail.productPublicUrl ? (
              <AdminDetailSection title="Product link">
                <AdminDetailField label="Secret URL" value={detail.productPublicUrl} mono />
                <CopyProductUrlButton url={detail.productPublicUrl} />
              </AdminDetailSection>
            ) : null}
          </div>
        ) : null}
      </AdminDetailSheet>
    </>
  );
}

function SheetLoadingState() {
  return <p className="text-sm text-[#151515]/55">Loading details…</p>;
}
