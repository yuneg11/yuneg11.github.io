import { Calendar, GraduationCap } from "lucide-react";

import type { Education } from "@/types/data";

function formatDate(iso: string | undefined): string {
  if (!iso) return "Present";
  const [year, month] = iso.split("-");
  return `${year}. ${month}`;
}
import { MarkdownText } from "@/components/cv/markdown-text";
import { SectionHeading } from "@/components/cv/sections/section-heading";

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section>
      <SectionHeading title="Education" />
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {education.map((entry, i) => (
          <div key={i} className="relative pb-12 pl-10 last:pb-0">
            {/* Timeline icon */}
            <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-accent ring-8 ring-background">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="space-y-3 pt-2 sm:pt-1">
              <div>
                <p className="text-base font-medium">{entry.institution}</p>
                <p className="text-sm text-muted-foreground">{entry.school}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.01em]">{entry.degree}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>
                    {formatDate(entry.period.start)} – {formatDate(entry.period.end)}
                  </span>
                  <span className="text-muted-foreground">· {entry.location}</span>
                </div>
              </div>
              {entry.details.length > 0 && (
                <ul className="space-y-0.5 text-sm text-muted-foreground sm:text-base">
                  {entry.details.map((detail, j) => (
                    <li key={j} className="flex gap-1.5">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      <MarkdownText text={detail} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
