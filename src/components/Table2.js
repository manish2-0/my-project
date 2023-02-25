import React, { useState, useEffect } from 'react'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Table2 = () => {


    const [row, setrow] = useState([]);
    const [mul, setmul] = useState([]);
    const [tot, settot] = useState(0);
    const [fixrate, setfixrate] = useState(0);
    const [varrate, setvarrate] = useState(0);
    const [grand, setgrand] = useState(0);
    const [fabri, setfabri] = useState("Select option...");
    const [fabrirate, setfabrirate] = useState(0);


    const add = () => {
        setrow(v => [...v, { type: "Select option...", quantity: null, length: null, breadth: null }])
        setmul(a => [...a, { mul: 0 }])
    }

    const deleterow = (key) => {
        setrow(oldValues => {
            return oldValues.filter((_, i) => i !== key)
        })
        setmul(oldValues => {
            return oldValues.filter((_, i) => i !== key)
        })

    }


    function handlechange(key, name, value) {
        setrow(row.map((product, i) => (
            i === key ? { ...product, [name]: value } : product
        )))

    }


    useEffect(() => {

        setmul(row.map((product, i) => {
            if (product.type === "SQFT") {
                return { mul: (product.length * product.breadth * product.quantity * 0.000010764).toFixed(2) };
            }
            else if (product.type === "RFT") {
                return { mul: (product.length * product.quantity * 0.00328).toFixed(2) };
            }
            else {
                return { mul: 0 };
            }
        }))

    }, [row]);


    useEffect(() => {
        let a = 0;

        for (let i = 0; i < mul.length; i++) {
            a = a + parseFloat(mul[i].mul);
        }

        settot(a.toFixed(2));
    }, [mul]);


    useEffect(() => {

        if (fabri == "Select option...") {
            setfixrate(0);
            setvarrate(0);
            setgrand(0);
        }

        else {
            if (tot > 0 && tot <= 50) {
                setfixrate(8100);
                setvarrate(0);
                setgrand(8100);
            }

            if (tot > 50) {
                setfixrate(8100);
                setvarrate(((tot - 50) * fabrirate).toFixed());
                setgrand((8100 + (tot - 50) * fabrirate).toFixed());

            }

            if (tot <= 0) {
                setfixrate(0);
                setvarrate(0);
                setgrand(0);

            }
        }




    }, [tot, fabri]);


    function handlefabrichange(value) {
        if (value == "Fabrication at Site") {
            setfabri(value);
            setfabrirate(100);
        }
        else if (value == "Fabrication at Factory") {
            setfabri(value);
            setfabrirate(50);
        }
        else {
            setfabri(value);
            setfabrirate(0);
        }

    }




    return (
        <>
            <p className='pl-3 text-2xl'>Bill 1:</p>

            <div className='container px-3 m-auto max-w-[1300px]'>
                <div className='flex items-center w-full'>
                    <p className='text-lg text-fix'>Fabrication Type:</p>
                    <select name="fabri" value={ fabri } onChange={ e => { handlefabrichange(e.target.value) } } className='mx-2 border outline-none border-slate-200 text-slate-700 w-fit ' id="">
                        <option>Select option...</option>
                        <option>Fabrication at Site</option>
                        <option>Fabrication at Factory</option>
                    </select>
                </div>
                <div className="relative overflow-x-auto scrollbar-hide">
                    <table className="mx-auto my-1 text-sm text-left text-gray-500 border shadow-md table-fixed ">
                        <thead className="text-white border-b border-gray-300 bg-fix">
                            <tr className='text-[16px] '>
                                <th scope="col" className="w-1/2 px-6 py-3 text-center border">
                                    ITEM
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-28">
                                    RFT/SQFT
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-28">
                                    QUANTITY
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-28">
                                    LENGTH <span className='block text-center'>(in mm)</span>
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-28">
                                    BREADTH <span className='block text-center'>(in mm)</span>
                                </th>

                                <th scope="col" className="p-2 text-center border w-28">
                                    AREA <span className='block text-center'>(in sqft)</span>
                                </th>

                                <th scope="col" className="w-auto px-3 text-center border">
                                    DELETE
                                </th>

                            </tr>
                        </thead>
                        <tbody className=''>


                            {/* <tr className="bg-white border-b hover:bg-gray-50">
                    <td colSpan="9" className='h-8 p-2 text-xl font-medium'>
                        <Skeleton height={ 25 } />
                    </td>
                </tr> */}

                            <tr className="text-center bg-white border-b">
                                <th className="px-6 py-2 whitespace-nowrap">
                                    Fixing of Quantra  Top on Kitchen Cabinet/ Dinining table.
                                </th>
                            </tr>


                            {
                                row.map((value, key) =>
                                    <tr className="bg-white border-b ">

                                        <th className="w-48 px-6 py-2 text-right whitespace-nowrap">
                                            <input type="text" className='w-full p-1 text-right border-none outline-none hideinput' />
                                        </th>

                                        <td className="p-1 w-28">
                                            <select value={ value.type } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='text-black border-none outline-none w-fit ' name="type" id="">
                                                <option>Select option...</option>
                                                <option>SQFT</option>
                                                <option>RFT</option>
                                            </select>
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.quantity } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='p-1 text-center border outline-none border-slate-200 w-28 hideinput' name="quantity" type="number" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.length } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } hidden={ value.type == "SQFT" || value.type == "RFT" ? false : true } className='p-1 text-center border outline-none border-slate-200 w-28 hideinput ' name="length" type="number" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.breadth } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } hidden={ value.type == "SQFT" ? false : true } className='p-1 text-center border outline-none border-slate-200 w-28 hideinput ' name="breadth" type="number" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <p className='w-28'>{ mul[key].mul }</p>
                                        </td>

                                        <td className="w-auto p-1 text-center text-red-700 cursor-pointer text-bold">
                                            <button onClick={ () => { deleterow(key) } }>Delete</button>
                                        </td>


                                    </tr>
                                )
                            }




                        </tbody>
                    </table>
                </div>

                {/* <button className='m-2 ani-button'>Console</button> */ }
                <button onClick={ () => { add() } } className='m-2 h-fit ani-button'>Add</button>

                <div className='flex flex-col justify-end w-full border'>


                    <div>

                        <p className='flex items-center justify-end '>
                            <h2 className='pr-1 text-lg text-fix'>Total Area:</h2>
                            <h6 className='pr-1 text-lg text-slate-600'>{ tot } sq.ft</h6>
                        </p>

                        <p className='flex items-center justify-end '>
                            <h2 className='pr-1 text-lg text-fix'>Total Fixed(for 50sqft or below):</h2>
                            <h6 className='pr-1 text-lg text-slate-600'>{ fixrate }/-</h6>
                        </p>

                        <p className='flex items-center justify-end '>
                            <h2 className='pr-1 text-lg text-fix'>Total (for above 50sqft@₹{ fabrirate } ):</h2>
                            <h6 className='pr-1 text-lg text-slate-600'>{ varrate }/-</h6>
                        </p>

                        <p className='flex items-center justify-end '>
                            <h2 className='pr-1 text-lg text-fix'>Grand Total:</h2>
                            <h6 className='pr-1 text-lg text-slate-600'>{ grand }/-</h6>
                        </p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Table2