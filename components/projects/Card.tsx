import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

const interSemibold = Inter({ subsets: ["latin"], weight: "600" })
const interRegular = Inter({ subsets: ["latin"], weight: "400" })


type Props = {
    imageSource: StaticImageData;
    projectName: string;
    href: string;
    content: string;
    techStack: string[]
    sourceLink: string;
    priority?: boolean;
}

export default function Card({ imageSource, projectName, href, content, techStack, sourceLink, priority = false }: Props) {
    return (
        <div className='project-card'>
            <Image
                src={imageSource}
                alt={projectName}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority}
                className='w-full h-44 object-cover'
            />
            <div className='relative p-4 flex-1 flex flex-col'>
                <div className='flex items-start justify-between gap-2 mb-2'>
                    <h4 className={`${interSemibold.className} text-[14px] font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-left leading-tight pr-6`}>{projectName}</h4>
                    <Link
                        href={href}
                        target="_blank"
                        aria-label={`Open ${projectName}`}
                        className='icon-btn-card'
                    >
                        <RiExternalLinkFill size={14} />
                    </Link>
                </div>
                <p className={`${interRegular.className} text-[13px] leading-relaxed font-normal text-gray-600 dark:text-gray-400 line-clamp-3`}>
                    {content}
                </p>
                <div className='mt-auto pt-4 flex items-center justify-between gap-2'>
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
                    <Link href={sourceLink} target='_blank' aria-label="GitHub source" className='icon-btn-sm !w-8 !h-8'>
                        <AiFillGithub size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
