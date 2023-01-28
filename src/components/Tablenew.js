import React from 'react'

function Tablenew() {
  return (
    <div className="relative m-4 overflow-x-auto rounded-xl scrollbar-hide">
    <table className="container w-full m-1 mx-auto text-sm text-left text-gray-500 shadow-md">
        <thead className="text-gray-700 uppercase bg-gray-100 border-b border-gray-300">
            <tr className='text-[16px] '>
                <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Nature of Work
                </th>
                <th scope="col" className="px-6 py-3">
                    Work Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Done By
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Remarks
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">More</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        <tbody className=''>


                <tr className="bg-white border-b hover:bg-gray-50">

                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        1
                    </th>
                    <td className="px-6 py-2">
                        26-01-2023
                    </td>
                    <td className="px-6 py-2">
                       Measurement
                    </td>
                    <td className="px-6 py-2">
                       Done
                    </td>
                    
                    <td className="px-6 py-2">
                        Manish and team
                    </td>
                   
                    <td className="px-6 py-2">
                       Work Completed
                    </td>
                    <td className="px-6 py-2 text-right">
                        <a  className="font-medium text-blue-600 hover:underline">More</a>
                    </td>
                    <td className="px-6 py-2 text-right">
                        <a  className="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>

                    <td className="px-6 py-2 text-right">
                        <a className="font-medium text-blue-600 hover:underline">Delete</a>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">

                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        1
                    </th>
                    <td className="px-6 py-2">
                        26-01-2023
                    </td>
                    <td className="px-6 py-2">
                       Measurement
                    </td>
                    <td className="px-6 py-2">
                       Done
                    </td>
                    
                    <td className="px-6 py-2">
                        Manish and team
                    </td>
                   
                    <td className="px-6 py-2">
                       Work Completed
                    </td>
                    <td className="px-6 py-2 text-right">
                        <a  className="font-medium text-blue-600 hover:underline">More</a>
                    </td>
                    <td className="px-6 py-2 text-right">
                        <a  className="font-medium text-blue-600 hover:underline">Edit</a>
                    </td>

                    <td className="px-6 py-2 text-right">
                        <a className="font-medium text-blue-600 hover:underline">Delete</a>
                    </td>
                </tr>
             

        </tbody>
    </table>
</div>
  )
}

export default Tablenew