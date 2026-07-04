import { useState } from "react";
import {
  Download,
  Eraser,
  FileArchive,
  FileCode,
  FileText,
  Moon,
  Settings,
  Sun,
} from "lucide-react";

import { Logo } from "@/components/common/logo";
import { ClearNoteDialog } from "@/components/dialogs/clear-note-dialog";
import { SettingsDialog } from "@/components/dialogs/settings-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useThemeStore } from "@/store/theme-store";

const exportOptions = [
  {
    id: "markdown-zip",
    label: "Markdown + Assets (ZIP)",
    icon: FileArchive,
    description: "Recommended portable export",
  },
  {
    id: "markdown-single",
    label: "Single Markdown File",
    icon: FileText,
    description: "Custom format with embedded assets",
  },
  {
    id: "html",
    label: "HTML",
    icon: FileCode,
    description: "Complete HTML with embedded assets",
  },
  {
    id: "pdf",
    label: "PDF",
    icon: FileText,
    description: "Printable PDF document",
  },
  {
    id: "docx",
    label: "Rich Text (DOCX)",
    icon: FileText,
    description: "Microsoft Word document",
  },
] as const;

export function Header() {
  const [clearOpen, setClearOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const resolvedTheme = useThemeStore((state) => state.resolvedTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <header className="flex h-12 shrink-0 items-center justify-between border-b bg-background/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-4">
        <Logo />

        <nav className="flex items-center gap-0.5 sm:gap-1" aria-label="App actions">
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon-sm" aria-label="Export">
                    <Download />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent>Export</TooltipContent>
            </Tooltip>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Export as</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {exportOptions.map((option) => (
                <DropdownMenuItem key={option.id} disabled>
                  <option.icon />
                  <div className="flex flex-col">
                    <span>{option.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {option.description}
                    </span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                onClick={toggleTheme}
              >
                {resolvedTheme === "dark" ? <Sun /> : <Moon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Clear note"
                onClick={() => setClearOpen(true)}
              >
                <Eraser />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Clear note</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Settings"
                onClick={() => setSettingsOpen(true)}
              >
                <Settings />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
        </nav>
      </header>

      <ClearNoteDialog open={clearOpen} onOpenChange={setClearOpen} />
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
}
