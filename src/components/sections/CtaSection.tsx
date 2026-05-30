import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup"
import { cn } from "@/lib/utils"

type CtaSectionProps = {
  title?: string
  description?: string
  className?: string
}

export function CtaSection({
  title = "Готовы подобрать комплекс для вашего ребёнка?",
  description = "Консультация, эскиз и расчёт. Реутов, Москва и область, доставка по России. WhatsApp, MAX, телефон или почта.",
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("section-inner section-cta", className)}>
      <div className="relative overflow-hidden rounded-3xl bg-forest px-5 py-7 sm:px-8 sm:py-8 md:px-10 md:py-9">
        <div
          className="pointer-events-none absolute -top-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 size-48 rounded-full bg-terracotta/30 blur-2xl"
          aria-hidden
        />
        <div className="relative max-w-xl">
          <h2 className="text-xl font-semibold text-white sm:text-2xl md:text-[1.65rem]">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            {description}
          </p>
          <ButtonGroup className="mt-6 max-w-none sm:max-w-md">
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
