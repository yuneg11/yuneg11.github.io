// All venues use one neutral badge style (the site is deliberately monochrome).
export function VenueBadge({ venue }: { venue: string }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded border bg-gray-100 text-gray-700 border-gray-200">
      {venue}
    </span>
  )
}
