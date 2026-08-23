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
                <div className='section bg-[#f8f8ff] dark:bg-[#0d0d12]'>
                    <div className='flex flex-col items-center justify-center px-5'>
                        <div className='contact-card'>
                            <Heading />
                            <div className='mt-6'>
                                <Form />
                            </div>
                        </div>
                        <div className='mt-8 flex items-center gap-3 text-gray-600 dark:text-gray-400'>
                            <Link href="https://wa.me/+959987262564" target='_blank' aria-label="WhatsApp" className='icon-btn-sm hover:!bg-[#25D366] hover:!text-white hover:!border-transparent dark:hover:!bg-[#25D366]'>
                                <FaWhatsapp size={18} />
                            </Link>
                            <Link href="tel:+959987262564" target='_blank' aria-label="Phone" className='icon-btn-sm'>
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


