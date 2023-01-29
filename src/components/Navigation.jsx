import React, { useState } from 'react'
import { Link } from 'react-scroll'

const list = [
    { id: 1, name: "home", to: "home" },
    { id: 2, name: "about", to: "about" },
    { id: 3, name: "contact", to: "contact" },
    { id: 4, name: "projects", to: "project" }
]


export default function Navigation() {

    const [openSideNav, setOpenSideNav] = useState(true);


    function navLink(isNavbar) {
        return list.map(list => <li key={list.id} className={`${isNavbar ? "mx-9" : "my-9"} capitalize text-lg text-gray-600 font-light cursor-pointer`}>
            <Link
                activeClass='font-normal text-green-600'
                to={list.to}
                spy={true}
                smooth={true}
                hashSpy={true}
            >
                {list.name}
            </Link>
        </li>)
    }


    function navBar() {

        return (
            <header>
                <nav className='w-full fixed flex justify-end items-center'>
                    <div className={`md:hidden py-4 px-11 opacity-1 duration-500 ${!openSideNav && " opacity-0"}`}>
                        {hamburger()}
                    </div>
                    <ul className='hidden md:flex py-4 px-11'>
                        {navLink(true)}
                    </ul>
                </nav>
            </header>
        )
    }



    function sideNav() {
        return (
            <nav
                className={`fixed right-0 h-screen min-w-[15em] max-w-[20em] z-50 transform translate-x-0 duration-300 ${openSideNav && " translate-x-96"}`}
            >
                <div className='h-full bg-white'>
                    <div className='h-1/6 flex justify-center items-center'>
                        {hamburger()}
                    </div>
                    <div className='h-5/6 flex justify-center items-center px-5 shadow-xl'>
                        <ul className='px-5 -mt-24'>
                            {navLink(false)}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }



    function hamburger() {

        const handleBtnClick = () => setOpenSideNav(prev => !prev);

        return (
            <button onClick={() => handleBtnClick()} className='w-[2em] h-[2em] outline-none relative'>
                <span className={`absolute bg-gray-700 h-[0.1em] w-full rounded-md transform translate-y-0 rotate-0 duration-500 delay-75 ${!openSideNav && "rotate-45 translate-y-4"}`}></span>
                <span className={`absolute bg-gray-700 h-[0.1em] w-full transform translate-y-2 rounded-md opacity-1 duration-200 delay-75 ${!openSideNav && " opacity-0"}`}></span>
                <span className={`absolute bg-gray-700 h-[0.1em] w-full transform translate-y-4 translate-x-0 rounded-md rotate-0 duration-500 delay-75 ${!openSideNav && " -rotate-45"}`}></span>
            </button>
        )
    }


    return (
        <>
            {navBar()}
            {sideNav()}
        </>
    )
}
