"use client";

import React from "react";
import { Theme } from "@radix-ui/themes";

function usePrefersDarkMode() {
  const [isDark, setIsDark] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });

  React.useEffect(() => {
    const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mql) return;

    const onChange = (e: MediaQueryListEvent) => setIsDark(e.matches);

    setIsDark(mql.matches);
    if (typeof mql.addEventListener === "function") mql.addEventListener("change", onChange);
    else (mql as any).addListener?.(onChange);

    return () => {
      if (typeof mql.removeEventListener === "function")
        mql.removeEventListener("change", onChange);
      else (mql as any).removeListener?.(onChange);
    };
  }, []);

  return isDark;
}

export default function RadixThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDark = usePrefersDarkMode();

  return (
    <Theme
      accentColor="gray"
      radius="small"
      appearance={isDark ? "dark" : "light"}
      className="flex min-h-screen flex-col"
    >
      {children}
    </Theme>
  );
}


