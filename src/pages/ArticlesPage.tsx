import { Link } from "react-router-dom"
import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

const articles = [
  {
    slug: "bezopasnost-detskoj",
    title: "Как выбрать безопасный комплекс для ребёнка",
    excerpt: "На что смотреть при покупке: материалы, крепления, высота и покрытие.",
    date: "12 марта 2026",
  },
  {
    slug: "uhod-za-derevom",
    title: "Уход за деревянными снарядами",
    excerpt: "Простые правила, чтобы комплекс служил годами — дома и на улице.",
    date: "3 февраля 2026",
  },
  {
    slug: "zanyatiya-doma",
    title: "5 упражнений на шведской стенке дома",
    excerpt: "Короткая программа на 15 минут для детей 4–8 лет.",
    date: "18 января 2026",
  },
]

export function ArticlesPage() {
  return (
    <>
      <section className="bg-cream px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Блог"
            title="Статьи и советы"
            description="Полезные материалы для родителей — без перегруза, по делу."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <BentoCard
              key={a.slug}
              className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
              as="article"
            >
              <time className="text-xs text-muted-foreground">{a.date}</time>
              <h2 className="mt-2 text-xl font-semibold text-ink-dark">
                <Link to="/articles" className="hover:text-forest">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
              <Link
                to="/articles"
                className="mt-4 inline-block text-sm font-medium text-forest hover:underline"
              >
                Читать →
              </Link>
            </BentoCard>
          ))}
        </div>
      </section>
    </>
  )
}
