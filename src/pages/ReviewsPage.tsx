import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CtaSection } from "@/components/sections/CtaSection"
import { reviews } from "@/data/reviews"

export function ReviewsPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="Отзывы"
            title="Что говорят родители"
            description="Реальные истории семей, которые установили наши комплексы."
          />
        </div>
      </section>

      <section className="section-inner section-block section-block-last">
        <div className="grid gap-5 sm:grid-cols-2">
          {reviews.map((review) => (
            <BentoCard key={review.id}>
              <div className="flex gap-1 text-terracotta">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-ink">«{review.text}»</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-ink-dark">{review.author}</p>
                <p className="text-sm text-muted-foreground">
                  {review.city}
                  {review.product && ` · ${review.product}`}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
