import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CtaSection } from "@/components/sections/CtaSection"

export function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="О компании"
            title="Семейное производство с душой"
            description="ИП Скрепалев Олег Владимирович — мастерская детских спортивных комплексов из натуральной древесины."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <div className="grid gap-5 lg:grid-cols-12">
          <BentoCard className="lg:col-span-7" variant="image">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=80"
              alt="Мастерская"
              className="aspect-[16/10] w-full object-cover"
            />
          </BentoCard>
          <BentoCard className="flex flex-col justify-center lg:col-span-5">
            <h3 className="text-xl font-semibold text-ink-dark">Наша миссия</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Мы создаём безопасное пространство для развития детей — без
              пластика в несущих конструкциях, с уважением к природе и к
              семье. Каждый комплекс проходит контроль качества перед отгрузкой.
            </p>
          </BentoCard>
          <BentoCard className="lg:col-span-4">
            <p className="text-4xl font-bold text-forest">2005</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Год основания мастерской
            </p>
          </BentoCard>
          <BentoCard className="lg:col-span-4" variant="accent">
            <p className="text-4xl font-bold text-ink-dark">500+</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Установленных комплексов
            </p>
          </BentoCard>
          <BentoCard className="lg:col-span-4" variant="forest">
            <p className="text-lg font-semibold text-white">Методика</p>
            <p className="mt-2 text-sm text-white/85">
              Подбор снарядов по возрасту, консультация педагога и инструкция по
              безопасной эксплуатации в комплекте.
            </p>
          </BentoCard>
        </div>
      </section>

      <CtaSection
        title="Приезжайте на производство"
        description="По предварительной записи покажем образцы покрытий и расскажем о этапах изготовления."
      />
    </>
  )
}
