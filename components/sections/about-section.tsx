"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("description")}
              </p>
              <Button variant="outline" className="gap-2">
                <FileDown className="h-4 w-4" />
                {t("resume")}
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="aspect-square rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
              <span className="text-sm text-muted-foreground font-mono">
                photo placeholder
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
