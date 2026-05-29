import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { BentoCard } from "@/components/ui/BentoCard"
import { Button } from "@/components/ui/button"
import { CtaSection } from "@/components/sections/CtaSection"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"

const collections = [
  {
    id: "outdoor",
    title: "Уличные комплексы",
    description:
      "Погодостойкие конструкции для дачи и частного двора. Усиленная пропитка и глубокая установка.",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1000&q=80",
    href: "/catalog?category=outdoor",
  },
  {
    id: "home",
    title: "Для квартиры и коттеджа",
    description:
      "Компактные решения для детской и гостиной. Бесшумное крепление, бережное отношение к отделке.",
    image:
      "https://images.unsplash.com/photo-1503454537845-7e8b5b2374ea?w=1000&q=80",
    href: "/catalog?category=home",
  },
]

export function CollectionsPage() {
  const [params] = useSearchParams()
  const highlight = params.get("type")

  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="Коллекции"
            title="Готовые решения"
            description="Подборки по сценарию использования — от улицы до детской комнаты."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <div className="flex flex-col gap-8">
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
                    "relative min-h-[240px]",
                    i === 1 && "md:order-2"
                  )}
                >
                  <img
                    src={col.image}
                    alt={col.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div
                  className={cn(
                    "flex flex-col justify-center p-8 md:p-10",
                    i === 1 && "md:order-1"
                  )}
                >
                  <h2 className="text-2xl font-semibold text-ink-dark md:text-3xl">
                    {col.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{col.description}</p>
                  <p className="mt-4 text-sm text-ink">
                    {items.length} модел{items.length === 1 ? "ь" : "и"} в подборке
                  </p>
                  <div className="mt-8">
                    <Link to={col.href} className="block w-full sm:inline-block sm:w-auto">
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
