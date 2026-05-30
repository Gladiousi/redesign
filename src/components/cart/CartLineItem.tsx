import { Link } from "react-router-dom"
import { Minus, Plus, Trash2 } from "lucide-react"
import type { Product } from "@/data/products"
import { formatPrice } from "@/data/products"

type CartLineItemProps = {
  product: Product
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
  onRemove: () => void
}

export function CartLineItem({
  product,
  quantity,
  onDecrease,
  onIncrease,
  onRemove,
}: CartLineItemProps) {
  const lineTotal = product.priceFrom * quantity

  return (
    <article className="grid gap-4 rounded-3xl border border-border/60 bg-white p-4 sm:grid-cols-[7.5rem_1fr_auto] sm:items-center sm:gap-5 sm:p-5">
      <Link
        to={`/catalog/${product.slug}`}
        className="overflow-hidden rounded-2xl bg-cream sm:row-span-1"
      >
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover sm:aspect-square sm:size-[7.5rem]"
        />
      </Link>

      <div className="min-w-0">
        <Link to={`/catalog/${product.slug}`}>
          <h2 className="text-base font-semibold leading-snug text-ink-dark transition-colors hover:text-link sm:text-lg">
            {product.name}
          </h2>
        </Link>
        <p className="mt-1 text-sm text-muted-foreground">{product.material}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Цена от {formatPrice(product.priceFrom)} / шт.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div
            className="inline-flex items-center rounded-full border border-border bg-cream"
            role="group"
            aria-label="Количество"
          >
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-l-full text-ink transition-colors hover:bg-white hover:text-forest disabled:opacity-40"
              onClick={onDecrease}
              aria-label="Уменьшить количество"
            >
              <Minus className="size-4" />
            </button>
            <span className="min-w-9 border-x border-border px-1 text-center text-sm font-semibold tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              className="flex size-9 items-center justify-center rounded-r-full text-ink transition-colors hover:bg-white hover:text-forest"
              onClick={onIncrease}
              aria-label="Увеличить количество"
            >
              <Plus className="size-4" />
            </button>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-700"
            onClick={onRemove}
          >
            <Trash2 className="size-4" />
            Убрать
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-border/60 pt-3 sm:flex-col sm:items-end sm:justify-center sm:border-0 sm:pt-0 sm:text-right">
        <span className="text-xs text-muted-foreground sm:hidden">Сумма</span>
        <p className="text-lg font-bold text-link tabular-nums sm:text-xl">
          {formatPrice(lineTotal)}
        </p>
      </div>
    </article>
  )
}
