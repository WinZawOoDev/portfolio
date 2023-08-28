'use client';

import React from 'react'
import {motion} from 'framer-motion'

export default function Heading() {
    return (
        <motion.div 
            initial={{opacity: 0, translateX: -50}}
            whileInView={{opacity: 1, translateX: 0}}
            transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}
        >
            <h1 className='text-xl text-gray-300'>Contact</h1>
            <span className='text-gray-400 text-sm font-light'>Get in touch with me!</span>
        </motion.div>
    )
}
