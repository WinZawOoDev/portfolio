'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { FiArrowLeft, FiCheckCircle, FiLink2 } from 'react-icons/fi'
import { placeholderImage, type Project } from './data'
import { inter, mono, serif } from '@/lib/fonts'

type Props = { project: Project; prev: Project | null; next: Project | null; idx: number; total: number }

export default function DetailView({ project, prev, next, idx, total }: Props) {
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    try { await navigator.clipboard.writeText(url) } catch { const el = document.createElement('textarea'); el.value = url; document.body.appendChild(el); el.select(); document.execCommand('copy'); el.remove() }
    setCopied(true); setTimeout(() => setCopied(false), 1600)
  }, [])

  const num = String(idx + 1).padStart(2, '0')

  return (
    <div className={`${inter.className} bg-white dark:bg-[#0d0d12] text-gray-900 dark:text-gray-100`}>
      {/* hairline top */}
      <div className="pt-16">
        <div className="layout-container">
          <div className="mx-auto max-w-[720px]">
            {/* minimal nav */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between py-6 border-b border-gray-100 dark:border-[#1e1e26]">
              <Link href="/#projects" className="inline-flex items-center gap-2 text-[13px] tracking-wide text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <FiArrowLeft size={13} /> Projects
              </Link>
              <span className={`${mono.className} text-[11px] tracking-[0.14em] text-gray-400`}>{num} / {String(total).padStart(2, '0')}</span>
            </motion.div>

            {/* hero — minimal, centered, airy */}
            <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="pt-10 pb-8 text-center">
              <div className={`${mono.className} inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-gray-400`}>
                <span className="h-[3px] w-[3px] rounded-full bg-gray-900 dark:bg-white" />
                {project.category.toUpperCase()}
                <span className="h-px w-4 bg-gray-200 dark:bg-[#252530]" />
                {project.duration}
              </div>

              <h1 className={`${serif.className} mx-auto mt-5 max-w-[560px] text-[32px] sm:text-[40px] leading-[0.98] tracking-[-0.02em] font-normal`}>
                {project.projectName}
              </h1>

              <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-7 text-gray-500 dark:text-gray-400">
                {project.content}
              </p>

              <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className={`${mono.className} text-[11px] tracking-wide text-gray-500 border border-gray-200 dark:border-[#252530] rounded-full px-2.5 py-1`}>{t}</span>
                ))}
              </div>

              <div className="mt-7 flex items-center justify-center gap-3">
                {project.href !== '#' && (
                  <Link href={project.href} target="_blank" className="rounded-full bg-gray-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-gray-900 hover:opacity-90">Visit live</Link>
                )}
                <Link href={project.sourceLink} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-[#252530] px-5 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-[#15151c]">
                  <AiFillGithub size={15} /> Source
                </Link>
                <button onClick={handleCopy} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-[#252530] px-4 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-[#15151c]">
                  {copied ? <><FiCheckCircle size={13} /> Copied</> : <><FiLink2 size={13} /> Copy</>}
                </button>
              </div>
            </motion.header>

            {/* image — hairline, no shadow */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="overflow-hidden rounded-[12px] border border-gray-200 dark:border-[#252530]">
              <Image src={project.imageSource ?? placeholderImage} alt={project.projectName} priority sizes="(max-width: 720px) 100vw, 720px" className="w-full aspect-[16/10] object-cover" />
            </motion.div>
            <div className={`${mono.className} mt-2 flex justify-between text-[10px] tracking-wide text-gray-400 px-1`}>
              <span>{project.category} — {project.role}</span>
              <span>{project.techStack.slice(0, 2).join(' · ')}</span>
            </div>

            {/* content — single column, generous whitespace */}
            <article className="mt-12">
              <section>
                <div className={`${mono.className} text-[11px] tracking-[0.14em] text-gray-400`}>01 — OVERVIEW</div>
                <p className="mt-3 text-[16px] leading-8 text-gray-700 dark:text-gray-300">{project.overview}</p>
              </section>

              <hr className="my-10 border-gray-100 dark:border-[#1e1e26]" />

              <section>
                <div className={`${mono.className} text-[11px] tracking-[0.14em] text-gray-400`}>02 — FEATURES</div>
                <ol className="mt-4 divide-y divide-gray-100 dark:divide-[#1e1e26] border-y border-gray-100 dark:border-[#1e1e26]">
                  {project.features.map((f, i) => (
                    <li key={f} className="flex gap-4 py-4">
                      <span className={`${mono.className} text-[11px] tracking-wide text-gray-400 pt-1`}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[14.5px] leading-7 text-gray-700 dark:text-gray-300">{f}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <hr className="my-10 border-gray-100 dark:border-[#1e1e26]" />

              <section className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className={`${mono.className} text-[11px] tracking-[0.14em] text-gray-400`}>03 — OUTCOME</div>
                  <p className="mt-3 text-[15px] leading-7 text-gray-700 dark:text-gray-300">{project.outcome}</p>
                </div>
                <div>
                  <div className={`${mono.className} text-[11px] tracking-[0.14em] text-gray-400`}>CHALLENGE</div>
                  <p className="mt-3 text-[13.5px] leading-6 text-gray-500 dark:text-gray-400">{project.challenges ?? '—'}</p>
                </div>
              </section>

              <hr className="my-10 border-gray-100 dark:border-[#1e1e26]" />

              <section>
                <div className={`${mono.className} text-[11px] tracking-[0.14em] text-gray-400`}>04 — ROLE & STACK</div>
                <div className="mt-4 grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="text-xs font-medium text-gray-900 dark:text-white mb-2">Responsibilities</div>
                    <ul className="space-y-1.5">
                      {project.responsibilities.map((r) => (
                        <li key={r} className="text-[13px] leading-6 text-gray-600 dark:text-gray-400 flex gap-2"><span className="text-gray-300 mt-2 h-px w-3 bg-gray-300 dark:bg-[#252530] shrink-0" /> {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900 dark:text-white mb-2">Stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((t) => (
                        <span key={t} className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 text-xs">{t}</span>
                      ))}
                    </div>
                    <div className={`${mono.className} mt-3 text-[11px] text-gray-400`}>{project.duration} · {project.team}</div>
                  </div>
                </div>
              </section>
            </article>

            {/* minimal prev/next */}
            <nav className="mt-12 flex items-center justify-between gap-4 border-t border-gray-100 dark:border-[#1e1e26] pt-6">
              <div className="flex-1 min-w-0">
                {prev ? (
                  <Link href={`/projects/${prev.slug}`} className="group inline-flex flex-col">
                    <span className={`${mono.className} text-[11px] tracking-wide text-gray-400`}>← PREV</span>
                    <span className="text-sm font-medium truncate group-hover:underline underline-offset-4">{prev.projectName}</span>
                    <span className={`${mono.className} text-[11px] text-gray-400`}>{prev.category}</span>
                  </Link>
                ) : <span />}
              </div>
              <Link href="/#projects" className={`${mono.className} hidden sm:inline-flex rounded-full border border-gray-200 dark:border-[#252530] px-4 py-2 text-xs hover:bg-gray-50 dark:hover:bg-[#15151c]`}>All</Link>
              <div className="flex-1 min-w-0 text-right">
                {next ? (
                  <Link href={`/projects/${next.slug}`} className="group inline-flex flex-col items-end">
                    <span className={`${mono.className} text-[11px] tracking-wide text-gray-400`}>NEXT →</span>
                    <span className="text-sm font-medium truncate group-hover:underline underline-offset-4">{next.projectName}</span>
                    <span className={`${mono.className} text-[11px] text-gray-400`}>{next.category}</span>
                  </Link>
                ) : <span />}
              </div>
            </nav>

            <div className="pb-12" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-xs font-medium shadow">Link copied</motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
