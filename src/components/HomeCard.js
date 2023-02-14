import React from 'react'
import {Link} from "react-router-dom"

function HomeCard({user}) {
    return (
        <div className="hover:bg-gray-50 backdrop-filter backdrop-blur-md relative block p-4 rounded-lg border border-gray-200 shadow-md bg-white w-[370px] sm:w-[300px] md:[350px] lg-[370px]  h-fit m-3">
            <div className='flex items-center mb-2 justify-left'>
                <div className='mr-3'>
                    <i className=' fa-regular fa-user fa-lg'></i>
                    {/* <img className='w-12 h-12' src="https://i.ibb.co/4d5prcd/pngaaa-com-81468.png" alt="" /> */}
                </div>
                <div>
                    <h5 className="text-xl font-semibold leading-tight text-slate-800">{user.blp_id}</h5>
                    <h5 className='text-base font-medium leading-tight text-slate-600'>{user.date}</h5>
                </div>
            </div>

            <div className='relative mb-6'>
                <h5 className='text-gray-700 text-lg leading-tight font-[500] '>{user.name}</h5>
                <span className='absolute p-0 m-0 text-xs font-bold text-fix top-full'>Name</span>
            </div>


            <div className='relative mb-2'>
                <h5 className='text-gray-700 text-lg leading-tight font-[500] '><span className='font-bold '>ISELL No.: </span>{user.isell}</h5>
                <h5 className='text-gray-700 text-lg leading-tight font-[500] '><span className='font-bold '>DC No.: </span>{user.dc_no}</h5>
            </div>

            <div className='relative mb-3'>
                <h5 className='text-gray-700 text-lg leading-tight font-[500] '>+91 {user.contact}</h5>
                <span className='absolute p-0 m-0 text-xs font-bold text-fix top-full'>Contact</span>
            </div>

            <Link  to="/view" state={{ user:user }}  className=" absolute bottom-3 right-3 bg-fix hover:bg-[#1967b6] text-white font-bold py-2 px-6 rounded">
                View
            </Link>

        </div>
    )
}

export default HomeCard