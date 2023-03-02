import React, { useState, useEffect } from 'react'
import useBill from '../hooks/useBill';

const ExtraEntriesTable = () => {

    const {
        row2, setrow2,
        mul2, setmul2,
        grand2, setgrand2
    } = useBill();

    const addrow = () => {
        setrow2(a => [...a, { "item": "", "quantity": 0, "rate": 0 }]);
        setmul2(a => [...a, { "mul": 0 }]);
    }


    const deleterow = (key) => {

        setrow2(row2 => {
            return row2.filter((_, i) => i !== key)
        })
        setmul2(mul2 => {
            return mul2.filter((_, i) => i !== key)
        })

    }

    function handlechange(key, name, value) {
        setrow2(row2.map((product, i) => (
            i === key ? { ...product, [name]: value } : product
        )))
    }


    useEffect(() => {
        setmul2(row2.map((product, i) => (
            { "mul": (product.quantity * product.rate).toFixed() }
        )))
    }, [row2]);


    useEffect(() => {
        let a = 0;

        for (let i = 0; i < mul2.length; i++) {
            a = a + parseInt(mul2[i].mul);
        }

        setgrand2(a);
    }, [mul2]);



    return (
        <>
            <p className='pl-3 text-2xl'>Bill 2:</p>

            <div className='container px-3 m-auto max-w-[1300px] mb-6'>
                <div className="relative overflow-x-auto scrollbar-hide">
                    <table className="w-full mx-auto my-1 text-sm text-left text-gray-500 border shadow-md table-fixed whitespace-wrap">
                        <thead className="text-white border-b border-gray-300 bg-fix">
                            <tr className='text-base '>
                                <th scope="col" className="w-24 px-6 py-3 text-center border ">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3 text-center border w-72">
                                    ITEM
                                </th>
                                <th scope="col" className="p-2 text-center border w-28">
                                    Quantity
                                </th>
                                <th scope="col" className="p-2 text-center border w-28">
                                    Rate(in ₹)
                                </th>
                                <th scope="col" className="p-2 text-center border w-28">
                                    Total
                                </th>

                                <th scope="col" className="px-3 text-center border w-28">
                                    Delete
                                </th>

                            </tr>

                        </thead>

                        <tbody className=''>

                            {
                                row2.map((value, key) =>
                                    <tr className="bg-white border-b ">

                                        <th className="w-24 px-6 py-2 text-center">
                                            { key + 1 }
                                        </th>

                                        <td className="p-1 w-72 whitespace-wrap">
                                            <input value={ value.item } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full border-none outline-none whitespace-wrap' type="text" name="item" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.quantity } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full border-none outline-none hideinput' type="number" name="quantity" id="" />

                                        </td>

                                        <td className="p-1 text-center w-28 ">
                                            <input value={ value.rate } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full border-none outline-none hideinput' type="number" name="rate" id="" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            { mul2[key].mul }/-
                                        </td>


                                        <td className="p-1 text-center text-red-700 cursor-pointer w-28 text-bold">
                                            <button onClick={ () => { deleterow(key) } }>Delete</button>
                                        </td>

                                    </tr>
                                )
                            }




                            <tr className="bg-white border-b ">
                                <td colSpan={ 1 } className="p-2 pl-4 text-base">
                                    <button onClick={ addrow } className='px-6 py-1 text-white bg-fix'>Add</button>
                                </td>
                                <td colSpan={ 4 } className="pr-3 text-lg text-right text-fix">
                                    Grand Total:
                                </td>
                                <td colSpan={ 1 } className="text-lg text-center">
                                    ₹{ grand2 }
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    {/* <button onClick={ consoleval } className="ani-button">Console</button> */ }
                </div>



            </div>
        </>
    )
}

export default ExtraEntriesTable