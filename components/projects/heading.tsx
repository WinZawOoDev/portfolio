"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { interBold } from '@/lib/fonts'

export default function Heading() {
    return (
        <div className='flex-1'>
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{duration: 0.7, delay: 0.06, ease:"easeOut"}}
                className={`${interBold.className} text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100`}
            >
                Projects
            </motion.h1>
            <motion.span
                initial={{opacity: 0, x:-30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.8, delay: 0.07, ease:"easeOut"}}
                className='block mt-1 text-sm lg:text-base text-gray-500 dark:text-gray-400 font-light'
            >
                selected work — showcase only
            </motion.span>
        </div>
    )
}
