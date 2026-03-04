import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export default function NotFound() {
  const t = useTranslations("Common")

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-6xl font-bold">404</h1>
      <p className="text-muted-foreground mt-4">Page not found</p>
      <Button asChild className="mt-8">
        <Link href="/">{t("backToHome")}</Link>
      </Button>
    </div>
  )
}
