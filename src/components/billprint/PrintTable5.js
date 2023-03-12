import React from 'react'
import useBill from '../../hooks/useBill';
import moment from 'moment/moment';

const PrintTable5 = () => {

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
            <p className='container px-3 m-auto max-w-[1300px] text-xl'>Bill 3:</p>

            <div className='container max-w-[1300px] flex flex-col items-center justify-center px-3 m-auto'>

                <div className="container relative mb-3 overflow-x-auto scrollbar-hide">


                    <table className="w-full my-1 text-base text-left border shadow-md table-fixed text-slate-600">
                        <thead className="w-full text-white border border-slate-200 bg-fix ">
                            <tr className='text-base '>
                                <th scope="col" className="w-56 p-2 px-8 text-center border border-slate-200 ">
                                    Item
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border border-slate-200 w-28 ">
                                    Amount
                                </th>

                            </tr>
                        </thead>

                        <tbody className=''>

                            {
                                entries.map((value, key) =>
                                    (parseInt(value.food) + parseInt(value.travelling) + parseInt(value.accomodation) + parseInt(value.expenses)) > 0
                                        ? <>

                                            <tr className="bg-white ring-slate-400 ring-2 ring-inset">
                                                <th colSpan={ 2 } className="p-1 text-left">
                                                    Date: { moment(value.date).format("DD MMMM YYYY") },{ value.nature }
                                                </th>

                                            </tr>

                                            {
                                                value.food > 0
                                                    ? <tr className="bg-white border border-slate-200">

                                                        {
                                                            value.food_remarks == "-"
                                                                ? <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Food
                                                                </td>
                                                                : <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Food-{ value.food_remarks }
                                                                </td>

                                                        }

                                                        <td className="p-1 text-center border border-slate-200 ">
                                                            { value.food }/-
                                                        </td>

                                                    </tr>
                                                    : <></>
                                            }

                                            {
                                                value.travelling > 0
                                                    ? <tr className="bg-white border border-slate-200 ">
                                                        {
                                                            value.travelling_remarks == "-"
                                                                ? <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Travelling
                                                                </td>
                                                                : <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Travelling-{ value.travelling_remarks }
                                                                </td>

                                                        }


                                                        <td className="p-1 text-center border border-slate-200 ">
                                                            { value.travelling }/-
                                                        </td>

                                                    </tr>
                                                    : <></>
                                            }

                                            {
                                                value.accomodation > 0
                                                    ? <tr className="bg-whiteborder border-slate-200 ">

                                                        {
                                                            value.accomodation_remarks == "-"
                                                                ? <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Accomodation
                                                                </td>
                                                                : <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Accomodation-{ value.accomodation_remarks }
                                                                </td>

                                                        }

                                                        <td className="p-1 text-center border border-slate-200">
                                                            { value.accomodation }/-
                                                        </td>

                                                    </tr>
                                                    : <></>
                                            }

                                            {
                                                value.expenses > 0
                                                    ? <tr className="bg-white border border-slate-200 ">

                                                        {
                                                            value.expenses_remarks == "-"
                                                                ? <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Expenses
                                                                </td>
                                                                : <td className="px-6 py-1 text-center border border-slate-200 whitespace-wrap">
                                                                    Expenses-{ value.expenses_remarks }
                                                                </td>

                                                        }

                                                        <td className="p-1 text-center border border-slate-200">
                                                            { value.expenses }/-
                                                        </td>

                                                    </tr>
                                                    : <></>

                                            }



                                            <tr className="bg-white border border-slate-200 ">
                                                <td className="px-6 py-1 text-base text-right border border-slate-200 text-fix">
                                                    Total:
                                                </td>

                                                <td className="p-1 text-center border border-slate-200">
                                                    { parseInt(value.food) + parseInt(value.travelling) + parseInt(value.accomodation) + parseInt(value.expenses) }/-
                                                </td>
                                            </tr>

                                        </>
                                        : <></>


                                )
                            }

                

                            <tr className="bg-white border border-slate-200 ">
                                <td className="px-6 py-1 text-base text-right underline underline-offset-2 text-fix">
                                    Grand Total:
                                </td>

                                <td className="p-1 text-base text-center">
                                    ₹{ grand3 }
                                </td>
                            </tr>




                        </tbody>
                    </table>


                </div>


            </div>


        </>
    )
}

export default PrintTable5