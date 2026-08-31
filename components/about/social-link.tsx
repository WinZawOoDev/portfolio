"use client";

import React from 'react'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { useIntroContext } from './intro-provider'
import { AnimatePresence, motion } from 'framer-motion'
import Twitter from '../utils/twitter';
import { siteConfig } from '@/lib/site';

const socials = [
  { href: siteConfig.socials.linkedin, label: 'LinkedIn', icon: <AiFillLinkedin size={18} />, initial: { opacity: 0, x: 10 }, transition: { duration: 1, type: 'spring' as const } },
  { href: siteConfig.socials.twitter, label: 'Twitter', icon: <Twitter />, initial: { opacity: 0, y: 15 }, transition: { duration: 1.5, type: 'spring' as const } },
  { href: siteConfig.socials.github, label: 'GitHub', icon: <AiOutlineGithub size={18} />, initial: { opacity: 0, y: 20 }, transition: { duration: 2.2, type: 'spring' as const } },
]

export default function SocialLink() {

    const { typeOutStatus } = useIntroContext();

    return (
        <div className='flex items-center justify-center lg:justify-start mt-8 lg:mt-10 gap-3 text-gray-600 dark:text-gray-400 text-2xl lg:text-2xl'>
            <AnimatePresence>
                {typeOutStatus.content && socials.map((social) => (
                    <motion.div
                        key={social.label}
                        initial={social.initial}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={social.transition}
                        className='icon-btn'
                    >
                        <Link href={social.href} target='_blank' aria-label={social.label}>
                            {social.icon}
                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>

        </div >
    )
}
