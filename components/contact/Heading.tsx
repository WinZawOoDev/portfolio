'use client';

import React from 'react'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const headingFont = Inter({ subsets: ["latin"], weight: "800" })

export default function Heading() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
            <h1 className={`${headingFont.className} text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100`}>Contact</h1>
            <span className='block mt-1 text-sm lg:text-base text-gray-500 dark:text-gray-400 font-light'>Get in touch — I will reply soon</span>
        </motion.div>
    )
}
