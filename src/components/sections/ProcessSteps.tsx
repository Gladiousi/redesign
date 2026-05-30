import { processSteps } from "@/data/siteContent"
import { cn } from "@/lib/utils"

export function ProcessSteps() {
  return (
    <>
      <ol className="relative space-y-0 lg:hidden" aria-label="Этапы заказа">
        <div
          className="absolute top-3 bottom-3 left-4 w-0.5 -translate-x-1/2 bg-forest/25"
          aria-hidden
        />
        {processSteps.map((item, index) => (
          <li
            key={item.step}
            className={cn(
              "relative grid grid-cols-[2rem_1fr] gap-x-4 gap-y-0 pb-8 last:pb-0",
              index === processSteps.length - 1 && "pb-0"
            )}
          >
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="flex size-8 items-center justify-center rounded-full border-2 border-forest bg-white text-sm font-bold text-forest shadow-sm"
                aria-hidden
              >
                {index + 1}
              </span>
            </div>
            <div className="rounded-2xl border border-border/70 bg-white p-4 shadow-sm">
              <p className="text-xs font-bold tracking-wide text-terracotta uppercase">
                Шаг {item.step}
              </p>
              <h3 className="mt-1 text-base font-semibold text-ink-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <ol
        className="relative hidden lg:grid lg:grid-cols-4 lg:items-stretch lg:gap-6"
        aria-label="Этапы заказа"
      >
        <div
          className="absolute top-4 right-[12.5%] left-[12.5%] h-0.5 bg-forest/25"
          aria-hidden
        />
        {processSteps.map((item, index) => (
          <li
            key={item.step}
            className="relative flex h-full flex-col items-center text-center"
          >
            <span
              className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-forest bg-white text-sm font-bold text-forest shadow-sm"
              aria-hidden
            >
              {index + 1}
            </span>
            <div className="mt-6 flex h-full w-full flex-col rounded-2xl border border-border/70 bg-white p-5 text-left shadow-sm">
              <p className="text-xs font-bold tracking-wide text-terracotta uppercase">
                Шаг {item.step}
              </p>
              <h3 className="mt-2 text-base font-semibold text-ink-dark">
                {item.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
