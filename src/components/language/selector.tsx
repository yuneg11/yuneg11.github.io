import { Check, Languages, Monitor } from "lucide-react";

import { useLanguage } from "@/components/language/provider";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSelector() {
  const { setting, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Switch language"
        className={cn(
          "inline-flex size-9 items-center justify-center text-muted-foreground transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
      >
        <Languages className="size-4" aria-hidden="true" />
        <span className="sr-only">Switch language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <Check
            className={cn("mr-2 size-4", setting !== "en" && "invisible")}
            aria-hidden="true"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ko")}>
          <Check
            className={cn("mr-2 size-4", setting !== "ko" && "invisible")}
            aria-hidden="true"
          />
          한국어
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("system")}>
          <Monitor
            className={cn("mr-2 size-4", setting !== "system" && "invisible")}
            aria-hidden="true"
          />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
