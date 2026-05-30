import { Info } from "lucide-react"
import { orderNotice } from "@/data/siteContent"
import { cn } from "@/lib/utils"

type OrderNoticeProps = {
  className?: string
  compact?: boolean
}

export function OrderNotice({ className, compact }: OrderNoticeProps) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-2xl border border-wood/50 bg-wood-light/40 text-sm leading-relaxed text-ink",
        compact ? "p-4" : "rounded-3xl p-5 md:p-6",
        className
      )}
    >
      <Info className="mt-0.5 size-5 shrink-0 text-forest" aria-hidden />
      <p>{orderNotice}</p>
    </div>
  )
}
