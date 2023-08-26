import React from 'react'
import Container from '../layouts/Container'
import AboutMe from './AboutMe'
import SocialLink from './SocialLink'
import HeroAnimation from './HeroAnimation'
import BouncePoint from '../utils/BouncePoint'
import IntroProvider from './IntroProvider'

export default function About() {
    return (
        <Container name='about'>
            <IntroProvider>
                <div className='max-w-7xl mx-auto grid grid-cols-2 place-items-center h-screen'>
                    <div className='px-5'>
                        <AboutMe />
                        <SocialLink />
                    </div>
                    <HeroAnimation />
                    <BouncePoint />
                </div>
            </IntroProvider>
        </Container>
    )
}