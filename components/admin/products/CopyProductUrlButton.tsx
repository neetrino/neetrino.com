"use client";

import { useState } from "react";

type CopyProductUrlButtonProps = {
  readonly url: string;
};

export function CopyProductUrlButton({ url }: CopyProductUrlButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleCopy()}
      className="rounded-lg border border-black/15 bg-white px-3 py-1.5 text-xs font-semibold text-black/80 hover:bg-black/[0.03]"
    >
      {copied ? "Copied" : "Copy URL"}
    </button>
  );
}
