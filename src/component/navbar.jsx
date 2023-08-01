import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='h-20 w-full bg-stone-600 text-white flex items-center justify-between fixed'>
            <h1 className='font-bold font-logo px-16 text-4xl'>
                Rajnish
            </h1>
            
            <div className='flex px-10'>
            <div className='px-10'>
                Home
            </div>
            <div className='px-10'>
                Experience
            </div>
            <div className='px-10'>
                About me
            </div>
            <div className='px-10'>
                Contact
            </div>
            </div>
            
    </div>
    </div>
  )
}

export default Navbar