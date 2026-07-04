import {
  countCharacters,
  countWords,
  estimateReadingTime,
} from "@/lib/editor/stats";
import { useEditorStore } from "@/store/editor-store";
import { cn } from "@/lib/utils";

function StatusItem({
  label,
  value,
  className,
}: {
  label: string;
  value: string | number;
  className?: string;
}) {
  return (
    <span className={cn("text-muted-foreground", className)}>
      <span className="hidden sm:inline">{label}: </span>
      <span className="font-medium text-foreground">{value}</span>
    </span>
  );
}

const saveStatusLabels = {
  idle: "Ready",
  saving: "Saving…",
  saved: "Saved",
} as const;

export function StatusBar() {
  const content = useEditorStore((state) => state.content);
  const saveStatus = useEditorStore((state) => state.saveStatus);

  const words = countWords(content);
  const characters = countCharacters(content);
  const readingTime = estimateReadingTime(words);

  return (
    <footer
      className="flex h-8 shrink-0 items-center justify-between border-t bg-background/95 px-3 text-xs backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-4"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <StatusItem label="Words" value={words} />
        <StatusItem label="Characters" value={characters} className="hidden sm:inline" />
        <StatusItem
          label="Reading time"
          value={`${readingTime} min`}
          className="hidden md:inline"
        />
      </div>

      <span
        className={cn(
          "text-muted-foreground",
          saveStatus === "saved" && "text-foreground",
          saveStatus === "saving" && "animate-pulse"
        )}
      >
        {saveStatusLabels[saveStatus]}
      </span>
    </footer>
  );
}
