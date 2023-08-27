import React, { Fragment } from 'react'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import ProjectList from './List'
import Heading from './Heading'

export default function Projects() {
    return (
        <LinkContainer name='projects'>
            <LayoutContainer>
                <div className='text-center h-fit pt-36'>
                    <div className='absolute top-1/2 bg-[#080808] inset-0 m-auto -z-10' />
                    <Heading />
                    <ProjectList />
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}
