import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import LinkContainer from '../layouts/LinkContainer'
import LayoutContainer from '../layouts/LayoutContainer'
import Heading from './Heading'
import Form from './Form'

export default function Contact() {
    return (
        <LinkContainer name='contact'>
            <LayoutContainer>
                <div className='h-screen flex items-center justify-center'>
                    <div className='absolute bg-[#080808] inset-0 m-auto -z-10' />
                    <div className='w-full h-fit relative max-w-lg'>
                        <Heading />
                        <Form />
                    </div>
                </div>
                <div className='absolute m-auto inset-x-0 bottom-4 h-fit w-fit flex items-center'>
                    <span className='text-gray-300 inline-block text-3xl' ><FaWhatsapp /></span>
                    <span className='text-gray-300 inline-block mx-3 text-xl'><FaPhoneAlt /></span>
                    <span className='text-gray-300 inline text-xl'>+95 987262564</span>
                </div>
            </LayoutContainer>
        </LinkContainer>
    )
}


