'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import LinkContainer from '../layouts/link-container'
import BouncePoint from '../utils/bounce-point'
import IntroProvider from './intro-provider'
import LayoutContainer from '../layouts/layout-container'
import Intro from './intro'

const HeroIllustration = dynamic(() => import('./hero-illustration'), {
  ssr: false,
  loading: () => <div className="w-full max-w-[30em] h-64 lg:h-[400px] animate-pulse bg-gray-100 dark:bg-[#1a1a22] rounded-2xl" />
})

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false)
  React.useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setIsDesktop(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

export default function About() {
    const isDesktop = useIsDesktop()
    return (
        <LinkContainer name='about'>
            <LayoutContainer>
                <IntroProvider>
                    <div className='section-hero'>
                        <Intro />
                        {isDesktop && (
                            <div className='hero-illustration-wrap'>
                                <HeroIllustration />
                            </div>
                        )}
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}