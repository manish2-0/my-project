import React from 'react'
import {Link} from "react-router-dom"

function AddCard() {
  return (
      <div className="backdrop-filter border-[3px] border-dashed border-slate-300 bg-slate-50 backdrop-blur-md relative p-4 rounded-lg   w-[370px]  sm:w-[300px] md:[350px] min-h-full lg-[370px] flex justify-center items-center m-3">
        <Link to="/newclient" className=' text-[#1e5b98cc] lg:text-7xl text-2xl'>
        <i className="sm:block hidden fa-regular fa-plus"></i>
        <a className='sm:hidden inline-block'>ADD</a>
        </Link>
        </div>
      
  )
}

export default AddCard