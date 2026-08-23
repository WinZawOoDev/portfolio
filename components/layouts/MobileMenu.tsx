'use client'

import React, { useEffect, useState } from 'react'
import { IBM_Plex_Sans } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollLink from '../utils/ScrollLink'
import { navLinks } from './Navigation'

const ibmFont = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" })

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
        if (isOpen) {
            document.addEventListener('keydown', onKey)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [isOpen])

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className='lg:hidden w-fit h-fit'
        >
            <HambargerMenu onClick={toggleMenu} isOpen={isOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                        aria-hidden="true"
                        className='fixed inset-0 z-20 bg-black/40 backdrop-blur-sm'
                    />
                )}
            </AnimatePresence>
            <motion.nav
                aria-label="Mobile navigation"
                aria-hidden={!isOpen}
                variants={{
                    open: {
                        x: 0,
                        transition: {
                            duration: 0.5,
                            delay: 0.2,
                            type: "tween",
                            ease: "easeInOut"
                        }
                    },
                    closed: {
                        x: 300,
                        transition: {
                            duration: 0.5,
                            delay: 0.2,
                            type: "tween",
                            ease: "easeInOut"
                        }
                    }
                }}
                className='fixed top-0 right-0 z-30 h-full w-[15em] bg-gray-100 dark:bg-[#15151b] shadow-2xl transition-colors duration-300'
            >
                <ul
                    className='absolute m-auto inset-0 h-fit w-fit text-gray-800 dark:text-gray-200'
                >
                    {navLinks.map(link => (
                        <li key={link.id} className={`${ibmFont.className} my-5 capitalize`}>
                            <ScrollLink
                                to={link.to}
                                activeClass='relative flex item-center font-medium transition-all duration-75 delay-75 transform  translate-x-4'
                                onClick={closeMenu}
                            >
                                <span className='cursor-pointer'>
                                    {link.name}
                                </span>
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </motion.div>
    )
}

function HambargerMenu({ onClick, isOpen }: { onClick: () => void, isOpen: boolean }) {

    return (
        <motion.button
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className='absolute right-5 inset-y-0 -top-2.5 m-auto z-40 w-8 outline-hidden cursor-pointer'
        >
            <motion.span
                variants={{
                    open: {
                        rotate: 45,
                        y: 8,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.5,
                            delay: 0.3,
                        }
                    },
                    closed: {
                        rotate: 0,
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.3,
                            delay: 0.1,
                        }
                    }
                }}
                className='absolute w-full h-[0.18em] rounded-full bg-gray-700 dark:bg-gray-300'
            />
            <motion.span
                variants={{
                    open: {
                        x: 80,
                        y: 0,
                        opacity: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.3,
                            delay: 0.1,
                        }
                    },
                    closed: {
                        x: -7,
                        y: 8,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.5,
                            delay: 0.3,
                        }
                    }
                }}
                className='absolute w-full h-[0.18em] rounded-full bg-gray-700 dark:bg-gray-300'
            />
            <motion.span
                variants={{
                    open: {
                        rotate: -45,
                        y: 8,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.5,
                            delay: 0.3,
                        }
                    },
                    closed: {
                        rotate: 0,
                        y: 16,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.3,
                            delay: 0.1,
                        }
                    }
                }}
                className='absolute w-full h-[0.18em] rounded-full bg-gray-700 dark:bg-gray-300'
            />
        </motion.button>
    )
}


