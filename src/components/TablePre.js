import React, { useState, useEffect } from 'react'
import useBill from '../hooks/useBill';

const TablePre = () => {

    const {
        row5, setrow5,
        mul5, setmul5,
        grand5, setgrand5,
        greaterval, setgreaterval,tot1,tot4
    } = useBill();




    useEffect(() => {
        let a=parseFloat(tot1);
        
        let b=parseFloat(tot4);

        let c=(a+b).toFixed(0)

        c>200
        ?setgreaterval({quantity: c-200, total: (5*(c-200)) })
        :setgreaterval({quantity: 0, total: 0 })

    }, [tot1,tot4]);

   


    const addrow = () => {
        setrow5(v => [...v, { item: "Select option...", rate: 0, quantity: 0 }])
        setmul5(a => [...a, { mul: 0 }]);

    }

    const handleitemchange = (key, name, value) => {
        let a = 0;
        if (value == "Measurement Charges-Local Job") {
            a = 1500;
        }
        else if (value == "Measurement Charges-Out Station Job") {
            a = 2000;
        }
        else if (value == "HOB Cutout") {
            a = 1000;
        }
        else if (value == "Sink Cutout-Top Mount Sink") {
            a = 1000;
        }
        else if (value == "Sink Cutout-Under Mount Sink/Flush Mount") {
            a = 1500;
        }
        else {
            a = 0;
        }

        if(value==""){
            value=0
        }


        setrow5(row5.map((product, i) => (
            i === key ? { ...product, [name]: value, rate: a } : product
        )))


    }


    const handlequantitychange = (key, name, value) => {
        setrow5(row5.map((product, i) => (
            i === key ? { ...product, [name]: parseInt(value) } : product
        )))

    }

    useEffect(() => {
        setmul5(row5.map((product, i) => (
            { mul: parseInt( (product.quantity>0?product.quantity:0) * product.rate) }
        )))
    }, [row5]);


    useEffect(() => {
        let tot = 0;
        for (let i = 0; i < mul5.length; i++) {
            tot = tot + mul5[i].mul;
        }
        setgrand5(tot+greaterval.total)
    }, [mul5,greaterval]);


    const deleterow = (key) => {
        setrow5(
            row5.filter((_, i) => i !== key)
        )
        setmul5(mul5.filter((_, i) => i !== key)
        )
    }





    return (
        <>
            <p className='container px-3 m-auto max-w-[1300px] text-2xl'>Other Items:</p>

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
                                ((parseFloat(tot1)+parseFloat(tot4)).toFixed(0))>200
                                ?
                                <tr className="bg-white border-b ">

                                <th className="w-24 px-6 py-2 text-center">
                                    1
                                </th>

                                <td className="p-2 px-4 text-base w-72 whitespace-wrap text-slate-700">
                                       Measurement Charges(per sq.ft)-For above 200 sq.ft
                                </td>

                                <td className="p-1 text-center w-28 text-slate-700">
                                {greaterval.quantity}sq.ft
                                </td>

                                <td className="p-1 text-center w-28 ">
                                    5/-
                                </td>

                                <td className="p-1 text-center w-28">
                                    { greaterval.total }/-
                                </td>

                                <td className="p-1 text-center text-red-700 w-28 text-bold">
                                    {/* <button onClick={ () => { deleterow(key) } }>Delete</button> */}
                                </td>

                                 </tr>

                                 :<></>
                            }

                            {
                                row5.map((value, key) =>
                                    <tr className="bg-white border-b ">

                                        <th className="w-24 px-6 py-2 text-center">
                                            { 
                                           ((parseFloat(tot1)+parseFloat(tot4)).toFixed(0))>200
                                            ?key+2
                                            :key + 1 
                                            }
                                        </th>

                                        <td className="p-1 w-72 whitespace-wrap">
                                            <select name="item" value={ value.item } onChange={ e => { handleitemchange(key, e.target.name, e.target.value) } } className='w-full border outline-none border-slate-200 text-slate-700 ' id="">
                                                <option>Select option...</option>
                                                <option>Measurement Charges-Local Job</option>
                                                <option>Measurement Charges-Out Station Job</option>
                                                <option>HOB Cutout</option>
                                                <option>Sink Cutout-Top Mount Sink</option>
                                                <option>Sink Cutout-Under Mount Sink/Flush Mount</option>


                                                {/* <option>Sink Cutting </option> */ }

                                            </select>
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.quantity } onChange={ e => { handlequantitychange(key, e.target.name, e.target.value) } } className='w-full text-center border-none outline-none hideinput' type="number" name="quantity" id="" />
                                        </td>

                                        <td className="p-1 text-center w-28 ">
                                            { value.rate }/-
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            { mul5[key].mul }/-
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
                                    ₹{ grand5 }
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

export default TablePre