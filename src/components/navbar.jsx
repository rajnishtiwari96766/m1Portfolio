import React from 'react'

const links=[
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'About'
    },
    {
        id:3,
        link:'Experience'
    },
    {
        id:4,
        link:'Contact'
    },
]

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 py-4
    text-white bg-black fixed'>
        <div className='text-4xl font-logo ml-3 ' >
            <h1>Rajnish</h1>
        </div>

        <ul className='flex'>

            {links.map(link=>(
            <li key={link.id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105
             text-gray-500 duration-200'>
               home 
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Navbar