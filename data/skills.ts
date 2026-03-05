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
  SiStripe,
  SiClerk,
  SiShadcnui,
  SiBun,
} from "@icons-pack/react-simple-icons"
import { FlaskConical, Cloud } from "lucide-react"

export interface Skill {
  name: string
  icon: ComponentType<{ size?: number; className?: string }>
  color?: string
}

export interface SkillCategory {
  key: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    key: "frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
    ],
  },
  {
    key: "backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Drizzle", icon: SiDrizzle, color: "#C5F74F" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Convex", icon: SiConvex, color: "#EE342F" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
      { name: "Firebase", icon: SiFirebase, color: "#DD2C00" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "tRPC", icon: SiTrpc, color: "#2596BE" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Bun", icon: SiBun },
      { name: "Vercel", icon: SiVercel },
      { name: "Azure DevOps", icon: Cloud },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    key: "testing",
    skills: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Vitest", icon: SiVitest, color: "#00FF74" },
      { name: "Cypress", icon: SiCypress, color: "#69D3A7" },
      { name: "Playwright", icon: FlaskConical },
    ],
  },
  {
    key: "languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
]
