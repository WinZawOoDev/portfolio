'use client'

import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    const theme = isDark ? 'dark' : 'light'
    try { localStorage.setItem('theme', theme) } catch {}
    const params = new URLSearchParams(window.location.search)
    params.set('theme', theme)
    window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`)
  }

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={toggleTheme}
      aria-label='Toggle dark mode'
      className='text-gray-600 dark:text-gray-300 text-xl lg:text-2xl cursor-pointer outline-none'
    >
      <FiSun className='hidden dark:block' />
      <FiMoon className='block dark:hidden' />
    </motion.button>
  )
}
