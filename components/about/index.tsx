'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import LinkContainer from '../layouts/LinkContainer'
import BouncePoint from '../utils/BouncePoint'
import IntroProvider from './IntroProvider'
import LayoutContainer from '../layouts/LayoutContainer'
import Intro from './Intro'

const HeroIllustration = dynamic(() => import('./HeroIllustration'), {
  ssr: false,
  loading: () => <div className="w-full max-w-[30em] h-64 lg:h-[400px] animate-pulse bg-gray-100 dark:bg-[#1a1a22] rounded-2xl" />
})

export default function About() {
    return (
        <LinkContainer name='about'>
            <LayoutContainer>
                <IntroProvider>
                    <div className='lg:grid lg:grid-cols-2 lg:place-items-center gap-8 lg:gap-12 min-h-[calc(100vh-80px)] py-24 lg:py-28'>
                        <Intro />
                        <div className='hidden lg:flex items-center justify-center w-full h-fit bg-transparent dark:bg-[#f4f2f9] border border-transparent rounded-none dark:rounded-3xl shadow-none dark:shadow-2xl p-0 dark:p-4'>
                            <HeroIllustration />
                        </div>
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}