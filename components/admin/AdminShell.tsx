import { AdminLayout } from "@/components/admin/layout/AdminLayout";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
