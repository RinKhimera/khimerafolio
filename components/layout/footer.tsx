import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {siteConfig.name}. {t("copyright")}
        </p>
        <p className="text-xs text-muted-foreground">{t("builtWith")}</p>
      </div>
    </footer>
  );
}
