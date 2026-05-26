"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AdminFormDialogProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly description?: string;
  readonly children: ReactNode;
  readonly className?: string;
};

export function AdminFormDialog({
  open,
  onClose,
  title,
  description,
  children,
  className,
}: AdminFormDialogProps) {
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
        <Dialog.Backdrop className="fixed inset-0 z-[130] bg-[#151515]/30 backdrop-blur-[2px]" />
        <Dialog.Viewport className="fixed inset-0 z-[131] flex items-center justify-center p-4">
          <Dialog.Popup
            className={cn(
              "flex max-h-[min(90dvh,720px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-[#151515]/10 bg-white shadow-2xl outline-none",
              className,
            )}
          >
            <header className="flex shrink-0 items-start justify-between gap-4 border-b border-[#151515]/[0.08] px-6 py-5">
              <div className="min-w-0">
                <Dialog.Title className="text-lg font-semibold tracking-[-0.02em] text-[#151515]">
                  {title}
                </Dialog.Title>
                {description ? (
                  <Dialog.Description className="mt-1 text-sm text-[#151515]/55">
                    {description}
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
            </header>
            <div className="min-h-0 overflow-y-auto px-6 py-5">{children}</div>
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
