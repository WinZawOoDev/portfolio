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
                    <div className='section-hero'>
                        <Intro />
                        <div className='hero-illustration-wrap'>
                            <HeroIllustration />
                        </div>
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}