import type { Publication } from "@/types/data";
import { MarkdownText } from "@/components/cv/markdown-text";
import { SectionHeading } from "@/components/cv/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface PublicationsSectionProps {
  publications: Publication[];
}

const typeLabel: Record<Publication["type"], string> = {
  conference: "Conference",
  journal: "Journal",
  workshop: "Workshop",
  preprint: "Preprint",
};

export function PublicationsSection({ publications }: PublicationsSectionProps) {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <section>
      <SectionHeading title="Publications" />
      <div className="space-y-3">
        {sorted.map((pub, i) => (
          <Card key={i} className="transition-shadow hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center gap-1.5">
                <Badge variant="outline" className="text-xs">
                  {typeLabel[pub.type]}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  {pub.venue} {pub.year}
                </Badge>
                {pub.note === "Spotlight" && (
                  <Badge variant="default" className="text-xs">
                    Spotlight
                  </Badge>
                )}
              </div>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-medium leading-snug hover:text-primary hover:underline"
              >
                {pub.title}
              </a>
              <p className="mt-1 text-sm text-muted-foreground">
                <MarkdownText text={pub.authors} />
              </p>
              {pub.note && pub.note !== "Spotlight" && (
                <p className="mt-1 text-xs text-muted-foreground/70 italic">{pub.note}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
