import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TextLink } from "@/components/ui/TextLink"
import { articles } from "@/data/articles"

export function ArticlesPage() {
  const [featured, ...rest] = articles

  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="Блог"
            title="Статьи и советы"
            description="Полезные материалы для родителей - без перегруза, по делу."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <Link
          to={`/articles/${featured.slug}`}
          className="group block overflow-hidden rounded-3xl bg-cream transition-shadow hover:shadow-md"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-16/10 overflow-hidden md:aspect-auto md:min-h-[280px]">
              <img
                src={featured.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
              <time className="text-xs font-medium text-forest uppercase">
                {featured.date} · {featured.readTime}
              </time>
              <h2 className="mt-3 text-2xl font-semibold text-ink-dark md:text-3xl group-hover:text-link">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-link">
                Читать статью
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </Link>

        <div className="section-content grid gap-5 sm:grid-cols-2">
          {rest.map((article) => (
            <BentoCard key={article.slug} as="article" className="flex flex-col">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={article.image}
                  alt=""
                  className="aspect-16/10 w-full object-cover"
                />
              </div>
              <time className="mt-5 text-xs text-muted-foreground">
                {article.date}
              </time>
              <h2 className="mt-2 text-xl font-semibold text-ink-dark">
                <Link
                  to={`/articles/${article.slug}`}
                  className="hover:text-link"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <TextLink
                to={`/articles/${article.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm"
              >
                Читать
                <ArrowRight className="size-3.5" />
              </TextLink>
            </BentoCard>
          ))}
        </div>
      </section>
    </>
  )
}
