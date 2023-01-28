import React from 'react'

function CustomerDetail() {
    return (
        <div className='mx-auto md:container '>

            <div className="px-6 py-5 mx-3 my-2 text-base border border-gray-400 rounded-lg shadow-md bg-slate-50">


                <div className='flex justify-center mb-2'>
                    <img className='w-14 h-14' src="https://i.ibb.co/TtnKDDY/iconn.png" alt="" />
                </div>


                <div className='flex flex-wrap justify-between text-gray-400'>
                    <div className="text-lg">BLP Number: <span className='pl-1 font-semibold text-gray-600 '>BLP100001</span></div>
                    <div className="text-lg">ISELL Number: <span className='pl-1 font-semibold text-gray-600 '>123456789</span></div>


                </div>

                <p className="mb-3 text-lg text-gray-400" >
                    DC Number:
                    <span className='pl-1 font-semibold text-gray-600 '>123456789</span>
                </p>


                <p className="mb-3 text-gray-400" >
                    <i class="fa-solid fa-user"></i>
                    <span className='pl-4 font-[600] text-gray-900  fontinformation'>Manish Kumavat</span>
                </p>

                <div className='flex flex-wrap items-center justify-between mb-3 text-gray-400'>
                    <div className="flex"><i className="pt-[4px] fa-solid fa-address-book"></i> <div className='pl-4 font-[900] text-gray-900 fontinformation'>B/305, Shreeji Apartment, Cabin Road, Bhayandar East</div>
                    </div>
                    <div className=""><i class="fa-sharp fa-solid fa-location-dot"></i> <span className=' pl-4 font-[600] text-gray-900 fontinformation'>Mumbai</span></div>

                </div>


                <p className="mb-3 text-gray-400" >
                    <i class="fa-regular fa-calendar"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>25-01-2023</span>
                </p>

                <p className="text-gray-400 " >
                    <i class="fa-solid fa-phone"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>+91 9967042936</span>
                </p>


            </div>

        </div>


    )
}

export default CustomerDetail