'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import Heading from './Heading'
import Link from 'next/link'

const Form = dynamic(() => import('./Form'), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse bg-gray-100 dark:bg-[#15151c] rounded-xl" />
})

export default function Contact() {
    return (
        <LinkContainer name='contact'>
            <LayoutContainer>
                <div className='py-20 lg:py-28 border-t border-gray-200 dark:border-[#1e1e26] bg-[#f8f8ff] dark:bg-[#0d0d12]'>
                    <div className='flex flex-col items-center justify-center px-5'>
                        <div className='w-full max-w-lg bg-transparent dark:bg-[#15151c] border border-transparent dark:border-[#252530] rounded-2xl shadow-none dark:shadow-sm p-6 lg:p-8'>
                            <Heading />
                            <div className='mt-6'>
                                <Form />
                            </div>
                        </div>
                        <div className='mt-8 flex items-center gap-3 text-gray-600 dark:text-gray-400'>
                            <Link href="https://wa.me/+959987262564" target='_blank' aria-label="WhatsApp" className='w-9 h-9 inline-flex items-center justify-center rounded-full bg-transparent dark:bg-[#15151c] border border-gray-200/50 dark:border-[#252530] hover:bg-[#25D366] hover:text-white hover:border-transparent dark:hover:bg-[#25D366] transition-colors'>
                                <FaWhatsapp size={18} />
                            </Link>
                            <Link href="tel:+959987262564" target='_blank' aria-label="Phone" className='w-9 h-9 inline-flex items-center justify-center rounded-full bg-transparent dark:bg-[#15151c] border border-gray-200/50 dark:border-[#252530] hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors'>
                                <FaPhoneAlt size={14} />
                            </Link>
                            <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>+95 998 726 2564</span>
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}


