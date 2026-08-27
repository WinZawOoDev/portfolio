import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProjectsIndexClient from '@/components/projects/ProjectsIndexClient'

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
          <p className="mt-2 text-sm lg:text-base text-gray-500 dark:text-gray-400">Selected work — filter by category or search stack • 11 case studies</p>
          <ProjectsIndexClient />
        </div>
      </div>
    </div>
  )
}
