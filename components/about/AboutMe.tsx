'use client';

import React from 'react'
import { Spectral, Work_Sans, DM_Sans } from 'next/font/google'
import Typewriter from 'typewriter-effect'
import { useIntroContext } from './Container';

const spectralFont = Spectral({
    weight: "800",
    subsets: ["latin"]
})
const workSansFont = Work_Sans({ weight: "300", subsets: ["latin"] })
const dmSansFont = DM_Sans({ weight: "600", subsets: ["latin"] });

export default function AboutMe() {

    const { typeOutStatus, dispatchTypeOutStatus } = useIntroContext();

    return (
        <div className='relative w-[36em]'>

            <span className='mb-3 whitespace-pre-line text-gray-800'>
                <Typewriter
                    options={{
                        delay: 60
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hey, I'm")
                            .callFunction((params) => {
                                params.elements.cursor.classList.add("hidden")
                                dispatchTypeOutStatus({ type: "intro", payload: true })
                            })
                            .start();
                    }}
                />
            </span>

            <h1 className={`${spectralFont.className} text-7xl block mt-2 mb-10 text-gray-900`}>
                {typeOutStatus.intro && (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Win Zaw Oo")
                                .callFunction((params) => {
                                    params.elements.cursor.classList.add("hidden");
                                    dispatchTypeOutStatus({ type: "name", payload: true })
                                })
                                .start();
                        }}
                    />)
                }
            </h1>

            <h4 className={`block ${dmSansFont.className} text-gray-900 my-5 font-bold leading-3 text-xl`}>
                {typeOutStatus.name && (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(200)
                                .typeString("Web Developer")
                                .callFunction((params) => {
                                    params.elements.cursor.classList.add("hidden");
                                    dispatchTypeOutStatus({ type: "position", payload: true })
                                })
                                .start();
                        }}
                    />)
                }
            </h4>

            <p className={`${workSansFont.className} text-center my-4 text-gray-800`}>
                {typeOutStatus.position && (
                    <Typewriter
                        options={{ delay: 1 }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(900)
                                .typeString("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
                                .typeString("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")
                                .deleteChars(10)
                                .typeString("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
                                .callFunction(() => {
                                    dispatchTypeOutStatus({ type: "content", payload: true })
                                })
                                .start();
                        }}
                    />)
                }
            </p>

        </div>
    )
}
