import Link from "next/link";
import { formatMoneyAMDWithCurrency } from "@/lib/format-money-amd";
import type { AdminOrderRow } from "@/lib/server/orders/order-repository";

export function OrderTable({ orders }: { orders: readonly AdminOrderRow[] }) {
  if (orders.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-black/20 bg-white p-8 text-center text-sm text-black/55">
        No orders yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-black/10 bg-white">
      <table className="w-full min-w-[1000px] text-left text-sm">
        <thead className="border-b border-black/10 bg-black/[0.03] text-xs uppercase tracking-[0.12em] text-black/50">
          <tr>
            <th className="px-5 py-4">Order #</th>
            <th className="px-5 py-4">Product</th>
            <th className="px-5 py-4">Customer</th>
            <th className="px-5 py-4">Amount</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Created</th>
            <th className="px-5 py-4">Paid</th>
            <th className="px-5 py-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/10">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-5 py-4 font-mono text-xs">{order.orderNumber}</td>
              <td className="px-5 py-4 font-medium">{order.productName}</td>
              <td className="px-5 py-4 text-black/70">
                <p>{order.customerName ?? "—"}</p>
                <p className="text-xs">{order.customerEmail ?? ""}</p>
                <p className="text-xs">{order.customerPhone ?? ""}</p>
              </td>
              <td className="px-5 py-4">
                {formatMoneyAMDWithCurrency(order.amount, order.currency)}
              </td>
              <td className="px-5 py-4">{order.status}</td>
              <td className="px-5 py-4 text-black/60">{formatDate(order.createdAt)}</td>
              <td className="px-5 py-4 text-black/60">
                {order.paidAt ? formatDate(order.paidAt) : "—"}
              </td>
              <td className="px-5 py-4">
                <Link className="font-medium text-[#473dff]" href={`/admin/orders/${order.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function formatDate(value: Date): string {
  return value.toLocaleString();
}
