import { Link } from "react-router-dom"
import { Leaf, TreeDeciduous } from "lucide-react"
import { BentoCard } from "@/components/ui/BentoCard"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/ButtonGroup"
import { ProductCard } from "@/components/ui/ProductCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TextLink } from "@/components/ui/TextLink"
import { CtaSection } from "@/components/sections/CtaSection"
import { OrderNotice } from "@/components/sections/OrderNotice"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { TrustBar } from "@/components/sections/TrustBar"
import { products } from "@/data/products"
import { reviews } from "@/data/reviews"
import {
  advantages,
  methodologyTeaser,
  welcomeIntro,
} from "@/data/siteContent"

export function HomePage() {
  const catalogPreview = products.slice(0, 6)

  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-5">
              <p className="text-sm font-medium tracking-wide text-forest uppercase">
                ИП Скрепалев · Реутов
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-ink-dark md:text-5xl">
                Детские спортивные комплексы из{" "}
                <span className="text-forest">натурального дерева</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {welcomeIntro}
              </p>
              <ButtonGroup className="max-w-none">
                <ButtonGroupItem>
                  <Link to="/catalog" className="block w-full">
                    <Button size="lg" className="w-full">
                      Смотреть каталог
                    </Button>
                  </Link>
                </ButtonGroupItem>
                <ButtonGroupItem>
                  <Link to="/contacts" className="block w-full">
                    <Button size="lg" variant="outline" className="w-full">
                      Получить расчёт
                    </Button>
                  </Link>
                </ButtonGroupItem>
              </ButtonGroup>
            </div>
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="/individual.jpg"
                  alt="Индивидуальный детский спортивный комплекс"
                  className="aspect-4/3 w-full object-cover lg:aspect-16/11"
                />
                <div className="absolute right-4 bottom-4 left-4 rounded-2xl bg-white/95 p-4 backdrop-blur-sm md:left-6 md:max-w-xs">
                  <p className="text-sm font-semibold text-ink-dark">
                    Индивидуальный комплекс
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    от {new Intl.NumberFormat("ru-RU").format(137000)} ₽ · под заказ
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <TrustBar />
          </div>
        </div>
      </section>

      <section className="section-inner section-block-tight">
        <OrderNotice />
      </section>

      <section className="section-inner section-block">
        <SectionHeading
          eyebrow="Преимущества"
          title="Почему выбирают Скрипалевых"
          description="Сочетаем ремесло, безопасность и методику - без пустых обещаний."
        />
        <div className="card-grid section-content">
          {advantages.map((item, i) => (
            <BentoCard
              key={item.title}
              className="flex flex-col"
              variant={i === 0 ? "forest" : "default"}
            >
              {i === 0 ? (
                <TreeDeciduous className="size-7 text-white/90" />
              ) : (
                <Leaf className="size-6 text-forest" />
              )}
              <div className="mt-4 flex-1">
                <h3
                  className={`font-semibold ${i === 0 ? "text-white" : "text-ink-dark"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-muted-foreground"}`}
                >
                  {item.text}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <section className="bg-cream/70">
        <div className="section-inner section-block">
          <SectionHeading
            eyebrow="Как заказать"
            title="От заявки до установки"
            description="Прозрачные этапы - вы понимаете, что происходит на каждом шаге."
          />
          <div className="section-content">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="section-inner section-block">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Каталог"
            title="Популярные комплексы"
            description="Цены «от» актуальны на сайте; точная сумма - после согласования конфигурации."
            className="mb-0"
          />
          <Link to="/catalog" className="w-full shrink-0 sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              Весь каталог
            </Button>
          </Link>
        </div>
        <div className="card-grid section-content">
          {catalogPreview.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-cream/70">
        <div className="section-inner section-block">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/Oleg.jpg"
                alt="Олег Скрипалев"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Методика"
                title="Школа «Крепыш» и гимнастическое дерево"
                description={methodologyTeaser}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {["Висы", "Лазание", "Баланс", "Качание", "Прыжки"].map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-dark"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <TextLink to="/school">Подробнее о школе и занятиях →</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-inner section-block section-block-last">
        <SectionHeading
          eyebrow="Отзывы"
          title="Семьи, которые уже занимаются"
          align="center"
          className="mx-auto"
        />
        <div className="card-grid section-content">
          {reviews.map((review) => (
            <BentoCard key={review.id} className="flex flex-col">
              <div className="flex gap-0.5 text-terracotta">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                «{review.text}»
              </p>
              <div className="mt-5 border-t border-border/80 pt-4">
                <p className="font-medium text-ink-dark">{review.author}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {review.city}
                  {review.product && ` · ${review.product}`}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
        <div className="section-after-actions flex justify-center">
          <Link to="/reviews" className="w-full max-w-sm sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto">
              Все отзывы
            </Button>
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
