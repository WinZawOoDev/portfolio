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

    const { openSideNav } = useContext(AppContext);

    return (
        <header>
            <nav className='w-full fixed flex justify-end items-center'>
                <div className={`md:hidden py-4 px-11 opacity-1 duration-500 ${!openSideNav && " opacity-0"}`}>
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

    const { openSideNav } = useContext(AppContext);

    return (
        <nav
            className={`fixed right-0 h-screen min-w-[15em] max-w-[20em] transform translate-x-0 duration-200 md:translate-x-96 ${openSideNav && "translate-x-96"}`}
        >
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

    const { openSideNav, setOpenSideNav } = useContext(AppContext);

    const handleBtnClick = () => setOpenSideNav(prev => !prev);

    return (
        <button onClick={() => handleBtnClick()} className='w-[2.5em] h-[2.5em] outline-none relative'>
            <div className={`bg-gray-600 h-[0.1em] w-full rounded-md transform translate-y-0 rotate-0 duration-200 delay-100 ${!openSideNav && "rotate-45 translate-y-4"}`}></div>
            <div className={`bg-gray-600 h-[0.1em] w-full transform translate-y-2 rounded-md opacity-1 duration-150 delay-75 ${!openSideNav && " opacity-0"}`}></div>
            <div className={`bg-gray-600 h-[0.1em] w-full transform translate-y-4 translate-x-0 rounded-md rotate-0 duration-200 delay-100 ${!openSideNav && " -rotate-45"}`}></div>
        </button>
    )
}

