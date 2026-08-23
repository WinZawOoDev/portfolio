"use client"

import React from 'react'
import { Variants, motion, AnimatePresence } from 'framer-motion'
import Card from './Card'
import workplace from '@/public/images/work_place.jpg'

const projects = [
    {
        id: 1,
        imageSource: workplace,
        projectName: "Marketing CMS — Content Hub",
        href: "https://www.kbzbank.com",
        content: "Marketing Content Management System at KBZ Bank — centralized content authoring and publishing for marketing campaigns, built and deployed with Strapi + Next.js on AWS.",
        techStack: ["Strapi", "Next.js", "AWS", "TypeScript"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 2,
        imageSource: workplace,
        projectName: "Marketing CMS — Campaign Manager",
        href: "https://www.kbzbank.com",
        content: "Marketing CMS for campaign lifecycle — content scheduling, approval workflows and multi-channel distribution, deployed on AWS.",
        techStack: ["Strapi", "Next.js", "AWS", "PostgreSQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 3,
        imageSource: workplace,
        projectName: "Marketing CMS — Promo Portal",
        href: "https://www.kbzbank.com",
        content: "Promo portal CMS for marketing — dynamic banners, offers and localized content management with Strapi headless CMS and Next.js SSR on AWS.",
        techStack: ["Strapi", "Next.js", "AWS", "Tailwind"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 4,
        imageSource: workplace,
        projectName: "KYC Search Portal",
        href: "https://www.kbzbank.com",
        content: "Designed and developed KYC Search Portal for rapid customer verification — search, filtering and compliance workflows built with React.js.",
        techStack: ["React.js", "TypeScript", "REST API"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 5,
        imageSource: workplace,
        projectName: "Healthcare Products CMS",
        href: "#",
        content: "CMS for health care products company website — product catalog, inventory and content management with Strapi and Next.js, deployed on on-premise Windows Server.",
        techStack: ["Strapi", "Next.js", "Windows Server", "TypeScript"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 6,
        imageSource: workplace,
        projectName: "HR Recruitment Module",
        href: "https://smilaxglobal.com",
        content: "Recruitment module for HR System at Smilax Global — candidate pipelines, job postings, and interview workflows built with microservices.",
        techStack: ["TypeScript", "Next.js", "ShadcnUI", "Nest.js", "Prisma", "gRPC", "PostgreSQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 7,
        imageSource: workplace,
        projectName: "Tour Management System",
        href: "https://www.cloudsource.co.jp",
        content: "Tour itinerary, bus routes, service pricing, customers, brokers and fleet management system deployed on GCP.",
        techStack: ["TypeScript", "Remix", "Tailwind", "Prisma", "PostgreSQL", "GCP"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 8,
        imageSource: workplace,
        projectName: "Goods Order & SAP Integration",
        href: "http://pos.com.mm/",
        content: "Grocery store ordering system integrated with SAP — ordering, supplier sync, stock and settlement flows.",
        techStack: ["PHP (Laravel)", "React.js", "Bootstrap", "MySQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 9,
        imageSource: workplace,
        projectName: "Membership Card Payment API",
        href: "http://pos.com.mm/",
        content: "POS member-card payment API integration allowing charges to be paid via membership card balance.",
        techStack: ["PHP (Laravel)", "MySQL", "REST API"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 10,
        imageSource: workplace,
        projectName: "POS System Maintenance",
        href: "http://pos.com.mm/",
        content: "Performance optimization, bug fixes and feature additions for legacy POS on CodeIgniter.",
        techStack: ["PHP (CodeIgniter)", "Bootstrap", "MySQL"],
        sourceLink: "https://github.com/WinZawOoDev"
    },
    {
        id: 11,
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
