import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, Phone, ShoppingCart, X } from "lucide-react"
import { mainNav } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  useEffect(() => {
    document.body.classList.toggle("menu-open", open)
    return () => document.body.classList.remove("menu-open")
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
        <div className="section-inner flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
          <Link to="/" className="flex shrink-0 flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="text-lg font-bold tracking-tight text-ink-dark md:text-xl">
              Скрипалёвъ
            </span>
            <span className="mt-0.5 hidden text-[10px] font-medium tracking-widest text-muted-foreground uppercase sm:block">
              детские комплексы из дерева
            </span>
          </Link>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Основное меню"
          >
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors lg:px-3 lg:text-sm",
                    isActive
                      ? "bg-cream text-link"
                      : "text-ink hover:bg-cream hover:text-link"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="tel:+74842700000"
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink-dark transition-colors hover:bg-cream lg:flex"
            >
              <Phone className="size-4 text-forest" />
              <span className="hidden 2xl:inline">+7 (4842) 70-00-00</span>
            </a>

            <Link
              to="/cart"
              className="relative flex size-10 items-center justify-center rounded-full bg-cream text-ink-dark transition-colors hover:bg-cream-dark hover:text-link"
              aria-label={`Корзина${count > 0 ? `, ${count} товаров` : ""}`}
            >
              <ShoppingCart className="size-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-bold text-ink-dark">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            <Link to="/contacts" className="hidden md:block">
              <Button size="lg">Заказать замер</Button>
            </Link>

            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full bg-cream text-ink-dark xl:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Открыть меню"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-cream xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/80 px-4">
            <Link
              to="/"
              className="text-lg font-bold text-ink-dark"
              onClick={() => setOpen(false)}
            >
              Скрипалёвъ
            </Link>
            <button
              type="button"
              className="flex size-10 items-center justify-center rounded-full bg-white text-ink-dark"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6"
            aria-label="Мобильное меню"
          >
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium",
                  isActive ? "bg-white text-link" : "text-ink-dark hover:bg-white/70"
                )
              }
            >
              Корзина
              {count > 0 && (
                <span className="rounded-full bg-terracotta px-2.5 py-0.5 text-sm font-bold">
                  {count}
                </span>
              )}
            </NavLink>
          </nav>

          <div className="shrink-0 space-y-3 border-t border-border/80 bg-white/50 px-5 py-6">
            <a
              href="tel:+74842700000"
              className="flex items-center justify-center gap-2 py-2 text-base font-semibold text-link"
            >
              <Phone className="size-5" />
              +7 (4842) 70-00-00
            </a>
            <Link to="/contacts" className="block w-full" onClick={() => setOpen(false)}>
              <Button size="lg" className="w-full">
                Заказать замер
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
