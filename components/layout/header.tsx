"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
  const t = useTranslations("Navigation");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.key));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-bold tracking-tight"
        >
          {siteConfig.username}
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                activeId === link.key
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(link.key)}
            </button>
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
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="font-display text-lg font-bold">
                {siteConfig.username}
              </SheetTitle>
              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                      activeId === link.key
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t(link.key)}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
