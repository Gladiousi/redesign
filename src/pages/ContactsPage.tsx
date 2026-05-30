import { useState } from "react"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { OrderNotice } from "@/components/sections/OrderNotice"
import { company } from "@/data/siteContent"

export function ContactsPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-cream">
        <div className="section-inner section-hero">
          <SectionHeading
            eyebrow="Контакты"
            title="Свяжитесь с нами"
            description="Оставьте заявку в форме или напишите удобным способом - ответим в рабочее время."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <OrderNotice className="mb-8" compact />

        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="space-y-5 lg:col-span-4">
            <BentoCard className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold text-ink-dark">Контакты</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {company.city}
                </p>
              </div>

              <ul className="space-y-4">
                {company.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="group flex items-start gap-3 rounded-2xl bg-cream/80 p-3 transition-colors hover:bg-cream"
                    >
                      <Phone className="mt-0.5 size-5 shrink-0 text-forest" />
                      <span>
                        <span className="block text-xs font-medium text-muted-foreground">
                          {phone.label}
                        </span>
                        <span className="mt-0.5 block font-semibold text-link group-hover:underline">
                          {phone.display}
                        </span>
                        {"hours" in phone && phone.hours && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {phone.hours}
                          </span>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border/80 pt-4">
                <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase">
                  <Mail className="size-4 text-forest" />
                  Email
                </p>
                <ul className="mt-2 space-y-1">
                  {company.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-link hover:underline"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/80 pt-4">
                <p className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-forest" />
                  <span>
                    <span className="font-medium text-ink-dark">
                      {company.address}
                    </span>
                    <span className="mt-1 block text-xs">{company.workshopNote}</span>
                  </span>
                </p>
              </div>
            </BentoCard>

            <BentoCard variant="accent" className="flex gap-3">
              <Clock className="size-5 shrink-0 text-forest" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-ink-dark">WhatsApp и MAX</span> -
                укажите в форме или напишите напрямую, как вам удобнее.
              </p>
            </BentoCard>
          </div>

          <BentoCard className="lg:col-span-8 lg:min-h-128">
            {sent ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center px-4 py-12 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-cream">
                  <MessageCircle className="size-7 text-forest" />
                </div>
                <p className="mt-6 text-xl font-semibold text-forest">
                  Заявка отправлена
                </p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Мы свяжемся с вами в ближайшее рабочее время. Для срочных
                  вопросов звоните{" "}
                  <a
                    href={company.phones[0].href}
                    className="font-semibold text-link hover:underline"
                  >
                    {company.phones[0].display}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="flex h-full flex-col">
                <div className="border-b border-border/60 pb-6">
                  <h2 className="text-xl font-semibold text-ink-dark md:text-2xl">
                    Оставить заявку
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    Опишите задачу: тип помещения или участка, возраст ребёнка,
                    нужен ли замер. Мы перезвоним и подготовим ориентировочный
                    расчёт.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-1 flex-col gap-5 pt-6"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-ink-dark">
                        Ваше имя
                      </span>
                      <input
                        required
                        name="name"
                        autoComplete="name"
                        className="mt-2 w-full rounded-2xl border border-border bg-cream/50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/20"
                        placeholder="Как к вам обращаться"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-ink-dark">
                        Телефон
                      </span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="mt-2 w-full rounded-2xl border border-border bg-cream/50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/20"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </label>
                  </div>

                  <label className="block flex-1">
                    <span className="text-sm font-medium text-ink-dark">
                      Сообщение
                    </span>
                    <textarea
                      name="message"
                      rows={6}
                      className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-border bg-cream/50 px-4 py-3.5 text-sm outline-none transition-colors focus:border-forest focus:bg-white focus:ring-2 focus:ring-forest/20 md:min-h-[160px]"
                      placeholder="Какой комплекс интересует, адрес для замера, удобное время для звонка..."
                    />
                  </label>

                  <div className="mt-auto border-t border-border/60 pt-6">
                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      Отправить заявку
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь на обработку данных для
                      обратной связи. Это демо-форма прототипа сайта.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </BentoCard>
        </div>
      </section>
    </>
  )
}
