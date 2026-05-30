import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Check } from "lucide-react"
import { AddToCartButton } from "@/components/cart/AddToCartButton"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup"
import { ProductCard } from "@/components/ui/ProductCard"
import { TextLink } from "@/components/ui/TextLink"
import { CtaSection } from "@/components/sections/CtaSection"
import { getProductBySlug, formatPrice, products } from "@/data/products"
import { NotFoundPage } from "./NotFoundPage"

export function ProductPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined

  if (!product) return <NotFoundPage />

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <>
      <section className="section-inner section-hero">
        <TextLink
          to="/catalog"
          className="inline-flex items-center gap-2 no-underline hover:underline"
        >
          <ArrowLeft className="size-4" />
          Назад в каталог
        </TextLink>

        <div className="section-content grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl bg-cream">
              <img
                src={product.image}
                alt={product.name}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="aspect-square rounded-2xl object-cover"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-forest uppercase">
              {product.material}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-ink-dark md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold text-link">
              от {formatPrice(product.priceFrom)}
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {product.dimensions && (
              <p className="mt-4 text-sm text-ink">
                <span className="font-medium">Габариты:</span>{" "}
                {product.dimensions}
              </p>
            )}

            <ul className="mt-8 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ink">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest" />
                  {f}
                </li>
              ))}
            </ul>

            <ButtonGroup className="max-w-none">
              <ButtonGroupItem>
                <AddToCartButton productId={product.id} className="w-full" />
              </ButtonGroupItem>
              <ButtonGroupItem>
                <Link to="/contacts" className="block w-full">
                  <Button size="lg" variant="outline" className="w-full">
                    Заказать расчёт
                  </Button>
                </Link>
              </ButtonGroupItem>
              <ButtonGroupItem>
                <a href="tel:+74842700000" className="block w-full">
                  <Button size="lg" variant="secondary" className="w-full">
                    Позвонить
                  </Button>
                </a>
              </ButtonGroupItem>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-cream/40">
        <div className="section-inner section-block section-block-last">
          <h2 className="text-2xl font-semibold text-ink-dark">
            Похожие модели
          </h2>
          <div className="section-content grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
