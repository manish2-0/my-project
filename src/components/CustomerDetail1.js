import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function CustomerDetail1() {

    const location = useLocation();
    const { values } = location.state;
    const [inputs, setinputs] = useState(values);
    const [infor, setinfor] = useState({});
    // console.log(inputs);

    const userinformation= ()=> {
        axios.get(`http://localhost:80/blp-api/userdetail/${inputs.blpid}`).then(function(response) {
        setinfor(response.data[0]);
        console.log(response.data[0])
       })
   }

   useEffect(() => {
    userinformation();
 // console.log(inputs)
}, []);

    return (
        <div className='mx-auto md:container '>

            <div className="px-6 py-5 mx-3 my-2 text-base border border-gray-300 rounded-lg shadow bg-slate-50">


                <div className='flex justify-center mb-2'>
                    <img className='w-14 h-14' src="https://i.ibb.co/TtnKDDY/iconn.png" alt="" />
                </div>


                <div className='flex flex-wrap justify-between text-gray-400'>
                    <div className="text-lg text-fix">BLP Number: <span className='pl-1 font-semibold text-gray-600 '>{infor.blp_id}</span></div>
                    <div className="text-lg text-fix">ISELL Number: <span className='pl-1 font-semibold text-gray-600 '>{infor.isell}</span></div>


                </div>

                <p className="mb-3 text-lg text-fix" >
                    DC Number:
                    <span className='pl-1 font-semibold text-gray-600 '>{infor.dc_no}</span>
                </p>


                <p className="mb-3 text-fix" >
                    <i class="fa-solid fa-user"></i>
                    <span className='pl-4 font-[600] text-gray-900  fontinformation'>{infor.name}</span>
                </p>

                <div className='flex flex-wrap items-center justify-between mb-3 text-fix'>
                    <div className="flex"><i className="pt-[4px] fa-solid fa-address-book"></i> <div className='pl-4 font-[900] text-gray-900 fontinformation'>{infor.address}</div>
                    </div>
                    <div className=""><i class="fa-sharp fa-solid fa-location-dot"></i> <span className=' pl-4 font-[600] text-gray-900 fontinformation'>{infor.city}</span></div>

                </div>


                <p className="mb-3 text-fix" >
                    <i class="fa-regular fa-calendar"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>{infor.date}</span>
                </p>

                <p className="text-fix" >
                    <i class="fa-solid fa-phone"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>+91 {infor.contact}</span>
                </p>



            </div>

        </div>


    )
}

export default CustomerDetail1;