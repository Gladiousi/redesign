import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

type CtaSectionProps = {
  title?: string
  description?: string
}

export function CtaSection({
  title = "Готовы подобрать комплекс для вашего ребёнка?",
  description = "Бесплатная консультация, замер и расчёт стоимости. Работаем по Калужской области и с доставкой по России.",
}: CtaSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-12 md:px-12 md:py-16">
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-terracotta/30 blur-2xl"
          aria-hidden
        />
        <div className="relative max-w-xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacts">
              <Button variant="secondary" size="lg">
                Оставить заявку
              </Button>
            </Link>
            <a href="tel:+74842700000">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Позвонить
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
