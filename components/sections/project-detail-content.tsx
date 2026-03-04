"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { ArrowLeft, ExternalLink, Github, Calendar } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import type { Project } from "@/data/projects"

type ProjectDetailContentProps = {
  project: Project
}

export const ProjectDetailContent = ({
  project,
}: ProjectDetailContentProps) => {
  const t = useTranslations("Projects")
  const td = useTranslations("ProjectDetail")

  // Extract key prefix from titleKey: "items.nomaqbanq.title" → "nomaqbanq"
  const keyPrefix = project.titleKey.split(".")[1]

  const features = Array.from({ length: project.featureCount }, (_, i) =>
    t(`items.${keyPrefix}.features.${i}`),
  )
  const challenges = Array.from({ length: project.challengeCount }, (_, i) =>
    t(`items.${keyPrefix}.challenges.${i}`),
  )

  return (
    <article className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Subtle top gradient mirroring the hero section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,var(--accent)_0%,transparent_70%)] opacity-20" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Back navigation */}
        <FadeIn>
          <Link
            href="/#projects"
            className="group text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            {td("backToProjects")}
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <header className="mt-10">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="text-muted-foreground gap-1.5 font-mono text-xs"
              >
                <Calendar className="h-3 w-3" />
                {project.year}
              </Badge>
            </div>

            <h1 className="font-display mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {t(project.titleKey)}
              <span className="text-primary">.</span>
            </h1>

            <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl">
              {t(project.descriptionKey)}
            </p>
          </header>
        </FadeIn>

        {/* Hero image */}
        <FadeIn delay={0.2} className="mt-12">
          <div className="border-border bg-muted/30 overflow-hidden rounded-xl border">
            <div className="aspect-video">
              <Image
                src={project.image}
                alt={t(project.titleKey)}
                width={1200}
                height={675}
                quality={90}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>

        {/* Action buttons */}
        <FadeIn delay={0.3} className="mt-8">
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild className="gap-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  {td("visitLive")}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild className="gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  {td("viewSource")}
                </a>
              </Button>
            )}
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="bg-border my-16 h-px" />

        {/* Overview — editorial left accent */}
        <ScrollReveal>
          <section>
            <h2 className="text-primary font-mono text-xs tracking-widest uppercase">
              {td("overview")}
            </h2>
            <div className="border-primary/30 mt-6 border-l-2 pl-6">
              <p className="text-muted-foreground text-base leading-[1.8] sm:text-lg sm:leading-[1.8]">
                {t(project.longDescriptionKey)}
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Key Features — numbered for editorial rhythm */}
        {features.length > 0 && (
          <ScrollReveal>
            <section className="mt-20">
              <h2 className="text-primary font-mono text-xs tracking-widest uppercase">
                {td("keyFeatures")}
              </h2>
              <ul className="mt-8 space-y-5">
                {features.map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-primary/60 mt-0.5 font-mono text-xs tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        )}

        {/* Technical Highlights */}
        {challenges.length > 0 && (
          <ScrollReveal>
            <section className="mt-20">
              <h2 className="text-primary font-mono text-xs tracking-widest uppercase">
                {td("technicalHighlights")}
              </h2>
              <ul className="mt-8 space-y-5">
                {challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                    <span className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        )}

        {/* Tech Stack */}
        <ScrollReveal>
          <section className="mt-20">
            <h2 className="text-primary font-mono text-xs tracking-widest uppercase">
              {td("techStack")}
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* Screenshots Gallery */}
        {project.screenshots.length > 0 && (
          <ScrollReveal>
            <section className="mt-20">
              <h2 className="text-primary font-mono text-xs tracking-widest uppercase">
                {td("screenshots")}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((src, i) => (
                  <div
                    key={i}
                    className="border-border bg-muted/30 overflow-hidden rounded-lg border"
                  >
                    <div className="aspect-video">
                      <Image
                        src={src}
                        alt={`${t(project.titleKey)} — ${i + 1}`}
                        width={600}
                        height={338}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}
      </div>
    </article>
  )
}
