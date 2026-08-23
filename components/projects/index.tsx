import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import ProjectList from './List'
import Heading from './Heading'

export default function Projects() {
    return (
        <LinkContainer name='projects'>
            <LayoutContainer>
                <div className='text-center h-fit py-20 lg:py-28 border-t border-gray-200 dark:border-[#1e1e26]'>
                    <Heading />
                    <ProjectList />
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}
