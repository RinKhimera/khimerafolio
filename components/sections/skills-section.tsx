"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/stagger-children";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    key: "frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML/CSS",
    ],
  },
  {
    key: "backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    key: "tools",
    skills: ["Git", "Docker", "Vercel", "GitHub Actions", "Figma", "VS Code"],
  },
  {
    key: "languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
];

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
            <span className="text-primary">.</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <ScrollReveal key={category.key} delay={idx * 0.1}>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
                  {t(`categories.${category.key}`)}
                </h3>
                <StaggerChildren className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <Badge
                        variant="outline"
                        className="px-3 py-1.5 text-sm transition-colors hover:bg-primary/10 hover:border-primary/30"
                      >
                        {skill}
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
  );
}
