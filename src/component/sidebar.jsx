import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='h-25 w-20 bg-stone-600 my-40 text-white p-2 fixed'>
            <div className='p-4 hover:scale-125'>
            <i class="fa-brands fa-github fa-2xl"></i>
            </div>

            <div className='p-4 hover:scale-125'>
            <i class="fa-brands fa-linkedin fa-2xl"></i>
            </div>

            <div className='p-4 hover:scale-125'>
            <i class="fa-solid fa-envelope fa-2xl"></i>
            </div>

            <div className='p-4 hover:scale-125'>
               <i class="fa-solid fa-paper-plane fa-2xl"></i>
            </div>
        </div>

    </div>
  )
}

export default Sidebar