import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, Phone, X } from "lucide-react"
import { mainNav } from "@/data/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 flex-col leading-none">
          <span className="text-lg font-bold tracking-tight text-ink-dark md:text-xl">
            Скрипалёвъ
          </span>
          <span className="mt-0.5 hidden text-[10px] font-medium tracking-widest text-muted-foreground uppercase sm:block">
            детские комплексы из дерева
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основное меню">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-cream text-forest"
                    : "text-ink hover:bg-cream hover:text-forest"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+74842700000"
            className="hidden items-center gap-2 text-sm font-medium text-ink-dark transition-colors hover:text-forest md:flex"
          >
            <Phone className="size-4 text-forest" />
            +7 (4842) 70-00-00
          </a>
          <Link to="/contacts" className="hidden sm:block">
            <Button size="lg">Заказать замер</Button>
          </Link>
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-full bg-cream text-ink-dark lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Мобильное меню">
            {mainNav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-2xl px-4 py-3 text-base font-medium",
                    isActive ? "bg-cream text-forest" : "text-ink hover:bg-cream"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contacts" className="mt-2 block" onClick={() => setOpen(false)}>
              <Button size="lg" className="w-full">
                Заказать замер
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
