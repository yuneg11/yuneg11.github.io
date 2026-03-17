import type { ResumeData } from "@/types/data";
import { Header } from "@/components/cv/header";
import { AwardsSection } from "@/components/cv/sections/awards";
import { EducationSection } from "@/components/cv/sections/education";
import { ExperienceSection } from "@/components/cv/sections/experience";
import { ProjectsSection } from "@/components/cv/sections/projects";
import { PublicationsSection } from "@/components/cv/sections/publications";
import resume from "../data/resume.toml";

const data = resume as ResumeData;

export function App() {
  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-12">
          <Header personal={data.personal} />
          <EducationSection education={data.education} />
          <ExperienceSection experience={data.experience} />
          <PublicationsSection publications={data.publications} />
          <ProjectsSection projects={data.projects} />
          <AwardsSection awards={data.awards} />
        </div>
      </div>
    </div>
  );
}

export default App;
