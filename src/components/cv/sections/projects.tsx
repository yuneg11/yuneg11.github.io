import type { Project } from "@/types/data";
import { useLanguage } from "@/components/language/provider";
import { MarkdownText } from "@/components/cv/markdown-text";
import { SectionHeading } from "@/components/cv/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const translations = {
  en: { title: "Projects" },
  ko: { title: "프로젝트" },
};

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section>
      <SectionHeading title={t.title} />
      <div className="space-y-3">
        {projects.map((project, i) => (
          <Card key={i} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold leading-snug">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.organization}</p>
                </div>
                <p className="shrink-0 text-sm text-muted-foreground">{project.period}</p>
              </div>
              {project.details.length > 0 && (
                <ul className="mt-2 space-y-0.5 text-sm text-muted-foreground">
                  {project.details.map((detail, j) => (
                    <li key={j} className="flex gap-1.5">
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      <MarkdownText text={detail} />
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
