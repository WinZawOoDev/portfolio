import React from 'react'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

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


export default function ContentDesc({ position, company, date, description, techStack }: contentDescProps) {
  return (
    <div className='relative rounded-md bg-[#f5f5f5] transform transition-all delay-100 duration-150 hover:bg-[#f8f8ff] cursor-default my-2 p-6'>
      <div className='py-2'>

        {/* Position */}
        <div className='flex items-center'>
          <h5 className='font-bold text-lg text-gray-800 capitalize'>{position}</h5>
          <Link href={"#"} className='flex items-center'>
            <span className='ml-2 mr-[0.5em] text-sm italic font-light text-gray-600'>{company}</span>
            <span className='text-gray-400'><FiExternalLink /></span>
          </Link>
        </div>

        {/* Join Date  */}
        <div className='font-light text-xs mt-1 my-2 text-gray-900'>
          <span className='tracking-wide'>{date.start}</span>
          <span className='mx-2'>-</span>
          <span className='tracking-wide'>{date.end}</span>
        </div>
      </div>

      <p className='font-light text-gray-600'>
        {description}
      </p>

      {/* Techical Stack */}
      <div className='flex items-center mt-3'>
        {techStack.map((tech, index) => (
          <span key={`${tech}${index}`} className='rounded-full text-xs tracking-wide text-[#f2f3f4] font-medium p-2 bg-[#36454f] mx-1'>
            {tech}
          </span>))}
      </div>
    </div>
  )
}
