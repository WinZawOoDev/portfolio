'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollLink from '../utils/ScrollLink'
import ThemeToggle from '../utils/ThemeToggle'
import { navLinks } from './Navigation'

const navFont = Inter({ subsets: ["latin"], weight: "500" })

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => setMounted(true), [])

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

    const overlay = mounted ? createPortal(
        <>
            <HambargerMenu onClick={toggleMenu} isOpen={isOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMenu}
                        aria-hidden="true"
                        className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden'
                    />
                )}
            </AnimatePresence>
            <motion.nav
                aria-label="Mobile navigation"
                aria-hidden={!isOpen}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
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
                className='fixed top-0 right-0 z-50 h-full w-[15em] bg-gray-100 dark:bg-[#15151b] shadow-2xl transition-colors duration-300 lg:hidden'
            >
                <ul
                    className='absolute m-auto inset-0 h-fit w-fit text-gray-900 dark:text-gray-100'
                >
                    {navLinks.map(link => (
                        <li key={link.id} className={`${navFont.className} my-5 capitalize text-[15px]`}>
                            <ScrollLink
                                to={link.to}
                                activeClass='relative flex item-center font-semibold transition-all duration-75 delay-75 transform translate-x-2'
                                onClick={closeMenu}
                            >
                                <span className='cursor-pointer'>
                                    {link.name}
                                </span>
                            </ScrollLink>
                        </li>
                    ))}
                    <li className={`${navFont.className} mt-8 pt-6 border-t border-gray-200 dark:border-[#252530] flex items-center justify-between text-[15px]`}>
                        <span className='capitalize'>theme</span>
                        <ThemeToggle />
                    </li>
                </ul>
            </motion.nav>
        </>,
        document.body
    ) : null

    return (
        <div className='lg:hidden w-8 h-8' aria-hidden="true">
            {overlay}
        </div>
    )
}

function HambargerMenu({ onClick, isOpen }: { onClick: () => void, isOpen: boolean }) {

    return (
        <motion.button
            initial={false}
            animate={isOpen ? "open" : "closed"}
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className='fixed right-9 sm:right-11 md:right-11 top-[6px] md:top-2 z-[60] w-8 h-8 outline-hidden cursor-pointer lg:hidden'
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
                className='absolute w-full h-[0.18em] rounded-full bg-gray-900 dark:bg-white'
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
                className='absolute w-full h-[0.18em] rounded-full bg-gray-900 dark:bg-white'
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
                className='absolute w-full h-[0.18em] rounded-full bg-gray-900 dark:bg-white'
            />
        </motion.button>
    )
}
