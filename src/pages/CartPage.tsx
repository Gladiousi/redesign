import { Link } from "react-router-dom"
import { ShoppingBag } from "lucide-react"
import { CartLineItem } from "@/components/cart/CartLineItem"
import { CartSummary } from "@/components/cart/CartSummary"
import { ProductCard } from "@/components/ui/ProductCard"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { OrderNotice } from "@/components/sections/OrderNotice"
import { useCart } from "@/context/CartContext"
import { products } from "@/data/products"

const suggestions = products.slice(0, 3)

export function CartPage() {
  const { lines, subtotal, count, setQuantity, removeItem, clearCart } = useCart()
  const isEmpty = lines.length === 0

  return (
    <>
      <section className={isEmpty ? "bg-cream" : "border-b border-border/60 bg-cream/80"}>
        <div className={`section-inner ${isEmpty ? "section-hero" : "py-8 md:py-10"}`}>
          <SectionHeading
            eyebrow="Заказ"
            title={isEmpty ? "Корзина пуста" : "Ваша корзина"}
            description={
              isEmpty
                ? "Добавьте понравившиеся комплексы - мы подготовим расчёт после консультации."
                : `${count} ${count === 1 ? "модель" : count < 5 ? "модели" : "моделей"} для предварительного расчёта. Итоговая цена уточняется индивидуально.`
            }
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <OrderNotice compact />

        {isEmpty ? (
          <div className="section-content space-y-10">
            <div className="flex flex-col items-center rounded-3xl border border-dashed border-border bg-white px-6 py-14 text-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-cream">
                <ShoppingBag className="size-8 text-forest" strokeWidth={1.5} />
              </div>
              <p className="mt-6 max-w-md text-muted-foreground">
                В каталоге нажмите «В корзину» на карточке - так вы сможете собрать
                список для заявки и обсудить комплектацию с мастерской.
              </p>
              <Link to="/catalog" className="mt-8 block w-full max-w-xs">
                <Button size="lg" className="w-full">
                  Перейти в каталог
                </Button>
              </Link>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink-dark">
                Популярные комплексы
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Можно начать с этих моделей
              </p>
              <div className="card-grid mt-6">
                {suggestions.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="section-content grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-4 lg:col-span-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-ink-dark">
                  Выбранные модели
                </p>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-muted-foreground">
                  {count} шт.
                </span>
              </div>
              <ul className="space-y-4" aria-label="Товары в корзине">
                {lines.map(({ product, quantity }) => (
                  <li key={product.id}>
                    <CartLineItem
                      product={product}
                      quantity={quantity}
                      onDecrease={() => setQuantity(product.id, quantity - 1)}
                      onIncrease={() => setQuantity(product.id, quantity + 1)}
                      onRemove={() => removeItem(product.id)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <CartSummary
                count={count}
                subtotal={subtotal}
                onClear={clearCart}
              />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
