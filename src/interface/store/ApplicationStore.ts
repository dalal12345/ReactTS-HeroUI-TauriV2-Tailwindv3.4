export interface ApplicationState {
  menuBarVisible: boolean;
  setMenuBarVisible: (status: boolean) => void;
  toggleMenuBar: () => void;
}
