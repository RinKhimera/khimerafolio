"use client";

import { useTranslations } from "next-intl";
import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const t = useTranslations("Projects");

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <StaggerChildren className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                {/* Image placeholder */}
                <div className="mb-4 aspect-video rounded-lg bg-muted/50 flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-muted-foreground font-mono">
                    screenshot
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold">
                  {t(project.titleKey)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
                    <Button variant="ghost" size="sm" asChild className="gap-1.5 text-xs">
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
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" asChild className="gap-1.5 text-xs">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        {t("viewProject")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
