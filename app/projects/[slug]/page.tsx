import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug } from '@/components/projects/data'
import DetailView from '@/components/projects/DetailView'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project not found' }
  return {
    title: project.projectName,
    description: project.overview,
    openGraph: {
      title: `${project.projectName} — Win Zaw Oo`,
      description: project.content,
      url: `https://winzawoo.dev/projects/${project.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.projectName,
      description: project.content,
    },
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return <DetailView project={project} prev={prev} next={next} idx={idx} total={projects.length} />
}
