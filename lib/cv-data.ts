import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

export interface PersonalInfo {
  name: string
  title: string
  email: string
  github: string
  google_scholar: string
  linkedin: string
  location: string
  company: string
  company_url: string
  location_url: string
  profile_image: string
}

export interface Education {
  institution: string
  school: string
  degree: string
  period: string
  location: string
  details: string[]
}

export interface Experience {
  title: string
  company: string
  department: string
  period: string
  location: string
  details: string[]
}

export interface Award {
  title: string
  organization: string
  period: string
  details: string[]
}

export interface Publication {
  title: string
  authors: string
  venue: string
  year: number
  url?: string
  note?: string
}

export interface Project {
  title: string
  organization: string
  period: string
  details: string[]
}

export interface CVData {
  personal: PersonalInfo
  education: Education[]
  experience: Experience[]
  awards: Award[]
  publications: {
    conference: Publication[]
    workshop: Publication[]
    journal: Publication[]
    preprint: Publication[]
  }
  projects: Project[]
}

export function getCVData(): CVData {
  const filePath = path.join(process.cwd(), 'data', 'cv.yaml')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const cvData = yaml.load(fileContents) as CVData
  return cvData
}
