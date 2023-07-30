import React from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'

const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'About'
    },
    {
        id: 3,
        link: 'Experience'
    },
    {
        id: 4,
        link: 'Contact'
    },
]

const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 py-4
    text-white bg-black fixed'>
            <div className='text-4xl font-logo ml-3 ' >
                <h1>Rajnish</h1>
            </div>

            <ul className='hidden md:flex'>
                {/* this property of the tailwind will help you to add mediaquery */}

                {/* this is going to tell react when what all things are going to change (used while traversing the array)*/}
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105
             text-gray-500 duration-200'>
                        {link}
                    </li>
                ))}
            </ul>

            <div className='cursor-pointer pr-4 z-10 text-gray-500'>
                <FaBars size={25}/>
            </div>
        </div>
    )
}

export default Navbar