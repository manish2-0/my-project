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
        inputval1, setinputval1,

        row2, setrow2,
        mul2, setmul2,
        grand2, setgrand2,

        entries, setentries,
        grand3, setgrand3,

        row4, setrow4,
        mul4, setmul4,
        tot4, settot4,
        toparea, settoparea,
        panelarea, setpanelarea,
        grand4, setgrand4,
        fabri4, setfabri4,
        panelamount, setpanelamount,
        topamount, settopamount,
        fabrirate4, setfabrirate4,
        inputval4, setinputval4,

        billtotal, setbilltotal,

        row5, setrow5,
        mul5, setmul5,
        greaterval, setgreaterval,
        grand5, setgrand5
    } = useBill();



    return (
        <>

            <p className='container px-3 m-auto max-w-[1300px] text-xl'>Extra Bill:</p>

            <div className='container px-3 m-auto max-w-[1300px] mb-6'>
                <div className='flex items-center w-full'>
                <p className='text-lg font-medium text-fix'><span className='underline underline-offset-4'>Fabrication Type:</span><span className='text-slate-600'> { fabri4 }</span></p>
                </div>
                <div className="relative overflow-x-auto scrollbar-hide">
                    <table className="mx-auto my-1 text-sm text-left border shadow table-fixed text-slate-600 ">
                        <thead className="text-white border border-gray-300 border-slate-200 bg-fix">
                            <tr className=''>
                                <th scope="col" className="w-full min-w-[200px] px-6 py-3 text-center border border-slate-200 ">
                                    Item
                                </th>
                                <th scope="col" className="p-2 px-3 text-center border border-slate-200 w-14">
                                    Type
                                </th>
                                <th scope="col" className="p-2 px-2 text-center border border-slate-200 w-14">
                                    RFT/SQFT
                                </th>
                                <th scope="col" className="p-2 px-2 text-center border border-slate-200 w-14">
                                    Quantity
                                </th>
                                <th scope="col" className="w-16 p-2 px-4 text-center border border-slate-200">
                                    Length <span className='block text-xs text-center'>(in mm)</span>
                                </th>
                                <th scope="col" className="w-16 p-2 px-4 text-center border border-slate-200">
                                    Breadth <span className='block text-xs text-center'>(in mm)</span>
                                </th>

                                <th scope="col" className="w-24 text-sm text-center border border-slate-200 px-7">
                                    Area <span className='block text-xs text-center'>(in sqft)</span>
                                </th>


                            </tr>
                        </thead>
                        <tbody className='text-base'>
                            <>

                                <tr className="bg-white border border-slate-200">
                                    <th colSpan={ 7 } className="px-6 py-2 whitespace-wrap">
                                        { inputval4 }
                                    </th>


                                </tr>

                                {
                                    row4.map((value, key) =>
                                        <tr className="m-3 text-base bg-white border border-slate-200">

                                            <td className="p-1 pr-4 text-base text-right border border-slate-200 whitespace-wrap">
                                                { value.userinput }
                                            </td>

                                            {
                                                value.opt != "Select option..."
                                                    ? <td className="p-1 text-center border border-slate-200">
                                                        { value.opt }
                                                    </td>
                                                    : <td className="p-1 text-center border border-slate-200">-</td>

                                            }

                                            {
                                                value.type != "Select option..."
                                                    ? <td className="p-1 text-center border border-slate-200">
                                                        { value.type }
                                                    </td>
                                                    : <td className="p-1 text-center border border-slate-200">-</td>

                                            }

                                            {
                                                parseFloat(value.quantity) > 0
                                                    ? <td className="p-1 text-center border border-slate-200">
                                                        { value.quantity }
                                                    </td>
                                                    : <td className="p-1 text-center border border-slate-200">-</td>

                                            }

                                            {
                                                parseFloat(value.length) > 0
                                                    ? <td className="p-1 text-center border border-slate-200">
                                                        { value.length }
                                                    </td>
                                                    : <td className="p-1 text-center border border-slate-200">-</td>

                                            }

                                            {
                                                parseFloat(value.breadth) > 0
                                                    ? <td className="p-1 text-center border border-slate-200">
                                                        { value.breadth }
                                                    </td>
                                                    : <td className="p-1 text-center border border-slate-200">-</td>

                                            }

                                            {
                                                parseFloat(mul4[key].mul) > 0
                                                    ? <td className="p-1 text-center border border-slate-200">
                                                        { mul4[key].mul }
                                                    </td>
                                                    : <td className="p-1 text-center border border-slate-200">- </td>

                                            }


                                        </tr>

                                    )
                                }


                                <>

                                    <tr className="bg-white border border-slate-200 ">

                                        <td colSpan={ 5 } className="p-1 text-base text-right text-fix">
                                            Total Area:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            { tot4 } sq.ft
                                        </td>

                                    </tr>

                                    <tr className="bg-white border border-slate-200 ">

                                        <td colSpan={ 5 } className="p-1 text-base text-right text-fix">
                                            Total Area of Top:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            { toparea } sq.ft
                                        </td>

                                    </tr>

                                    <tr className="bg-white border border-slate-200 ">

                                        <td colSpan={ 5 } className="p-1 text-base text-right text-fix">
                                            Total Area of Panel:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            { panelarea } sq.ft
                                        </td>

                                    </tr>

                                    <tr className="bg-white border border-slate-200 ">

                                        <td colSpan={ 5 } className="p-1 text-base text-right text-fix">
                                            Total Amount of Top @₹{ fabrirate4.top }:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹{ topamount }
                                        </td>

                                    </tr>

                                    <tr className="bg-white border border-slate-200 ">

                                        <td colSpan={ 5 } className="p-1 text-base text-right text-fix">
                                            Total Amount of Panel @₹{ fabrirate4.panel }:
                                        </td>

                                        <td colSpan={ 2 } className="p-1 text-base text-center">
                                            ₹{ panelamount }
                                        </td>

                                    </tr>

                                    <tr className="bg-white border border-slate-200 ">


                                        <td colSpan={ 5 } className="p-1 text-base text-right underline underline-offset-2 text-fix">
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