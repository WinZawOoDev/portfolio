"use client"

import React from 'react'
import { Variants, motion, AnimatePresence } from 'framer-motion'
import Card from './Card'
import { projects } from './data'

const container: Variants = {
    hidden: {
        opacity: 0,
        x: -40
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.03,
            delay: 0.01,
            delayChildren: 0.01,
            staggerChildren: 0.04
        }
    }
};

const item: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

export default function List({ view }: { view: 'grid' | 'list' }) {
    return (
        <AnimatePresence mode="wait">
            <motion.ul
                key={view}
                layout
                variants={container}
                initial="hidden"
                animate="visible"
                exit="hidden"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ layout: { type: "spring", bounce: 0.1, duration: 0.35 } }}
                className={view === 'grid' ? 'projects-grid' : 'projects-list'}
            >
                {projects.map((project, idx) => (
                    <motion.li
                        key={project.id}
                        layout
                        variants={item}
                        transition={{ layout: { type: "spring", bounce: 0.1, duration: 0.3 }, opacity: { duration: 0.2 }, y: { type: "spring", bounce: 0.1 } }}
                        className={view === 'grid' ? "flex" : "flex w-full"}
                    >
                        <Card
                            slug={project.slug}
                            imageSource={project.imageSource}
                            projectName={project.projectName}
                            href={project.href}
                            content={project.content}
                            techStack={project.techStack}
                            sourceLink={project.sourceLink}
                            priority={idx < 2}
                            view={view}
                        />
                    </motion.li>
                ))}
            </motion.ul>
        </AnimatePresence>
    )
}
