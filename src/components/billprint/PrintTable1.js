import React from 'react'

const PrintTable1 = () => {
    return (
        <>

            <p className='pl-3 text-2xl'>Bill 1:</p>

            <div className='container px-3 m-auto max-w-[1300px] mb-6'>
                <div className='flex items-center w-full'>
                    <p className='text-lg text-fix'>Fabrication Type: Fabrication at Factory</p>
                </div>
                <div className="relative overflow-x-auto scrollbar-hide">
                    <table className="mx-auto my-1 text-sm text-left text-gray-500 border shadow-md table-fixed ">
                        <thead className="text-white border-b border-gray-300 bg-fix">
                            <tr className=''>
                                <th scope="col" className="w-full min-w-[250px] px-6 py-3 text-center border ">
                                    Item
                                </th>
                                <th scope="col" className="p-2 px-3 text-center border w-14">
                                    RFT/SQFT
                                </th>
                                <th scope="col" className="p-2 px-4 text-center border w-14">
                                    Quantity
                                </th>
                                <th scope="col" className="w-16 p-2 px-4 text-center border">
                                    Length <span className='block text-xs text-center'>(in mm)</span>
                                </th>
                                <th scope="col" className="w-16 p-2 px-4 text-center border">
                                    Breadth <span className='block text-xs text-center'>(in mm)</span>
                                </th>

                                <th scope="col" className="w-24 text-sm text-center border px-7">
                                    Area <span className='block text-xs text-center'>(in sqft)</span>
                                </th>


                            </tr>
                        </thead>
                        <tbody className=''>
                            <>

                                <tr className="text-center bg-white border-b">
                                    <th className="px-6 py-2 whitespace-wrap">
                                        Fixing of Quantra  Top on Kitchen Cabinet/ Dinining table.
                                    </th>
                                    <th colSpan={ 5 } className="px-6 py-2 whitespace-wrap ">

                                    </th>

                                </tr>

                                <tr className="m-3 bg-white border-b">

                                    <th className="p-1 text-base text-center border whitespace-wrap">
                                        Dinining table.
                                    </th>

                                    <td className="p-1 text-center border">
                                        SQFT
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999</td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="w-full p-1 text-center border">
                                        <p className=''>100000.00</p>
                                    </td>


                                </tr>

                                <tr className="m-3 bg-white border-b">

                                    <th className="p-1 text-base text-center border whitespace-wrap">
                                        Dinining table.
                                    </th>

                                    <td className="p-1 text-center border">
                                        SQFT
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999</td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="w-full p-1 text-center border">
                                        <p className=''>100000.00</p>
                                    </td>


                                </tr>


                                <tr className="m-3 bg-white border-b">

                                    <th className="p-1 text-base text-center border whitespace-wrap">
                                        Dinining table.
                                    </th>

                                    <td className="p-1 text-center border">
                                        SQFT
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999</td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="w-full p-1 text-center border">
                                        <p className=''>100000.00</p>
                                    </td>


                                </tr>


                                <tr className="m-3 bg-white border-b">

                                    <th className="p-1 text-base text-center border whitespace-wrap">
                                        Dinining table.
                                    </th>

                                    <td className="p-1 text-center border">
                                        SQFT
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999</td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="w-full p-1 text-center border">
                                        <p className=''>100000.00</p>
                                    </td>


                                </tr>

                                <tr className="m-3 bg-white border-b">

                                    <th className="p-1 text-base text-center border whitespace-wrap">
                                        Dinining table.
                                    </th>

                                    <td className="p-1 text-center border">
                                        SQFT
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999</td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="w-full p-1 text-center border">
                                        <p className=''>100000.00</p>
                                    </td>


                                </tr>


                                <tr className="m-3 bg-white border-b">

                                    <th className="p-1 text-base text-center border whitespace-wrap">
                                        Dinining table.
                                    </th>

                                    <td className="p-1 text-center border">
                                        SQFT
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999</td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="p-1 text-center border">
                                        999999
                                    </td>

                                    <td className="w-full p-1 text-center border">
                                        <p className=''>100000.00</p>
                                    </td>


                                </tr>
                                



                                <>

                                    <tr className="bg-white border-b ">

                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Total Area:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center ">
                                            10000 sq.ft
                                        </td>

                                    </tr>

                                    <tr className="bg-white border-b ">

                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Total Fixed(for 50sqft or below):
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹200
                                        </td>

                                    </tr>

                                    <tr className="bg-white border-b ">

                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Total (for above 50sqft@₹100 ):
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹100
                                        </td>

                                    </tr>

                                    <tr className="bg-white border-b ">



                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Grand Total:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹100
                                        </td>

                                    </tr>

                                </>
                            </>

                        </tbody>
                    </table>
                </div>

            </div>

        </>
    )
}

export default PrintTable1