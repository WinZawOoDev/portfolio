'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch, FiX } from 'react-icons/fi'
import { projects, placeholderImage } from './data'
import { inter } from '@/lib/fonts'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function ProjectsIndexClient() {
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const catOk = activeCat === 'All' || p.category === activeCat
      if (!catOk) return false
      if (!q) return true
      const hay = [p.projectName, p.content, p.overview, p.category, ...p.techStack].join(' ').toLowerCase()
      return hay.includes(q)
    })
  }, [query, activeCat])

  return (
    <div>
      {/* controls */}
      <div className={`${inter.className} mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
        <div className="relative w-full sm:max-w-[380px]">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, stack, category…"
            className="w-full rounded-full border border-gray-200 dark:border-[#252530] bg-white dark:bg-[#15151c] pl-9 pr-9 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 focus:border-gray-300 dark:focus:border-[#3a3a48]"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-[#1e1e26]">
              <FiX size={14} />
            </button>
          )}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {filtered.length} of {projects.length} projects
        </div>
      </div>

      {/* category pills */}
      <div className={`${inter.className} mt-4 flex flex-wrap gap-2`}>
        {categories.map((cat) => {
          const active = activeCat === cat
          const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length
          return (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${active ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white' : 'bg-white dark:bg-[#15151c] border-gray-200 dark:border-[#252530] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1e1e26]'}`}
            >
              {cat} <span className={`text-[11px] ${active ? 'text-white/70 dark:text-gray-600' : 'text-gray-400'}`}>{count}</span>
            </button>
          )
        })}
      </div>

      {/* grid */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-gray-300 dark:border-[#252530] p-12 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">No projects match “{query}” in {activeCat}.</p>
          <button onClick={() => { setQuery(''); setActiveCat('All') }} className="mt-4 rounded-full bg-gray-900 dark:bg-white px-5 py-2 text-sm font-medium text-white dark:text-gray-900">Clear filters</button>
        </div>
      ) : (
        <div className="projects-grid !mt-8">
          {filtered.map((p) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className="project-card group text-left">
              {/* subtle category tint overlay so same image feels distinct */}
              <div className="relative">
                <Image src={p.imageSource ?? placeholderImage} alt={p.projectName} className="w-full h-44 object-cover" />
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 dark:bg-[#0d0d12]/90 backdrop-blur border border-gray-200/50 dark:border-white/10 px-2.5 py-1 text-[11px] font-medium">{p.category}</span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 group-hover:text-accent dark:group-hover:text-accent-muted transition-colors line-clamp-2">{p.projectName}</h2>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">{p.content}</p>
                <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                  {p.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="badge-sm">
                      {t}
                    </span>
                  ))}
                  {p.techStack.length > 3 && <span className="badge-sm">+{p.techStack.length - 3}</span>}
                </div>
                <span className="mt-3 text-xs font-medium text-accent dark:text-accent-muted">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
