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
                    <div className='grid grid-cols-2 place-items-center h-screen'>
                        <div className='px-5'>
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