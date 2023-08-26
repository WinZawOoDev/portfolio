"use client";

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { useIntroContext } from '../about/Container';

export default function BouncePoint() {

    const { typeOutStatus } = useIntroContext();

    return (
        <AnimatePresence>
            {typeOutStatus.content && (
                <motion.div
                    initial={{ opacity: 0, bottom: "-3em" }}
                    animate={{ opacity: 1, bottom: '1.5em' }}
                    transition={{ duration: 1, delay: 2, type: "spring" }}
                    className='absolute'
                >
                    <Link to='experiences'>
                        <button className='relative h-9 w-5 border border-gray-300 ring-2 ring-gray-600 rounded-3xl'>
                            <span
                                className='absolute bounce-in-top m-auto inset-x-0 w-2 h-2 shadow ring-[0.1em] ring-gray-600 bg-gray-500 rounded-full'
                            />
                        </button>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
