import React from 'react'
import {Link} from "react-router-dom"

function Customerdata({user}) {



  return (
    <div key={user.blpid} className="block p-4 rounded-lg shadow-lg bg-white max-w-sm m-4">
                <div className='flex justify-between items-center flex-wrap'>
                    <h5 className="text-blue-800 text-xl leading-tight font-bold mb-2 mr-4">BLP ID: <span className='text-gray-800 font-medium'>{user.blpid}</span></h5>
                    <h5 className='text-blue-800 text-sm leading-tight font-bold mb-2'>Date: <span className='text-gray-800 font-medium'>{user.date}</span></h5>
                </div>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Name: <span className='text-gray-800 font-medium'>{user.name}</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>ISELL <span className='text-gray-800 font-medium'>{user.isell}</span></h5>
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
  )
}

export default Customerdata