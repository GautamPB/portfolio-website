'use client'

import { useEffect, useState } from 'react'

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY
            if (scroll > 200) {
                setShowNavbar(true)
            } else {
                setShowNavbar(false)
            }
        })
    }, [])

    return (
        <div
            className={`${
                showNavbar ? 'bg-white' : 'bg-transparent'
            } p-6 top-0 fixed w-full flex shadow-md z-50 transition duration-300`}
        >
            <div className="ml-auto">
                <button
                    className={`rounded-xl font-semibold  transition duration-300 ease-out border px-4 cursor-pointer py-2 ${
                        showNavbar
                            ? 'text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white'
                            : 'text-white hover:text-black hover:bg-white'
                    }`}
                >
                    Contact Me
                </button>
            </div>
        </div>
    )
}

export default Header
