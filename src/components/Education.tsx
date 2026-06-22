import { education } from '../data/education.ts'
import { Section } from './Section.tsx'
import { Timeline } from './Timeline.tsx'

export function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline
        entries={education.map((e) => ({
          period: e.period,
          location: e.location,
          heading: e.degree,
          primary: { text: e.institution, url: e.institutionUrl },
          secondary: { text: e.school, url: e.schoolUrl },
          details: e.details,
        }))}
      />
    </Section>
  )
}
