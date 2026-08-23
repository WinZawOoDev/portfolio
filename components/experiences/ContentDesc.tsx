'use client';

import React from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

export type contentDescProps = {
  position: string;
  company: string;
  website: string;
  date: {
    start: string;
    end: string;
  }
  description: string;
  techStack: string[];
}

const interSemibold = Inter({ subsets: ["latin"], weight: "600" })
const interRegular = Inter({ subsets: ["latin"], weight: "400" })

export default function ContentDesc({ position, company, website, date, description, techStack }: contentDescProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.4 }}
      className='experience-card'
    >
      <div className='py-2'>

        {/* Position */}
        <div className='flex flex-wrap items-center gap-2'>
          <h5 className={`${interSemibold.className} font-semibold text-[15px] lg:text-base text-gray-900 dark:text-gray-100 tracking-tight capitalize`}>{position}</h5>
          <Link href={website} target='_blank' className='group flex items-center'>
            <span className={`group-hover:underline underline-offset-2 text-sm font-normal text-gray-500 dark:text-gray-400`}>{company}</span>
            <span className='ml-1 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors'><BsArrowUpRight size={12} /></span>
          </Link>
        </div>

        {/* Join Date  */}
        <div className={`${interRegular.className} font-normal text-xs mt-1.5 my-2 text-gray-500 dark:text-gray-400`}>
          <span className='tracking-wide'>{date.start}</span>
          <span className='mx-2 text-gray-300 dark:text-gray-600'>—</span>
          <span className='tracking-wide'>{date.end}</span>
        </div>
      </div>

      <p className={`${interRegular.className} py-1 text-[14px] lg:text-[15px] leading-relaxed font-normal text-gray-600 dark:text-gray-300`}>
        {description}
      </p>

      {/* Tech Stack */}
      <div className='flex flex-wrap gap-1.5 items-center mt-4'>
        {techStack.map((tech, index) => (
          <span key={`${tech}${index}`} className={`${interRegular.className} badge`}>
            {tech}
          </span>))}
      </div>
    </motion.div>
  )
}
