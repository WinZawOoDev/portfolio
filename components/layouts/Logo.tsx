'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import profile from '@/public/images/profile.png'
import ScrollLink from '../utils/ScrollLink'

export default function Logo() {
    return (
        <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            className='cursor-pointer'
        >
            <ScrollLink to="about">
                <Image
                    src={profile}
                    alt='logo'
                    width={200}
                    height={200}
                    className='w-[4.05em] h-[3.8em] rounded-full'
                />
            </ScrollLink>
        </motion.div>

    )
}
