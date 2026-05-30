import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { TextLink } from "@/components/ui/TextLink"
import { CtaSection } from "@/components/sections/CtaSection"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { historyTeaser, movementTypes } from "@/data/siteContent"

const materialsNoteText =
  "Основной материал - сосна: строганая, шлифованная, с бесцветной пропиткой под помещение или улицу. Ступени деревянных и верёвочных лестниц - (28-30 мм) для жёсткости."

export function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="О компании"
            title="Семейное производство с душой"
            description="ИП Скрепалев Олег Владимирович - мастерская детских спортивных комплексов из натуральной древесины в Реутове."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <BentoCard variant="image" className="overflow-hidden">
            <img
              src="/about.jpg"
              alt="Мастерская Скрипалевых"
              className="aspect-4/3 w-full object-cover"
            />
          </BentoCard>
          <div className="space-y-6">
            <BentoCard>
              <h3 className="text-xl font-semibold text-ink-dark">Наша миссия</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Создаём безопасное пространство для развития детей - без пластика
                в несущих конструкциях, с уважением к природе и семье. Каждый
                комплекс проходит контроль качества перед отгрузкой.
              </p>
            </BentoCard>
            <BentoCard variant="accent">
              <h3 className="text-lg font-semibold text-ink-dark">История</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {historyTeaser}
              </p>
            </BentoCard>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <BentoCard className="text-center sm:text-left">
            <p className="text-3xl font-bold text-forest">1971</p>
            <p className="mt-2 text-sm text-muted-foreground">
              начало исследований методики
            </p>
          </BentoCard>
          <BentoCard className="text-center sm:text-left">
            <p className="text-3xl font-bold text-forest">2005</p>
            <p className="mt-2 text-sm text-muted-foreground">
              год основания мастерской
            </p>
          </BentoCard>
          <BentoCard className="text-center sm:text-left">
            <p className="text-3xl font-bold text-forest">Реутов</p>
            <p className="mt-2 text-sm text-muted-foreground">
              склад-мастерская, выдача по записи
            </p>
          </BentoCard>
        </div>
      </section>

      <section className="bg-cream/70">
        <div className="section-inner section-block">
          <SectionHeading
            eyebrow="Материалы"
            title="Из чего делаем комплексы"
            description={materialsNoteText}
          />
          <div className="section-content flex flex-wrap gap-2">
            {movementTypes.map((m) => (
              <span
                key={m}
                className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink-dark"
              >
                {m}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Подробнее о занятиях - в разделе{" "}
            <TextLink to="/school">Школа «Крепыш»</TextLink>.
          </p>
        </div>
      </section>

      <section className="section-inner section-block-tight section-block-last">
        <SectionHeading
          eyebrow="Процесс"
          title="Как мы работаем с заказчиком"
        />
        <div className="section-content">
          <ProcessSteps />
        </div>
      </section>

      <CtaSection
        title="Приезжайте на производство"
        description="По записи покажем образцы покрытий и расскажем о этапах изготовления в мастерской в Реутове."
      />
    </>
  )
}
