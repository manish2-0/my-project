import React from 'react'

function AddCard() {
  return (
    <div className="backdrop-filter bg-slate-200 backdrop-blur-md border relative p-4 rounded-lg  shadow-lg  w-[370px]  sm:w-[300px] md:[350px] min-h-full lg-[370px] flex justify-center items-center m-3">
        <button className='w-full text-blue-600 lg:text-7xl text-2xl'>
        <i className='md:block hidden' class="fa-solid fa-plus"></i>
        <a className='md:hidden block'>ADD</a>
        </button>

           

        </div>
  )
}

export default AddCard