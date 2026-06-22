// Shared content + view types. Data files import these so the content shapes
// have a single source of truth, decoupled from the presentational components.

export type Detail = string | { text: string; url: string }

export type PubType = 'conference' | 'workshop' | 'journal' | 'preprint'

export interface Personal {
  name: string
  email: string
  github: string
  scholar: string
  linkedin: string
  website: string
  location: string
  company: string
  companyUrl: string
  profileImage: string
}

export interface Experience {
  title: string
  company: string
  companyUrl?: string
  dept: string
  deptUrl?: string
  period: string
  location: string
  details: Detail[]
}

export interface Education {
  institution: string
  institutionUrl?: string
  school: string
  schoolUrl?: string
  degree: string
  period: string
  location: string
  details: Detail[]
}

export interface Publication {
  type: PubType
  title: string
  authors: string
  venue: string
  year: number
  url: string
  note?: string
}

export interface Project {
  title: string
  org: string
  orgUrl?: string
  period: string
  details: string[]
}

export interface Award {
  title: string
  org: string
  orgUrl?: string
  period: string
  detail: string
}

export interface Service {
  venue: string
  years: { year: number; note?: string; url?: string }[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

// Normalized shape consumed by <Timeline>; Experience/Education map into it.
export interface TimelineEntry {
  period: string
  location: string
  heading: string
  primary: { text: string; url?: string }
  secondary: { text: string; url?: string }
  details: Detail[]
}
