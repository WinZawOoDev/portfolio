'use client'

import React, { useState } from 'react'
import { IBM_Plex_Sans } from 'next/font/google'
import { motion, Variants } from 'framer-motion'
import ScrollLink from '../utils/ScrollLink'

export const navLinks = [
  { id: 1, to: "about", name: "about" },
  { id: 2, to: "experiences", name: "experiences" },
  { id: 3, to: "projects", name: "projects" },
  { id: 4, to: "contact", name: "contact" }
];

const ibmFont = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" })

const container: Variants = {
  hidden: {
    opacity: 0,
    x: 10
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.05,
      delay: 0.02,
      delayChildren: 0.02,
      staggerChildren: 0.09,
      durationChildren: 0.03
    }
  }
};

const item: Variants = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0
  }
}

export default function Navigation() {

  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className='hidden lg:block leading-3 tracking-tight text-gray-700'>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className='flex items-center justify-center text-lg leading-tight capitalize'
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            variants={item}
            className={`${ibmFont.className} px-5 cursor-pointer`}
          >
            <ScrollLink
              to={link.to}
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
            </ScrollLink>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}
