import { ApplicationState } from "@/interface/store/ApplicationStore";
import { create } from "zustand";

export const useApplicationStore = create<ApplicationState>((set) => ({
  menuBarVisible: false,
  setMenuBarVisible: (status: boolean) => set({ menuBarVisible: status }),
  toggleMenuBar: () =>
    set((state) => ({ menuBarVisible: !state.menuBarVisible })),
}));
