import React from 'react'
import {Orbitron} from 'next/font/google'
import BugFixingIllustration from './BugFixingIllustration'

const orbitronFont = Orbitron({subsets:["latin"], weight:"800"})

export default function UnderProcessing() {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 place-content-center md:-mt-10 lg:-mt-5 mx-10 md:mx-auto  h-[20em] w-fit bg-[#f8f4ff] shadow-2xl rounded-3xl'>
            <div className='flex items-center px-4'>
                <h1 className={`${orbitronFont.className} text-xl lg:text-2xl text-gray-500`}>Currently processing for my showcase project 
                    <span className='mx-5 font-extrabold text-3xl'>!</span>
                </h1>
            </div>
            <div className='hidden lg:flex items-center justify-end pl-10 w-full max-w-lg'>
                <BugFixingIllustration />
            </div>
        </div>
    )
}
