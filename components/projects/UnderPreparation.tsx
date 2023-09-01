'use client';

import React from 'react'
import { Orbitron } from 'next/font/google'
import { motion } from 'framer-motion'
import UnderConsruction from './UnderConstruction'

const orbitronFont = Orbitron({ subsets: ["latin"], weight: "800" })

export default function UnderProcessing() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.4,
                delay: 0.05,
            }}
            className='grid grid-cols-1 lg:grid-cols-2 place-content-center md:-mt-10 lg:-mt-5 mx-5 md:mx-auto overflow-y-hidden h-[20em] w-fit bg-[#f8f4ff] shadow-2xl rounded-3xl'
        >
            <div className='flex items-center px-4'>
                <h1 className={`${orbitronFont.className} text-xl lg:text-2xl text-gray-500`}>
                    Currently preparing for my showcase projects
                    <span className='mx-2 font-extrabold text-3xl'>!</span>
                </h1>
            </div>
            <div className='hidden lg:flex items-center justify-end pl-10 w-full max-w-lg'>
                <UnderConsruction />
            </div>
        </motion.div>
    )
}
