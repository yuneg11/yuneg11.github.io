import { services } from '../content.ts'
import { Section } from './Section.tsx'

export function Services() {
  return (
    <Section id="services" title="Academic Services">
      <ul className="flex flex-col divide-y divide-gray-200">
        {services.map((s, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-4 first:pt-0 last:pb-0">
            <div className="flex items-baseline gap-2 shrink-0 sm:w-64">
              <span className="text-sm text-gray-500">Reviewer for</span>
              <span className="text-base font-semibold text-gray-900">{s.venue}</span>
            </div>
            <div className="flex-1 flex flex-wrap items-center gap-2">
              {s.years.map((y, j) => {
                const baseClass = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-semibold tabular-nums transition-colors ${
                  y.note
                    ? 'bg-amber-50 border-amber-200 text-amber-800'
                    : 'bg-white border-gray-200 text-gray-700'
                } ${y.url ? (y.note ? 'hover:border-amber-300' : 'hover:border-gray-300') : ''}`
                const content = (
                  <>
                    <span>{y.year}</span>
                    {y.note && <span className="font-medium">· {y.note}</span>}
                  </>
                )
                return y.url ? (
                  <a key={j} href={y.url} target="_blank" rel="noreferrer" className={baseClass}>
                    {content}
                  </a>
                ) : (
                  <span key={j} className={baseClass}>
                    {content}
                  </span>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
