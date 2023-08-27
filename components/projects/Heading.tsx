"use client"

import React from 'react'
import { Work_Sans } from 'next/font/google'
import { motion } from 'framer-motion'

const workSansFont = Work_Sans({ subsets: ["latin"], weight: "700" })

export default function Heading() {
    return (
        <div className='mb-10'>
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{duration: 0.7, delay: 0.06, ease:"easeOut"}}
                className={`${workSansFont.className} text-4xl text-gray-800`}
            >
                Projects
            </motion.h1>
            <motion.span
                initial={{opacity: 0, x:-30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0.07, ease:"easeOut"}}
                className='text-gray-400'
            >
                showcase only
            </motion.span>
        </div>
    )
}
