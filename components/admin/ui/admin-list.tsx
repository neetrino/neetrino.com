import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import {
  ADMIN_LIST_CARD_CLASS,
  ADMIN_LIST_EMPTY_CLASS,
  ADMIN_LIST_ROW_CLASS,
} from "@/lib/admin/admin-ui.constants";
import { cn } from "@/lib/utils";

type AdminListProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export function AdminList({ children, className }: AdminListProps) {
  return <div className={cn(ADMIN_LIST_CARD_CLASS, className)}>{children}</div>;
}

type AdminListEmptyProps = {
  readonly message: string;
};

export function AdminListEmpty({ message }: AdminListEmptyProps) {
  return <div className={ADMIN_LIST_EMPTY_CLASS}>{message}</div>;
}

type AdminListRowProps = {
  readonly onClick: () => void;
  readonly primary: ReactNode;
  readonly secondary?: ReactNode;
  readonly meta?: ReactNode;
  readonly badge?: ReactNode;
  readonly leading?: ReactNode;
  readonly className?: string;
};

export function AdminListRow({
  onClick,
  primary,
  secondary,
  meta,
  badge,
  leading,
  className,
}: AdminListRowProps) {
  return (
    <button type="button" onClick={onClick} className={cn(ADMIN_LIST_ROW_CLASS, className)}>
      {leading}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="truncate text-sm font-semibold text-[#151515]">{primary}</span>
          {badge}
        </div>
        {secondary ? (
          <p className="mt-0.5 truncate text-sm text-[#151515]/55">{secondary}</p>
        ) : null}
        {meta ? <div className="mt-1 text-xs text-[#151515]/45">{meta}</div> : null}
      </div>
      <ChevronRight
        className="size-4 shrink-0 text-[#151515]/25 transition-transform group-hover:translate-x-0.5 group-hover:text-[#151515]/45"
        aria-hidden
      />
    </button>
  );
}
