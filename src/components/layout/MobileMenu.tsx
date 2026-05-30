import { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Phone, X } from "lucide-react"
import { mainNav } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { count } = useCart()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="min-[1440px]:hidden">
      <button
        type="button"
        className="menu-backdrop fixed inset-0 z-100 bg-ink-dark/45 backdrop-blur-[2px] max-md:hidden"
        onClick={onClose}
        aria-label="Закрыть меню"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Навигация"
        className={cn(
          "menu-panel fixed z-101 flex flex-col bg-cream",
          "inset-0 max-md:animate-menu-fade",
          "md:inset-y-0 md:right-0 md:left-auto md:w-full md:max-w-[min(100vw,22rem)] md:border-l md:border-border md:shadow-2xl md:animate-menu-slide"
        )}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/80 px-4 md:px-5">
          <Link
            to="/"
            className="text-lg font-bold text-ink-dark"
            onClick={onClose}
          >
            Скрипалев
          </Link>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-white text-ink-dark transition-colors hover:bg-cream"
            onClick={onClose}
            aria-label="Закрыть меню"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6"
          aria-label="Основное меню"
        >
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "rounded-2xl px-4 py-4 text-lg font-medium transition-colors",
                  isActive
                    ? "bg-white text-link shadow-sm"
                    : "text-ink-dark hover:bg-white/70"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium transition-colors",
                isActive ? "bg-white text-link" : "text-ink-dark hover:bg-white/70"
              )
            }
          >
            Корзина
            {count > 0 && (
              <span className="rounded-full bg-terracotta px-2.5 py-0.5 text-sm font-bold text-ink-dark">
                {count}
              </span>
            )}
          </NavLink>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-border/80 bg-white/50 px-5 py-6">
          <a
            href="tel:+79165348358"
            className="flex items-center justify-center gap-2 py-2 text-base font-semibold text-link"
          >
            <Phone className="size-5" />
            +7 (916) 534-83-58
          </a>
          <Link to="/contacts" className="block w-full" onClick={onClose}>
            <Button size="lg" className="w-full">
              Заказать замер
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
