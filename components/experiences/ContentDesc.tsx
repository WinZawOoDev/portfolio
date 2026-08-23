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

export default function ContentDesc({ position, company, website, date, description, techStack: _techStack }: contentDescProps) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
      className='experience-card'
    >
      <div className='experience-meta'>

        {/* Position */}
        <div className='experience-header'>
          <h5 className={`${interSemibold.className} experience-position`}>{position}</h5>
          <Link href={website} target='_blank' className='group flex items-center'>
            <span className='experience-company'>{company}</span>
            <span className='experience-company-icon'><BsArrowUpRight size={11} /></span>
          </Link>
        </div>

        {/* Join Date  */}
        <div className={`${interRegular.className} experience-date`}>
          <span className='tracking-wide'>{date.start}</span>
          <span className='mx-1.5 text-gray-300 dark:text-gray-600'>—</span>
          <span className='tracking-wide'>{date.end}</span>
        </div>
      </div>

      <p className={`${interRegular.className} experience-desc`}>
        {description}
      </p>
    </motion.div>
  )
}
