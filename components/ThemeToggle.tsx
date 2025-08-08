"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button aria-label="Toggle theme" onClick={() => setTheme(isDark ? "light" : "dark")} className="btn btn-ghost">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle color theme</span>
    </button>
  );
}
