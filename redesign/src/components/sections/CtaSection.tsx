import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup"

type CtaSectionProps = {
  title?: string
  description?: string
}

export function CtaSection({
  title = "Готовы подобрать комплекс для вашего ребёнка?",
  description = "Бесплатная консультация, замер и расчёт стоимости. Работаем по Москве и области с доставкой по России.",
}: CtaSectionProps) {
  return (
    <section className="section-inner section-block">
      <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-10 md:px-12 md:py-14">
        <div
          className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-terracotta/30 blur-2xl"
          aria-hidden
        />
        <div className="relative max-w-xl">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
            {description}
          </p>
          <ButtonGroup className="max-w-none sm:max-w-md">
            <ButtonGroupItem>
              <Link to="/contacts" className="block w-full">
                <Button variant="secondary" size="lg" className="w-full">
                  Оставить заявку
                </Button>
              </Link>
            </ButtonGroupItem>
            <ButtonGroupItem>
              <a href="tel:+79165348358" className="block w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white/40 bg-transparent text-white hover:bg-white/15 hover:text-white"
                >
                  Позвонить
                </Button>
              </a>
            </ButtonGroupItem>
          </ButtonGroup>
        </div>
      </div>
    </section>
  )
}
