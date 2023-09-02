import React from 'react'
import Navigation from './Navigation'
import Logo from '../utils/Logo'
import MobileMenu from './MobileMenu'


export default function Header() {
  return (
    <header className='fixed top-0 w-full z-30 bg-[rgb(248,248,255)]'>
      <div className='max-w-7xl mx-5 md:mx-10 lg:mx-auto'>
        <div className='relative flex items-center justify-between pt-6 pb-3 md:pt-10 md:pb-5'>
          <Logo />
          <Navigation />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
