'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollLink from '../utils/ScrollLink'
import { navLinks } from './Navigation'

export default function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

    const [activeLink, setActiveLink] = useState("");

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className='lg:hidden'
        >
            <HambargerMenu onClick={() => toggleMenu()} />
            <motion.nav
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
                className='fixed top-0 right-0 z-30 h-full w-[15em] bg-gray-200'
            >
                <motion.ul
                    className='absolute m-auto inset-0 h-fit w-fit'
                >
                    {navLinks.map(link => (
                        <motion.li key={link.id} className='my-5 capitalize'>
                            <ScrollLink
                                to={link.to}
                                activeClass='relative flex item-center'
                                onSetActive={(paramLink) => {
                                    setActiveLink(paramLink);
                                }}
                            >
                                {link.name}
                            </ScrollLink>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>
        </motion.div>
    )
}


function HambargerMenu({ onClick }: { onClick: () => void }) {

    return (
        <motion.button
            onClick={onClick}
            className='absolute right-5 inset-y-0 m-auto z-40 w-8 h-8 outline-none'
        >
            <motion.span
                variants={{
                    open: {
                        rotate: 45,
                        y: 10,
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
                className='absolute w-full h-[0.2em] rounded-full bg-gray-700'
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
                        y: 10,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.5,
                            delay: 0.3,
                        }
                    }
                }}
                className='absolute w-full h-[0.2em] rounded-full bg-gray-700'
            />
            <motion.span
                variants={{
                    open: {
                        rotate: -45,
                        y: 10,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.5,
                            delay: 0.3,
                        }
                    },
                    closed: {
                        rotate: 0,
                        y: 20,
                        transition: {
                            type: "spring",
                            bounce: 0.03,
                            duration: 0.3,
                            delay: 0.1,
                        }
                    }
                }}
                className='absolute w-full h-[0.2em] rounded-full bg-gray-700'
            />
        </motion.button>
    )
}
