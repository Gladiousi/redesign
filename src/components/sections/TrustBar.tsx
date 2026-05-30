import { leadTimes } from "@/data/siteContent"

const stats = [
  { value: "с 1971", label: "исследования методики" },
  { value: "2005", label: "год основания мастерской" },
  { value: "5000+", label: "маршрутов лазания" },
  { value: "100%", label: "индивидуальный расчёт" },
]

export function TrustBar() {
  return (
    <div className="rounded-3xl border border-border/80 bg-white/80 p-5 md:p-6">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="text-xl font-bold text-forest md:text-2xl">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-border/80 pt-5 text-sm">
        {leadTimes.map((t) => (
          <span key={t.label} className="text-muted-foreground">
            <span className="font-medium text-ink-dark">{t.label}:</span> {t.value}
          </span>
        ))}
      </div>
    </div>
  )
}
