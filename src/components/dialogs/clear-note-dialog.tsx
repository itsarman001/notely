import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/editor-store";

interface ClearNoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ClearNoteDialog({ open, onOpenChange }: ClearNoteDialogProps) {
  const clearContent = useEditorStore((state) => state.clearContent);

  const handleClear = () => {
    clearContent();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Clear note?</DialogTitle>
          <DialogDescription>
            This will permanently delete all content in your current note. This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleClear}>
            Clear note
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
