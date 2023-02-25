import React, { useState, useEffect } from 'react'

const ExtraEntriesTable = () => {

    const [row, setrow] = useState([]);
    const [mul, setmul] = useState([]);
    const [tot, settot] = useState(0);

    const addrow = () => {
        setrow(a => [...a, { "item": "", "quantity": null, "rate": null }]);
        setmul(a => [...a, { "mul": 0 }]);
    }


    const deleterow = (key) => {
        // setsize(size.splice(key, 1))
        // setmul(mul.splice(key, 1))

        setrow(oldValues => {
            return oldValues.filter((_, i) => i !== key)
        })
        setmul(oldValues => {
            return oldValues.filter((_, i) => i !== key)
        })

    }

    function handlechange(key, name, value) {
        // console.log(size[0])
        // setsize(...k,k[key]?.[name]:value);
        setrow(row.map((product, i) => (
            i === key ? { ...product, [name]: value } : product
        )))
    }


    const consoleval = () => {
        console.log(row)
        // console.log(mul)
    }


    useEffect(() => {
        setmul(row.map((product, i) => (
            { "mul": (product.quantity * product.rate).toFixed() }
        )))
    }, [row]);


    useEffect(() => {
        let a = 0;

        for (let i = 0; i < mul.length; i++) {
            a = a + parseInt(mul[i].mul);
        }

        settot(a);
    }, [mul]);



    return (
        <>
            <p className='pl-3 text-2xl'>Bill 3:</p>

            <div className='container px-3 m-auto max-w-[1300px]'>
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
                                row.map((value, key) =>
                                    <tr className="bg-white border-b ">

                                        <th className="w-24 px-6 py-2 text-center">
                                            { key + 1 }
                                        </th>

                                        <td className="p-1 w-72 whitespace-wrap">
                                            <input value={ value.item } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full border-none outline-none whitespace-wrap' type="text" name="item" />
                                            {/* <textarea className='w-full border-none outline-none whitespace-wrap' name="text" wrap="soft"> </textarea> */ }
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.quantity } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full border-none outline-none hideinput' type="number" name="quantity" id="" />

                                        </td>

                                        <td className="p-1 text-center w-28 ">
                                            <input value={ value.rate } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full border-none outline-none hideinput' type="number" name="rate" id="" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            { mul[key].mul }/-
                                        </td>


                                        <td className="p-1 text-center text-red-700 cursor-pointer w-28 text-bold">
                                            <button onClick={ () => { deleterow(key) } }>Delete</button>
                                        </td>

                                    </tr>
                                )
                            }




                            <tr className="bg-white border-b ">
                                <td colSpan={ 1 } className="text-lg text-center">
                                    <div className='m-2'>
                                        <button onClick={ addrow } className='px-6 py-1 text-white bg-fix'>Add</button>

                                    </div>
                                </td>
                                <td colSpan={ 4 } className="pr-3 text-lg text-right">
                                    Grand Total:
                                </td>
                                <td colSpan={ 1 } className="text-lg text-center">
                                    ₹{ tot }
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