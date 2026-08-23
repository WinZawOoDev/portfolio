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
                    <div className='lg:grid lg:grid-cols-2 lg:place-items-center h-fit lg:h-screen'>
                        <Intro />
                        <div className='hidden lg:flex items-center justify-center dark:bg-[#f4f2f9] dark:rounded-3xl dark:shadow-2xl dark:p-4 dark:w-fit dark:h-fit'>
                            <HeroIllustration />
                        </div>
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}