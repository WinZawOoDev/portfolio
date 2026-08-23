import React from 'react'
import Navigation from './Navigation'
import Logo from '../utils/Logo'
import MobileMenu from './MobileMenu'
import ThemeToggle from '../utils/ThemeToggle'


export default function Header() {
  return (
    <header className='site-header'>
      <div className='layout-container'>
        <div className='site-header-inner'>
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
