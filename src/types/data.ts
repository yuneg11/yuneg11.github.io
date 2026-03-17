export interface Personal {
  name: string;
  title: string;
  email: string;
  github: string;
  google_scholar: string;
  linkedin: string;
  location: string;
  company: string;
  company_url: string;
  location_url: string;
  profile_image: string;
}

export interface Education {
  institution: string;
  school: string;
  degree: string;
  period: { start: string; end?: string };
  location: string;
  details: string[];
}

export interface Experience {
  title: string;
  company: string;
  department: string;
  period: { start: string; end?: string };
  location: string;
  details: string[];
}

export interface Award {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

export interface Publication {
  type: "conference" | "workshop" | "journal" | "preprint";
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  note?: string;
}

export interface Project {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

export interface ResumeData {
  personal: Personal;
  education: Education[];
  experience: Experience[];
  awards: Award[];
  publications: Publication[];
  projects: Project[];
}
