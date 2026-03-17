import { Github, Linkedin, Mail, MapPin, BookOpen } from "lucide-react";

import type { Personal } from "@/types/data";
import { LanguageSelector } from "@/components/language/selector";
import { ThemeSelector } from "@/components/theme/selector";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  personal: Personal;
}

export function Header({ personal }: HeaderProps) {
  const initials = personal.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="relative">
      {/* Theme selector - top right */}
      <div className="absolute right-0 top-0 flex items-center">
        <LanguageSelector />
        <ThemeSelector />
      </div>

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
        <Avatar className="size-24 shrink-0 ring-2 ring-border sm:size-28">
          <AvatarImage src={personal.profile_image} alt={personal.name} />
          <AvatarFallback className="text-xl font-semibold">{initials}</AvatarFallback>
        </Avatar>

        <div className="flex flex-1 flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{personal.name}</h1>
            <p className="mt-1 text-base text-muted-foreground">{personal.title}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm sm:justify-start">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {personal.email}
            </a>
            <a
              href={`https://github.com/${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-3.5" aria-hidden="true" />
              {personal.github}
            </a>
            <a
              href={personal.google_scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <BookOpen className="size-3.5" aria-hidden="true" />
              Google Scholar
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-3.5" aria-hidden="true" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground sm:justify-start">
            <a
              href={personal.company_url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {personal.company}
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href={personal.location_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 transition-colors hover:text-foreground"
            >
              <MapPin className="size-3" aria-hidden="true" />
              {personal.location}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
