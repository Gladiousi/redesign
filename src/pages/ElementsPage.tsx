import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProductCard } from "@/components/ui/ProductCard"
import { CtaSection } from "@/components/sections/CtaSection"
import { products } from "@/data/products"

const elements = products.filter(
  (p) => p.category === "wall" || p.slug.includes("kacheli") || p.slug.includes("turnik")
)

export function ElementsPage() {
  return (
    <>
      <section className="bg-cream px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Модули"
            title="Отдельные элементы"
            description="Дополните существующий комплекс или соберите конфигурацию по частям."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {elements.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Нужна индивидуальная конфигурация?{" "}
          <Link to="/contacts" className="font-medium text-forest hover:underline">
            Свяжитесь с нами
          </Link>
        </p>
      </section>
      <CtaSection />
    </>
  )
}
