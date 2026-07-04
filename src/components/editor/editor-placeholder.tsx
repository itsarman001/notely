import { useEditorStore } from "@/store/editor-store";
import { cn } from "@/lib/utils";

export function EditorPlaceholder() {
  const content = useEditorStore((state) => state.content);
  const setContent = useEditorStore((state) => state.setContent);

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-8 sm:py-12">
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder="Start writing your note..."
        spellCheck
        className={cn(
          "min-h-[calc(100vh-12rem)] w-full resize-none bg-transparent text-base leading-7",
          "placeholder:text-muted-foreground/60 focus:outline-none",
          "sm:text-lg sm:leading-8"
        )}
        aria-label="Note editor"
      />
    </div>
  );
}
