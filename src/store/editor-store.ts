import { create } from "zustand";

import type { SaveStatus } from "@/types/editor";

interface EditorState {
  content: string;
  saveStatus: SaveStatus;
  setContent: (content: string) => void;
  setSaveStatus: (status: SaveStatus) => void;
  clearContent: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  content: "",
  saveStatus: "idle",

  setContent: (content) => set({ content }),
  setSaveStatus: (saveStatus) => set({ saveStatus }),
  clearContent: () => set({ content: "", saveStatus: "idle" }),
}));
