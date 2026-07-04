import { create } from "zustand";

import {
  applyTheme,
  getStoredTheme,
  setStoredTheme,
} from "@/lib/theme";
import type { ResolvedTheme, Theme } from "@/types/theme";

interface ThemeState {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initialize: () => () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "system",
  resolvedTheme: "light",

  setTheme: (theme) => {
    setStoredTheme(theme);
    const resolvedTheme = applyTheme(theme);
    set({ theme, resolvedTheme });
  },

  toggleTheme: () => {
    const { resolvedTheme } = get();
    get().setTheme(resolvedTheme === "dark" ? "light" : "dark");
  },

  initialize: () => {
    const theme = getStoredTheme();
    const resolvedTheme = applyTheme(theme);
    set({ theme, resolvedTheme });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (get().theme === "system") {
        const nextResolved = applyTheme("system");
        set({ resolvedTheme: nextResolved });
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  },
}));
