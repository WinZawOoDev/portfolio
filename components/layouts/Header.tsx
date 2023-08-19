import React from 'react'
import {Inter} from 'next/font/google'
import Image from 'next/image'
import business_man from '@/public/images/business_man.jpg'

const greek  = Inter({subsets: ["vietnamese"]})

export default function Header() {
  return (
    <header className='fixed top-0 w-full z-30'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between py-10'>
          {/* Logo */}
          <div className={greek.className}>
            <Image src={business_man} alt='logo' width={200} height={200} className='w-[2.5em] h-[3.5em] rounded-full' />
          </div>

          {/* Navigation Links */}
          <nav className='leading-3 tracking-tight'>
            <ul className='flex items-center justify-center text-lg leading-tight capitalize'>
              <li className='px-5 cursor-pointer'>about</li>
              <li className='px-5 cursor-pointer'>experiences</li>
              <li className='px-5 cursor-pointer'>projects</li>
              <li className='px-5 cursor-pointer'>contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
