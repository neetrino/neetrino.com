import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { CopyProductUrlButton } from "@/components/admin/products/CopyProductUrlButton";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { getAdminOrderById } from "@/lib/server/orders/order-repository";
import { formatMoneyAMDWithCurrency } from "@/lib/format-money-amd";
import { getPublicProductUrl } from "@/lib/products/public-product-url";

type AdminOrderDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminOrderDetailPage({ params }: AdminOrderDetailPageProps) {
  await requireAdminSession();
  const { id } = await params;
  const order = await getAdminOrderById(id);

  if (!order) {
    notFound();
  }

  const productUrl = getPublicProductUrl(order.product.secretSlug);

  return (
    <AdminShell>
      <div className="mb-6">
        <Link href="/admin/orders" className="text-sm font-medium text-[#473dff]">
          ← Back to orders
        </Link>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
          Order {order.orderNumber}
        </h1>
      </div>

      <dl className="max-w-2xl space-y-4 rounded-3xl border border-black/10 bg-white p-8 text-sm">
        <Row label="Status" value={order.status} />
        <Row label="Product" value={order.productName} />
        <Row label="Amount" value={formatMoneyAMDWithCurrency(order.amount, order.currency)} />
        <Row label="Customer name" value={order.customerName ?? "—"} />
        <Row label="Customer email" value={order.customerEmail ?? "—"} />
        <Row label="Customer phone" value={order.customerPhone ?? "—"} />
        <Row label="Created" value={order.createdAt.toLocaleString()} />
        <Row label="Updated" value={order.updatedAt.toLocaleString()} />
        <Row label="Paid at" value={order.paidAt?.toLocaleString() ?? "—"} />
        <Row label="Failed at" value={order.failedAt?.toLocaleString() ?? "—"} />
        <Row label="Cancelled at" value={order.cancelledAt?.toLocaleString() ?? "—"} />
        <div>
          <dt className="text-black/50">Product link</dt>
          <dd className="mt-1 break-all font-mono text-xs">{productUrl}</dd>
          <div className="mt-2">
            <CopyProductUrlButton url={productUrl} />
          </div>
        </div>
      </dl>
    </AdminShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-black/50">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}
