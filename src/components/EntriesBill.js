import React, { useState } from 'react'



const EntriesBill = () => {


    const [row, setrow] = useState([]);

    const addrow = () => {
        // setrow(...a,[]);
        setrow(a => [...a, {}])
        // console.log("clicked")
    }


    return (
        <>
            <p className='pl-3 text-2xl'>Bill 2:</p>

            <div className='container max-w-[1300px] flex flex-col items-center justify-center px-3 m-auto'>

                <div className="container relative mb-3 overflow-x-auto scrollbar-hide">


                    <table className="w-full my-1 text-sm text-left text-gray-500 border shadow-md table-fixed ">
                        <thead className="w-full text-white border-b border-gray-300 bg-fix ">
                            <tr className='text-base '>
                                <th scope="col" className="p-2 px-8 text-center border ">
                                    Item
                                </th>
                                <th scope="col" className="w-4/12 p-2 px-8 text-center border ">
                                    Amount
                                </th>

                            </tr>
                        </thead>

                        <tbody className=''>

                            <>

                            <tr className="bg-white border-2 border-gray-400 ">
                                <th colSpan={2}  className="p-1 text-left w-28">
                                    Date: 99/99/2023,Measurement
                                </th>
                                
                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Food
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Travelling
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Accomodation
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Extra Expenses
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <td colSpan={ 2 } className="p-2 w-28">
                                    <span className='text-fix '>Reason: </span>A na djbe jjs eiidc js diueiew cxkskn eis ikaij aksj aihen janbw janci kn aisne iiaen
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">
                                <th className="px-6 py-2 text-base text-right whitespace-nowrap">
                                    Total:
                                </th>

                                <td className="p-1 text-center w-28">
                                    400/-
                                </td>
                            </tr>

                         

                            </>

                            <>

                            <tr className="bg-white border-2 border-gray-400 ">
                                <th colSpan={2}  className="p-1 text-left w-28">
                                    Date: 99/99/2023,Installation
                                </th>
                                
                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Food
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Travelling
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Accomodation
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <th className="px-6 py-2 text-center whitespace-nowrap">
                                    Extra Expenses
                                </th>

                                <td className="p-1 text-center w-28">
                                    100/-
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">

                                <td colSpan={ 2 } className="p-2 w-28">
                                    <span className='text-fix '>Reason: </span>A na djbe jjs eiidc js diueiew cxkskn eis ikaij aksj aihen janbw janci kn aisne iiaen
                                </td>

                            </tr>

                            <tr className="bg-white border-b ">
                                <th className="px-6 py-2 text-base text-right whitespace-nowrap">
                                    Total:
                                </th>

                                <td className="p-1 text-center w-28">
                                    400/-
                                </td>
                            </tr>

                           

                            </>


                            <tr className="bg-white border-2 border-gray-400 ">
                                <th className="px-6 py-2 text-base text-right whitespace-nowrap">
                                    Grand Total:
                                </th>

                                <td className="p-1 text-center w-28">
                                    800/-
                                </td>
                            </tr>




                        </tbody>
                    </table>


                </div>


            </div>


        </>
    )
}

export default EntriesBill