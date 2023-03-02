import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useBill from '../hooks/useBill';
import moment from 'moment';



const EntriesBill = () => {

    const location = useLocation();
    const { user } = location.state;

    const { grand3, setgrand3, entries, setentries } = useBill();
    const [temp, settemp] = useState([]);



    const api = useAxiosPrivate();


    const usertable = () => {
        api.get(`entries/getOne-entries/${user.blp_id}`).then(function (response) {
            if (response.data.data) {
                settemp(response.data.data);
            }
            else {
                settemp([]);
            }
        })
    }

    useEffect(() => {
        usertable();
    }, []);


    useEffect(() => {

        let sum = 0;

        if (entries) {
            for (let i = 0; i < entries.length; i++) {
                sum = sum + parseInt(entries[i].food) + parseInt(entries[i].travelling) + parseInt(entries[i].accomodation) + parseInt(entries[i].expenses);
            }
        }


        setgrand3(sum);


    }, [entries]);



    useEffect(() => {

        if (temp.length == 0) {
            setentries([]);
        }
        else {
            setentries(temp.map((v) => (
                { date: v.date, nature: v.nature, food: v.food, travelling: v.travelling, accomodation: v.accomodation, expenses: v.expenses, food_remarks: v.food_remarks, travelling_remarks: v.travelling_remarks, accomodation_remarks: v.accomodation_remarks, expenses_remarks: v.expenses_remarks }
            )))
        }

    }, [temp]);


    return (
        <>
            <p className='pl-3 text-2xl'>Bill 3:</p>

            <div className='container max-w-[1300px] flex flex-col items-center justify-center px-3 m-auto'>

                <div className="container relative mb-3 overflow-x-auto scrollbar-hide">


                    <table className="w-full my-1 text-sm text-left text-gray-500 border shadow-md table-fixed">
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

                            {
                                entries ?
                                    entries.map((value) =>
                                        parseInt(value.food) + parseInt(value.travelling) + parseInt(value.accomodation) + parseInt(value.expenses) > 0
                                            ? <>

                                                <tr className="bg-white border-2 border-gray-400 ">
                                                    <th colSpan={ 2 } className="p-1 text-left w-28">
                                                        Date: { moment(value.date).format("DD MMMM YYYY") },{ value.nature }
                                                    </th>

                                                </tr>

                                                {
                                                    value.food > 0
                                                        ? <tr className="bg-white border-b ">
                                                            {
                                                                value.food_remarks == "-"
                                                                    ? <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Food
                                                                    </th>
                                                                    : <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Food-{ value.food_remarks }
                                                                    </th>

                                                            }


                                                            <td className="p-1 text-center w-28">
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
                                                                    ? <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Travelling
                                                                    </th>
                                                                    : <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Travelling-{ value.travelling_remarks }
                                                                    </th>

                                                            }


                                                            <td className="p-1 text-center w-28">
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
                                                                    ? <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Accomodation
                                                                    </th>
                                                                    : <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Accomodation-{ value.accomodation_remarks }
                                                                    </th>

                                                            }

                                                            <td className="p-1 text-center w-28">
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
                                                                    ? <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Expenses
                                                                    </th>
                                                                    : <th className="px-6 py-2 text-center whitespace-wrap">
                                                                        Expenses-{ value.expenses_remarks }
                                                                    </th>

                                                            }

                                                            <td className="p-1 text-center w-28">
                                                                { value.expenses }/-
                                                            </td>

                                                        </tr>
                                                        : <></>
                                                }




                                                <tr className="bg-white border-b ">
                                                    <th className="px-6 py-2 text-base text-right whitespace-wrap text-fix">
                                                        Total:
                                                    </th>

                                                    <td className="p-1 text-center w-28">
                                                        { parseInt(value.food) + parseInt(value.travelling) + parseInt(value.accomodation) + parseInt(value.expenses) }/-
                                                    </td>
                                                </tr>



                                            </>
                                            : <></>

                                    )
                                    : <></>
                            }

                            <tr className="bg-white border-2 border-gray-400 ">
                                <td className="px-6 py-2 text-lg text-right text-fix">
                                    Grand Total:
                                </td>

                                <td className="p-1 text-lg text-center w-28">
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

export default EntriesBill