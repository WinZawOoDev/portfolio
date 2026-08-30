import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

const interSemibold = Inter({ subsets: ["latin"], weight: "600" })
const interRegular = Inter({ subsets: ["latin"], weight: "400" })


type Props = {
    slug: string
    imageSource: StaticImageData;
    projectName: string;
    href: string;
    content: string;
    techStack: string[]
    sourceLink: string;
    priority?: boolean;
    view?: 'grid' | 'list';
}

export default function Card({ slug, imageSource, projectName, href, content, techStack, sourceLink, priority = false, view = 'grid' }: Props) {
    const isList = view === 'list'
    return (
        <motion.div layout transition={{ type: "spring", bounce: 0.1, duration: 0.3 }} className={isList ? 'project-card-list' : 'project-card'}>
            <Link href={`/projects/${slug}`} className={isList ? 'contents' : 'block'}>
                <Image
                    src={imageSource}
                    alt={projectName}
                    sizes={isList ? "(max-width: 768px) 100vw, 400px" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                    priority={priority}
                    className={isList ? 'w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-auto md:min-h-[12rem] object-cover shrink-0' : 'w-full h-44 object-cover'}
                />
            </Link>
            <div className={`relative p-4 flex-1 flex flex-col ${isList ? 'justify-center' : ''}`}>
                <div className='flex items-start justify-between gap-2 mb-2'>
                    <Link href={`/projects/${slug}`} className="flex-1 pr-6 group/title">
                        <h4 className={`${interSemibold.className} text-[14px] font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-left leading-tight group-hover/title:text-[#253529] dark:group-hover/title:text-[#9dbfa8] transition-colors`}>{projectName}</h4>
                    </Link>
                    <Link
                        href={href}
                        target="_blank"
                        aria-label={`Open ${projectName} external`}
                        className='icon-btn-card'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <RiExternalLinkFill size={14} />
                    </Link>
                </div>
                <p className={`${interRegular.className} text-[13px] leading-relaxed font-normal text-gray-600 dark:text-gray-400 ${isList ? 'line-clamp-2' : 'line-clamp-3'}`}>
                    {content}
                </p>
                <div className='mt-auto pt-3 flex items-center justify-between gap-2'>
                    <div className={`flex flex-wrap gap-1.5 ${interRegular.className} text-[11px] font-medium text-left flex-1`}>
                        {techStack.slice(0, 3).map((tech, index) => (
                            <span key={index} className='badge-sm'>
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 3 && (
                            <span className='px-2 py-1 text-gray-500 dark:text-gray-500'>+{techStack.length - 3}</span>
                        )}
                    </div>
                    <Link href={sourceLink} target='_blank' aria-label="GitHub source" className='icon-btn-sm !w-8 !h-8' onClick={(e) => e.stopPropagation()}>
                        <AiFillGithub size={16} />
                    </Link>
                </div>
                <Link href={`/projects/${slug}`} className={`${interRegular.className} mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#253529] dark:text-[#9dbfa8] hover:underline underline-offset-4`}>
                    View details →
                </Link>
            </div>
        </motion.div>
    )
}
