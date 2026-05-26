"use client";

import {
  ADMIN_SIDEBAR_WIDTH_COLLAPSED_PX,
  ADMIN_SIDEBAR_WIDTH_EXPANDED_PX,
} from "@/lib/admin/admin-nav.config";
import { AdminSidebarPanel } from "@/components/admin/layout/AdminSidebarPanel";
import { cn } from "@/lib/utils";

type AdminSidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
};

export function AdminSidebar({ collapsed, onToggleCollapse }: AdminSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 hidden h-dvh max-h-dvh flex-col overflow-hidden border-r border-[#151515]/[0.06] bg-white shadow-[4px_0_24px_rgba(21,21,21,0.04)] transition-[width] duration-300 ease-out lg:flex",
      )}
      style={{
        width: collapsed ? ADMIN_SIDEBAR_WIDTH_COLLAPSED_PX : ADMIN_SIDEBAR_WIDTH_EXPANDED_PX,
      }}
    >
      <AdminSidebarPanel
        collapsed={collapsed}
        onToggleCollapse={onToggleCollapse}
        showCollapseControl
        className="h-full"
      />
    </aside>
  );
}
