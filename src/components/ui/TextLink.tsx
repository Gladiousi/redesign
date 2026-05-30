import { Link, type LinkProps } from "react-router-dom"
import { cn } from "@/lib/utils"

const linkClass =
  "font-semibold text-link underline decoration-link/40 underline-offset-[3px] transition-colors hover:text-link-hover hover:decoration-link"

export function TextLink({ className, ...props }: LinkProps) {
  return <Link className={cn(linkClass, className)} {...props} />
}
