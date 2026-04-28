import { AdminDebugClient } from "@/components/admin/AdminDebugClient";

const adminClientDebugEnabled =
  process.env.ADMIN_AUTH_DEBUG === "true" || process.env.NEXT_PUBLIC_ADMIN_AUTH_DEBUG === "true";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {adminClientDebugEnabled ? <AdminDebugClient enabled /> : null}
      {children}
    </>
  );
}
