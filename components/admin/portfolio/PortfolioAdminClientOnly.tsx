"use client";

import dynamic from "next/dynamic";
import type { PortfolioAdminClientProps } from "./PortfolioAdminClient";

const PortfolioAdminClientDynamic = dynamic<PortfolioAdminClientProps>(
  () =>
    import("./PortfolioAdminClient").then((m) => ({
      default: m.PortfolioAdminClient,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-xl border border-black/10 bg-white p-6 text-sm text-black/60">
        Loading portfolio manager...
      </div>
    ),
  },
);

export function PortfolioAdminClientOnly(props: PortfolioAdminClientProps) {
  return <PortfolioAdminClientDynamic {...props} />;
}
