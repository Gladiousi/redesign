import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-medium text-forest uppercase">404</p>
      <h1 className="mt-4 text-3xl font-bold text-ink-dark">Страница не найдена</h1>
      <p className="mt-4 text-muted-foreground">
        Возможно, ссылка устарела. Перейдите на главную или в каталог.
      </p>
      <div className="mt-8 flex gap-3">
        <Link to="/">
          <Button>На главную</Button>
        </Link>
        <Link to="/catalog">
          <Button variant="outline">Каталог</Button>
        </Link>
      </div>
    </section>
  )
}
