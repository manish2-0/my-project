import React from 'react'
import {Link} from "react-router-dom"

function Customerdata({user}) {

  return (
    <div key={user.blpid} className="block p-4 rounded-lg shadow-lg bg-white w-[370px] m-4">
                <div className='flex justify-between items-center flex-wrap'>
                    <h5 className="text-blue-800 text-xl leading-tight font-bold mb-2 mr-4">BLP ID: <span className='text-gray-800 font-medium'>{user.blpid}</span></h5>
                    <h5 className='text-blue-800 text-sm leading-tight font-bold mb-2'>Date: <span className='text-gray-800 font-medium'>{user.date}</span></h5>
                </div>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Name: <span className='text-gray-800 font-medium'>{user.name}</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>ISELL: <span className='text-gray-800 font-medium'>{user.isell}</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Address: <span className='text-gray-800 font-medium'>{user.address}</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>City: <span className='text-gray-800 font-medium'>{user.city}</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Contact: <span className='text-gray-800 font-medium'>+91 {user.contact}</span></h5>

                <div className='flex justify-between items-center flex-wrap mt-4'>
                <Link to="/view" state={{ user:user }} className="relative shadow shadow-blue-500/50 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <span className="relative px-7 text-base py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 ">
                            View
                        </span>
                    </Link>

                    <Link to="/editclient" state={{ user:user }} className="relative shadow shadow-blue-500/50 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        <span className="relative px-7 text-base py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 ">
                            Edit
                        </span>
                    </Link>
                </div>

            </div>


    // <div className="backdrop-filter backdrop-blur-md relative block p-4 rounded-lg border border-gray-300 shadow-lg bg-white/90 w-[370px] h-fit m-2">
    //                 <div className='flex justify-left items-center mb-2'>
    //                     <div className='mr-3'>
    //                         <img className='h-12 w-12' src="https://i.ibb.co/4d5prcd/pngaaa-com-81468.png" alt="" />
    //                     </div>
    //                     <div>
    //                         <h5 className="text-slate-800 text-xl leading-tight font-semibold">{user.blpid}</h5>
    //                         <h5 className='text-slate-600 text-base font-medium leading-tight'>{user.date}</h5>
    //                     </div>
    //                 </div>

    //                 <div className='relative  mb-6'>
    //                     <h5 className='text-gray-700 text-lg leading-tight font-[500] '>{user.name}</h5>
    //                     <span className='absolute top-full text-xs text-blue-600 font-bold m-0 p-0'>Name</span>
    //                 </div>


    //                 <div className='relative mb-2'>
    //                     <h5 className='text-gray-700 text-lg leading-tight font-[500] '><span className='font-bold '>ISELL No.: </span>{user.isell}</h5>
    //                     <h5 className='text-gray-700 text-lg leading-tight font-[500] '><span className='font-bold '>DC No.: </span>{user.isell}</h5>
    //                 </div>

    //                 <div className='relative mb-3'>
    //                     <h5 className='text-gray-700 text-lg leading-tight font-[500] '>+91 {user.contact}</h5>
    //                     <span className='absolute top-full text-xs text-blue-600 font-bold m-0 p-0'>Contact</span>
    //                 </div>

    //                 <button class="absolute bottom-3 right-3  hover:bg-blue-700 text-blue-900 font-bold py-2 px-6 rounded">
    //                     View
    //                 </button>

    //             </div>
  )
}

export default Customerdata