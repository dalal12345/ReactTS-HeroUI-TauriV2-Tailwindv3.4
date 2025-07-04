import { Moon, Sun } from "lucide-react";
import useThemeStore from "../store/ThemeStore";

export default function ThemeToggleButton() {
  const dark = useThemeStore((state) => state.dark);
  const toggleDark = useThemeStore((state) => state.toggleDark);

  return (
    <button onMouseUp={toggleDark} className="w-fit p-1 justify-self-end">
       {dark ? <Sun className="w-5"/> : <Moon className="w-5 text-white"/>}
    </button>
  );
}
