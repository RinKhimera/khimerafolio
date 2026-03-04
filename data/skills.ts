import type { ComponentType } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiGithubactions,
  SiFigma,
  SiPython,
  SiFirebase,
  SiRedis,
  SiLinux,
  SiFramer,
  SiHtml5,
  SiCss,
} from "@icons-pack/react-simple-icons"

export interface Skill {
  name: string
  icon: ComponentType<{ size?: number; className?: string }>
}

export interface SkillCategory {
  key: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "Firebase", icon: SiFirebase },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Figma", icon: SiFigma },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    key: "languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
]
