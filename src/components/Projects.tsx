import { projects } from '../content.ts'
import { Section } from './Section.tsx'
import { MaybeLink } from './MaybeLink.tsx'
import { PeriodLabel } from './PeriodLabel.tsx'
import { DetailList } from './DetailList.tsx'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="flex flex-col divide-y divide-gray-200">
        {projects.map((p, i) => (
          <li key={i} className="flex gap-4 sm:gap-6 py-5 first:pt-0 last:pb-0">
            <div className="w-fit pt-1">
              <PeriodLabel period={p.period} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 leading-snug">{p.title}</h3>
              <p className="text-sm mt-0.5">
                <MaybeLink href={p.orgUrl} className="text-gray-900 font-medium">{p.org}</MaybeLink>
              </p>
              <DetailList items={p.details} />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
