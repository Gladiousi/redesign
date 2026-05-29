import { useState } from "react"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BentoCard } from "@/components/ui/BentoCard"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ContactsPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="bg-cream px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Контакты"
            title="Свяжитесь с нами"
            description="Оставьте заявку на замер или позвоните — ответим в рабочее время."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <BentoCard>
              <Phone className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Телефон</p>
              <a
                href="tel:+74842700000"
                className="mt-1 block text-forest hover:underline"
              >
                +7 (4842) 70-00-00
              </a>
            </BentoCard>
            <BentoCard>
              <Mail className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Email</p>
              <a
                href="mailto:info@skripalev.ru"
                className="mt-1 block text-forest hover:underline"
              >
                info@skripalev.ru
              </a>
            </BentoCard>
            <BentoCard>
              <MapPin className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Адрес</p>
              <p className="mt-1 text-sm text-muted-foreground">
                г. Калуга, ул. Примерная, 12
              </p>
            </BentoCard>
            <BentoCard variant="accent">
              <Clock className="size-5 text-forest" />
              <p className="mt-3 font-medium text-ink-dark">Режим работы</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Пн–Пт: 9:00–18:00
                <br />
                Сб: по записи
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
                  Мы свяжемся с вами в ближайшее рабочее время. (Демо-форма для
                  прототипа.)
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
                    placeholder="Какой комплекс интересует, адрес для замера..."
                  />
                </label>
                <Button type="submit" size="lg">
                  Отправить заявку
                </Button>
              </form>
            )}
          </BentoCard>
        </div>
      </section>
    </>
  )
}
