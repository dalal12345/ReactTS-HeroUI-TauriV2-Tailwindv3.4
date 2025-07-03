import { create } from "zustand";
import { platform } from "@tauri-apps/plugin-os";
import { OsInfoState } from "@/interface/store/OsInfoStore";

const useOsInfoStore = create<OsInfoState>((set) => ({
  osName: null,
  isMobileOS: false,
  setOSName: (os) => set({ osName: os }),
  setIsMobileOS: (status) => set({ isMobileOS: status }),
  detectMobileOS: () => {
    const currentOS = platform();
    set({ osName: currentOS });
    if (currentOS === "android" || currentOS === "ios") {
      set({ isMobileOS: true });
    } else {
      set({ isMobileOS: false });
    }
  },
}));

export default useOsInfoStore;
