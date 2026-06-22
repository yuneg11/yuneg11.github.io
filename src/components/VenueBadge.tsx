import { venueColors } from '../lib/venues.ts'

export function VenueBadge({ venue }: { venue: string }) {
  const base = venueColors[venue] ?? 'bg-gray-100 text-gray-700 border-gray-200'
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded border ${base}`}>
      {venue}
    </span>
  )
}
