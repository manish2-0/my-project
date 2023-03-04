import React from 'react'
import useBill from '../../hooks/useBill';

const PrintTable2 = () => {

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

            <p className='container px-3 m-auto max-w-[1300px] text-2xl'>Extra Bill:</p>

            <div className='container px-3 m-auto max-w-[1300px] mb-6'>
                <div className='flex items-center w-full'>
                    <p className='text-lg text-fix'><span className='underline underline-offset-4'>Fabrication Type:</span><span className='text-slate-600'> { fabri4 }</span></p>
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

                                {
                                    row4.map((value, key) =>
                                        <tr className="m-3 bg-white border-b">

                                            <th className="p-1 pr-4 text-base text-right border whitespace-wrap">
                                                { value.userinput }
                                            </th>

                                            <td className="p-1 text-center border">
                                                { value.type }
                                            </td>

                                            <td className="p-1 text-center border">
                                                { value.quantity }
                                            </td>

                                            <td className="p-1 text-center border">
                                                { value.length }
                                            </td>

                                            {
                                                value.breadth > 0
                                                    ? <td className="p-1 text-center border">
                                                        { value.breadth }
                                                    </td>
                                                    : <td className="p-1 text-center border"></td>

                                            }

                                            <td className="w-full p-1 text-center border">
                                                { mul4[key].mul }
                                            </td>


                                        </tr>

                                    )
                                }


                                <>

                                    <tr className="bg-white border-b ">

                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Total Area:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center ">
                                            { tot4 } sq.ft
                                        </td>

                                    </tr>

                                    <tr className="bg-white border-b ">

                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Total Fixed(for 50sqft or below):
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹{ fixrate4 }
                                        </td>

                                    </tr>

                                    <tr className="bg-white border-b ">

                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Total (for above 50sqft@₹{ fabrirate4 } ):
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹{ varrate4 }
                                        </td>

                                    </tr>

                                    <tr className="bg-white border-b ">



                                        <td colSpan={ 4 } className="p-1 text-base text-right text-fix">
                                            Grand Total:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹{ grand4 }
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

export default PrintTable2