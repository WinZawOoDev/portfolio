"use client"

import React from 'react'
import { Libre_Franklin } from 'next/font/google'
import { motion } from 'framer-motion'
import ScrollLink from '../utils/ScrollLink'

const libreFranklinFont = Libre_Franklin({ subsets: ["latin"], weight: "800" })

export default function ContentHeading() {

    return (
        <div className='relative w-full h-[10em] lg:h-full'>
            <div className={`absolute bottom-5 lg:bottom-auto inset-x-0 lg:top-1/4 m-auto h-fit w-fit text-center lg:text-left`}>
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
                    className={`${libreFranklinFont.className} text-3xl lg:text-4xl font-bold text-gray-700`}
                >
                    Working Experiences.
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                    className='block text-base lg:text-lg text-gray-600'
                >
                    as a developer.
                </motion.span>
                <ScrollLink
                    to='contact'
                >
                    <motion.button
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 0.7, delay: 0.2 }}
                        className='hidden lg:inline-block outline-none rounded-md ring-2 lg:ring-4 ring-gray-600 bg-[#253529] text-sm lg:text-base px-3 py-2  lg:px-5 lg:py-2 my-7 font-semibold text-white'
                    >
                        Contact me
                    </motion.button>
                </ScrollLink>

                <motion.button
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.4, delay: 0.1 }}
                    className='hidden lg:inline-block outline-none rounded-md mx-5 ring-2 lg:ring-4 ring-[#253529] text-sm lg:text-base px-3 py-2 lg:px-5 lg:py-2 my-7 font-semibold text-[#253529]'
                >
                    My Resume
                </motion.button>
            </div>
        </div>
    )
}
