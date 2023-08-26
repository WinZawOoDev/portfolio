'use client'

import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Libre_Franklin } from 'next/font/google'
import { motion, AnimateSharedLayout } from 'framer-motion'

const navLinks = [
  { id: 1, to: "about", name: "about" },
  { id: 2, to: "experiences", name: "experiences" },
  { id: 3, to: "projects", name: "projects" },
  { id: 4, to: "contact", name: "contact" }
];

const libreFranklinFont = Libre_Franklin({ subsets: ["latin-ext"], weight: "400" })


export default function Navigation() {

  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className='leading-3 tracking-tight text-gray-700'>
      <ul className='flex items-center justify-center text-lg leading-tight capitalize'>
        {navLinks.map((link) => (
          <li key={link.id} className={`${libreFranklinFont.className} px-5 cursor-pointer`}>
            <Link
              to={link.to}
              spy={true}
              smooth={true}
              hashSpy={true}
              duration={1000}
              activeClass='relative'
              onSetActive={(currentLink) => {
                setActiveLink(currentLink);
              }}
            >
              {link.name}
              {activeLink === link.to &&
                (<motion.div
                  className='absolute -bottom-2 inset-x-0 h-[0.11em] rounded-2xl bg-[#343434]'
                  layoutId='underline'
                />)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
