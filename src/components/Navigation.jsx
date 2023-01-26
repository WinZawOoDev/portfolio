import React, { useContext } from 'react'
import { Link } from 'react-scroll'
import { AppContext } from '../App'

const list = [
    { id: 1, name: "home", to: "home" },
    { id: 2, name: "about", to: "about" },
    { id: 3, name: "contact", to: "contact" },
    { id: 4, name: "projects", to: "project" }
]


export function Navbar() {
    return (
        <header>
            <nav className='w-full fixed flex justify-end items-center'>
                <div className='md:hidden py-4 px-11'>
                    <Hamburger />
                </div>
                <ul className='hidden md:flex py-4 px-11'>
                    <NavLink listStyleClass='mx-9 capitalize text-lg text-gray-600 font-light cursor-pointer' />
                </ul>
            </nav>
        </header>
    )
}


export function SideNav() {
    return (
        <nav className='fixed right-0 h-screen min-w-[15em] max-w-[20em]'>
            <div className='h-full bg-white'>
                <div className='h-1/6 flex justify-center items-center'>
                    <Hamburger />
                </div>
                <div className='h-5/6 flex justify-center items-center px-5 shadow-xl'>
                    <ul className='px-5 -mt-24'>
                        <NavLink listStyleClass="my-9 capitalize text-lg texst-gay-600 font-light cursor-pointer" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const NavLink = ({ listStyleClass }) => list.map(list => <li key={list.id} className={listStyleClass}>
    <Link
        activeClass='font-normal'
        to={list.to}
        spy={true}
        smooth={true}
        hashSpy={true}
    >
        {list.name}
    </Link>
</li>
)


function Hamburger() {
    const { showSideNav, setShowSideNav } = useContext(AppContext);
    return (
        <button onClick={() => setShowSideNav(prev => !prev)} className='w-[2.5em] outline-none'>
            <div className={`bg-gray-600 h-[0.1em] w-full transform translate-y-0 rounded-md rotate-0 ${showSideNav ? " rotate-45" : ''}`}></div>
            <div className={`bg-gray-600 h-[0.1em] w-full transform translate-y-2 rounded-md`}></div>
            <div className={`bg-gray-600 h-[0.1em] w-full transform translate-y-4 rounded-md`}></div>
        </button>
    )
}

