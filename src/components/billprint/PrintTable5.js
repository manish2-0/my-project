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
            <p className='container px-3 m-auto max-w-[1300px] text-2xl'>Bill 3:</p>

            <div className='container max-w-[1300px] flex flex-col items-center justify-center px-3 m-auto'>

                <div className="container relative mb-3 overflow-x-auto scrollbar-hide">


                    <table className="w-full my-1 text-sm text-left text-gray-500 border shadow-md table-fixed">
                        <thead className="w-full text-white border-b border-gray-300 bg-fix ">
                            <tr className='text-base '>
                                <th scope="col" className="w-56 p-2 px-8 text-center border ">
                                    Item
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-28 ">
                                    Amount
                                </th>

                            </tr>
                        </thead>

                        <tbody className=''>

                            {
                                entries.map((value, key) =>
                                    (parseInt(value.food) + parseInt(value.travelling) + parseInt(value.accomodation) + parseInt(value.expenses)) > 0
                                        ? <>

                                            <tr className="bg-white ring-gray-400 ring-2 ring-inset ">
                                                <th colSpan={ 2 } className="p-2 text-left">
                                                    Date: { moment(value.date).format("DD MMMM YYYY") },{ value.nature }
                                                </th>

                                            </tr>

                                            {
                                                value.food > 0
                                                    ? <tr className="bg-white border ">

                                                        {
                                                            value.food_remarks == "-"
                                                                ? <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Food
                                                                </th>
                                                                : <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Food-{ value.food_remarks }
                                                                </th>

                                                        }

                                                        <td className="p-2 text-center border ">
                                                            { value.food }/-
                                                        </td>

                                                    </tr>
                                                    : <></>
                                            }

                                            {
                                                value.travelling > 0
                                                    ? <tr className="bg-white border-b ">
                                                        {
                                                            value.travelling_remarks == "-"
                                                                ? <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Travelling
                                                                </th>
                                                                : <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Travelling-{ value.travelling_remarks }
                                                                </th>

                                                        }


                                                        <td className="p-2 text-center border ">
                                                            { value.travelling }/-
                                                        </td>

                                                    </tr>
                                                    : <></>
                                            }

                                            {
                                                value.accomodation > 0
                                                    ? <tr className="bg-white border-b ">

                                                        {
                                                            value.accomodation_remarks == "-"
                                                                ? <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Accomodation
                                                                </th>
                                                                : <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Accomodation-{ value.accomodation_remarks }
                                                                </th>

                                                        }

                                                        <td className="p-2 text-center border">
                                                            { value.accomodation }/-
                                                        </td>

                                                    </tr>
                                                    : <></>
                                            }

                                            {
                                                value.expenses > 0
                                                    ? <tr className="bg-white border-b ">

                                                        {
                                                            value.expenses_remarks == "-"
                                                                ? <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Expenses
                                                                </th>
                                                                : <th className="px-6 py-2 text-center border whitespace-wrap">
                                                                    Expenses-{ value.expenses_remarks }
                                                                </th>

                                                        }

                                                        <td className="p-2 text-center border">
                                                            { value.expenses }/-
                                                        </td>

                                                    </tr>
                                                    : <></>

                                            }



                                            <tr className="bg-white border-b ">
                                                <th className="px-6 py-2 text-base text-right border text-fix">
                                                    Total:
                                                </th>

                                                <td className="p-2 text-center border">
                                                    { parseInt(value.food) + parseInt(value.travelling) + parseInt(value.accomodation) + parseInt(value.expenses) }/-
                                                </td>
                                            </tr>

                                        </>
                                        : <></>


                                )
                            }

                            <tr className="bg-white border-2 border-gray-400 ">
                                <td className="px-6 py-2 text-lg text-right text-fix">
                                    Grand Total:
                                </td>

                                <td className="p-2 text-lg text-center">
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