import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import ProjectList from './List'
import Heading from './Heading'

export default function Projects() {
    return (
        <LinkContainer name='projects'>
            <LayoutContainer>
                <div className='section text-center h-fit'>
                    <Heading />
                    <ProjectList />
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}
