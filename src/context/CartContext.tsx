import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Product } from "@/data/products"
import { products } from "@/data/products"

export type CartItem = {
  productId: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  count: number
  lines: { product: Product; quantity: number }[]
  subtotal: number
}

const STORAGE_KEY = "skripalev-cart"

const CartContext = createContext<CartContextValue | null>(null)

function loadStored(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as CartItem[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadStored())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId)
      if (existing) {
        return prev.map((i) =>
          i.productId === productId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [...prev, { productId, quantity }]
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId))
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(productId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((p) => p.id === item.productId)
          if (!product) return null
          return { product, quantity: item.quantity }
        })
        .filter((line): line is { product: Product; quantity: number } =>
          Boolean(line)
        ),
    [items]
  )

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () =>
      lines.reduce((sum, { product, quantity }) => sum + product.priceFrom * quantity, 0),
    [lines]
  )

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      count,
      lines,
      subtotal,
    }),
    [items, addItem, removeItem, setQuantity, clearCart, count, lines, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
