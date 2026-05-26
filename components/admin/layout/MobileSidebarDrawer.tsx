"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { ADMIN_SIDEBAR_WIDTH_EXPANDED_PX } from "@/lib/admin/admin-nav.config";
import { AdminSidebarPanel } from "@/components/admin/layout/AdminSidebarPanel";
import { cn } from "@/lib/utils";

type MobileSidebarDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileSidebarDrawer({ open, onClose }: MobileSidebarDrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-40 bg-[#151515]/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        tabIndex={open ? 0 : -1}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-[#151515]/[0.06] bg-white shadow-[8px_0_32px_rgba(21,21,21,0.12)] transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ width: ADMIN_SIDEBAR_WIDTH_EXPANDED_PX }}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="flex items-center justify-end border-b border-[#151515]/[0.06] px-3 py-3">
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-lg text-[#151515]/60 transition-colors hover:bg-[#151515]/[0.05] hover:text-[#151515]"
            aria-label="Close sidebar"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          <AdminSidebarPanel collapsed={false} onNavigate={onClose} className="h-full" />
        </div>
      </aside>
    </>
  );
}
