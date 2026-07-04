import {
  Bold,
  CheckSquare,
  Code,
  Heading2,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Redo2,
  Strikethrough,
  Table,
  Underline,
  Undo2,
} from "lucide-react";

import { ToolbarButton } from "@/components/common/toolbar-button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function ToolbarGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-0.5">{children}</div>;
}

export function EditorToolbar() {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <ScrollArea className="w-full">
        <div
          className="flex h-11 items-center gap-1 px-2 sm:px-4"
          role="toolbar"
          aria-label="Formatting toolbar"
        >
          <ToolbarGroup>
            <ToolbarButton icon={<Bold />} label="Bold" shortcut="⌘B" disabled />
            <ToolbarButton icon={<Italic />} label="Italic" shortcut="⌘I" disabled />
            <ToolbarButton icon={<Underline />} label="Underline" shortcut="⌘U" disabled />
            <ToolbarButton icon={<Strikethrough />} label="Strikethrough" shortcut="⌘⇧S" disabled />
          </ToolbarGroup>

          <Separator orientation="vertical" className="mx-1 h-6" />

          <ToolbarGroup>
            <ToolbarButton icon={<Heading2 />} label="Heading" disabled />
            <ToolbarButton icon={<List />} label="Bullet list" disabled />
            <ToolbarButton icon={<ListOrdered />} label="Ordered list" disabled />
            <ToolbarButton icon={<CheckSquare />} label="Task list" disabled />
            <ToolbarButton icon={<Quote />} label="Blockquote" disabled />
          </ToolbarGroup>

          <Separator orientation="vertical" className="mx-1 h-6" />

          <ToolbarGroup>
            <ToolbarButton icon={<Table />} label="Table" disabled />
            <ToolbarButton icon={<Code />} label="Code block" disabled />
            <ToolbarButton icon={<Link />} label="Link" shortcut="⌘K" disabled />
            <ToolbarButton icon={<Image />} label="Image" disabled />
          </ToolbarGroup>

          <Separator orientation="vertical" className="mx-1 h-6" />

          <ToolbarGroup>
            <ToolbarButton icon={<Undo2 />} label="Undo" shortcut="⌘Z" disabled />
            <ToolbarButton icon={<Redo2 />} label="Redo" shortcut="⌘⇧Z" disabled />
          </ToolbarGroup>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
