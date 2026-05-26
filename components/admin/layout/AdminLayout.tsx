"use client";

import { AdminSidebar } from "@/components/admin/layout/AdminSidebar";
import { AdminTopBar } from "@/components/admin/layout/AdminTopBar";
import { MobileSidebarDrawer } from "@/components/admin/layout/MobileSidebarDrawer";
import { useAdminSidebar } from "@/components/admin/layout/useAdminSidebar";
import {
  ADMIN_SIDEBAR_WIDTH_COLLAPSED_PX,
  ADMIN_SIDEBAR_WIDTH_EXPANDED_PX,
} from "@/lib/admin/admin-nav.config";
import { cn } from "@/lib/utils";

type AdminLayoutProps = {
  children: React.ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {
  const { collapsed, mobileOpen, toggleCollapsed, openMobile, closeMobile } = useAdminSidebar();
  const sidebarWidthPx = collapsed
    ? ADMIN_SIDEBAR_WIDTH_COLLAPSED_PX
    : ADMIN_SIDEBAR_WIDTH_EXPANDED_PX;

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#151515]">
      <AdminSidebar collapsed={collapsed} onToggleCollapse={toggleCollapsed} />
      <MobileSidebarDrawer open={mobileOpen} onClose={closeMobile} />

      <div
        className="flex min-h-screen min-w-0 flex-col transition-[padding-left] duration-300 ease-out lg:pl-[var(--admin-sidebar-width)]"
        style={{ "--admin-sidebar-width": `${sidebarWidthPx}px` } as React.CSSProperties}
      >
        <AdminTopBar
          collapsed={collapsed}
          onOpenMobileMenu={openMobile}
          onToggleCollapse={toggleCollapsed}
        />

        <main
          className={cn(
            "flex-1 overflow-x-auto px-4 py-6 sm:px-6 sm:py-8",
            "animate-in fade-in duration-300",
          )}
        >
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
