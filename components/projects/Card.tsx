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
}

export default function Card({ imageSource, projectName, href, content, techStack, sourceLink }: Props) {
    return (
        <div className='relative flex flex-col bg-transparent dark:bg-[#15151c] border border-gray-200/0 dark:border-[#252530] h-[26em] w-full md:w-[20em] shadow-none dark:shadow-sm hover:shadow-none dark:hover:shadow-md hover:border-transparent dark:hover:border-[#2a2a36] dark:hover:bg-[#1a1a22] p-0 rounded-xl overflow-hidden transition-all duration-200'>
            <Image
                src={imageSource}
                alt={projectName}
                className='w-full h-44 object-cover'
            />
            <div className='relative p-4 flex-1 flex flex-col'>
                <div className='flex items-start justify-between gap-2 mb-2'>
                    <h4 className={`${interSemibold.className} text-[14px] font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-left leading-tight pr-6`}>{projectName}</h4>
                    <Link
                        href={href}
                        target="_blank"
                        aria-label={`Open ${projectName}`}
                        className='shrink-0 w-7 h-7 inline-flex items-center justify-center rounded-md bg-transparent dark:bg-[#1e1e26] border border-gray-200/50 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors'
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
                            <span key={index} className='px-2 py-1 rounded-full bg-gray-100/70 dark:bg-[#1e1e26] text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-[#2a2a36]'>
                                {tech}
                            </span>
                        ))}
                        {techStack.length > 3 && (
                            <span className='px-2 py-1 text-gray-500 dark:text-gray-500'>+{techStack.length - 3}</span>
                        )}
                    </div>
                    <Link href={sourceLink} target='_blank' aria-label="GitHub source" className='shrink-0 w-8 h-8 inline-flex items-center justify-center rounded-full border border-gray-200/50 dark:border-[#252530] bg-transparent dark:bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 hover:border-transparent transition-colors'>
                        <AiFillGithub size={16} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
