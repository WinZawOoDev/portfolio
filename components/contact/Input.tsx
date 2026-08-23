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
            <input id={name} type={type} name={name} autoComplete={name} className='input-field' required />
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
            <textarea id={name} name={name} className='textarea-field' required />
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
            className="btn-submit"
            disabled={disabled}
        >
            {label}
        </motion.button>
    )
}