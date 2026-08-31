'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BsGrid3X3Gap, BsListUl } from 'react-icons/bs'
import LinkContainer from '../layouts/link-container'
import LayoutContainer from '../layouts/layout-container'
import ProjectList from './list'
import Heading from './heading'

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
                                transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                                className="view-toggle-indicator"
                                style={{ left: view === 'grid' ? '4px' : 'calc(100% - 36px)' }}
                            />
                            <button
                                onClick={() => setView('grid')}
                                className={`view-toggle-btn ${view === 'grid' ? 'view-toggle-btn-active' : ''}`}
                                aria-label="Grid view"
                                aria-pressed={view === 'grid'}
                            >
                                <BsGrid3X3Gap size={14} />
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`view-toggle-btn ${view === 'list' ? 'view-toggle-btn-active' : ''}`}
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
