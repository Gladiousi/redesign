import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type ButtonGroupProps = {
  children: ReactNode
  className?: string
  /** Отступ сверху от текста (по умолчанию mt-8) */
  spacing?: "default" | "none"
}

/** Группа кнопок: на мобилке — колонка на всю ширину, с sm — в ряд */
export function ButtonGroup({
  children,
  className,
  spacing = "default",
}: ButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap",
        spacing === "default" && "mt-8",
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
