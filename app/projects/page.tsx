import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { projects } from '@/components/projects/data'

const headingFont = Inter({ subsets: ['latin'], weight: '800' })

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work by Win Zaw Oo — Strapi, Next.js, Nest.js, and more.',
}

export default function ProjectsIndexPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="layout-container">
        <div className="max-w-6xl mx-auto">
          <h1 className={`${headingFont.className} text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100`}>Projects</h1>
          <p className="mt-2 text-sm lg:text-base text-gray-500 dark:text-gray-400">Selected work — click any card for detailed case study</p>
          <div className="projects-grid !mt-8">
            {projects.map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`} className="project-card group">
                <Image src={p.imageSource} alt={p.projectName} className="w-full h-44 object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[#253529] dark:group-hover:text-[#9dbfa8] transition-colors">{p.projectName}</h2>
                  <p className="mt-2 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">{p.content}</p>
                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="badge-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-3 text-xs font-medium text-[#253529] dark:text-[#9dbfa8]">View details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
