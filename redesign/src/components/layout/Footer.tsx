import { Link } from "react-router-dom"
import { footerNav } from "@/data/navigation"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinkClass =
  "text-sm text-muted-foreground transition-colors hover:text-link hover:underline hover:underline-offset-2"

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="section-inner grid gap-10 py-12 md:grid-cols-2 md:gap-12 md:py-14 lg:grid-cols-4 lg:py-16">
        <div>
          <Link to="/" className="text-xl font-bold text-ink-dark">
            Скрипалев
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            ИП Скрепалев Олег Владимирович - производство детских спортивных
            комплексов из натуральной древесины с 2005 года.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-dark">Каталог</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.catalog.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/cart" className={footerLinkClass}>
                Корзина
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-dark">Компания</h3>
          <ul className="mt-4 space-y-2.5">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={footerLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/articles" className={footerLinkClass}>
                Статьи
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink-dark">Контакты</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-forest" />
              <span>г. Реутов, ул. Молодежная, 1</span>
            </li>
            <li>
              <a href="tel:+79165348358" className={`flex gap-2 ${footerLinkClass}`}>
                <Phone className="size-4 shrink-0 text-forest" />
                +7 (916) 534-83-58
              </a>
            </li>
            <li>
              <a
                href="mailto:info@skripalev.ru"
                className={`flex gap-2 ${footerLinkClass}`}
              >
                <Mail className="size-4 shrink-0 text-forest" />
                oleg-skripal@yandex.ru
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/80">
        <div className="section-inner flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ИП Скрепалев О.В. Все права защищены.</p>
          <p>Редизайн - дипломный проект Юрин2026. Прототип интерфейса.</p>
        </div>
      </div>
    </footer>
  )
}
