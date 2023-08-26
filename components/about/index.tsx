import React from 'react'
import Container from './Container'
import Introduction from './Introduction'
import HeroAnimation from './HeroAnimation'
import BouncePoint from '../utils/BouncePoint'

export default function About() {
    return (
        <Container>
            <Introduction />
            <HeroAnimation />
            <BouncePoint/>
        </Container>
    )
}