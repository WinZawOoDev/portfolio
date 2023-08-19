'use client'

import React from 'react'
import { Element } from 'react-scroll'

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <Element name='about' className='relative w-full'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 place-items-center h-screen'>
                {children}
            </div>
        </Element>
    )
}
