'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AboutMe from './AboutMe'
import SocialLink from './SocialLink'

export default function Intro() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className='px-5 md:px-14'
        >
            <AboutMe />
            <SocialLink />
        </motion.div>
    )
}
