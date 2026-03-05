import type { ComponentType } from "react"
import {
  SiAngular,
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
  SiJest,
  SiVitest,
  SiSupabase,
  SiGraphql,
  SiTrpc,
  SiCypress,
  SiConvex,
  SiDrizzle,
} from "@icons-pack/react-simple-icons"
import { FlaskConical, Cloud } from "lucide-react"

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
      { name: "Angular", icon: SiAngular },
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
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Supabase", icon: SiSupabase },
      { name: "Convex", icon: SiConvex },
      { name: "Firebase", icon: SiFirebase },
      { name: "GraphQL", icon: SiGraphql },
      { name: "tRPC", icon: SiTrpc },
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
      { name: "Azure DevOps", icon: Cloud },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Figma", icon: SiFigma },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    key: "testing",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "Cypress", icon: SiCypress },
      { name: "Playwright", icon: FlaskConical },
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
