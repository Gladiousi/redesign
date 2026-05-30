import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { AboutPage } from "@/pages/AboutPage"
import { ArticlePage } from "@/pages/ArticlePage"
import { ArticlesPage } from "@/pages/ArticlesPage"
import { CartPage } from "@/pages/CartPage"
import { CatalogPage } from "@/pages/CatalogPage"
import { CollectionsPage } from "@/pages/CollectionsPage"
import { ContactsPage } from "@/pages/ContactsPage"
import { ElementsPage } from "@/pages/ElementsPage"
import { HomePage } from "@/pages/HomePage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ProductPage } from "@/pages/ProductPage"
import { ReviewsPage } from "@/pages/ReviewsPage"
import { SchoolPage } from "@/pages/SchoolPage"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalog", element: <CatalogPage /> },
      { path: "catalog/:slug", element: <ProductPage /> },
      { path: "collections", element: <CollectionsPage /> },
      { path: "elements", element: <ElementsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "school", element: <SchoolPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "articles/:slug", element: <ArticlePage /> },
      { path: "reviews", element: <ReviewsPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
