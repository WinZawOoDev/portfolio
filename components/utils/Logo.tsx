'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollLink from './ScrollLink'

export default function Logo() {
    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className='cursor-pointer'
        >
            <ScrollLink to="about">
                <svg width="90" height="40" viewBox="0 0 189 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M94 96.5C89.6667 92.1667 65.2 65.2 0 0H50L146.5 96.5H94Z" fill="url(#paint0_linear_54_25)" />
                    <path d="M143.439 69C140.214 65.9016 122.011 46.6197 73.5 0H110.701L182.5 69H143.439Z" fill="url(#paint1_linear_54_25)" />
                    <path d="M188.181 54C185.637 51.5751 170 3.74466e-05 133 0H162.352H188.181V54Z" fill="url(#paint2_linear_54_25)" />
                    <defs>
                        <linearGradient id="paint0_linear_54_25" x1="97.5" y1="31.5" x2="65" y2="91.5" gradientUnits="userSpaceOnUse">
                            <stop offset="0.0136971" stopColor="#3C3C3C" />
                            <stop offset="1" stopColor="#3C3C3C" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_54_25" x1="154.5" y1="34" x2="128" y2="69" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3C3C3C" />
                            <stop offset="1" stopColor="#3C3C3C" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_54_25" x1="192" y1="17.5" x2="155.5" y2="48" gradientUnits="userSpaceOnUse">
                            <stop offset="0.247185" stopColor="#3C3C3C" />
                            <stop offset="0.909114" stopColor="#3C3C3C" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </ScrollLink>
        </motion.div>
    )
}
