import type {
  Personal,
  Experience,
  Education,
  Publication,
  Project,
  Award,
  Service,
  SkillGroup,
} from './types.ts'
import data from './data.toml'

// All site content lives in `src/data.toml`; this module gives it a typed,
// validated view that the components import. Edit content in data.toml, not here.
interface Content {
  personal: Personal
  experiences: Experience[]
  education: Education[]
  publications: Publication[]
  projects: Project[]
  awards: Award[]
  services: Service[]
  skills: SkillGroup[]
}

const content = data as Content

// Fail loudly (at build, since the prerender imports this) if data.toml is
// missing a section or has the wrong top-level shape.
const sections = [
  'experiences',
  'education',
  'publications',
  'projects',
  'awards',
  'services',
  'skills',
] as const
for (const key of sections) {
  if (!Array.isArray(content[key])) {
    throw new Error(`data.toml: "${key}" must be an array of tables`)
  }
}
if (typeof content.personal !== 'object' || content.personal === null) {
  throw new Error('data.toml: "personal" must be a table')
}

export const {
  personal,
  experiences,
  education,
  publications,
  projects,
  awards,
  services,
  skills,
} = content
