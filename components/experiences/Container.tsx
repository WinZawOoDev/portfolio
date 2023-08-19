'use client'

import React from 'react'
import { Element } from 'react-scroll'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <Element name='experiences' className='relative w-full h-auto overflow-hidden'>
            {children}
        </Element>
    )
}
