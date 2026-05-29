import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CtaSection } from "@/components/sections/CtaSection"

const programs = [
  {
    title: "Основы на шведской стенке",
    age: "3–7 лет",
    text: "Упражнения на координацию, висы и лазание с акцентом на безопасность.",
  },
  {
    title: "Сила и выносливость",
    age: "7–12 лет",
    text: "Подтягивания, упоры, работа с кольцами и канатом под наблюдением взрослых.",
  },
  {
    title: "Семейные занятия",
    age: "Все возрасты",
    text: "Совместные мини-тренировки для родителей и детей дома или на даче.",
  },
]

export function SchoolPage() {
  return (
    <>
      <section className="bg-cream px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Школа Скрипалевых"
            title="Учимся двигаться правильно"
            description="Методические материалы и рекомендации по занятиям на домашних комплексах."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
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
        <BentoCard className="mt-5" variant="forest">
          <p className="max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
            При покупке комплекса вы получаете памятку по безопасности и доступ к
            базе упражнений. Очные занятия — по записи в Калуге.
          </p>
        </BentoCard>
      </section>

      <CtaSection
        title="Записаться на консультацию"
        description="Поможем подобрать программу под возраст ребёнка и возможности вашего комплекса."
      />
    </>
  )
}
