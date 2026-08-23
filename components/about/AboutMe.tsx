'use client';

import React from 'react'
import { Spectral, Inter } from 'next/font/google'
import Typewriter from 'typewriter-effect'
import { useIntroContext } from './IntroProvider';

const spectralFont = Spectral({
    weight: "800",
    subsets: ["latin"],
    display: 'swap'
})
const interMedium = Inter({ subsets: ["latin"], weight: "600", display: 'swap' })
const interLight = Inter({ subsets: ["latin"], weight: "300", display: 'swap' });

export default function AboutMe() {

    const { typeOutStatus, dispatchTypeOutStatus } = useIntroContext();

    return (
        <div className='relative pt-2 md:pt-4 lg:pt-0 lg:mt-0 w-full lg:w-[36em]'>
            <span className='mb-3 text-sm lg:text-base whitespace-pre-line text-gray-800 dark:text-gray-300'>
                <Typewriter
                    options={{
                        delay: 60
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .typeString("Hello, I'm")
                            .callFunction((params) => {
                                params.elements.cursor.classList.add("hidden")
                                dispatchTypeOutStatus({ type: "intro", payload: true })
                            })
                            .start();
                    }}
                />
            </span>

            <h1 className={`${spectralFont.className} text-4xl md:text-5xl lg:text-7xl block mt-2 mb-10 min-h-[1.2em] text-gray-900 dark:text-gray-100`}>
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

            <h4 className={`block ${interMedium.className} text-base lg:text-xl min-h-[1.5em] text-gray-900 dark:text-gray-100 my-5 font-semibold tracking-tight leading-6`}>
                {typeOutStatus.name && (
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(200)
                                .typeString("Full-Stack Developer")
                                .callFunction((params) => {
                                    params.elements.cursor.classList.add("hidden");
                                    dispatchTypeOutStatus({ type: "position", payload: true })
                                })
                                .start();
                        }}
                    />)
                }
            </h4>

            <div className={`${interLight.className} text-sm lg:text-base text-center lg:text-left leading-relaxed my-4 text-gray-700 dark:text-gray-300`}>
                {typeOutStatus.position && (
                    <Typewriter
                        options={{ delay: 1 }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(900)
                                .typeString("Who solves user-facing problems, especially focusing on backend technologies and combining them with frontend technologies.")
                                .typeString(" Passionate about learning new technologies and building reusable components for others. When not at the computer,")
                                .typeString(" I read books and listen to music to improve my productivity and performance.")
                                .callFunction(() => {
                                    dispatchTypeOutStatus({ type: "content", payload: true })
                                })
                                .start();
                        }}
                    />)
                }
            </div>

        </div>
    )
}
