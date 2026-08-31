'use client'

import React, { PropsWithChildren } from 'react'
import { Link, LinkProps } from 'react-scroll'

export default function ScrollLink({ children, onClick, ...props }: PropsWithChildren<Pick<LinkProps, "to" | "onSetActive" | "activeClass"> & { onClick?: () => void }>) {
    return (
        <Link
            {...props}
            onClick={onClick}
            spy={true}
            smooth={true}
            hashSpy={true}
            duration={1000}
        >
            {children}
        </Link>
    )
}
