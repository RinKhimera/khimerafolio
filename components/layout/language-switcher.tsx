"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import type { Locale } from "@/i18n/routing"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale })
  }

  const targetLocale: Locale = locale === "en" ? "fr" : "en"

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => switchLocale(targetLocale)}
      className="font-mono text-xs tracking-widest uppercase"
    >
      {targetLocale.toUpperCase()}
    </Button>
  )
}
