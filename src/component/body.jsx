import React from 'react'
import Sidebar from './sidebar'
import Home from './home'

const Body = () => {
  return (
    <div>
    <div className='h-screen bg-black overflow-x-auto'>
  <Sidebar/>
  <Home/>
 </div>
    </div>
  )
}

export default Body