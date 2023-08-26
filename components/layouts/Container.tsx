'use client'

import React, { PropsWithChildren } from 'react'
import { Element } from 'react-scroll'

export default function Container({ children, name }: PropsWithChildren<{ name: string }>) {
    return (
        <Element name={name} className='relative w-full'>
            {children}
        </Element>
    )
}
