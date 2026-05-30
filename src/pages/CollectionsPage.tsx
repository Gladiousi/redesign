import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { BentoCard } from "@/components/ui/BentoCard"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/CtaSection"
import { collections } from "@/data/siteContent"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

export function CollectionsPage() {
  const [params] = useSearchParams()
  const highlight = params.get("type")

  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="Коллекции"
            title="Готовые направления"
            description="Как на основном сайте: для комнаты, дома и улицы — с индивидуальной доработкой проекта."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <div className="flex flex-col gap-6">
          {collections.map((col, i) => {
            const items = products.filter((p) => p.category === col.id)
            const isHighlight = highlight === col.id
            return (
              <BentoCard
                key={col.id}
                variant="image"
                className={cn(
                  "grid overflow-hidden md:grid-cols-2",
                  isHighlight && "ring-2 ring-forest ring-offset-4"
                )}
              >
                <div
                  className={cn(
                    "relative min-h-[220px] md:min-h-[260px]",
                    i % 2 === 1 && "md:order-2"
                  )}
                >
                  <img
                    src={col.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div
                  className={cn(
                    "flex flex-col justify-center p-6 md:p-8",
                    i % 2 === 1 && "md:order-1"
                  )}
                >
                  <h2 className="text-xl font-semibold text-ink-dark md:text-2xl">
                    {col.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {col.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-ink">
                    {items.length > 0
                      ? `${items.length} модел${items.length === 1 ? "ь" : items.length < 5 ? "и" : "ей"} в каталоге`
                      : "Индивидуальный проект под ваш запрос"}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={col.href}
                      className="block w-full sm:inline-block sm:w-auto"
                    >
                      <Button className="w-full sm:w-auto">Смотреть модели</Button>
                    </Link>
                  </div>
                </div>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
