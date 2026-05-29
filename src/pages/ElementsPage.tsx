import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProductCard } from "@/components/ui/ProductCard"
import { TextLink } from "@/components/ui/TextLink"
import { CtaSection } from "@/components/sections/CtaSection"
import { products } from "@/data/products"

const elements = products.filter(
  (p) =>
    p.category === "wall" ||
    p.slug.includes("kacheli") ||
    p.slug.includes("turnik")
)

export function ElementsPage() {
  return (
    <>
      <section className="section-hero bg-cream">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Модули"
            title="Отдельные элементы"
            description="Дополните существующий комплекс или соберите конфигурацию по частям."
          />
        </div>
      </section>
      <section className="section-inner section-body">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {elements.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Нужна индивидуальная конфигурация?{" "}
          <TextLink to="/contacts">Свяжитесь с нами</TextLink>
        </p>
      </section>
      <CtaSection />
    </>
  )
}
