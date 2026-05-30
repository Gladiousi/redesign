import { processSteps } from "@/data/siteContent"

export function ProcessSteps() {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((item) => (
        <li
          key={item.step}
          className="rounded-3xl bg-cream p-5 md:p-6"
        >
          <span className="text-xs font-bold tracking-widest text-terracotta">
            {item.step}
          </span>
          <h3 className="mt-2 text-base font-semibold text-ink-dark md:text-lg">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  )
}
