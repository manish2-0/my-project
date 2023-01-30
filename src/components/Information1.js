import React from 'react'
import CustomerDetail from './CustomerDetail'
import Tablenew from './Tablenew'

function Information1({user}) {
  return (
    <div className='container sm:pt-20 pt-36 mx-auto lg:flex '>
      <div className='lg:w-[35%] xl:w-1/4'><CustomerDetail/></div>
      <div className='lg:w-[65%] xl:w-3/4'><Tablenew/></div>
      </div>
  )
}

export default Information1