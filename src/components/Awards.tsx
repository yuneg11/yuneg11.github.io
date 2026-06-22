import { awards } from '../content.ts'
import { Section } from './Section.tsx'
import { MaybeLink } from './MaybeLink.tsx'
import { PeriodLabel } from './PeriodLabel.tsx'

export function Awards() {
  return (
    <Section id="awards" title="Awards">
      <ul className="flex flex-col divide-y divide-gray-200">
        {awards.map((a, i) => (
          <li key={i} className="flex gap-4 sm:gap-6 py-6 first:pt-0 last:pb-0">
            <div className="w-18 sm:w-34 pt-1">
              <PeriodLabel period={a.period} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 leading-snug">{a.title}</h3>
              <p className="text-sm mt-0.5">
                <MaybeLink href={a.orgUrl} className="text-gray-900 font-medium">{a.org}</MaybeLink>
              </p>
              <p className="text-sm text-gray-600 mt-2">{a.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
