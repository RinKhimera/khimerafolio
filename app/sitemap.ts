import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"
import { projects } from "@/data/projects"

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = siteConfig.url

  const staticRoutes = routing.locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ])

  const projectRoutes = routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  )

  return [...staticRoutes, ...projectRoutes]
}

export default sitemap
