import React from 'react'
import Navigation from './Navigation'
import Logo from '../utils/Logo'
import MobileMenu from './MobileMenu'
import ThemeToggle from '../utils/ThemeToggle'


export default function Header() {
  return (
    <header className='fixed top-0 w-full z-30 bg-[#f8f8ff]/90 dark:bg-[#0d0d12]/90 backdrop-blur-md border-b border-transparent dark:border-[#1a1a22] transition-colors duration-300'>
      <div className='max-w-7xl mx-4 md:mx-10 lg:mx-auto'>
        <div className='relative flex items-center justify-between py-4 md:py-6'>
          <Logo />
          <Navigation />
          <div className='flex items-center gap-4 md:gap-6 pr-8 lg:pr-0'>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
