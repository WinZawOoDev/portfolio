"use client"

import React from 'react'
import { Variants, motion } from 'framer-motion'
import Card from './Card'
import workplace from '@/public/images/work_place.jpg'

const projects = [
    {
        id: 1,
        imageSource: workplace,
        projectName: "Some Project",
        href: "#",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: ["TailwindCss", "React(Next.js)", "Node.js(Express)", "PostgreSql"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 2,
        imageSource: workplace,
        projectName: "Some Project",
        href: "#",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: ["TailwindCss", "React(Next.js)", "Node.js(Express)", "PostgreSql"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 3,
        imageSource: workplace,
        projectName: "Some Project",
        href: "#",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: ["TailwindCss", "React(Next.js)", "Node.js(Express)", "PostgreSql"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 4,
        imageSource: workplace,
        projectName: "Some Project",
        href: "#",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: ["TailwindCss", "React(Next.js)", "Node.js(Express)", "PostgreSql"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 5,
        imageSource: workplace,
        projectName: "Some Project",
        href: "#",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: ["TailwindCss", "React(Next.js)", "Node.js(Express)", "PostgreSql"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 6,
        imageSource: workplace,
        projectName: "Some Project",
        href: "#",
        content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        techStack: ["TailwindCss", "React(Next.js)", "Node.js(Express)", "PostgreSql"],
        sourceLink: "https://github.com/WinZawOoDev"
    }
];

const container: Variants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.05,
            delay: 0.02,
            delayChildren: 0.02,
            staggerChildren: 0.09,
            durationChildren: 0.03
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

export default function List() {
    return (
        <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center px-10 mx-auto w-full md:w-fit  mt-14'
        >
            {projects.map(project => (
                <motion.li
                    key={project.id}
                    variants={item}
                >
                    <Card
                        imageSource={project.imageSource}
                        projectName={project.projectName}
                        href={project.href}
                        content={project.content}
                        techStack={project.techStack}
                        sourceLink={project.sourceLink}
                    />
                </motion.li>
            ))}
        </motion.ul>
    )
}
