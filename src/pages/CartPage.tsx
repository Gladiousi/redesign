import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TextLink } from "@/components/ui/TextLink"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/data/products"

export function CartPage() {
  const { lines, subtotal, count, setQuantity, removeItem, clearCart } = useCart()

  return (
    <>
      <section className="section-hero bg-cream">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Заказ"
            title="Корзина"
            description={
              count > 0
                ? `${count} поз. · ориентировочная сумма по базовым ценам`
                : "Добавьте комплексы из каталога — оформление заявки на следующем шаге."
            }
          />
        </div>
      </section>

      <section className="section-inner section-body">
        {lines.length === 0 ? (
          <div className="flex flex-col items-center rounded-3xl bg-cream px-6 py-16 text-center">
            <ShoppingBag className="size-12 text-forest" strokeWidth={1.5} />
            <p className="mt-6 text-lg font-medium text-ink-dark">Корзина пуста</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Перейдите в каталог и нажмите «В корзину» на карточке товара.
            </p>
            <div className="mt-8 w-full max-w-xs">
              <Link to="/catalog" className="block w-full">
                <Button size="lg" className="w-full">
                  В каталог
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <ul className="space-y-4 lg:col-span-8">
              {lines.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex flex-col gap-4 rounded-3xl bg-cream p-4 sm:flex-row sm:items-center sm:p-5"
                >
                  <Link
                    to={`/catalog/${product.slug}`}
                    className="shrink-0 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[4/3] w-full object-cover sm:size-28 sm:aspect-square"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link to={`/catalog/${product.slug}`}>
                      <h2 className="font-semibold text-ink-dark hover:text-link">
                        {product.name}
                      </h2>
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">
                      от {formatPrice(product.priceFrom)}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <div className="flex items-center rounded-full border border-border bg-white">
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center text-ink hover:text-forest"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          aria-label="Уменьшить"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-medium">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          className="flex size-10 items-center justify-center text-ink hover:text-forest"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          aria-label="Увеличить"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-red-700"
                        onClick={() => removeItem(product.id)}
                      >
                        <Trash2 className="size-4" />
                        Удалить
                      </button>
                    </div>
                  </div>
                  <p className="text-right font-semibold text-forest sm:text-lg">
                    {formatPrice(product.priceFrom * quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-3xl bg-cream p-6 lg:col-span-4 lg:sticky lg:top-24">
              <h3 className="text-lg font-semibold text-ink-dark">Итого</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Точная стоимость зависит от комплектации, доставки и монтажа.
              </p>
              <p className="mt-6 text-3xl font-bold text-ink-dark">
                {formatPrice(subtotal)}
              </p>
              <div className="mt-8">
                <ButtonGroup className="max-w-none">
                  <ButtonGroupItem>
                    <Link to="/contacts" className="block w-full">
                      <Button size="lg" className="w-full">
                        Оформить заявку
                      </Button>
                    </Link>
                  </ButtonGroupItem>
                  <ButtonGroupItem>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full"
                      onClick={clearCart}
                    >
                      Очистить
                    </Button>
                  </ButtonGroupItem>
                </ButtonGroup>
              </div>
              <p className="mt-6 text-center text-sm">
                <TextLink to="/catalog">Продолжить покупки</TextLink>
              </p>
            </aside>
          </div>
        )}
      </section>
    </>
  )
}
