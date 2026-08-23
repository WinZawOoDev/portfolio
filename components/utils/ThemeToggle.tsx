'use client'

import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    const theme = isDark ? 'dark' : 'light'
    const url = new URL(window.location.href)
    url.searchParams.set('theme', theme)
    // remove trailing slash on root to avoid /?theme ( -> ?theme )
    var pathname = url.pathname === '/' ? '' : url.pathname
    history.replaceState(null, '', pathname + '?' + url.searchParams.toString() + url.hash)
  }

  return (
    <motion.button
      whileTap={{ scale: 0.88 }}
      whileHover={{ scale: 1.06, y: -1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.4 }}
      onClick={toggleTheme}
      aria-label='Toggle dark mode'
      className='theme-toggle outline-none group'
    >
      <motion.span
        key="theme-icon"
        initial={{ rotate: -15, scale: 0.9 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <FiSun className='hidden dark:block group-hover:rotate-12 transition-transform duration-300' />
        <FiMoon className='block dark:hidden group-hover:-rotate-12 transition-transform duration-300' />
      </motion.span>
    </motion.button>
  )
}
