import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type BentoCardProps = {
  children: ReactNode
  className?: string
  variant?: "default" | "accent" | "forest" | "image"
  as?: "div" | "article"
}

export function BentoCard({
  children,
  className,
  variant = "default",
  as: Component = "div",
}: BentoCardProps) {
  return (
    <Component
      className={cn(
        "rounded-3xl p-6 md:p-8",
        variant === "default" && "bg-cream",
        variant === "accent" && "bg-wood-light/60",
        variant === "forest" && "bg-forest text-white",
        variant === "image" && "relative overflow-hidden p-0",
        className
      )}
    >
      {children}
    </Component>
  )
}
