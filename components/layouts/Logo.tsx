'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import business_man from '@/public/images/business_man.jpg'
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
                    src={business_man}
                    alt='logo'
                    width={200}
                    height={200}
                    className='w-[2.5em] h-[3.5em] rounded-full'
                />
            </ScrollLink>
        </motion.div>

    )
}
