export interface Project {
  slug: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "nomaqbanq",
    titleKey: "items.nomaqbanq.title",
    descriptionKey: "items.nomaqbanq.description",
    image: "/images/projects/nomaqbanq.webp",
    techStack: ["Next.js", "TypeScript", "Convex", "Clerk", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/RinKhimera/NOMAQbanq",
    liveUrl: "https://nomaqbanq.ca",
    featured: true,
  },
  {
    slug: "fantribe",
    titleKey: "items.fantribe.title",
    descriptionKey: "items.fantribe.description",
    image: "/images/projects/fantribe.webp",
    techStack: ["Next.js", "TypeScript", "Convex", "Clerk", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/RinKhimera/FanTribe",
    liveUrl: "https://fantribe.io",
    featured: true,
  },
  {
    slug: "mes-contacts",
    titleKey: "items.mescontacts.title",
    descriptionKey: "items.mescontacts.description",
    image: "/images/projects/mes-contacts.webp",
    techStack: ["Next.js", "TypeScript", "Convex", "Clerk", "Mapbox", "Tailwind CSS"],
    githubUrl: "https://github.com/RinKhimera/mes-contacts",
    liveUrl: "https://mescontacts.ca",
    featured: true,
  },
  {
    slug: "project-delta",
    titleKey: "items.delta.title",
    descriptionKey: "items.delta.description",
    image: "/images/projects/delta.webp",
    techStack: ["React Native", "Expo", "Firebase", "TypeScript"],
    githubUrl: "https://github.com/RinKhimera/project-delta",
    liveUrl: "https://project-delta.vercel.app",
    featured: false,
  },
];
