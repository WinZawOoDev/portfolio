import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import HeroIllustration from './HeroIllustration'
import BouncePoint from '../utils/BouncePoint'
import IntroProvider from './IntroProvider'
import LayoutContainer from '../layouts/LayoutContainer'
import Intro from './Intro'

export default function About() {
    return (
        <LinkContainer name='about'>
            <LayoutContainer>
                <IntroProvider>
                    <div className='lg:grid lg:grid-cols-2 lg:place-items-center gap-8 lg:gap-12 min-h-[calc(100vh-80px)] py-24 lg:py-28'>
                        <Intro />
                        <div className='hidden lg:flex items-center justify-center w-full h-fit bg-white dark:bg-[#f4f2f9] rounded-3xl shadow-sm border border-gray-200 dark:border-transparent p-6'>
                            <HeroIllustration />
                        </div>
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}