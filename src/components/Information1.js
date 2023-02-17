import React from 'react'
import CustomerDetail from './CustomerDetail'
import Tablenew from './Tablenew'
import { Routes,Route,Outlet } from "react-router-dom"
import Navbar1 from './Navbar1'
import { Testing } from './Testing'
import Testing1 from './Testing1'


function Information1({ user }) {
  return (
    <>
      <div className='container mx-auto sm:pt-20 pt-36 lg:flex '>
        <div className='lg:w-[35%] xl:w-1/4'><CustomerDetail /></div>
        <div className='lg:w-[65%] xl:w-3/4'>
          <Outlet/>
          {/* <Tablenew/> */}
        </div>
      </div>
    </>
  )
}

export default Information1