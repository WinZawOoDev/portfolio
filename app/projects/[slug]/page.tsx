import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'
import { projects, getProjectBySlug } from '@/components/projects/data'

const inter = Inter({ subsets: ['latin'] })
const interSemibold = Inter({ subsets: ['latin'], weight: '600' })
const headingFont = Inter({ subsets: ['latin'], weight: '800' })

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

  return (
    <div className={`${inter.className} pt-24 pb-16`}>
      <div className="layout-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500 dark:text-gray-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <li>
              <Link href="/#projects" className="hover:text-gray-900 dark:hover:text-gray-100 hover:underline underline-offset-4">
                Projects
              </Link>
            </li>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <li aria-current="page" className="text-gray-900 dark:text-gray-100 font-medium truncate">
              {project.projectName}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-8 lg:gap-10 items-start">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-[#252530] bg-white dark:bg-[#15151c] shadow-sm">
              <Image
                src={project.imageSource}
                alt={project.projectName}
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>

            {/* Meta card */}
            <div className="card p-6 lg:p-7 !bg-white dark:!bg-[#15151c] border border-gray-200 dark:border-[#252530] shadow-sm rounded-2xl">
              <h1 className={`${headingFont.className} text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100`}>
                {project.projectName}
              </h1>
              <p className="mt-3 text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
                {project.content}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <dl className="mt-6 grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between gap-4 py-2 border-b border-gray-100 dark:border-[#1e1e26]">
                  <dt className="text-gray-500 dark:text-gray-400">Role</dt>
                  <dd className="font-medium text-gray-900 dark:text-gray-100 text-right">{project.role}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2 border-b border-gray-100 dark:border-[#1e1e26]">
                  <dt className="text-gray-500 dark:text-gray-400">Duration</dt>
                  <dd className="font-medium text-gray-900 dark:text-gray-100 text-right">{project.duration}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2">
                  <dt className="text-gray-500 dark:text-gray-400">Team</dt>
                  <dd className="font-medium text-gray-900 dark:text-gray-100 text-right">{project.team}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.href && project.href !== '#' && (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="btn-primary !flex !my-0 gap-2"
                  >
                    Live site <RiExternalLinkFill size={14} />
                  </Link>
                )}
                <Link href={project.sourceLink} target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-[#252530] px-5 py-2.5 text-sm font-medium bg-white dark:bg-[#0d0d12] hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors">
                  <AiFillGithub size={16} /> Source
                </Link>
              </div>
            </div>
          </div>

          {/* Detail sections */}
          <div className="mt-10 lg:mt-12 grid lg:grid-cols-[1.7fr_0.9fr] gap-8">
            <div className="space-y-8">
              <section className="card p-6 lg:p-8 !bg-white dark:!bg-[#15151c] border border-gray-200 dark:border-[#252530]">
                <h2 className={`${interSemibold.className} text-lg font-semibold text-gray-900 dark:text-gray-100`}>Overview</h2>
                <p className="mt-3 text-[14.5px] leading-7 text-gray-600 dark:text-gray-300">{project.overview}</p>
              </section>

              <section className="card p-6 lg:p-8 !bg-white dark:!bg-[#15151c] border border-gray-200 dark:border-[#252530]">
                <h2 className={`${interSemibold.className} text-lg font-semibold text-gray-900 dark:text-gray-100`}>Key features</h2>
                <ul className="mt-3 space-y-2.5 list-disc pl-5 marker:text-gray-400">
                  {project.features.map((f) => (
                    <li key={f} className="text-[14px] leading-6 text-gray-600 dark:text-gray-300">
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card p-6 lg:p-8 !bg-white dark:!bg-[#15151c] border border-gray-200 dark:border-[#252530]">
                <h2 className={`${interSemibold.className} text-lg font-semibold text-gray-900 dark:text-gray-100`}>Outcome</h2>
                <p className="mt-3 text-[14.5px] leading-7 text-gray-600 dark:text-gray-300">{project.outcome}</p>
                {project.challenges && (
                  <>
                    <h3 className={`${interSemibold.className} mt-6 text-sm font-semibold text-gray-900 dark:text-gray-100`}>Challenges</h3>
                    <p className="mt-2 text-[14px] leading-6 text-gray-600 dark:text-gray-300">{project.challenges}</p>
                  </>
                )}
              </section>
            </div>

            <aside className="space-y-6 h-fit lg:sticky lg:top-24">
              <div className="card p-6 !bg-white dark:!bg-[#15151c] border border-gray-200 dark:border-[#252530]">
                <h3 className={`${interSemibold.className} text-sm font-semibold text-gray-900 dark:text-gray-100`}>My responsibilities</h3>
                <ul className="mt-3 space-y-2">
                  {project.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-[13.5px] leading-6 text-gray-600 dark:text-gray-300">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#253529] dark:bg-[#9dbfa8] shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6 !bg-white dark:!bg-[#15151c] border border-gray-200 dark:border-[#252530]">
                <h3 className={`${interSemibold.className} text-sm font-semibold text-gray-900 dark:text-gray-100`}>Tech stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/#projects"
                className="inline-flex w-full justify-center rounded-lg border border-gray-200 dark:border-[#252530] bg-white dark:bg-[#15151c] px-4 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors"
              >
                ← Back to projects
              </Link>
            </aside>
          </div>

          {/* Prev / Next */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-gray-200 dark:border-[#1e1e26] pt-6">
            <div className="flex-1">
              {prev ? (
                <Link href={`/projects/${prev.slug}`} className="group inline-flex flex-col">
                  <span className="text-xs tracking-wide text-gray-500 dark:text-gray-400">Previous</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:underline underline-offset-4">{prev.projectName}</span>
                </Link>
              ) : (
                <span />
              )}
            </div>
            <div className="flex-1 text-right">
              {next ? (
                <Link href={`/projects/${next.slug}`} className="group inline-flex flex-col items-end">
                  <span className="text-xs tracking-wide text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:underline underline-offset-4">{next.projectName}</span>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
