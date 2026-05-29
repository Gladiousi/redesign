import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type ButtonGroupProps = {
  children: ReactNode
  className?: string
}

/** Группа кнопок: на мобилке — колонка на всю ширину, с sm — в ряд */
export function ButtonGroup({ children, className }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap",
        className
      )}
    >
      {children}
    </div>
  )
}

export function ButtonGroupItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("w-full sm:w-auto [&_[data-slot=button]]:w-full", className)}>
      {children}
    </div>
  )
}
