'use client';

import React, { HTMLInputTypeAttribute } from 'react'
import { motion } from 'framer-motion'

export function TextInput({ label, name, type }: { label: string, name: string, type: HTMLInputTypeAttribute }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            className='relative text-lg my-10'
        >
            <label className='block text-gray-200 text-sm font-medium mb-2'>{label}</label>
            <input type={type} name={name} className='w-full focus:outline-none px-3 py-[0.4em] ring-2 text-white ring-gray-400 rounded bg-gray-700' required />
        </motion.div>
    )
}


export function TextArea({ label, name }: { label: string, name: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className='relative text-lg my-10'
        >
            <label className='block text-gray-200 text-sm font-medium mb-2'>{label}</label>
            <textarea name={name} className='w-full h-full min-h-[8em] focus:outline-none px-3 py-[0.4em] ring-2 text-white ring-gray-400 rounded bg-gray-700' required />
        </motion.div>
    )
}

export function Button({ label }: { label: string }) {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className='outline-none px-3 py-2 ring-2 font-medium ring-gray-400 text-gray-50 bg-gray-600 rounded'
        >
            {label}
        </motion.button>
    )
}