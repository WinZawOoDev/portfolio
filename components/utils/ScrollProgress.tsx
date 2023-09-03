'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div className='fixed top-0 inset-x-0 bg-[#253529] h-1  md:h-[0.15em] rounded-lg z-50 transform origin-top-left' style={{ scaleX }} />
    )
}
