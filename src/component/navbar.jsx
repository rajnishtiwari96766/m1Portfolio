import React from 'react'

const Navbar = () => {
    const handleScrollSection=(id)=>{
        const section=document.getElementById(id);

        if(section){
            section.scrollIntoView({behavior:'smooth'});
        }
    }
    
  return (
    <div>
        <div className='h-20 w-full bg-stone-600 text-white flex items-center justify-between fixed'>
            <h1 className='font-bold font-logo px-16 text-4xl cursor-pointer'>
                Rajnish
            </h1>
            
            <div className='flex px-10'>
            <div className='px-10 cursor-pointer' id='home' onClick={()=>handleScrollSection('home')}>
                Home
            </div>
            <div className='px-10 cursor-pointer' id='experience' onClick={()=>handleScrollSection('experience')}>
                Experience
            </div>
            <div className='px-10 cursor-pointer' id='about_me' onClick={()=>handleScrollSection('about_me')}>
                About me
            </div>
            <div className='px-10 cursor-pointer' id='contact' onClick={()=>handleScrollSection('contact')}>
                Contact
            </div>
            </div>
            
    </div>
    </div>
  )
}

export default Navbar