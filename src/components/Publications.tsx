import { useState } from 'react'
import type { PubType } from '../types.ts'
import { publications } from '../content.ts'
import { renderAuthors } from '../lib/authors.tsx'
import { Section } from './Section.tsx'
import { VenueBadge } from './VenueBadge.tsx'

const pubTypeOrder: PubType[] = ['conference', 'workshop', 'journal', 'preprint']

type PubFilter = 'all' | PubType

export function Publications() {
  const [filter, setFilter] = useState<PubFilter>('all')

  const byType = [...publications].sort(
    (a, b) => pubTypeOrder.indexOf(a.type) - pubTypeOrder.indexOf(b.type)
  )
  const byYearDesc = [...publications].sort((a, b) => b.year - a.year)

  const counts: Record<PubFilter, number> = {
    all: publications.length,
    conference: 0,
    workshop: 0,
    journal: 0,
    preprint: 0,
  }
  for (const p of publications) counts[p.type]++

  const filters: { key: PubFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'conference', label: 'Conference' },
    { key: 'workshop', label: 'Workshop' },
    { key: 'journal', label: 'Journal' },
    { key: 'preprint', label: 'Preprint' },
  ]

  const visiblePubs = filter === 'all' ? byYearDesc : byType.filter(p => p.type === filter)

  return (
    <Section id="publications" title="Publications">
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {filters.map(f => {
          const active = filter === f.key
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-widest uppercase transition-all shadow-sm ${
                active
                  ? 'bg-gray-900 border-gray-900 text-white'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              <span>{f.label}</span>
              <span className={active ? 'text-gray-400' : 'text-gray-500'}>{counts[f.key]}</span>
            </button>
          )
        })}
      </div>
      <ul className="flex flex-col divide-y divide-gray-200">
        {visiblePubs.map((p, idx) => {
          const showYear = idx === 0 || visiblePubs[idx - 1].year !== p.year
          return (
            <li key={p.url} className="group flex gap-4 sm:gap-6 py-5 first:pt-0 last:pb-0">
              <div className="w-12 sm:w-14 shrink-0 pt-0.5">
                {showYear && (
                  <p className="font-serif text-2xl text-gray-400 leading-none tabular-nums">{p.year}</p>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-base font-semibold text-gray-900 hover:text-indigo-700 hover:underline leading-snug"
                  >
                    {p.title}
                  </a>
                  <div className="shrink-0 pt-0.5">
                    <VenueBadge venue={p.venue} />
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">
                  {renderAuthors(p.authors)}
                </p>
                {p.note && (
                  <p className="text-xs text-amber-700 font-medium mt-1">{p.note}</p>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
