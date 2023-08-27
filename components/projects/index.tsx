import React from 'react'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'

export default function Projects() {
    return (
        <LinkContainer name='projects'>
            <LayoutContainer>
                <div className='text-center h-screen pt-36'>
                    <h1 className=''>My Work</h1>
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}
