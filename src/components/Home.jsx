import React from 'react'
import { ReactComponent as CodingSvg } from '../asset/coding.svg'

export default function Home() {
    return (
        <section id='home' className='h-screen md:flex sm: py-28 justify-center text-center items-center bg-gray-50'>
            <div className=" md:w-1/2 flex justify-center md:text-left mx-5">
                <div className='border-l-8 border-l-green-900  rounded-bl-3xl rounded-tl-3xl drop-shadow-2xl pl-10 py-5'>
                    <div className="mb-6">
                        <span className="text-3xl pr-3 text-gray-800">Hi ,</span>
                        <span className="text-2xl pl-1 font-light"> my name is</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl capitalize font-bold text-gray-700">win zaw oo</h1>
                    <div className='max-w-2xl my-5'>
                        <p className='break-before-auto indent-8 font-light text-lg text-gray-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .
                        </p>
                    </div>

                </div>
            </div>
            <div className="md:w-1/2  flex justify-center items-center mx-5">
                <CodingSvg className='sm:mx-16 md:mx-0' />
            </div>
        </section>
    )
}
