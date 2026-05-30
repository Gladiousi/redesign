import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, Phone, ShoppingCart } from "lucide-react"
import { mainNav } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./MobileMenu"

const desktopNavLink =
  "shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-colors"

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
        <div
          className={cn(
            "section-inner flex h-16 items-center justify-between gap-3 md:h-18",
            "min-[1440px]:grid min-[1440px]:grid-cols-[auto_minmax(0,1fr)_auto] min-[1440px]:items-center min-[1440px]:gap-4"
          )}
        >
          <Link
            to="/"
            className="flex shrink-0 flex-col leading-none"
            onClick={() => setOpen(false)}
          >
            <span className="text-lg font-bold tracking-tight text-ink-dark md:text-xl min-[1440px]:text-xl">
              Скрипалев
            </span>
            <span className="mt-0.5 hidden text-[10px] font-medium tracking-widest text-muted-foreground uppercase sm:block">
              детские комплексы из дерева
            </span>
          </Link>

          <nav
            className="hidden min-w-0 min-[1440px]:flex min-[1440px]:justify-center"
            aria-label="Основное меню"
          >
            <ul className="flex max-w-full flex-nowrap items-center justify-center gap-0.5">
              {mainNav.map((item) => (
                <li key={item.href} className="shrink-0">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        desktopNavLink,
                        isActive
                          ? "bg-cream text-link"
                          : "text-ink hover:bg-cream hover:text-link"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 min-[1440px]:justify-self-end">
            <a
              href="tel:+79165348358"
              className="hidden size-10 items-center justify-center rounded-full text-ink-dark transition-colors hover:bg-cream min-[1440px]:flex"
              title="+7 (916) 534-83-58"
              aria-label="+7 (916) 534-83-58"
            >
              <Phone className="size-4 text-forest" />
            </a>

            <Link
              to="/cart"
              className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink-dark transition-colors hover:bg-cream-dark hover:text-link"
              aria-label={`Корзина${count > 0 ? `, ${count} товаров` : ""}`}
            >
              <ShoppingCart className="size-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex min-w-5 items-center justify-center rounded-full bg-terracotta px-1 text-[10px] font-bold text-ink-dark">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            <Link to="/contacts" className="hidden min-[1440px]:block">
              <Button
                size="lg"
                className="h-12 rounded-full px-5 text-sm"
              >
                Заказать замер
              </Button>
            </Link>

            <button
              type="button"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink-dark transition-colors hover:bg-cream-dark min-[1440px]:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Открыть меню"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
