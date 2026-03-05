"use client"

import { useTranslations } from "next-intl"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/data/skills"

export function SkillsSection() {
  const t = useTranslations("Skills")

  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.key} delay={idx * 0.1}>
              <div>
                <h3 className="text-primary font-mono text-sm tracking-widest uppercase">
                  {t(`categories.${category.key}`)}
                </h3>
                <StaggerChildren className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <Badge
                        variant="outline"
                        className="hover:bg-primary/10 hover:border-primary/30 cursor-default gap-1.5 px-3 py-1.5 text-base transition-colors [&>svg]:size-4.5"
                      >
                        <skill.icon className="shrink-0" />
                        {skill.name}
                      </Badge>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
