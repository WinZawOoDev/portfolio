'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Instrument_Serif } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { FiArrowLeft, FiArrowRight, FiCalendar, FiUsers, FiExternalLink, FiHash, FiCheck, FiLink2, FiCheckCircle } from 'react-icons/fi'
import type { Project } from './data'

const inter = Inter({ subsets: ['latin'] })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400' })
const headingFont = Inter({ subsets: ['latin'], weight: '800' })

type Props = { project: Project; prev: Project | null; next: Project | null; idx: number; total: number }

export default function DetailView({ project, prev, next, idx, total }: Props) {
  const year = project.duration.match(/\d{4}/)?.[0] ?? '—'
  const [copied, setCopied] = useState(false)
  const handleCopy = useCallback(async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      // fallback
      const el = document.createElement('textarea')
      el.value = url
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [])
  return (
    <div className={`${inter.className} relative`}>
      {/* editorial top rule */}
      <div className="pt-16">
        <div className="layout-container">
          {/* breadcrumb minimal */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="flex items-center justify-between py-6 border-b border-gray-200 dark:border-[#1e1e26]">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-[13px] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiArrowLeft size={14} /> <span className="hidden sm:inline">All projects</span><span className="sm:hidden">Projects</span>
            </Link>
            <span className="text-[11px] tracking-[0.18em] font-medium text-gray-400 dark:text-gray-500">
              {String(idx + 1).padStart(2, '0')} — {String(total).padStart(2, '0')} / {project.category.toUpperCase()}
            </span>
          </motion.div>

          {/* header - editorial, centered, huge serif */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="mx-auto max-w-[880px] text-center pt-10 lg:pt-14 pb-8">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-semibold text-[#253529] dark:text-[#9dbfa8]">
              <span className="h-px w-6 bg-[#253529]/30 dark:bg-[#9dbfa8]/30" />
              {project.category} • {year}
              <span className="h-px w-6 bg-[#253529]/30 dark:bg-[#9dbfa8]/30" />
            </div>

            <h1 className={`${serif.className} mt-4 text-[34px] sm:text-[44px] lg:text-[54px] leading-[0.95] tracking-[-0.03em] font-normal text-gray-900 dark:text-white`}>
              {project.projectName}
            </h1>

            <p className={`${headingFont.className} mt-3 text-[11px] tracking-[0.16em] font-semibold text-gray-400 dark:text-gray-500 uppercase`}>
              {project.role} — {project.team}
            </p>

            {/* lead */}
            <p className="mx-auto mt-6 max-w-[680px] text-[17px] sm:text-[18px] leading-8 text-gray-600 dark:text-gray-300 font-light">
              {project.overview}
            </p>

            {/* meta bar - single line, elegant */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-[#1e1e26] py-4">
              <span className="inline-flex items-center gap-1.5"><FiCalendar size={12} /> {project.duration}</span>
              <span className="h-3 w-px bg-gray-200 dark:bg-[#252530]" />
              <span className="inline-flex items-center gap-1.5"><FiUsers size={12} /> {project.team}</span>
              <span className="h-3 w-px bg-gray-200 dark:bg-[#252530]" />
              <span className="inline-flex items-center gap-1.5"><FiHash size={12} /> {project.techStack.join(' • ')}</span>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              {project.href !== '#' && (
                <Link href={project.href} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-gray-900 hover:opacity-90 transition-opacity">
                  Visit live <FiExternalLink size={14} />
                </Link>
              )}
              <Link href={project.sourceLink} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-[#252530] bg-white dark:bg-[#15151c] px-6 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#1e1e26] transition-colors">
                <AiFillGithub size={16} /> Source
              </Link>
              <button onClick={handleCopy} className={`hidden sm:inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm transition-colors ${copied ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white' : 'border-gray-200 dark:border-[#252530] hover:bg-gray-50 dark:hover:bg-[#15151c]'}`} aria-label="Copy link">
                {copied ? <><FiCheckCircle size={14} /> Copied!</> : <><FiLink2 size={14} /> Copy link</>}
              </button>
            </div>
          </motion.div>

          {/* hero image - full bleed, editorial */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto max-w-[1100px]">
            <div className="relative overflow-hidden rounded-[28px] border border-gray-200/60 dark:border-[#252530] bg-[#f3f3f7] dark:bg-[#15151c] shadow-[0_24px_64px_rgba(0,0,0,0.08)] dark:shadow-none">
              <Image src={project.imageSource} alt={project.projectName} priority sizes="(max-width: 1100px) 100vw, 1100px" className="w-full aspect-[16/9] sm:aspect-[18/9] object-cover" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-black/[0.04] dark:ring-white/[0.04] rounded-[28px]" />
            </div>
            <div className="mx-auto mt-3 flex max-w-[1100px] items-center justify-between px-1 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">
              <span>Fig. {String(idx + 1).padStart(2, '0')} — {project.projectName} • {project.category}</span>
              <span className="hidden sm:inline">{project.techStack.slice(0, 3).join('  /  ')}</span>
            </div>
          </motion.div>

          {/* body: left TOC + center prose + right meta - editorial grid */}
          <div className="mx-auto max-w-[1100px] mt-10 lg:mt-14 grid lg:grid-cols-[180px_1fr_220px] gap-8 lg:gap-10 items-start">
            {/* LEFT TOC - desktop */}
            <aside className="hidden lg:block sticky top-28 h-fit">
              <div className="text-[11px] tracking-[0.16em] font-semibold text-gray-400 dark:text-gray-500">CONTENTS</div>
              <nav className="mt-3 grid gap-2 text-[13px] leading-6">
                {[
                  { id: 'narrative', label: 'Narrative' },
                  { id: 'features', label: 'What I built' },
                  { id: 'impact', label: 'Impact' },
                  { id: 'stack', label: 'Stack & role' },
                ].map((l) => (
                  <a key={l.id} href={`#${l.id}`} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex gap-2">
                    <span className="text-gray-300 dark:text-gray-600">—</span> {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-[#1e1e26] text-xs leading-6 text-gray-500 dark:text-gray-400">
                <div>Next: {next ? next.projectName : '—'}</div>
                {next && (
                  <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-1 font-medium text-gray-900 dark:text-white hover:underline underline-offset-4">
                    Continue <FiArrowRight size={12} />
                  </Link>
                )}
              </div>
            </aside>

            {/* CENTER PROSE */}
            <div className="min-w-0">
              {/* mobile TOC */}
              <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {['narrative', 'features', 'impact', 'stack'].map((id) => (
                  <a key={id} href={`#${id}`} className="shrink-0 rounded-full border border-gray-200 dark:border-[#252530] bg-white dark:bg-[#15151c] px-3.5 py-1.5 text-xs capitalize">
                    {id}
                  </a>
                ))}
              </div>

              <section id="narrative" className="prose prose-gray dark:prose-invert max-w-none">
                <h2 className={`${serif.className} text-[26px] leading-none tracking-tight text-gray-900 dark:text-white`}>Narrative</h2>
                <div className="mt-1 h-px w-12 bg-gray-200 dark:bg-[#252530]" />
                <p className="mt-5 text-[15.5px] leading-8 text-gray-700 dark:text-gray-300">{project.overview}</p>
                <p className="mt-4 text-[14px] leading-7 text-gray-500 dark:text-gray-400 italic border-l-2 border-gray-200 dark:border-[#252530] pl-4">“{project.content}”</p>

                {project.challenges && (
                  <div className="mt-8 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 p-5">
                    <div className="text-[11px] tracking-[0.14em] font-semibold text-amber-800 dark:text-amber-200">CHALLENGE</div>
                    <p className="mt-2 text-[14px] leading-7 text-amber-900/80 dark:text-amber-100/80">{project.challenges}</p>
                  </div>
                )}
              </section>

              <section id="features" className="mt-12">
                <h2 className={`${serif.className} text-[26px] leading-none tracking-tight text-gray-900 dark:text-white`}>What I built</h2>
                <div className="mt-1 h-px w-12 bg-gray-200 dark:bg-[#252530]" />
                <div className="mt-6 relative">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200 dark:bg-[#252530] hidden sm:block" />
                  <ul className="grid gap-4">
                    {project.features.map((f, i) => (
                      <li key={f} className="relative flex gap-4">
                        <span className="hidden sm:inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-bold">{i + 1}</span>
                        <span className="sm:hidden mt-1 h-2 w-2 rounded-full bg-gray-900 dark:bg-white shrink-0" />
                        <p className="text-[14.5px] leading-7 text-gray-700 dark:text-gray-300 pt-0.5">{f}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section id="impact" className="mt-12">
                <h2 className={`${serif.className} text-[26px] leading-none tracking-tight text-gray-900 dark:text-white`}>Impact</h2>
                <div className="mt-1 h-px w-12 bg-gray-200 dark:bg-[#252530]" />
                <div className="mt-6 rounded-2xl bg-[#253529] dark:bg-[#1e1e26] text-white dark:text-gray-100 p-6 lg:p-7">
                  <div className="text-[11px] tracking-[0.16em] font-semibold text-white/60">OUTCOME</div>
                  <p className="mt-2 text-[16px] leading-8 font-light text-white/90">{project.outcome}</p>
                </div>
              </section>

              <section id="stack" className="mt-12">
                <h2 className={`${serif.className} text-[26px] leading-none tracking-tight text-gray-900 dark:text-white`}>Stack & role</h2>
                <div className="mt-1 h-px w-12 bg-gray-200 dark:bg-[#252530]" />
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-gray-200 dark:border-[#252530] bg-white dark:bg-[#15151c] p-5">
                    <div className="text-[11px] tracking-wide font-semibold text-gray-500 dark:text-gray-400">MY ROLE</div>
                    <ul className="mt-3 grid gap-2">
                      {project.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2 text-[13.5px] leading-6 text-gray-700 dark:text-gray-300">
                          <FiCheck size={14} className="mt-1 text-[#253529] dark:text-[#9dbfa8] shrink-0" /> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-gray-200 dark:border-[#252530] bg-white dark:bg-[#15151c] p-5">
                    <div className="text-[11px] tracking-wide font-semibold text-gray-500 dark:text-gray-400">TECH</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((t) => (
                        <span key={t} className="rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1.5 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                      {project.duration} • {project.team}
                    </div>
                  </div>
                </div>
              </section>

              {/* bottom nav */}
              <div className="mt-14 flex items-center justify-between gap-4 border-t border-gray-200 dark:border-[#1e1e26] pt-6">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  <FiArrowLeft size={14} /> All projects
                </Link>
                <div className="flex gap-2">
                  {prev && (
                    <Link href={`/projects/${prev.slug}`} className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-[#252530] px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-[#15151c]">
                      <FiArrowLeft size={14} /> {prev.category}
                    </Link>
                  )}
                  {next && (
                    <Link href={`/projects/${next.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2 text-sm font-medium">
                      Next <FiArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT - related */}
            <aside className="hidden lg:block sticky top-28 h-fit space-y-4">
              <div className="rounded-2xl border border-gray-200 dark:border-[#252530] overflow-hidden bg-white dark:bg-[#15151c]">
                <div className="p-4">
                  <div className="text-[11px] tracking-[0.14em] font-semibold text-gray-500 dark:text-gray-400">UP NEXT</div>
                  {next ? (
                    <Link href={`/projects/${next.slug}`} className="group mt-3 block">
                      <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-[#252530]">
                        <Image src={next.imageSource} alt={next.projectName} className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                      </div>
                      <div className="mt-3 text-[13px] font-semibold leading-tight text-gray-900 dark:text-white group-hover:text-[#253529] dark:group-hover:text-[#9dbfa8]">{next.projectName}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{next.category} • {next.techStack.slice(0, 2).join(' • ')}</div>
                    </Link>
                  ) : (
                    <div className="mt-3 text-sm text-gray-500">You’ve reached the end.</div>
                  )}
                </div>
                {prev && (
                  <Link href={`/projects/${prev.slug}`} className="flex items-center justify-between border-t border-gray-200 dark:border-[#252530] px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-[#1e1e26] transition-colors">
                    <span className="text-gray-600 dark:text-gray-300 truncate pr-3">{prev.projectName}</span>
                    <FiArrowLeft size={14} className="shrink-0 text-gray-400" />
                  </Link>
                )}
              </div>

              <div className="rounded-2xl bg-gray-50 dark:bg-[#15151c] border border-gray-200 dark:border-[#252530] p-4">
                <div className="text-sm font-medium text-gray-900 dark:text-white">Let’s talk</div>
                <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-400">Available for freelance and full-time. I can walk you through this build.</p>
                <Link href="/#contact" className="mt-3 inline-flex w-full justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium">Contact</Link>
              </div>
            </aside>
          </div>

          {/* mobile related */}
          <div className="lg:hidden mt-10 grid sm:grid-cols-2 gap-4">
            {prev && (
              <Link href={`/projects/${prev.slug}`} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-[#252530] p-3 bg-white dark:bg-[#15151c]">
                <Image src={prev.imageSource} alt={prev.projectName} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <div className="text-xs text-gray-500">Previous</div>
                  <div className="text-sm font-medium line-clamp-2">{prev.projectName}</div>
                </div>
              </Link>
            )}
            {next && (
              <Link href={`/projects/${next.slug}`} className="flex gap-3 rounded-2xl border border-gray-200 dark:border-[#252530] p-3 bg-white dark:bg-[#15151c]">
                <Image src={next.imageSource} alt={next.projectName} className="w-16 h-16 rounded-xl object-cover" />
                <div>
                  <div className="text-xs text-gray-500">Next</div>
                  <div className="text-sm font-medium line-clamp-2">{next.projectName}</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* toast */}
      <AnimatePresence>
        {copied && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }} className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-5 py-2.5 text-sm font-medium shadow-lg flex items-center gap-2">
            <FiCheckCircle size={14} /> Link copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
