"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react"; // optional icons

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-[var(--accent-light)]/20 transition"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
