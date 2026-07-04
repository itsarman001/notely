import { EditorPlaceholder } from "@/components/editor/editor-placeholder";
import { Header } from "@/components/layout/header";
import { StatusBar } from "@/components/layout/status-bar";
import { EditorToolbar } from "@/components/toolbar/editor-toolbar";

export function AppLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <Header />
      <EditorToolbar />
      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <EditorPlaceholder />
      </main>
      <StatusBar />
    </div>
  );
}
