import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/server/auth/guards";

type AdminOrderDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminOrderDetailPage({ params }: AdminOrderDetailPageProps) {
  await requireAdminSession();
  await params;
  redirect("/admin/orders");
}
