"use client"

import { useState, useEffect, useMemo } from "react"
import { useTranslations } from "next-intl"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { navLinks, siteConfig } from "@/lib/constants"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { Link } from "@/i18n/navigation"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"

export const Header = () => {
  const t = useTranslations("Navigation")
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sectionIds = useMemo(() => navLinks.map((l) => l.key), [])
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-background/80 border-border border-b backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display focus-visible:ring-ring/50 rounded-sm text-xl font-bold tracking-tight focus-visible:ring-2 focus-visible:outline-none"
        >
          {siteConfig.username}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={`/${link.href}`}
              className={cn(
                "focus-visible:ring-ring/50 rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
                activeId === link.key
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu aria-hidden="true" className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="font-display text-lg font-bold">
                {siteConfig.username}
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={`/${link.href}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "focus-visible:ring-ring/50 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none",
                      activeId === link.key
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
