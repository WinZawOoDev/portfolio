'use client';

import React, { HTMLInputTypeAttribute } from 'react'
import { motion } from 'framer-motion'

export function TextInput({ label, name, type }: { label: string, name: string, type: HTMLInputTypeAttribute }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className='relative my-5'
        >
            <label htmlFor={name} className='block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1.5'>{label}</label>
            <input id={name} type={type} name={name} autoComplete={name} className='w-full px-3.5 py-2.5 bg-white dark:bg-[#0d0d12] border border-gray-200 dark:border-[#252530] rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-[#3a3a48] focus:ring-1 focus:ring-gray-400 dark:focus:ring-[#3a3a48] transition-colors' required />
        </motion.div>
    )
}


export function TextArea({ label, name }: { label: string, name: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className='relative my-5'
        >
            <label htmlFor={name} className='block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1.5'>{label}</label>
            <textarea id={name} name={name} className='w-full min-h-[8em] px-3.5 py-2.5 bg-white dark:bg-[#0d0d12] border border-gray-200 dark:border-[#252530] rounded-lg text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-[#3a3a48] focus:ring-1 focus:ring-gray-400 dark:focus:ring-[#3a3a48] transition-colors resize-y' required />
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
            className={`${disabled ? "opacity-60 cursor-not-allowed " : "hover:bg-[#1e2b21] dark:hover:bg-[#1e2b21] hover:shadow active:scale-[0.98] "} w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-sm bg-[#253529] dark:bg-[#2e4436] text-white shadow-sm transition-all cursor-pointer disabled:pointer-events-none`}
            disabled={disabled}
        >
            {label}
        </motion.button>
    )
}