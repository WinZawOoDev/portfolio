import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import AboutMe from './AboutMe'
import SocialLink from './SocialLink'
import HeroAnimation from './HeroAnimation'
import BouncePoint from '../utils/BouncePoint'
import IntroProvider from './IntroProvider'
import LayoutContainer from '../layouts/LayoutContainer'

export default function About() {
    return (
        <LinkContainer name='about'>
            <LayoutContainer>
                <IntroProvider>
                    <div className='lg:grid lg:grid-cols-2 lg:place-items-center h-fit lg:h-screen'>
                        <div className='px-14 lg:px-5'>
                            <AboutMe />
                            <SocialLink />
                        </div>
                        <HeroAnimation />
                        <BouncePoint />
                    </div>
                </IntroProvider>
            </LayoutContainer>
        </LinkContainer>
    )
}