import React from 'react'

const list = ["home", "about", "contact", "projects"];


export default function Navbar() {
    return (
        <nav className='w-full fixed flex justify-end bg-white'>
            <ul className='flex py-2 px-11'>
                {list.map(list => <li className='mx-9 capitalize text-sm text-gray-600 font-medium cursor-pointer'>
                    {list}
                </li>)}
            </ul>
        </nav>
    )
}
