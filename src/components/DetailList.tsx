import type { Detail } from '../types.ts'
import { MaybeLink } from './MaybeLink.tsx'

// Bulleted list of details; each item is either plain text or a {text, url} link.
export function DetailList({ items }: { items: Detail[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((d, j) => {
        const text = typeof d === 'string' ? d : d.text
        const url = typeof d === 'string' ? undefined : d.url
        return (
          <li key={j} className="text-sm text-gray-600 flex gap-2">
            <span className="text-gray-500 mt-0.5 shrink-0">›</span>
            <MaybeLink href={url}>{text}</MaybeLink>
          </li>
        )
      })}
    </ul>
  )
}
