import { useTranslations } from "next-intl"
import { siteConfig } from "@/lib/constants"

export function Footer() {
  const t = useTranslations("Footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-muted-foreground text-sm">
          &copy; {year} {siteConfig.name}. {t("copyright")}
        </p>
        <p className="text-muted-foreground text-xs">
          {t.rich("builtWith", {
            nextjs: (chunks) => (
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline-offset-4 hover:underline"
              >
                {chunks}
              </a>
            ),
            tailwind: (chunks) => (
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground underline-offset-4 hover:underline"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </footer>
  )
}
