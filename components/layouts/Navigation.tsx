'use client'

import React from 'react'
import { Link as ScrollLink } from 'react-scroll'


const navLinks = [
  { id: 1, to: "about", name: "about" },
  { id: 2, to: "experiences", name: "experiences" },
  { id: 3, to: "projects", name: "projects" },
  { id: 4, to: "contact", name: "contact" }
];

export default function Navigation() {
  return (
    <nav className='leading-3 tracking-tight text-gray-700'>
      <ul className='flex items-center justify-center text-lg leading-tight capitalize'>
        {navLinks.map((link) => (
          <li key={link.id} className='px-5 cursor-pointer'>
            <ScrollLink
              to={link.to}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              activeClass='font-bold'
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
