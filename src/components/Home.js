import React from 'react'
import Homepage from './Homepage'
import Navbar1 from './Navbar1'

function Home() {
  return (
    <div className='relative top-0 h-auto'>
        <Navbar1 />
        {/* <div className='sticky border-black sm:pb-6'> */}
        <Homepage />
        {/* </div> */}
    </div>
  )
}

export default Home