import { Outlet, ScrollRestoration } from "react-router-dom"
import { CartProvider } from "@/context/CartContext"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </CartProvider>
  )
}
