import React from 'react'
import CustomerDetail from './CustomerDetail'
import CustomerDetail1 from './CustomerDetail1'
import ExtraView1 from './ExtraView1'


function ExtraInformation({user}) {
  return (
    <div className='container sm:pt-20 pt-36 mx-auto lg:flex '>
      <div className='lg:w-[35%] xl:w-1/4 '><CustomerDetail1/></div>
      <div className='lg:w-[65%] xl:w-3/4 '><ExtraView1 /></div>
      </div>
  )
}

export default ExtraInformation