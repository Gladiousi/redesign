import { Link } from "react-router-dom"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TextLink } from "@/components/ui/TextLink"
import { company, leadTimes, processSteps } from "@/data/siteContent"
import { formatPrice } from "@/data/products"

type CartSummaryProps = {
  count: number
  subtotal: number
  onClear: () => void
}

export function CartSummary({ count, subtotal, onClear }: CartSummaryProps) {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
      <div className="rounded-3xl bg-forest p-6 text-white md:p-7">
        <p className="text-sm font-medium text-white/80">Ориентировочно</p>
        <p className="mt-1 text-3xl font-bold tabular-nums md:text-4xl">
          {formatPrice(subtotal)}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          {count} {count === 1 ? "позиция" : count < 5 ? "позиции" : "позиций"} ·
          точная сумма после согласования комплектации
        </p>
        <Link to="/contacts" className="mt-6 block">
          <Button
            size="lg"
            variant="secondary"
            className="w-full bg-white text-ink-dark hover:bg-cream"
          >
            Оформить заявку
          </Button>
        </Link>
      </div>

      <div className="rounded-3xl border border-border/60 bg-white p-5 md:p-6">
        <h3 className="text-sm font-semibold text-ink-dark">Как оформить заказ</h3>
        <ol className="mt-4 space-y-3">
          {processSteps.slice(0, 3).map((step) => (
            <li key={step.step} className="flex gap-3 text-sm">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-cream text-xs font-bold text-forest">
                {step.step.replace("0", "")}
              </span>
              <span className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-ink-dark">{step.title}.</span>{" "}
                {step.text}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="rounded-3xl bg-cream p-5 md:p-6">
        <h3 className="text-sm font-semibold text-ink-dark">Сроки изготовления</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {leadTimes.map((t) => (
            <li key={t.label} className="flex justify-between gap-2">
              <span>{t.label}</span>
              <span className="font-medium text-ink-dark">{t.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-border/60 bg-white p-5">
        <h3 className="text-sm font-semibold text-ink-dark">Связаться напрямую</h3>
        <div className="mt-4 space-y-3">
          <a
            href={company.phones[0].href}
            className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-link transition-colors hover:bg-cream-dark"
          >
            <Phone className="size-4 shrink-0 text-forest" />
            {company.phones[0].display}
          </a>
          <a
            href={`mailto:${company.emails[0]}?subject=${encodeURIComponent("Заявка с сайта — корзина")}`}
            className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold text-link transition-colors hover:bg-cream-dark"
          >
            <MessageCircle className="size-4 shrink-0 text-forest" />
            Написать на почту
          </a>
        </div>
        <p className="mt-4 text-center">
          <TextLink to="/catalog" className="text-sm">
            ← Продолжить подбор
          </TextLink>
        </p>
        <button
          type="button"
          onClick={onClear}
          className="mt-4 w-full text-center text-sm font-medium text-muted-foreground transition-colors hover:text-red-700"
        >
          Очистить корзину
        </button>
      </div>
    </aside>
  )
}
