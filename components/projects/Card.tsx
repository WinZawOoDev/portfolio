import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Open_Sans, Fira_Sans, Roboto } from 'next/font/google'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'

const openSansFont = Open_Sans({ subsets: ["latin"], weight: "600" })
const firaSansFont = Fira_Sans({ subsets: ["latin"], weight: "300" })
const robotoFont = Roboto({ subsets: ["greek"], weight: "400" })


type Props = {
    imageSource: StaticImageData;
    projectName: string;
    href: string;
    content: string;
    techStack: string[]
    sourceLink: string;
}

export default function Card({ imageSource, projectName, href, content, techStack, sourceLink }: Props) {
    return (
        <div className='relative flex-1 justify-between bg-[#f8f4ff] h-[25em] w-[20em] shadow-2xl p-1 rounded-md'>
            <Image
                src={imageSource}
                alt='work place'
                className='w-full h-44 rounded'
            />
            <div className='relative m-2'>
                <Link
                    href={href}
                    className='absolute m-auto top-1 right-1 w-fit h-fit font-bold text-gray-500 text-lg'
                >
                    <RiExternalLinkFill />
                </Link>
                <h4 className={`${robotoFont.className} text-sm text-gray-800 text-left mb-3 mt-2`}>{projectName}</h4>
                <p className={`mt-5 px-3 ${firaSansFont.className} text-center font-light text-sm text-gray-700`}>
                    {content}
                </p>
            </div>
            <div className='absolute bottom-4 px-2 mx-auto w-full h-fit inset-x-0 flex flex-wrap items-center justify-between'>
                <div className={`flex flex-wrap ${openSansFont.className} text-gray-700  text-xs font-medium text-clip text-left w-3/4 h-fit`}>
                    {techStack.map((tech, index) => (
                        <div key={index} className='flex items-center mr-1'>
                            <span className='inline-block'><BsDot /></span>
                            <span className='inline-block '>{tech}</span>
                        </div>
                    ))}
                </div>
                <Link href={sourceLink} target='__blank' className='block text-2xl mr-3 text-gray-700'>
                    <AiFillGithub />
                </Link>
            </div>
        </div>
    )
}
