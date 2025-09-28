import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "dark",
  setTheme: (theme) => {
    set({ theme });
  },
}));