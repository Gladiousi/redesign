import { Link } from "react-router-dom"
import { footerNav } from "@/data/navigation"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 md:px-6 lg:grid-cols-4 lg:px-8 lg:py-16">
        <div className="lg:col-span-1">
          <Link to="/" className="text-xl font-bold text-ink-dark">
            Скрипалёвъ
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            ИП Скрепалев Олег Владимирович — производство детских спортивных
            комплексов из натуральной древесины с 2005 года.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-dark">Каталог</h3>
          <ul className="mt-4 space-y-2">
            {footerNav.catalog.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-dark">Компания</h3>
          <ul className="mt-4 space-y-2">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-forest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-dark">Контакты</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-forest" />
              <span>г. Калуга, ул. Примерная, 12</span>
            </li>
            <li>
              <a
                href="tel:+74842700000"
                className="flex gap-2 transition-colors hover:text-forest"
              >
                <Phone className="size-4 shrink-0 text-forest" />
                +7 (4842) 70-00-00
              </a>
            </li>
            <li>
              <a
                href="mailto:info@skripalev.ru"
                className="flex gap-2 transition-colors hover:text-forest"
              >
                <Mail className="size-4 shrink-0 text-forest" />
                info@skripalev.ru
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ИП Скрепалев О.В. Все права защищены.</p>
          <p>Редизайн — дипломный проект. Прототип интерфейса.</p>
        </div>
      </div>
    </footer>
  )
}
