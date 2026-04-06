"use client";

import { useState, useTransition, type FormEvent } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { submitGetQuoteRequest } from "@/app/contact/actions";
import { GetQuoteModalForm } from "@/components/quote/get-quote-modal-form";

type GetQuoteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function GetQuoteModal({ open, onOpenChange }: GetQuoteModalProps) {
  const [pending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleOpenChange(nextOpen: boolean) {
    if (nextOpen) {
      setErrorMessage(null);
    }
    onOpenChange(nextOpen);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setErrorMessage(null);
    startTransition(async () => {
      const formData = new FormData(form);
      const result = await submitGetQuoteRequest(formData);
      if (result.ok) {
        form.reset();
        handleOpenChange(false);
      } else {
        setErrorMessage(result.error);
      }
    });
  }

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange} modal>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm" />
        <Dialog.Viewport className="fixed inset-0 z-[201] flex items-center justify-center p-4">
          <Dialog.Popup className="max-h-[min(90dvh,720px)] w-full max-w-md overflow-y-auto rounded-2xl border border-white/10 bg-[#1b1b21] p-6 shadow-2xl outline-none">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <Dialog.Title className="text-xl font-black text-white">Get a quote</Dialog.Title>
                <Dialog.Description className="mt-1 text-sm font-light text-white/65">
                  Tell us briefly about your project — we will get back to you.
                </Dialog.Description>
              </div>
              <Dialog.Close
                type="button"
                className="shrink-0 rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                aria-label="Close"
              >
                <X className="size-5" strokeWidth={1.75} />
              </Dialog.Close>
            </div>

            <GetQuoteModalForm
              onSubmit={handleSubmit}
              pending={pending}
              errorMessage={errorMessage}
            />
          </Dialog.Popup>
        </Dialog.Viewport>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
