import { useState } from "react"
import { Check, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import { cn } from "@/lib/utils"

type AddToCartButtonProps = {
  productId: string
  className?: string
  size?: "default" | "lg"
}

export function AddToCartButton({
  productId,
  className,
  size = "lg",
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleClick() {
    addItem(productId)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Button
      type="button"
      size={size}
      variant={added ? "secondary" : "default"}
      className={cn("w-full sm:w-auto", className)}
      onClick={handleClick}
    >
      {added ? (
        <>
          <Check className="size-4" />
          Добавлено
        </>
      ) : (
        <>
          <ShoppingCart className="size-4" />
          В корзину
        </>
      )}
    </Button>
  )
}
