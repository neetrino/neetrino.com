import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/server/auth/guards";

export default async function AdminNewProductPage() {
  await requireAdminSession();
  redirect("/admin/products");
}
