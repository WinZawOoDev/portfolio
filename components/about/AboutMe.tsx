'use client';

import React from 'react'
import { Spectral, Work_Sans, DM_Sans } from 'next/font/google'
import Typewriter from 'typewriter-effect'
import { useIntroContext } from './IntroProvider';

const spectralFont = Spectral({
    weight: "800",
    subsets: ["latin"]
})
const workSansFont = Work_Sans({ weight: "300", subsets: ["latin"] })
const dmSansFont = DM_Sans({ weight: "600", subsets: ["latin"] });

export default function AboutMe() {

    const { typeOutStatus, dispatchTypeOutStatus } = useIntroContext();

    return (
        <div className='relative pt-24 md:pt-28 lg:pt-0 lg:mt-0 w-full lg:w-[36em]'>
            <span className='mb-3 text-sm lg:text-base whitespace-pre-line text-gray-800'>
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

            <h1 className={`${spectralFont.className} text-4xl md:text-5xl lg:text-7xl block mt-2 mb-10 text-gray-900`}>
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

            <h4 className={`block ${dmSansFont.className} text-base  lg:text-xl lg:text-ba text-gray-900 my-5 font-bold leading-3`}>
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

            <p className={`${workSansFont.className} text-sm lg:text-base text-center my-4 text-gray-800`}>
                {typeOutStatus.position && (
                    <Typewriter
                        options={{ delay: 1 }}
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(900)
                                .typeString("Who solves user-facing problems, especially focusing on backend technologies and combining them with fronted technologies.")
                                .typeString(" Passionate about learning new technologies and building reusable components for others. When I was in free time, not in computer")
                                .deleteChars(15)
                                .typeString(" reading books and listened to music to improve my productivity and performance. Being a self-taught developer with continuously learns and catches up to new techlonologies time on time.")
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
