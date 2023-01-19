import React from 'react'
import { useState,useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Extraview() {


    const location = useLocation();
    const { values } = location.state;
    const [inputs, setinputs] = useState(values);
    // console.log(inputs);



    const [files, setfiles] = useState([]);

    const usertable= ()=> {
        axios.get(`http://localhost:80/api/upload/${inputs.srno}`).then(function(response) {
        setfiles(response.data);
       })

   
   }

   useEffect(() => {
       usertable();
   }, []);
 

    return (

        <div className="flex-col items-center justify-center w-full">
            {/* <div className="p-6 m-4 border border-gray-400 rounded-lg shadow-md bg-blue-500 max-w-[400px] drop-shadow-2xl text-[rgb(2,45,138)]">


                <p className=" mb-2 text-[18px] font-bold   " >
                    Nanosil:
                    <span className='font-normal text-white'>100ml</span>
                </p>

                <p className="mb-2 text-[18px] font-bold   " >
                    Silicon:
                    <span className='font-normal text-white'>100ml</span>
                </p>

                <p className="mb-2 text-[18px] font-bold   " >
                    Super Flex:
                    <span className='font-normal text-white'>100ml</span>
                </p>

                <p className="mb-2 text-[18px] font-bold   " >
                    Charges Total:
                    <span className='font-normal text-white'>400</span>

                    <div className='ml-[30px] mt-[5px] border border-slate-300 p-[10px]'>
                        <p className="mb-2 text-[18px] font-bold   " >
                            Food:
                            <span className='font-normal text-white'>100</span>
                        </p>
                        <p className="mb-2 text-[18px] font-bold   " >
                            Accomodation:
                            <span className='font-normal text-white'>100</span>
                        </p>
                        <p className="mb-2 text-[18px] font-bold   " >
                            Travelling:
                            <span className='font-normal text-white'>100</span>
                        </p>
                        <p className="mb-2 text-[18px] font-bold   " >
                            Other Charges:
                            <span className='font-normal text-white'>100</span>
                        </p>
                    </div>
                </p>

                <p className="mb-2 text-[18px] font-bold   " >
                    Remarks:
                    <span className='font-normal text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium consequuntur vero earum? Similique corporis praesentium magni deleniti quas harum vel!</span>
                </p>


                <p className="mb-2 text-[18px] font-bold   " >
                    Billing Status:
                    <span className='font-normal text-white'>Done</span>
                </p>

                <p className="mb-2 text-[18px] font-bold   " >
                    Bill Attachments:
                    <span className='font-normal text-white'>No Files Uploaded.</span>


                </p>

            </div> */}


            <div className="block p-4 rounded-lg shadow-lg bg-white max-w-sm m-4">

                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Nanosil: <span className='text-gray-800 font-medium'>{ inputs.nanosil }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Super Flex: <span className='text-gray-800 font-medium'>{ inputs.superflex }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Silicon: <span className='text-gray-800 font-medium'>{ inputs.silicon }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Expenses: <span className='text-gray-800 font-medium'></span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Food: <span className='text-gray-800 font-medium'>{ inputs.food }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Travelling: <span className='text-gray-800 font-medium'>{ inputs.travelling }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Accomodation: <span className='text-gray-800 font-medium'>{ inputs.accomodation }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Extra Expenses: <span className='text-gray-800 font-medium'>{ inputs.expenses }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Remarks: <span className='text-gray-800 font-medium'>{ inputs.remarks2 }</span></h5>
                <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Billing status: <span className='text-gray-800 font-medium'>{ inputs.billstatus }</span></h5>
                {/* <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Attachments: <span className='text-gray-800 font-medium'></span></h5> */ }

            </div>

            <div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg">
                <h2>Uploaded Files:</h2>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 bg-gray-50 ">
                        <tr className='text-[16px]'>
                            <th scope="col" className="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                View
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                    {files.map((user, key) =>

                            <tr className="bg-white border-b hover:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {key+1}
                                </th>
                                <td className="px-6 py-4">
                                    {user.filename}
                                </td>
                                <td className="px-6 py-4">
                                    <a href={user.filelink} target="_blank">View</a> 
                                </td>

                            </tr>   
                    )}

                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default Extraview