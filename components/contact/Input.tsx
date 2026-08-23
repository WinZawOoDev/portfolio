'use client';

import React, { HTMLInputTypeAttribute } from 'react'
import { motion } from 'framer-motion'

export function TextInput({ label, name, type }: { label: string, name: string, type: HTMLInputTypeAttribute }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className='relative text-lg my-6'
        >
            <label htmlFor={name} className='block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2'>{label}</label>
            <input id={name} type={type} name={name} autoComplete={name} className='w-full focus:outline-hidden px-3 py-[0.4em] ring-2 ring-gray-300 dark:ring-gray-600 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-gray-400 dark:focus:ring-gray-400 transition-colors' required />
        </motion.div>
    )
}


export function TextArea({ label, name }: { label: string, name: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className='relative text-lg my-6'
        >
            <label htmlFor={name} className='block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2'>{label}</label>
            <textarea id={name} name={name} className='w-full h-full min-h-[8em] focus:outline-hidden px-3 py-[0.4em] ring-2 ring-gray-300 dark:ring-gray-600 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-gray-400 dark:focus:ring-gray-400 transition-colors' required />
        </motion.div>
    )
}

export function Button({ label, disabled }: { label: string, disabled: boolean }) {
    return (
        <motion.button
            type='submit'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className={`${disabled ? "pointer-events-none opacity-60 cursor-not-allowed " : "hover:bg-gray-800 dark:hover:bg-black "} outline-hidden px-5 py-2 ring-2 font-medium ring-gray-400 text-gray-50 bg-gray-900 dark:bg-[#1c1c24] rounded transition-colors cursor-pointer`}
            disabled={disabled}
        >
            {label}
        </motion.button>
    )
}