import { getCVData } from '@/lib/cv-data'
import { ProfileHeader } from '@/components/cv/profile-header'
import { Section, SectionItem } from '@/components/cv/section'
import { Publications } from '@/components/cv/publications'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  const cvData = getCVData()

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Profile Header */}
          <ProfileHeader personal={cvData.personal} />

          {/* Experience Section */}
          <Section title="Experience">
            {cvData.experience.map((exp, index) => (
              <div key={index}>
                <SectionItem
                  title={exp.company}
                  subtitle={`${exp.department} • ${exp.title}`}
                  period={exp.period}
                  location={exp.location}
                  details={exp.details}
                />
                {index < cvData.experience.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </Section>

          {/* Publications Section */}
          <Publications publications={cvData.publications} />

          {/* Education Section */}
          <Section title="Education">
            {cvData.education.map((edu, index) => (
              <div key={index}>
                <SectionItem
                  title={edu.institution}
                  subtitle={`${edu.school} • ${edu.degree}`}
                  period={edu.period}
                  location={edu.location}
                  details={edu.details}
                />
                {index < cvData.education.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </Section>

          {/* Projects Section */}
          <Section title="Projects">
            {cvData.projects.map((project, index) => (
              <div key={index}>
                <SectionItem
                  title={project.title}
                  subtitle={project.organization}
                  period={project.period}
                  details={project.details}
                />
                {index < cvData.projects.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </Section>

          {/* Awards Section */}
          <Section title="Awards and Honors">
            {cvData.awards.map((award, index) => (
              <div key={index}>
                <SectionItem
                  title={award.title}
                  subtitle={award.organization}
                  period={award.period}
                  details={award.details}
                />
                {index < cvData.awards.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </Section>
        </div>
      </div>
    </main>
  )
}
