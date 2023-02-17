import React from 'react'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function ExtraView1() {

    const location = useLocation();
    const { values } = location.state;
    const [inputs, setinputs] = useState(values);

    const [files, setfiles] = useState();

    //     const usertable= ()=> {
    //         axios.get(`http://localhost:80/blp-api/upload/${inputs.srno}`).then(function(response) {
    //         setfiles(response.data);
    //         // console.log(response.data)
    //        })
    //    }

    useEffect(() => {
        //    usertable();
        // console.log(files)
    }, []);


    return (
        <div className='flex flex-wrap justify-start md:flex-nowrap'>
            <div className='w-full mt-2 md:w-2/5 lg:w-1/3 '>
                <span className='mx-4 text-2xl text-fix'>Extra Information:</span>
                <div className="block p-4 m-4 mt-1 border border-gray-300 rounded-lg shadow-md bg-slate-50">
                    <h5 className='mb-2 text-base font-bold leading-tight underline text-fix'>Chemicals used (in ml):</h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Nanosil: <span className='font-medium text-gray-800'> { inputs.nanosil }ml </span></h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Super Flex: <span className='font-medium text-gray-800'> { inputs.superflex }ml </span></h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Silicon: <span className='font-medium text-gray-800'> { inputs.silicon }ml </span></h5>
                    <h5 className='mb-2 text-base font-bold leading-tight underline text-fix'>Expenses: <span className='font-medium text-gray-800'></span></h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Food: <span className='font-medium text-gray-800'> ₹{ inputs.food } </span></h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Travelling: <span className='font-medium text-gray-800'> ₹{ inputs.travelling } </span></h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Accomodation: <span className='font-medium text-gray-800'> ₹{ inputs.accomodation } </span></h5>
                    <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Extra Expenses: <span className='font-medium text-gray-800'> ₹{ inputs.expenses } </span></h5>
                    <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.remarks2 } </span></h5>
                    <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Billing status: <span className='font-medium text-gray-800'> { inputs.billstatus } </span></h5>
                    <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.remarks3 } </span></h5>

                </div>


            </div>

            <div className='order-2 w-full md:w-2/3'>

                <div className="relative m-4 mt-2 overflow-x-auto rounded-xl scrollbar-hide">
                    <span className='text-2xl text-fix'>Files:</span>
                    <table className="container w-full m-1 mx-auto text-sm text-left text-gray-500 border shadow-md">
                        <thead className="text-white uppercase border-b border-gray-300 bg-fix">
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

                            </tr>
                        </thead>

                        <tbody className=''>
                            {/* {console.log(!files)} */ }
                            { !files
                                ? <tr className="bg-white border-b hover:bg-gray-50">
                                    <td colSpan="3" className="px-6 py-2 text-lg font-medium text-gray-900 md:text-center whitespace-nowrap">
                                        No Data Found
                                    </td>
                                </tr>

                                : files.map((f, key) =>

                                    <tr className="bg-white border-b hover:bg-gray-50">

                                        <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                            { key + 1 }
                                        </th>
                                        <td className="px-6 py-2">
                                            { f.name }
                                        </td>
                                        <td className="px-1 py-2 text-center text-fix">
                                            View
                                        </td>

                                    </tr>
                                ) }

                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default ExtraView1