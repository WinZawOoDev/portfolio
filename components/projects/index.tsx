'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsGrid3X3Gap, BsListUl } from 'react-icons/bs'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import ProjectList from './List'
import Heading from './Heading'

export default function Projects() {
    const [view, setView] = useState<'grid' | 'list'>('grid')
    return (
        <LinkContainer name='projects'>
            <LayoutContainer>
                <div className='section h-fit'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-6xl mx-auto'>
                        <Heading />
                        <div className="view-toggle shrink-0 self-start sm:self-auto" role="group" aria-label="Toggle view">
                            <motion.div
                                layout
                                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                                className="view-toggle-indicator"
                                style={{ left: view === 'grid' ? '4px' : 'calc(100% - 36px)' }}
                            />
                            <button
                                onClick={() => setView('grid')}
                                className={`view-toggle-btn ${view === 'grid' ? 'text-white dark:text-gray-900' : ''}`}
                                aria-label="Grid view"
                                aria-pressed={view === 'grid'}
                            >
                                <BsGrid3X3Gap size={14} />
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`view-toggle-btn ${view === 'list' ? 'text-white dark:text-gray-900' : ''}`}
                                aria-label="List view"
                                aria-pressed={view === 'list'}
                            >
                                <BsListUl size={14} />
                            </button>
                        </div>
                    </div>
                    <ProjectList view={view} />
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}
