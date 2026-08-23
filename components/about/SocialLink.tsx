"use client";

import React from 'react'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { useIntroContext } from './IntroProvider'
import { AnimatePresence, motion } from 'framer-motion'
import Twitter from '../utils/Twitter';

export default function SocialLink() {

    const { typeOutStatus } = useIntroContext();

    return (
        <div className='flex items-center justify-center lg:justify-start mt-8 lg:mt-10 gap-3 text-gray-600 dark:text-gray-400 text-2xl lg:text-2xl'>
            <AnimatePresence>
                {typeOutStatus.content && (
                    <>
                        {<motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, type: "spring" }}
                            className='icon-btn'
                        >
                            <Link href={"https://www.linkedin.com/in/win-zaw-oo-393715222/"} target='_blank' aria-label="LinkedIn" >
                                <AiFillLinkedin size={18} />
                            </Link>
                        </motion.div>}

                        {<motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 1.5, type: "spring" }}
                            className='icon-btn'
                        >
                            <Link href={"https://twitter.com/WinZaw00"} target='_blank' aria-label="Twitter" >
                                <Twitter />
                            </Link>
                        </motion.div>
                        }
                        {<motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 2.2, type: "spring" }}
                            className='icon-btn'
                        >
                            <Link href={"https://github.com/WinZawOoDev"} target='_blank' aria-label="GitHub">
                                <AiOutlineGithub size={18} />
                            </Link>
                        </motion.div>}
                    </>
                )}
            </AnimatePresence>

        </div >
    )
}
