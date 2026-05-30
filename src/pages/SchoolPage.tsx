import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TextLink } from "@/components/ui/TextLink"
import { CtaSection } from "@/components/sections/CtaSection"
import { movementTypes, methodologyTeaser } from "@/data/siteContent"

const programs = [
  {
    title: "Движения, которые любят дети",
    age: "Методика",
    text: "Висы, прыжки, вращение, качание, катание, балансирование и лазание - основа маршрутов на комплексе.",
  },
  {
    title: "Маршруты по возрасту",
    age: "3-12 лет",
    text: "Конфигурация снарядов подбирается по антропометрии: ребёнок растёт - маршруты усложняются.",
  },
  {
    title: "Безопасность дома",
    age: "Для родителей",
    text: "Памятка по эксплуатации, схемы сборки и рекомендации по свободной зоне вокруг комплекса.",
  },
]

export function SchoolPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="Школа «Крепыш»"
            title="Авторская методика Скрипалевых"
            description="Не просто «стенка с турником», а среда для многолетнего развития координации и силы."
          />
        </div>
      </section>

      <section className="section-inner section-block section-block-last">
        <BentoCard variant="forest" className="mb-8">
          <p className="max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
            {methodologyTeaser}
          </p>
        </BentoCard>

        <div className="flex flex-wrap gap-2">
          {movementTypes.map((m) => (
            <span
              key={m}
              className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink-dark"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="card-grid section-content">
          {programs.map((p) => (
            <BentoCard key={p.title}>
              <p className="text-xs font-medium text-forest uppercase">{p.age}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-dark">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </BentoCard>
          ))}
        </div>

        <div className="section-content rounded-3xl bg-cream p-6 md:p-8">
          <h3 className="text-lg font-semibold text-ink-dark">Из первых рук</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Владимир Скрипалев с 1971 года сотрудничал с семьёй Никитиных и описал
            классификацию детских движений. Олег Скрипалев вырос в «гимнастическом
            дереве» площадью около 4 м² - с тысячами вариантов лазания. Этот опыт
            лежит в основе каждого нашего проекта.
          </p>
          <p className="mt-4">
            <TextLink to="/about">История мастерской →</TextLink>
            {" · "}
            <TextLink to="/articles">Статьи и интервью →</TextLink>
          </p>
        </div>
      </section>

      <CtaSection
        title="Консультация по методике"
        description="Поможем подобрать наполнение комплекса под возраст ребёнка и планировку комнаты."
      />
    </>
  )
}
