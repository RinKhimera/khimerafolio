"use client"

import { useTranslations } from "next-intl"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"

export function ContactSection() {
  const t = useTranslations("Contact")

  return (
    <section id="contact" className="bg-muted/30 scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md">
            {t("subtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <Button size="lg" asChild className="gap-2 font-medium">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                {t("email")}
              </a>
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <p className="text-muted-foreground text-sm">{t("social")}</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
