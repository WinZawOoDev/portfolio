import React, { Fragment } from 'react'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import ProjectList from './List'
import Heading from './Heading'
import UnderPreParation from './UnderPreparation'

export default function Projects() {
    return (
        <LinkContainer name='projects'>
            <LayoutContainer>
                <div className='text-center h-fit pt-10 lg:pt-36'>
                    <div className='absolute top-80 md:top-1/3 lg:top-1/2 bg-[#080808] inset-0 m-auto -z-10' />
                    <Heading />
                    {/* <ProjectList /> */}
                    <UnderPreParation />
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}
