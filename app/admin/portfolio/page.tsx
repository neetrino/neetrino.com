import { AdminShell } from "@/components/admin/AdminShell";
import { PortfolioAdminClientOnly } from "@/components/admin/portfolio/PortfolioAdminClientOnly";
import { requireAdminSession } from "@/lib/server/auth/guards";
import { getAllPortfolioItemsForAdmin } from "@/lib/server/portfolio/queries";

export default async function AdminPortfolioPage() {
  await requireAdminSession();
  const rows = await getAllPortfolioItemsForAdmin();
  const initialRows = rows.map((r) => ({
    id: r.id,
    key: r.key,
    url: r.url,
    fileName: r.fileName,
    mediaType: r.mediaType,
    slot: r.slot,
    active: r.active,
  }));

  const adminClientKey = initialRows
    .map((r) => `${r.id}:${r.slot}:${r.active ? "1" : "0"}`)
    .join("|");

  return (
    <AdminShell>
      <PortfolioAdminClientOnly key={adminClientKey} initialRows={initialRows} />
    </AdminShell>
  );
}
