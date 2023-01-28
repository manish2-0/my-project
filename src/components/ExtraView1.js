import React from 'react'

function ExtraView1() {
    return (
        <div className='flex justify-start md:flex-nowrap flex-wrap'>
            <div className='md:w-2/5 lg:w-1/3 w-full border'>

                <div className="block p-4 rounded-lg shadow-lg bg-white m-4">

                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Nanosil: <span className='text-gray-800 font-medium'> 10ml </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Super Flex: <span className='text-gray-800 font-medium'> 10ml </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Silicon: <span className='text-gray-800 font-medium'> 10ml </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Expenses: <span className='text-gray-800 font-medium'></span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Food: <span className='text-gray-800 font-medium'> 10 </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Travelling: <span className='text-gray-800 font-medium'> 20 </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Accomodation: <span className='text-gray-800 font-medium'> 30 </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Extra Expenses: <span className='text-gray-800 font-medium'> 40 </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Remarks: <span className='text-gray-800 font-medium'> Work done </span></h5>
                    <h5 className='text-blue-800 text-base leading-tight font-bold mb-2'>Billing status: <span className='text-gray-800 font-medium'> Pending </span></h5>

                </div>


            </div>

            <div className='w-full md:w-2/3'>
                {/* <h2>Files:</h2> */}
                <div className="relative m-4 overflow-x-auto rounded-xl scrollbar-hide">
                    <table className="container w-full m-1 mx-auto text-sm text-left text-gray-500 shadow-md">
                        <thead className="text-gray-700 uppercase bg-gray-100 border-b border-gray-300">
                            <tr className='text-base '>
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    File
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    View
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Download
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete
                                </th>

                            </tr>
                        </thead>

                        <tbody className=''>


                            <tr className="bg-white border-b hover:bg-gray-50">

                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                    1
                                </th>
                                <td className="px-6 py-2">
                                    File ABC
                                </td>
                                <td className="px-6 py-2">
                                    <a href="">View</a>
                                </td>
                                <td className="px-6 py-2">
                                    <a href=""> Download</a>
                                </td>
                                <td className="px-6 py-2">
                                    <a href=""> Delete</a>
                                </td>

                            </tr>

                            <tr className="bg-white border-b hover:bg-gray-50">

                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                    1
                                </th>
                                <td className="px-6 py-2">
                                    File ABC
                                </td>
                                <td className="px-6 py-2">
                                    <a href="">View</a>
                                </td>
                                <td className="px-6 py-2">
                                    <a href=""> Download</a>
                                </td>
                                <td className="px-6 py-2">
                                    <a href=""> Delete</a>
                                </td>

                            </tr>



                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}

export default ExtraView1