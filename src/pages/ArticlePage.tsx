import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Clock } from "lucide-react"
import { BentoCard } from "@/components/ui/BentoCard"
import { TextLink } from "@/components/ui/TextLink"
import { articles, getArticleBySlug } from "@/data/articles"
import { NotFoundPage } from "./NotFoundPage"

export function ArticlePage() {
  const { slug } = useParams()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) return <NotFoundPage />

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <article>
        <header className="bg-cream">
          <div className="section-inner section-hero max-w-3xl">
            <TextLink
              to="/articles"
              className="inline-flex items-center gap-2 no-underline hover:underline"
            >
              <ArrowLeft className="size-4" />
              Все статьи
            </TextLink>
            <p className="mt-8 text-sm font-medium text-forest uppercase">
              {article.author}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-ink-dark md:text-4xl lg:text-[2.5rem]">
              {article.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={article.date}>{article.date}</time>
              <span className="flex items-center gap-1.5">
                <Clock className="size-4 text-forest" />
                {article.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="section-inner max-w-3xl section-block">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={article.image}
              alt=""
              className="aspect-video w-full object-cover"
            />
          </div>

          <div className="section-content space-y-6">
            {article.content.map((block, i) =>
              block.type === "h2" ? (
                <h2
                  key={i}
                  className="pt-2 text-xl font-semibold text-ink-dark md:text-2xl"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={i}
                  className="text-base leading-relaxed text-ink md:text-lg md:leading-relaxed"
                >
                  {block.text}
                </p>
              )
            )}
          </div>
        </div>
      </article>

      <section className="section-inner section-block border-t border-border">
        <h2 className="text-xl font-semibold text-ink-dark">Читайте также</h2>
        <div className="section-content grid gap-5 sm:grid-cols-2">
          {more.map((a) => (
            <BentoCard key={a.slug} as="article">
              <time className="text-xs text-muted-foreground">{a.date}</time>
              <h3 className="mt-2 text-lg font-semibold text-ink-dark">
                <Link to={`/articles/${a.slug}`} className="hover:text-link">
                  {a.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                {a.excerpt}
              </p>
              <TextLink to={`/articles/${a.slug}`} className="mt-4 inline-block text-sm">
                Читать статью
              </TextLink>
            </BentoCard>
          ))}
        </div>
      </section>
    </>
  )
}
