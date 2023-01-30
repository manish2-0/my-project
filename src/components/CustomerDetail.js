import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function CustomerDetail() {
    const location = useLocation();
    const {user} = location.state;
    
    return (
        <div className='mx-auto md:container '>

            <div className="px-6 py-5 mx-3 my-2 text-base border border-gray-300 rounded-lg shadow bg-slate-50">


                <div className='flex justify-center mb-2'>
                    <img className='w-14 h-14' src="https://i.ibb.co/TtnKDDY/iconn.png" alt="" />
                </div>


                <div className='flex flex-wrap justify-between text-gray-400'>
                    <div className="text-lg text-fix">BLP Number: <span className='pl-1 font-semibold text-gray-600 '>{user.blp_id}</span></div>
                    <div className="text-lg text-fix">ISELL Number: <span className='pl-1 font-semibold text-gray-600 '>{user.isell}</span></div>


                </div>

                <p className="mb-3 text-lg text-fix" >
                    DC Number:
                    <span className='pl-1 font-semibold text-gray-600 '>{user.dc_no}</span>
                </p>


                <p className="mb-3 text-fix" >
                    <i class="fa-solid fa-user"></i>
                    <span className='pl-4 font-[600] text-gray-900  fontinformation'>{user.name}</span>
                </p>

                <div className='flex flex-wrap items-center justify-between mb-3 text-fix'>
                    <div className="flex"><i className="pt-[4px] fa-solid fa-address-book"></i> <div className='pl-4 font-[900] text-gray-900 fontinformation'>{user.address}</div>
                    </div>
                    <div className=""><i class="fa-sharp fa-solid fa-location-dot"></i> <span className=' pl-4 font-[600] text-gray-900 fontinformation'>{user.city}</span></div>

                </div>


                <p className="mb-3 text-fix" >
                    <i class="fa-regular fa-calendar"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>{user.date}</span>
                </p>

                <p className="text-fix mb-3" >
                    <i class="fa-solid fa-phone"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>+91 {user.contact}</span>
                </p>

                <div className='text-fix flex justify-between flex-wrap'>
                    <Link to="/editclient" state={{ user:user }} className='bg-fix text-white px-8 py-2 rounded-md'>Edit</Link>
                    <Link to="/newentry" state={{ user:user }} className='bg-fix text-white px-8 py-2 rounded-md'>Add</Link>

                </div>


            </div>

        </div>


    )
}

export default CustomerDetail