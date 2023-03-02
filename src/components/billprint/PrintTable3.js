import React from 'react'

const PrintTable3 = () => {
  return (
   <>
   <p className='pl-3 text-2xl'>Other Items:</p>

<div className='container px-3 m-auto max-w-[1300px] mb-6'>
    <div className="relative overflow-x-auto scrollbar-hide">
        <table className="w-full mx-auto my-1 text-sm text-left text-gray-500 border shadow-md table-fixed whitespace-wrap">
            <thead className="text-white border-b border-gray-300 bg-fix">
                <tr className='text-base '>
                    <th scope="col" className="w-16 px-2 py-3 text-center border ">
                        No.
                    </th>
                    <th scope="col" className="px-6 py-3 text-center border w-72">
                        ITEM
                    </th>
                    <th scope="col" className="w-24 p-2 px-4 text-center border">
                        Quantity
                    </th>
                    <th scope="col" className="w-24 p-2 px-4 text-center border">
                        Rate(in ₹)
                    </th>
                    <th scope="col" className="w-24 p-2 px-4 text-center border">
                        Total
                    </th>

                </tr>

            </thead>

            <tbody className=''>

                <tr className="border-b ">

                    <th className="p-2 text-center border">
                        1
                    </th>

                    <td className="p-2 text-base border whitespace-wrap text-slate-700">
                           Measurement Charges(per sq.ft)-For above 200 sq.ft
                    </td>

                    <td className="p-2 text-center border ">
                   10000 sq.ft
                    </td>

                    <td className="p-2 text-center border ">
                        5/-
                    </td>

                    <td className="p-2 text-center border">
                       50000/-
                    </td>


                </tr>

                <tr className="border-b ">

                    <th className="p-2 text-center border">
                        2
                    </th>

                    <td className="p-2 text-base border whitespace-wrap text-slate-700">
                    Measurement Charges-Local Job 
                    </td>

                    <td className="p-2 text-center border ">
                   10
                    </td>

                    <td className="p-2 text-center border ">
                        1500/-
                    </td>

                    <td className="p-2 text-center border">
                        15000/-
                    </td>


                </tr>

                <tr className="border-b ">

                    <th className="p-2 text-center border">
                        3
                    </th>

                    <td className="p-2 text-base border whitespace-wrap text-slate-700">
                    Measurement Charges-Out Station Job
                    </td>

                    <td className="p-2 text-center border ">
                   10
                    </td>

                    <td className="p-2 text-center border ">
                        2000/-
                    </td>

                    <td className="p-2 text-center border">
                        20000/-
                    </td>


                </tr>


                <tr className="border-b ">

                    <th className="p-2 text-center border">
                        4
                    </th>

                    <td className="p-2 text-base border whitespace-wrap text-slate-700">
                    HOB Cutout
                    </td>

                    <td className="p-2 text-center border ">
                   10
                    </td>

                    <td className="p-2 text-center border ">
                        1000/-
                    </td>

                    <td className="p-2 text-center border">
                        10000/-
                    </td>


                </tr>


                <tr className="border-b ">

                    <th className="p-2 text-center border">
                        5
                    </th>

                    <td className="p-2 text-base border whitespace-wrap text-slate-700">
                    Sink Cutout-Top Mount Sink
                    </td>

                    <td className="p-2 text-center border ">
                   10
                    </td>

                    <td className="p-2 text-center border ">
                        1000/-
                    </td>

                    <td className="p-2 text-center border">
                        10000/-
                    </td>


                </tr>


                <tr className="border-b ">

                    <th className="p-2 text-center border">
                        6
                    </th>

                    <td className="p-2 text-base border whitespace-wrap text-slate-700">
                    Sink Cutout-Under Mount Sink/Flush Mount
                    </td>

                    <td className="p-2 text-center border ">
                  10
                    </td>

                    <td className="p-2 text-center border ">
                        1500/-
                    </td>

                    <td className="p-2 text-center border">
                       15000/-
                    </td>


                </tr>


                

                <tr className="border-b ">
                   
                    <td colSpan={ 3 } className="p-2 pr-3 text-lg text-right text-fix">
                        Grand Total:
                    </td>
                    <td colSpan={ 2 } className="p-2 text-lg text-center ">
                        ₹120000
                    </td>
                </tr>

            </tbody>
        </table>

        
    </div>



</div>
   
   </>
  )
}

export default PrintTable3