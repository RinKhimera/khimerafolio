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

const placeholderProjects = [
  {
    title: "Project Alpha",
    description: "A modern web application built with cutting-edge technologies.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  },
  {
    title: "Project Beta",
    description: "An innovative platform for seamless digital experiences.",
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Project Gamma",
    description: "A high-performance API service with real-time capabilities.",
    tech: ["Go", "gRPC", "Redis", "Kubernetes"],
  },
  {
    title: "Project Delta",
    description: "A mobile-first progressive web app with offline support.",
    tech: ["Next.js", "PWA", "Workbox", "IndexedDB"],
  },
];

export function ProjectsSection() {
  const t = useTranslations("Projects");

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
          {placeholderProjects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                {/* Image placeholder */}
                <div className="mb-4 aspect-video rounded-lg bg-muted/50 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground font-mono">
                    screenshot
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 flex gap-2">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                    <Github className="h-3.5 w-3.5" />
                    {t("viewCode")}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t("viewProject")}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
