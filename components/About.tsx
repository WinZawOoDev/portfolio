import React from 'react'
import Image from 'next/image'
import { AiFillLinkedin, AiOutlineWhatsApp, AiOutlineGithub } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import busy_programmer from '@/public/Programmer-rafiki.svg'
import Link from 'next/link'
import { Spectral, Work_Sans, DM_Sans } from 'next/font/google'

const spectralFont = Spectral({
    weight: "800",
    subsets: ["latin"]
})
const workSansFont = Work_Sans({ weight: "300", subsets: ["latin"] })
const dmSansFont = DM_Sans({ weight: "600", subsets: ["latin"] });

export default function About() {
    return (
        <section className='relative w-full'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 place-items-center h-screen'>

                {/* Introduction */}
                <div className='px-5'>
                    <span className='mb-3'>Hey, I'm</span>
                    <span className={`${spectralFont.className} text-7xl block mt-2 mb-10 text-gray-900`}>Win Zaw Oo</span>
                    <span className={`block ${dmSansFont.className} my-5 font-bold leading-3 text-xl`}>Web Developer</span>
                    <p className={`${workSansFont.className} text-center my-4`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    {/* Social Links */}
                    <div className='flex items-center justify-center my-10 text-gray-700 text-2xl'>
                        <Link href={"https://www.linkedin.com/in/win-zaw-oo-393715222/"} target='_blank' className='mx-2'>
                            <AiFillLinkedin />
                        </Link>
                        <Link href={"https://twitter.com/WinZaw00"} target='_blank' className='mx-2'>
                            <FiTwitter />
                        </Link>
                        <Link href={"#"} target='_blank' className='mx-2'>
                            <AiOutlineWhatsApp />
                        </Link>
                        <Link href={"https://github.com/WinZawOoDev"} target='_blank' className='mx-2'>
                            <AiOutlineGithub />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className='text-center'>
                    <Image
                        src={busy_programmer}
                        alt='Gentleman'
                        width={1000}
                        height={100}
                        className=''
                    />
                </div>
            </div>
        </section>
    )
}
