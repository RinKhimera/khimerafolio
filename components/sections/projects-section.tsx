"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { ArrowRight, Github } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const t = useTranslations("Projects")

  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="bg-muted/30 scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <div className="group border-border bg-card hover:border-primary/30 relative rounded-xl border p-6 transition-colors">
                {/* Project image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-muted/50 relative mb-4 block aspect-video cursor-pointer overflow-hidden rounded-lg"
                >
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>

                <h3 className="font-display text-lg font-semibold">
                  {t(project.titleKey)}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {t(project.descriptionKey)}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="gap-1.5 text-xs"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3.5 w-3.5" />
                        {t("viewCode")}
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="gap-1.5 text-xs"
                  >
                    <Link href={`/projects/${project.slug}`}>
                      <ArrowRight className="h-3.5 w-3.5" />
                      {t("viewProject")}
                    </Link>
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
