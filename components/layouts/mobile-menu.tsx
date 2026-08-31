'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollLink from '../utils/scroll-link'
import ThemeToggle from '../utils/theme-toggle'
import { navLinks } from './navigation'
import { interMedium } from '@/lib/fonts'

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    // eslint-disable-next-line
    useEffect(() => { setMounted(true) }, [])

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
                        className='mobile-backdrop'
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
                className='mobile-nav'
            >
                <ul
                    className='mobile-nav-list'
                >
                    {navLinks.map(link => (
                        <li key={link.id} className={`${interMedium.className} mobile-nav-item`}>
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
                    <li className={`${interMedium.className} mobile-nav-theme`}>
                        <span className='capitalize'>theme</span>
                        <ThemeToggle />
                    </li>
                </ul>
            </motion.nav>
        </>,
        document.body
    ) : null

    return (
        <div className='mobile-placeholder' aria-hidden="true">
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
            className='mobile-hamburger'
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
                className='hamburger-line'
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
                className='hamburger-line'
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
                className='hamburger-line'
            />
        </motion.button>
    )
}
