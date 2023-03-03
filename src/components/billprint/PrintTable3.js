import React from 'react'
import useBill from '../../hooks/useBill';

const PrintTable3 = () => {

    const {
        row1, setrow1,
        mul1, setmul1,
        tot1, settot1,
        fixrate1, setfixrate1,
        varrate1, setvarrate1,
        grand1, setgrand1,
        fabri1, setfabri1,
        fabrirate1, setfabrirate1,
        row2, setrow2,
        mul2, setmul2,
        grand2, setgrand2,
        entries, setentries,
        grand3, setgrand3,
        row4, setrow4,
        mul4, setmul4,
        tot4, settot4,
        fixrate4, setfixrate4,
        varrate4, setvarrate4,
        grand4, setgrand4,
        fabri4, setfabri4,
        fabrirate4, setfabrirate4,
        billtotal, setbilltotal,
        extratable, setextratable,
        row5, setrow5,
        mul5, setmul5,
        greaterval, setgreaterval,
        grand5, setgrand5
    } = useBill();


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

                        {
                                ((parseFloat(tot1)+parseFloat(tot4)).toFixed(0))>200
                                ?<tr className="border-b ">

                                <th className="p-2 text-center border">
                                    1
                                </th>

                                <td className="p-2 text-base border whitespace-wrap text-slate-700">
                                    Measurement Charges(per sq.ft)-For above 200 sq.ft
                                </td>

                                <td className="p-2 text-center border ">
                                    {greaterval.quantity} sq.ft
                                </td>

                                <td className="p-2 text-center border ">
                                    5/-
                                </td>

                                <td className="p-2 text-center border">
                                    {greaterval.total}/-
                                </td>


                            </tr>

                                 :<></>
                            }


                            {
                                row5.map((value, key) =>
                                    <tr className="border-b ">

                                        <th className="p-2 text-center border">
                                            {
                                                ((parseFloat(tot1) + parseFloat(tot4)).toFixed(0)) > 200
                                                    ? key + 2
                                                    : key + 1
                                            }
                                        </th>

                                        <td className="p-2 text-base border whitespace-wrap text-slate-700">
                                            {value.item}
                                        </td>

                                        <td className="p-2 text-center border ">
                                            {value.quantity}
                                        </td>

                                        <td className="p-2 text-center border ">
                                            {value.rate}/-
                                        </td>

                                        <td className="p-2 text-center border">
                                            {mul5[key].mul}/-
                                        </td>


                                    </tr>
                                )
                            }






                            <tr className="border-b ">

                                <td colSpan={ 3 } className="p-2 pr-3 text-lg text-right text-fix">
                                    Grand Total:
                                </td>
                                <td colSpan={ 2 } className="p-2 text-lg text-center ">
                                    ₹{ grand5 }
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