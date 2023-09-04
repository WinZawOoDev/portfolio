'use client';

import React from 'react'
import Link from 'next/link'
import { Alegreya_Sans, Rubik } from 'next/font/google'
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

const alegreyaSanFont = Alegreya_Sans({ subsets: ["cyrillic"], weight: "400" })
const rubik = Rubik({ subsets: ["latin"], weight: "600" })

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
      className='relative rounded-md w-fit mx-5 lg:mx-0 h-fit bg-[#f5f5f5] hover:bg-[#f8f8ff] cursor-default my-2 p-6'
    >
      <div className='py-2'>

        {/* Position */}
        <div className='flex items-center'>
          <h5 className={`${rubik.className} font-bold text-lg text-gray-800 capitalize`}>{position}</h5>
          <Link href={website} target='_blank' className='group flex items-center'>
            <span className={`ml-2 mr-[0.5em] group-hover:underline underline-offset-2 text-sm italic font-light text-gray-500`}>{company}</span>
            <span className='text-gray-400 transform transition-all delay-75 duration-75 group-hover:scale-110'><BsArrowUpRight /></span>
          </Link>
        </div>

        {/* Join Date  */}
        <div className='font-light text-xs mt-1 my-2 text-gray-900'>
          <span className='tracking-wide'>{date.start}</span>
          <span className='mx-2'>-</span>
          <span className='tracking-wide'>{date.end}</span>
        </div>
      </div>

      <p className={`${alegreyaSanFont.className} py-1 text-lg font-light text-gray-700`}>
        {description}
      </p>

      {/* Techical Stack */}
      <div className='flex flex-wrap gap-1 items-center mt-3'>
        {techStack.map((tech, index) => (
          <span key={`${tech}${index}`} className='rounded-full text-xs tracking-wide text-[#f2f3f4] font-medium p-2 bg-[#36454f] mx-1'>
            {tech}
          </span>))}
      </div>
    </motion.div>
  )
}
