import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ExtraView1() {

    const location = useLocation();
    const { values } = location.state;
    const [inputs, setinputs] = useState(values);

    const [files, setfiles] = useState([]);

    const usertable= ()=> {
        axios.get(`http://localhost:80/blp-api/upload/${inputs.srno}`).then(function(response) {
        setfiles(response.data);
        // console.log(response.data)
       })
   }

   useEffect(() => {
       usertable();
    // console.log(inputs)
   }, []);
 

    return (
        <div className='flex justify-start md:flex-nowrap flex-wrap'>
            <div className='md:w-2/5 lg:w-1/3 w-full mt-4 '>
            <span className='mx-4 text-2xl text-fix'>Extra Information:</span>
                <div className="block p-4 rounded-lg shadow-md border border-gray-300 bg-slate-50 m-4 mt-1">

                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Nanosil: <span className='text-gray-800 font-medium'> {inputs.nanosil} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Super Flex: <span className='text-gray-800 font-medium'> {inputs.superflex} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Silicon: <span className='text-gray-800 font-medium'> {inputs.silicon} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Expenses: <span className='text-gray-800 font-medium'></span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Food: <span className='text-gray-800 font-medium'> {inputs.food} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Travelling: <span className='text-gray-800 font-medium'> {inputs.travelling} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Accomodation: <span className='text-gray-800 font-medium'> {inputs.accomodation} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Extra Expenses: <span className='text-gray-800 font-medium'> {inputs.expenses} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Remarks: <span className='text-gray-800 font-medium'> {inputs.remarks2} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Billing status: <span className='text-gray-800 font-medium'> {inputs.billstatus} </span></h5>
                    <h5 className='text-fix text-base leading-tight font-bold mb-2'>Remarks: <span className='text-gray-800 font-medium'> {inputs.remarks3} </span></h5>

                </div>


            </div>

            <div className='w-full order-2 md:w-2/3'>
              
                <div className="relative m-4 overflow-x-auto rounded-xl scrollbar-hide">
                <span className='text-2xl text-fix'>Files:</span>
                    <table className="container w-full m-1 mx-auto text-sm text-left text-gray-500 border  shadow-md">
                        <thead className=" uppercase bg-fix text-white border-b border-gray-300">
                            <tr className='text-base '>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    File
                                </th>
                                <th scope="col" className="px-1 py-3 text-fix">
                                    View
                                </th>
                                {/* <th scope="col" className="px-1 py-3 text-fix">
                                    Download
                                </th>
                                <th scope="col" className="px-1 py-3 text-fix">
                                    Delete
                                </th> */}

                            </tr>
                        </thead>

                        <tbody className=''>

                        {files.map((user, key) =>

                            <tr className="bg-white border-b hover:bg-gray-50">

                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                    {key+1}
                                </th>
                                <td className="px-6 py-2">
                                    {user.name} 
                                </td>
                                <td className="px-1 py-2 text-fix text-center">
                                    <a href={user.link} target="_blank">View</a>
                                </td>
                                {/* <td className="px-1 py-2 text-fix text-center">
                                    <a href=""> Download</a>
                                </td>
                                <td className="px-1 py-2 text-fix text-center">
                                    <a href=""> Delete</a>
                                </td> */}

                            </tr>
                        )}

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default ExtraView1