import { skills } from '../data/skills.ts'
import { Section } from './Section.tsx'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((s, i) => (
          <div key={i}>
            <p className="text-xs font-medium tracking-[0.18em] text-gray-500 uppercase mb-3">
              {s.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item, j) => (
                <span
                  key={j}
                  className="inline-flex items-center px-2.5 py-1 rounded-md border border-gray-200 bg-white font-mono text-xs text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
