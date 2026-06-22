// Renders a period string, splitting on en-dash so each side can wrap
// independently (stacked on mobile, inline on larger screens).
export function PeriodLabel({ period }: { period: string }) {
  return (
    <p className="text-xs font-medium text-gray-500 leading-tight flex flex-col sm:flex-row sm:gap-1">
      {period.split(/\s*–\s*/).map((part, idx, arr) => (
        <span key={idx} className="whitespace-nowrap">
          {part}
          {idx < arr.length - 1 && ' –'}
        </span>
      ))}
    </p>
  )
}
