"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative"
    >
      <Sun
        aria-hidden="true"
        className="h-5 w-5 scale-100 rotate-0 transition-[transform,opacity] dark:scale-0 dark:-rotate-90"
      />
      <Moon
        aria-hidden="true"
        className="absolute h-5 w-5 scale-0 rotate-90 transition-[transform,opacity] dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
