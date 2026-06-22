import type { TimelineEntry } from '../types.ts'
import { MaybeLink } from './MaybeLink.tsx'
import { DetailList } from './DetailList.tsx'

// Shared timeline used by Experience and Education.
// Mobile: the date sits above the content (full-width content, no spine).
// sm+: a right-aligned date column, the spine/dot rail, then the content.
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="flex flex-col">
      {entries.map((e, i) => (
        <div key={i} className="flex flex-col sm:flex-row pb-8 sm:pb-0">
          {/* date — inline above content on mobile, right-aligned column on sm+ */}
          <div className="mb-1.5 sm:mb-0 sm:w-36 shrink-0 flex flex-wrap items-baseline gap-x-2 sm:block sm:text-right sm:pr-4 sm:pt-1">
            <p className="text-xs font-medium text-gray-500 leading-tight">{e.period}</p>
            <p className="text-xs text-gray-500 sm:mt-0.5">{e.location}</p>
          </div>
          {/* spine + dot — sm+ only */}
          <div className="hidden sm:flex relative flex-col items-center w-5 shrink-0">
            <div className={`absolute w-px bg-gray-200 bottom-0 ${i === 0 ? 'top-2' : 'top-0'}`} />
            <div className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-gray-900 ring-2 ring-white shrink-0" />
          </div>
          {/* content */}
          <div className="flex-1 sm:pl-4 sm:pb-8">
            <h3 className="text-base font-semibold text-gray-900 leading-tight">{e.heading}</h3>
            <p className="text-sm mt-0.5">
              <MaybeLink href={e.primary.url} className="text-gray-900 font-medium">{e.primary.text}</MaybeLink>
            </p>
            <p className="text-xs mt-0.5">
              <MaybeLink href={e.secondary.url} className="text-gray-500">{e.secondary.text}</MaybeLink>
            </p>
            <DetailList items={e.details} />
          </div>
        </div>
      ))}
    </div>
  )
}
