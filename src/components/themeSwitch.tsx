"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export const title = "Theme Toggle with Icons";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // render a stable placeholder (same size) to avoid layout shift
    return <div className="flex items-center gap-2 h-4" />;
  }

  const checked = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <SunIcon className="size-4" />
      <Switch
        checked={checked}
        onCheckedChange={(dark) => setTheme(dark ? "dark" : "light")}
      />
      <MoonIcon className="size-4 text-muted-foreground" />
    </div>
  );
}