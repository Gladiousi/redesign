import { useState } from "react"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
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
            description="Заявка на замер, консультация по проекту или вопрос по каталогу — ответим в рабочее время."
          />
        </div>
      </section>

      <section className="section-inner section-block">
        <OrderNotice className="mb-8" compact />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {company.phones.map((phone) => (
              <BentoCard key={phone.href}>
                <Phone className="size-5 text-forest" />
                <p className="mt-3 font-medium text-ink-dark">{phone.label}</p>
                <a
                  href={phone.href}
                  className="mt-1 block font-semibold text-link hover:text-link-hover hover:underline"
                >
                  {phone.display}
                </a>
                {"hours" in phone && phone.hours && (
                  <p className="mt-1 text-xs text-muted-foreground">{phone.hours}</p>
                )}
              </BentoCard>
            ))}
            <BentoCard>
              <Mail className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Email</p>
              {company.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="mt-1 block font-semibold text-link hover:underline"
                >
                  {email}
                </a>
              ))}
            </BentoCard>
            <BentoCard>
              <MapPin className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Мастерская</p>
              <p className="mt-1 text-sm text-muted-foreground">{company.address}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                {company.workshopNote}
              </p>
            </BentoCard>
            <BentoCard variant="accent">
              <Clock className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Приём заказов</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Также WhatsApp и MAX — укажите удобный способ в сообщении.
              </p>
            </BentoCard>
          </div>

          <BentoCard className="lg:col-span-7">
            {sent ? (
              <div className="py-8 text-center">
                <p className="text-lg font-semibold text-forest">
                  Заявка отправлена
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Мы свяжемся с вами в ближайшее рабочее время. Для срочных вопросов
                  звоните {company.phones[0].display}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-medium text-ink-dark">Имя</span>
                    <input
                      required
                      name="name"
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
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
                      className="mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
                      placeholder="+7"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm font-medium text-ink-dark">
                    Сообщение
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
                    placeholder="Комплекс, адрес, нужен ли замер..."
                  />
                </label>
                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Отправить заявку
                  </Button>
                </div>
              </form>
            )}
          </BentoCard>
        </div>
      </section>
    </>
  )
}
