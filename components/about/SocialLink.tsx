"use client";

import React from 'react'
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import Link from 'next/link'
import { useIntroContext } from './IntroProvider'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import twitter from '@/public/images/twitter.png'

export default function SocialLink() {

    const { typeOutStatus } = useIntroContext();

    return (
        <div className='flex items-center justify-center mt-8 mb:2 lg:my-10 text-gray-600 text-2xl lg:text-3xl'>
            <AnimatePresence>
                {typeOutStatus.content && (
                    <>
                        {<motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, type: "spring" }}
                            className='mr-4'
                        >
                            <Link href={"https://www.linkedin.com/in/win-zaw-oo-393715222/"} target='_blank' >
                                <AiFillLinkedin />
                            </Link>
                        </motion.div>}

                        {<motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 1.5, type: "spring" }}
                            className='mx-2'
                        >
                            <Link href={"https://twitter.com/WinZaw00"} target='_blank' >
                                {/* <FiTwitter /> */}
                                <Image
                                    src={twitter}
                                    alt='twitter icon'
                                    className='w-5 h-5 lg:w-6 lg:h-6'
                                />
                            </Link>
                        </motion.div>
                        }
                        {<motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 2.2, type: "spring" }}
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
