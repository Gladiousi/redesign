import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ProductCard } from "@/components/ui/ProductCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CtaSection } from "@/components/sections/CtaSection"
import { products, type Product } from "@/data/products"
import { cn } from "@/lib/utils"

const filters: { id: Product["category"] | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "complex", label: "Комплексы" },
  { id: "wall", label: "Стенки" },
  { id: "outdoor", label: "Уличные" },
  { id: "home", label: "Для дома" },
]

export function CatalogPage() {
  const [searchParams] = useSearchParams()
  const initial = searchParams.get("category") as Product["category"] | null
  const [active, setActive] = useState<Product["category"] | "all">(
    initial && filters.some((f) => f.id === initial) ? initial : "all"
  )

  const filtered = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.category === active),
    [active]
  )

  return (
    <>
      <section className="bg-cream px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Каталог"
            title="Спортивные комплексы"
            description="Выберите категорию или просмотрите весь ассортимент. Цены указаны «от» — точная стоимость после замера."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === f.id
                  ? "bg-forest text-white"
                  : "bg-cream text-ink hover:bg-cream-dark"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
