import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label="Changer le theme"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700 shadow-card ring-1 ring-line transition hover:-translate-y-0.5 hover:bg-brand-50"
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
