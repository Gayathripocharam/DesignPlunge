// src/hooks/useTheme.ts
import { useState, useEffect } from "react";

type Theme = "light" | "dark";

/**
 * Reads the user's system color‑scheme preference and keeps it in sync.
 * Returns `{ theme }` where theme is "light" | "dark".
 */
export function useTheme(): { theme: Theme } {
  const getPreferred = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [theme, setTheme] = useState<Theme>(getPreferred);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return { theme };
}
