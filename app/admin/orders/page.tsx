import { AdminShell } from "@/components/admin/AdminShell";
import { OrderTable } from "@/components/admin/orders/OrderTable";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { listAdminOrders } from "@/lib/server/orders/order-repository";

export default async function AdminOrdersPage() {
  await requireAdminSession();
  const orders = await listAdminOrders();

  return (
    <AdminShell>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-[-0.04em]">Orders</h1>
        <p className="mt-2 text-sm text-black/55">Orders from hidden product payment links.</p>
      </div>
      <OrderTable orders={orders} />
    </AdminShell>
  );
}
