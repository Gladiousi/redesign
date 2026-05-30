import { Link } from "react-router-dom"
import type { Product } from "@/data/products"
import { formatPrice } from "@/data/products"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

type ProductCardProps = {
  product: Product
  className?: string
  variant?: "default" | "featured"
}

export function ProductCard({
  product,
  className,
  variant = "default",
}: ProductCardProps) {
  return (
    <Link
      to={`/catalog/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-cream transition-all duration-300 hover:bg-cream-dark",
        variant === "featured" && "md:min-h-[320px]",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "featured" ? "aspect-4/3 md:flex-1 md:min-h-0" : "aspect-5/4"
        )}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-dark/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-ink-dark md:text-xl">
              {product.name}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-link transition-colors group-hover:bg-forest group-hover:text-white">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="mt-4 text-sm font-semibold text-link">
          от {formatPrice(product.priceFrom)}
        </p>
      </div>
    </Link>
  )
}
