import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import Heading from './Heading'
import Form from './Form'
import Link from 'next/link'

export default function Contact() {
    return (
        <LinkContainer name='contact'>
            <LayoutContainer>
                <div className='h-screen flex items-center justify-center px-5'>
                    <div className='absolute bg-[#080808] inset-0 m-auto -z-10' />
                    <div className='w-full h-fit relative max-w-lg'>
                        <Heading />
                        <Form />
                    </div>
                </div>
                <div className='absolute m-auto inset-x-0 bottom-4 h-fit w-fit flex items-center'>
                    <Link href="https://web.whatsapp.com/" target='__blank' className='inline-block'>
                        <span className='text-gray-300  text-3xl' ><FaWhatsapp /></span>
                    </Link>
                    <span className='text-gray-300 inline-block mx-3 text-xl'><FaPhoneAlt /></span>
                    <span className='text-gray-300 inline text-xl'>+95 987262564</span>
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}


