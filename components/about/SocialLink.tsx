"use client";

import React from 'react'
import { AiFillLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import Link from 'next/link'
import { useIntroContext } from './IntroProvider'
import { AnimatePresence, motion } from 'framer-motion'

export default function SocialLink() {

    const { typeOutStatus } = useIntroContext();

    return (
        <div className='flex items-center justify-center my-10 text-gray-600 text-4xl'>
            <AnimatePresence>
                {typeOutStatus.content && (
                    <>
                        {<motion.div
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 10 }}
                            transition={{ duration: 1, type: "spring" }}
                            className='mx-2'
                        >
                            <Link href={"https://www.linkedin.com/in/win-zaw-oo-393715222/"} target='_blank' >
                                <AiFillLinkedin />
                            </Link>
                        </motion.div>}

                        {<motion.div
                            initial={{ opacity: 0, translateY: 15 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 15 }}
                            transition={{ duration: 1.5, type: "spring" }}
                            className='mx-2'
                        >
                            <Link href={"https://twitter.com/WinZaw00"} target='_blank' >
                                <FiTwitter />
                            </Link>
                        </motion.div>
                        }
                        {<motion.div
                            initial={{ opacity: 0, translateY: 20 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 20 }}
                            transition={{ duration: 2, type: "spring" }}
                            className='mx-2'
                        >
                            <Link href={"#"} target='_blank'>
                                <AiOutlineWhatsApp />
                            </Link>
                        </motion.div>}
                        {<motion.div
                            initial={{ opacity: 0, translateY: 25 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            exit={{ opacity: 0, translateY: 25 }}
                            transition={{ duration: 2.5, type: "spring" }}
                            className='mx-2'
                        >
                            <Link href={"https://github.com/WinZawOoDev"} target='_blank'>
                                <AiOutlineGithub />
                            </Link>
                        </motion.div>}
                    </>
                )}
            </AnimatePresence>

        </div >
    )
}
