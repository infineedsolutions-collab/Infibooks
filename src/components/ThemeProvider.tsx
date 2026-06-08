"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Ctx = { theme: Theme; toggle: () => void };

const ThemeContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "infibooks_theme";

function applyClass(t: Theme) {
  document.documentElement.classList.toggle("dark", t === "dark");
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Light is the brand default; dark is opt-in via the toggle.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    let saved: Theme | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    } catch {}
    const initial: Theme = saved ?? "light";
    setTheme(initial);
    applyClass(initial);
  }, []);

  const toggle = () => {
    setTheme((t) => {
      const next: Theme = t === "light" ? "dark" : "light";
      applyClass(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
