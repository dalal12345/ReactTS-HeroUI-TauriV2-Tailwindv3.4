import { ThemeState } from "@/interface/store/ThemeStore";
import { create } from "zustand";

const useThemeStore = create<ThemeState>((set) => ({
  dark: false,
  setDark: (value) => set({ dark: value }),
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}));

export default useThemeStore;
