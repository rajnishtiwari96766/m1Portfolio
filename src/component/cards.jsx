import React from 'react'

const Cards = () => {
  return (
    <div className='flex items-center justify-between px-10 hover:scale-105 duration-100 z-10'>
    <div className='w-96 bg-white rounded shadow-lg'>
            <img src='https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-14936128.jpg&fm=jpg'></img>
        <div className='text-black font-bold text-3xl px-8 py-1'>The coldest summer</div>
        <div>
            <p className='text-black px-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, corrupti aspernatur. 
            Iusto, commodi. Sunt rem repudiandae consequatur excepturi totam fugiat deserunt 
            labore blanditiis animi nemo, autem laudantium, eveniet fugit assumenda!
            </p>
        </div>
    </div>
    </div>
  )
}

export default Cards