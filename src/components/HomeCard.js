import React from 'react'
import {Link} from "react-router-dom"
// import moment from 'moment'
import moment from 'moment/moment'

function HomeCard({user}) {

    return (
        <div className=" hover:bg-gray-50 backdrop-filter backdrop-blur-md relative block p-4 rounded-lg custom-shadow bg-white w-[370px] sm:w-[300px] md:[350px] lg-[370px]  h-fit m-3">
             {/* <span class="absolute right-2 bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Pending</span> */}
             {/* <span class="absolute right-2 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Done</span> */}

            <div className='flex items-center mb-2 justify-left'>
                <div className='mr-3'>
                    <i className=' fa-regular fa-user fa-lg'></i>
                </div>
                <div>
                    <h5 className="text-xl font-semibold leading-tight text-slate-800">{user.blp_id}</h5>
                    <h5 className='text-base font-medium leading-tight text-slate-600'>{moment(user.date).format("DD MMM YYYY")}</h5>
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

            <div className='relative mb-1'>
                <h5 className='text-gray-700 text-lg leading-tight font-[500] '>+91 {user.contact}</h5>
                {/* <span className='absolute p-0 m-0 text-xs font-bold text-fix top-full'>Contact</span> */}

            </div>
                {
                    user.work_status=="Pending"
                    ?<span class=" relative bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-red-900 dark:text-red-300 border border-red-400">Work</span>
                    :<span class=" relative bg-green-100 text-green-700 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Work</span>
                }{ 
                    user.bill_status=="Pending"
                    ?<span class="  relative bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-red-900 dark:text-red-300 border border-red-400">Bill</span>
                    :<span class="  relative bg-green-100 text-green-700 text-xs font-medium mr-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Bill</span>

                }
                
            <Link  to="/view" state={{ user:user }}  className="homepagebutton absolute bottom-3 right-3 bg-fix hover:bg-[#1967b6] text-white py-2 px-6 rounded">
                View
            </Link>

        </div>
    )
}

export default HomeCard