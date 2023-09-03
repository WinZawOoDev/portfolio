'use client'

import React, { PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-scroll'

export default function ScrollLink({ children, ...props }: PropsWithChildren<Pick<LinkProps, "to" | "onSetActive" | "activeClass">>) {
    return (
        <Link
            {...props}
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1300}
        >
            {children}
        </Link>
    )
}
