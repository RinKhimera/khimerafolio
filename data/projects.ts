export type Project = {
  slug: string
  titleKey: string
  descriptionKey: string
  image: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  // Detail page fields
  longDescriptionKey: string
  featureCount: number
  challengeCount: number
  screenshots: string[]
  year: string
}

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

export const projects: Project[] = [
  {
    slug: "nomaqbanq",
    titleKey: "items.nomaqbanq.title",
    descriptionKey: "items.nomaqbanq.description",
    longDescriptionKey: "items.nomaqbanq.longDescription",
    image: "/images/projects/nomaqbanq.webp",
    techStack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Clerk",
      "Stripe",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/RinKhimera/NOMAQbanq",
    liveUrl: "https://nomaqbanq.ca",
    featured: true,
    featureCount: 5,
    challengeCount: 3,
    screenshots: [],
    year: "2024",
  },
  {
    slug: "fantribe",
    titleKey: "items.fantribe.title",
    descriptionKey: "items.fantribe.description",
    longDescriptionKey: "items.fantribe.longDescription",
    image: "/images/projects/fantribe.webp",
    techStack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Clerk",
      "Stripe",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/RinKhimera/FanTribe",
    liveUrl: "https://fantribe.io",
    featured: true,
    featureCount: 5,
    challengeCount: 3,
    screenshots: [],
    year: "2024",
  },
  {
    slug: "mes-contacts",
    titleKey: "items.mescontacts.title",
    descriptionKey: "items.mescontacts.description",
    longDescriptionKey: "items.mescontacts.longDescription",
    image: "/images/projects/mes-contacts.webp",
    techStack: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Clerk",
      "Mapbox",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/RinKhimera/mes-contacts",
    liveUrl: "https://mescontacts.ca",
    featured: true,
    featureCount: 4,
    challengeCount: 3,
    screenshots: [],
    year: "2024",
  },
  {
    slug: "quanta-hive",
    titleKey: "items.quantahive.title",
    descriptionKey: "items.quantahive.description",
    longDescriptionKey: "items.quantahive.longDescription",
    image: "/images/projects/quanta-hive.webp",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "EmailJS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/RinKhimera/Quanta-Hive",
    liveUrl: "https://quanta-hive.vercel.app",
    featured: true,
    featureCount: 5,
    challengeCount: 3,
    screenshots: [],
    year: "2024",
  },
]
