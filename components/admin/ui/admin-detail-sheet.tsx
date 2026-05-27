"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { ADMIN_SHEET_WIDTH_PX } from "@/lib/admin/admin-ui.constants";
import { cn } from "@/lib/utils";

type AdminDetailSheetProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly subtitle?: string;
  readonly badge?: ReactNode;
  readonly icon?: ReactNode;
  readonly children: ReactNode;
  readonly footer?: ReactNode;
  /** Panel max width in px; defaults to {@link ADMIN_SHEET_WIDTH_PX}. */
  readonly maxWidthPx?: number;
};

export function AdminDetailSheet({
  open,
  onClose,
  title,
  subtitle,
  badge,
  icon,
  children,
  footer,
  maxWidthPx = ADMIN_SHEET_WIDTH_PX,
}: AdminDetailSheetProps) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          onClose();
        }
      }}
      modal
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[120] bg-[#151515]/30 backdrop-blur-[2px] data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 transition-opacity duration-300" />
        <Dialog.Viewport className="fixed inset-0 z-[121] flex justify-end">
          <Dialog.Popup
            className={cn(
              "flex h-full w-full flex-col bg-white shadow-[-12px_0_40px_rgba(21,21,21,0.12)] outline-none",
              "data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300 ease-out",
            )}
            style={{ maxWidth: maxWidthPx }}
          >
            <header className="shrink-0 border-b border-[#151515]/[0.08] px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {icon ? (
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#151515]/[0.05] text-[#151515]/70">
                        {icon}
                      </span>
                    ) : null}
                    <Dialog.Title className="truncate text-lg font-semibold tracking-[-0.02em] text-[#151515]">
                      {title}
                    </Dialog.Title>
                    {badge}
                  </div>
                  {subtitle ? (
                    <Dialog.Description className="mt-1.5 truncate text-sm text-[#151515]/55">
                      {subtitle}
                    </Dialog.Description>
                  ) : null}
                </div>
                <Dialog.Close
                  type="button"
                  aria-label="Close"
                  className="flex size-9 shrink-0 items-center justify-center rounded-xl text-[#151515]/50 transition-colors hover:bg-[#151515]/[0.05] hover:text-[#151515]"
                >
                  <X className="size-5" aria-hidden />
                </Dialog.Close>
              </div>
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">{children}</div>

            {footer ? (
              <footer className="shrink-0 border-t border-[#151515]/[0.08] px-6 py-4">
                {footer}
              </footer>
            ) : null}
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
