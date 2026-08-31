import React from 'react'
import Navigation from './navigation'
import Logo from '../utils/logo'
import MobileMenu from './mobile-menu'
import ThemeToggle from '../utils/theme-toggle'


export default function Header() {
  return (
    <header className='site-header'>
      <div className='layout-container'>
        <div className='site-header-inner'>
          <Logo />
          <Navigation />
          <div className='flex items-center gap-4 md:gap-6 pr-8 lg:pr-0'>
            <div className='hidden lg:flex'>
              <ThemeToggle />
            </div>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
