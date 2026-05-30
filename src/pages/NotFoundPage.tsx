import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup"

export function NotFoundPage() {
  return (
    <section className="section-inner flex min-h-[50vh] flex-col items-center justify-center section-block text-center">
      <p className="text-sm font-semibold text-forest uppercase">404</p>
      <h1 className="mt-4 text-3xl font-bold text-ink-dark">Страница не найдена</h1>
      <p className="mt-4 max-w-sm text-muted-foreground">
        Возможно, ссылка устарела. Перейдите на главную или в каталог.
      </p>
      <ButtonGroup className="section-after-actions justify-center">
        <ButtonGroupItem>
          <Link to="/" className="block w-full sm:w-auto">
            <Button className="w-full sm:w-auto">На главную</Button>
          </Link>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Link to="/catalog" className="block w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              Каталог
            </Button>
          </Link>
        </ButtonGroupItem>
      </ButtonGroup>
    </section>
  )
}
