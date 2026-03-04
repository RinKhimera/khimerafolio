import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"
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

  return {
    title: `${t(project.titleKey)} | Samuel Pokam`,
    description: t(project.descriptionKey),
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
