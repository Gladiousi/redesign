import { Link } from "react-router-dom"
import {
  Droplets,
  Hammer,
  Heart,
  Leaf,
  Shield,
  TreeDeciduous,
} from "lucide-react"
import { BentoCard } from "@/components/ui/BentoCard"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ui/ProductCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CtaSection } from "@/components/sections/CtaSection"
import { products } from "@/data/products"
import { reviews } from "@/data/reviews"

const advantages = [
  {
    icon: TreeDeciduous,
    title: "Массив дерева",
    text: "Сосна и лиственница 1 сорта, без ДСП и пластика в несущих элементах.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    text: "Скруглённые кромки, сертифицированные крепления, лаки на водной основе.",
  },
  {
    icon: Hammer,
    title: "Сборка под ключ",
    text: "Замер, доставка и монтаж — вы получаете готовый комплекс.",
  },
  {
    icon: Leaf,
    title: "Экологично",
    text: "Натуральные материалы и покрытия, безопасные для детской комнаты.",
  },
  {
    icon: Droplets,
    title: "Для улицы",
    text: "Усиленная пропитка и антисептик для дачных комплексов.",
  },
  {
    icon: Heart,
    title: "С 2005 года",
    text: "Семейное производство с личным контролем качества каждого изделия.",
  },
]

export function HomePage() {
  const featured = products.slice(0, 4)

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-12 md:items-center md:gap-6 md:py-20 md:px-6 lg:px-8 lg:py-28">
          <div className="animate-fade-up md:col-span-5 lg:col-span-5">
            <p className="text-sm font-medium tracking-wide text-forest uppercase">
              ИП Скрепалев · Калуга
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-ink-dark md:text-5xl lg:text-[3.25rem]">
              Детские спортивные комплексы из{" "}
              <span className="text-forest">натурального дерева</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Тёплый, надёжный дизайн для семьи: безопасные конструкции,
              экологичные материалы и индивидуальный подбор под ваше
              пространство.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/catalog">
                <Button size="lg">Смотреть каталог</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  О производстве
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-up-delay md:col-span-7 lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1400&q=85"
                alt="Детский спортивный комплекс из дерева"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur-sm md:bottom-6 md:left-6 md:max-w-xs md:p-5">
                <p className="text-sm font-semibold text-ink-dark">
                  Комплекс «Скрипалёвъ»
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Флагманская модель · от 89 000 ₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Преимущества"
          title="Почему родители выбирают нас"
          description="Коротко о главном — без лишних слов. Каждый блок отвечает на конкретный вопрос."
        />
        <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {advantages.map((item, i) => {
            const Icon = item.icon
            const spans =
              i === 0
                ? "lg:col-span-4 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-4"
                  : i === 2
                    ? "lg:col-span-4"
                    : i === 3
                      ? "lg:col-span-3"
                      : i === 4
                        ? "lg:col-span-3"
                        : "lg:col-span-6"
            return (
              <BentoCard
                key={item.title}
                className={`flex flex-col justify-between ${spans} ${i === 0 ? "min-h-[220px] lg:min-h-[280px]" : ""}`}
                variant={i === 0 ? "forest" : i === 5 ? "accent" : "default"}
              >
                <Icon
                  className={`size-8 ${i === 0 ? "text-white/90" : "text-forest"}`}
                />
                <div className="mt-6">
                  <h3
                    className={`text-lg font-semibold ${i === 0 ? "text-white" : "text-ink-dark"}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {item.text}
                  </p>
                </div>
              </BentoCard>
            )
          })}
        </div>
      </section>

      <section className="bg-cream/50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Каталог"
              title="Наши комплексы"
              description="Готовые решения и модули — от компактной стенки до уличного комплекса."
            />
            <Link to="/catalog" className="shrink-0">
              <Button variant="outline">Весь каталог</Button>
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
            <div className="sm:col-span-2 lg:col-span-7">
              <ProductCard
                product={featured[0]}
                variant="featured"
                className="h-full"
              />
            </div>
            <div className="grid gap-4 sm:col-span-2 lg:col-span-5 lg:grid-rows-2">
              <ProductCard product={featured[1]} className="h-full" />
              <ProductCard product={featured[2]} className="h-full" />
            </div>
            <div className="sm:col-span-1 lg:col-span-6">
              <ProductCard product={featured[3]} className="h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24 lg:px-8">
        <SectionHeading
          eyebrow="Отзывы"
          title="Семьи, которые уже занимаются"
          align="center"
          className="mx-auto"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {reviews.slice(0, 3).map((review, i) => (
            <BentoCard
              key={review.id}
              className={
                i === 0
                  ? "lg:col-span-5"
                  : i === 1
                    ? "lg:col-span-4"
                    : "lg:col-span-3"
              }
            >
              <div className="flex gap-1 text-terracotta">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">
                «{review.text}»
              </p>
              <div className="mt-6 border-t border-border/80 pt-4">
                <p className="font-medium text-ink-dark">{review.author}</p>
                <p className="text-xs text-muted-foreground">
                  {review.city}
                  {review.product && ` · ${review.product}`}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/reviews">
            <Button variant="outline">Все отзывы</Button>
          </Link>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
