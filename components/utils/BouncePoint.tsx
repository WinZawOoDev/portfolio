"use client";

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { useIntroContext } from '../about/IntroProvider'

export default function BouncePoint() {

    const { typeOutStatus } = useIntroContext();

    return (
        <AnimatePresence>
            {typeOutStatus.content && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -40 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring" }}
                    className='hidden lg:block absolute m-auto inset-x-0 -bottom-3 h-fit w-fit'
                >
                    <Link
                        to='experiences'
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        duration={1000}
                    >
                        <button className='relative h-7 w-4 lg:h-9 lg:w-5 border border-gray-300 ring-2 ring-gray-600 rounded-3xl'>
                            <span
                                className='absolute bounce-in-top m-auto inset-x-0 w-[0.3em] h-[0.3em] lg:w-2 lg:h-2 shadow ring-[0.1em] ring-gray-600 bg-gray-500 rounded-full'
                            />
                        </button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
