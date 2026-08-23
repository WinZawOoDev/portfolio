"use client"

import React from 'react'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import ScrollLink from '../utils/ScrollLink'
import Link from 'next/link'

const headingFont = Inter({ subsets: ["latin"], weight: "800" })

export default function ContentHeading() {

    return (
        <div className='relative w-full h-[10em] lg:h-full'>
            <div className={`absolute bottom-5 lg:bottom-auto inset-x-0 lg:top-1/4 m-auto h-fit w-fit text-center lg:text-left`}>
                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
                    className={`${headingFont.className} text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100`}
                >
                    Working Experiences.
                </motion.h1>
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                    className='block text-base lg:text-lg text-gray-500 dark:text-gray-400 font-light'
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
                        className='hidden lg:inline-flex items-center outline-none rounded-lg bg-[#253529] hover:bg-[#1e2b21] dark:bg-[#2e4436] dark:hover:bg-[#253529] text-sm lg:text-base px-5 py-2.5 my-7 font-medium text-white shadow-sm hover:shadow transition-all cursor-pointer'
                    >
                        Contact me
                    </motion.button>
                </ScrollLink>

                <motion.button
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", bounce: 0.5, duration: 0.4, delay: 0.1 }}
                    className='hidden lg:inline-flex outline-none rounded-lg mx-3 border border-[#253529] dark:border-[#9dbfa8] text-sm lg:text-base px-5 py-2.5 my-7 font-medium text-[#253529] dark:text-[#9dbfa8] hover:bg-[#253529] hover:text-white dark:hover:bg-[#9dbfa8] dark:hover:text-[#0d0d12] transition-colors cursor-pointer'
                >
                    <Link href='/resume.pdf'>
                        My Resume
                    </Link>
                </motion.button>
            </div>
        </div>
    )
}
