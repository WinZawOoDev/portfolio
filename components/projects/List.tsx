"use client"

import React from 'react'
import { Variants, motion } from 'framer-motion'
import Card from './Card'
import workplace from '@/public/images/work_place.jpg'

const projects = [
    {
        id: 1,
        imageSource: workplace,
        projectName: "HR Recruitment Module",
        href: "https://smilaxglobal.com",
        content: "Recruitment module for HR System at Smilax Global — candidate pipelines, job postings, and interview workflows built with microservices.",
        techStack: ["TypeScript", "Next.js", "ShadcnUI", "Nest.js", "Prisma", "gRPC", "PostgreSQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 2,
        imageSource: workplace,
        projectName: "Tour Management System",
        href: "https://www.cloudsource.co.jp",
        content: "Tour itinerary, bus routes, service pricing, customers, brokers and fleet management system deployed on GCP.",
        techStack: ["TypeScript", "Remix", "Tailwind", "Prisma", "PostgreSQL", "GCP"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 3,
        imageSource: workplace,
        projectName: "Goods Order & SAP Integration",
        href: "http://pos.com.mm/",
        content: "Grocery store ordering system integrated with SAP — ordering, supplier sync, stock and settlement flows.",
        techStack: ["PHP (Laravel)", "React.js", "Bootstrap", "MySQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 4,
        imageSource: workplace,
        projectName: "Membership Card Payment API",
        href: "http://pos.com.mm/",
        content: "POS member-card payment API integration allowing charges to be paid via membership card balance.",
        techStack: ["PHP (Laravel)", "MySQL", "REST API"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 5,
        imageSource: workplace,
        projectName: "POS System Maintenance",
        href: "http://pos.com.mm/",
        content: "Performance optimization, bug fixes and feature additions for legacy POS on CodeIgniter.",
        techStack: ["PHP (CodeIgniter)", "Bootstrap", "MySQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 6,
        imageSource: workplace,
        projectName: "Personal Portfolio",
        href: "#",
        content: "This portfolio — Next.js 16, React 19, Tailwind 4, Framer Motion with dark mode and scroll progress.",
        techStack: ["Next.js", "React 19", "Tailwind CSS 4", "Framer Motion"],
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
            staggerChildren: 0.09
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
            viewport={{ once: true, margin: "-50px" }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 place-items-stretch mx-auto w-full max-w-6xl mt-12'
        >
            {projects.map((project, idx) => (
                <motion.li
                    key={project.id}
                    variants={item}
                    className="flex"
                >
                    <Card
                        imageSource={project.imageSource}
                        projectName={project.projectName}
                        href={project.href}
                        content={project.content}
                        techStack={project.techStack}
                        sourceLink={project.sourceLink}
                        priority={idx < 2}
                    />
                </motion.li>
            ))}
        </motion.ul>
    )
}
