import React from 'react'
import Sidebar from './sidebar'
import Home from './home'
import Experience from './experience'

const Body = () => {
  return (
    <div>
    <div className='h-screen bg-black overflow-x-auto'>
  <Sidebar/>
  <Home/>
  <Experience/>
 </div>
    </div>
  )
}

export default Body