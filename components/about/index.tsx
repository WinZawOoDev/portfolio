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
                        <HeroIllustration />
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}