import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { siteConfig } from "@/lib/constants"
import { projects, getProjectBySlug } from "@/data/projects"
import { ProjectDetailContent } from "@/components/sections/project-detail-content"

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export const generateStaticParams = () =>
  routing.locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  )

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { locale, slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  const t = await getTranslations({ locale, namespace: "Projects" })

  const title = `${t(project.titleKey)} | Samuel Pokam`
  const description = t(project.descriptionKey)
  const url = `${siteConfig.url}/${locale}/projects/${slug}`
  const altLocale = locale === "en" ? "fr" : "en"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: `${siteConfig.url}${project.image}`,
          width: 1200,
          height: 630,
          alt: t(project.titleKey),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}${project.image}`],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en/projects/${slug}`,
        fr: `${siteConfig.url}/fr/projects/${slug}`,
      },
    },
  }
}

const ProjectPage = async ({ params }: Props) => {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const project = getProjectBySlug(slug)
  if (!project) {
    notFound()
  }

  return <ProjectDetailContent project={project} />
}

export default ProjectPage
