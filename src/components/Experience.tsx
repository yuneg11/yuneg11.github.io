import { experiences } from '../data/experiences.ts'
import { Section } from './Section.tsx'
import { Timeline } from './Timeline.tsx'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Timeline
        entries={experiences.map((e) => ({
          period: e.period,
          location: e.location,
          heading: e.title,
          primary: { text: e.company, url: e.companyUrl },
          secondary: { text: e.dept, url: e.deptUrl },
          details: e.details,
        }))}
      />
    </Section>
  )
}
