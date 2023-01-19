import React from 'react'

import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

function Information() {

    const location = useLocation();
    const {user} = location.state;

    return (

        <div className="p-6 m-4 border border-gray-400 rounded-lg shadow-md bg-slate-50">


            <h1 className="mb-2 text-[32px] font-semibold text-blue-600">Information Card</h1>

            <div className='mb-2 flex justify-between text-[18px]  text-gray-900 flex-wrap'>
                <div className="font-bold ">BLP Number: <span className='font-normal'>{user.blpid}</span></div>
                <div className="font-bold ">ISELL Number: <span className='font-normal'>{user.isell}</span></div>

            </div>


            <div className='mb-2 flex justify-between text-[18px]  text-gray-900 flex-wrap'>
                <div className="font-bold ">Address: <span className='font-normal'>{user.address}</span></div>
                <div className="font-bold ">City: <span className='font-normal'>{user.city}</span></div>

            </div>


            <p className="mb-2 text-[18px] font-bold text-gray-900" >
                Name:
                <span className='font-normal'>{user.name}</span>
            </p>

            <p className="mb-2 text-[18px] font-bold text-gray-900" >
                Date:
                <span className='font-normal'>{user.date}</span>
            </p>

            <p className="mb-2 text-[18px] font-bold text-gray-900" >
                Contact No:
                <span className='font-normal'>+91 {user.contact}</span>
            </p>

            <div className='mb-2 flex text-[18px]  text-gray-900 flex-wrap'>

                <Link to="/newentry" state={{ user:user }} className='cursor-pointer px-[15px] py-[4px] border border-black bg-white rounded-lg mr-[15px] hover:bg-blue-500 hover:text-white hover:border-white'>Add Entry</Link>

            </div>

        </div>

    )
}

export default Information