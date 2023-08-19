import React from 'react'
import Image from 'next/image'
import busy_programmer from '@/public/Programmer-rafiki.svg'

export default function HeroAnimation() {
    return (
        <Image
            src={busy_programmer}
            alt='Gentleman'
            width={1000}
            height={100}
            className=''
        />
    )
}
