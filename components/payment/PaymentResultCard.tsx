import Link from "next/link";
import { CheckCircle2, Home, XCircle } from "lucide-react";
import { formatMoneyAMDWithCurrency } from "@/lib/format-money-amd";
import type { PublicOrderSummary } from "@/lib/server/payment/get-public-order-summary";
import { cn } from "@/lib/utils";

type PaymentResultCardProps = {
  readonly variant: "success" | "fail";
  readonly title: string;
  readonly message: string;
  readonly orderLabel: string;
  readonly homeLabel: string;
  readonly contactLabel: string;
  readonly order: PublicOrderSummary | null;
};

const CARD_CLASSNAME =
  "mx-auto w-full max-w-xl rounded-[30px] border border-white/15 bg-gradient-to-br from-[#302f55]/65 via-[#1e1d31]/78 to-[#17171b]/92 p-8 shadow-[0_25px_80px_rgba(20,10,70,0.42)] backdrop-blur-xl md:p-10";

export function PaymentResultCard({
  variant,
  title,
  message,
  orderLabel,
  homeLabel,
  contactLabel,
  order,
}: PaymentResultCardProps) {
  const Icon = variant === "success" ? CheckCircle2 : XCircle;
  const iconClass = variant === "success" ? "text-emerald-400" : "text-red-400";

  return (
    <article className={CARD_CLASSNAME}>
      <Icon className={cn("size-12", iconClass)} aria-hidden />
      <h1 className="mt-5 text-3xl font-semibold text-white md:text-4xl">{title}</h1>
      <p className="mt-3 text-base leading-relaxed text-white/75">{message}</p>

      {order ? (
        <dl className="mt-6 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white/85">
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-white/55">{orderLabel}</dt>
            <dd className="font-mono font-medium">{order.orderNumber}</dd>
          </div>
          {"productName" in order && order.productName ? (
            <div className="flex flex-wrap justify-between gap-2">
              <dt className="text-white/55">Product</dt>
              <dd>{order.productName}</dd>
            </div>
          ) : null}
          <div className="flex flex-wrap justify-between gap-2">
            <dt className="text-white/55">Amount</dt>
            <dd>{formatMoneyAMDWithCurrency(order.amount, order.currency)}</dd>
          </div>
        </dl>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <Home className="size-4" aria-hidden />
          {homeLabel}
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-[#473dff] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95"
        >
          {contactLabel}
        </Link>
      </div>
    </article>
  );
}
