import type { ReactNode } from "react";
import {
  ADMIN_DETAIL_FIELD_LABEL_CLASS,
  ADMIN_DETAIL_FIELD_VALUE_CLASS,
} from "@/lib/admin/admin-ui.constants";
import { cn } from "@/lib/utils";

type AdminDetailFieldProps = {
  readonly label: string;
  readonly value: ReactNode;
  readonly mono?: boolean;
  readonly className?: string;
};

export function AdminDetailField({ label, value, mono, className }: AdminDetailFieldProps) {
  return (
    <div className={className}>
      <dt className={ADMIN_DETAIL_FIELD_LABEL_CLASS}>{label}</dt>
      <dd
        className={cn(
          ADMIN_DETAIL_FIELD_VALUE_CLASS,
          mono && "font-mono text-xs break-all",
          !value && "text-[#151515]/35",
        )}
      >
        {value ?? "—"}
      </dd>
    </div>
  );
}

type AdminDetailSectionProps = {
  readonly title: string;
  readonly children: ReactNode;
  readonly className?: string;
};

export function AdminDetailSection({ title, children, className }: AdminDetailSectionProps) {
  return (
    <section className={className}>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#151515]/40">
        {title}
      </h3>
      <dl className="space-y-3">{children}</dl>
    </section>
  );
}
