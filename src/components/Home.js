import React from 'react'
import Homepage from './Homepage'
import Navbar1 from './Navbar1'

function Home() {
  return (
    <div className='h-screen homebg fixed w-screen overflow-hidden'>
        <Navbar1 />
        <div className='overflow-auto scrollbar-hide h-[90vh] pb-20 sm:pb-6'>
        <Homepage />
        </div>
    </div>
  )
}

export default Home