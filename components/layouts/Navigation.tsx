'use client'

import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navigation() {
  return (
    <nav className='leading-3 tracking-tight text-gray-700'>
    <ul className='flex items-center justify-center text-lg leading-tight capitalize'>
      <li className='px-5 cursor-pointer font-bold'>
        <ScrollLink to='about'>
          about
        </ScrollLink>
      </li>
      <li className='px-5 cursor-pointer'>
        <ScrollLink to='experiences'>
          experiences
        </ScrollLink>
      </li>
      <li className='px-5 cursor-pointer'>
        <ScrollLink to='projects'>
          projects
        </ScrollLink>
      </li>
      <li className='px-5 cursor-pointer'>
        <ScrollLink to='contact'>
          contact
        </ScrollLink>
      </li>
    </ul>
  </nav>
  )
}
