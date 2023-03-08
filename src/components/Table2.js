import React, { useState, useEffect } from 'react'
import useBill from '../hooks/useBill';


const Table2 = () => {

    const { 
        row1, setrow1
        ,mul1, setmul1
        ,tot1, settot1
        ,fixrate1, setfixrate1
        ,varrate1, setvarrate1
        ,grand1, setgrand1
        ,fabri1, setfabri1
        ,inputval1, setinputval1
        ,fabrirate1, setfabrirate1 } = useBill();

    const add = () => {
        setrow1(v => [...v, { userinput:"" ,type: "Select option...", quantity: 0, length: 0, breadth: 0 }])
        setmul1(a => [...a, { mul: 0 }])
    }

    const deleterow = (key) => {
        setrow1(
             row1.filter((_, i) => i !== key)
        )
        setmul1( mul1.filter((_, i) => i !== key)
        )

    }

    function consoleval(){
        console.log(row1)
        console.log(mul1)
    }


    function handlechange(key, name, value) {
        setrow1(row1.map((product, i) => (
            i === key ? { ...product, [name]: value } : product
        )))

    }

    function inputval1change(e) {
        e.preventDefault();
        console.log(e.target.value)
        setinputval1(e.target.value)

    }


    useEffect(() => {

        setmul1(row1.map((product, i) => {
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

    }, [row1]);


    useEffect(() => {
        let a = 0;

        for (let i = 0; i < mul1.length; i++) {
            a = a + parseFloat(mul1[i].mul);
        }

        settot1(a.toFixed(2));
    }, [mul1]);


    useEffect(() => {

        if (fabri1 == "Select option...") {
            setfixrate1(0);
            setvarrate1(0);
            setgrand1(0);
        }

        else {
            if (tot1 > 0 && tot1 <= 50) {
                setfixrate1(8100);
                setvarrate1(0);
                setgrand1(8100);
            }

            if (tot1 > 50) {
                setfixrate1(8100);
                setvarrate1(((tot1 - 50) * fabrirate1).toFixed());
                setgrand1((8100 + (tot1 - 50) * fabrirate1).toFixed());

            }

            if (tot1 <= 0) {
                setfixrate1(0);
                setvarrate1(0);
                setgrand1(0);

            }
        }




    }, [tot1, fabri1]);


    function handlefabrichange(value) {
        if (value == "Fabrication at Site") {
            setfabri1(value);
            setfabrirate1(100);
        }
        else if (value == "Fabrication at Factory") {
            setfabri1(value);
            setfabrirate1(50);
        }
        else {
            setfabri1(value);
            setfabrirate1(0);
        }

    }




    return (
        <>
            <p className='container px-3 m-auto max-w-[1300px] text-2xl'>Bill 1:</p>

            <div className='container px-3 m-auto max-w-[1300px] mb-6'>
                <div className='flex items-center w-full'>
                    <p className='text-lg text-fix'>Fabrication Type: {fabri1}</p>
                  
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


                            <tr className="text-center bg-white border-b">
                                <th colSpan={7} className="px-6 py-2 whitespace-nowrap">
                                    <input type="text" className='w-full border-none outline-none' onChange={inputval1change} value={inputval1} />
                                </th>
                            </tr>


                            {
                                row1.map((value, key) =>
                                    <tr className="bg-white border-b ">

                                        <th className="w-48 px-6 py-2 text-right whitespace-nowrap">
                                            <input value={ value.userinput } name="userinput" type="text" onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='w-full p-1 text-right border-none outline-none hideinput' />
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
                                            { mul1[key].mul }
                                        </td>

                                        <td className="w-auto p-1 text-center text-red-700 cursor-pointer text-bold">
                                            <button onClick={ () => { deleterow(key) } }>Delete</button>
                                        </td>


                                    </tr>
                                )
                            }

                            <>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 5 } className="p-1 text-right text-fix text-lg">
                                        Total Area:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        { tot1 } sq.ft
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 5 } className="p-1 text-right text-fix text-lg">
                                        Total Fixed(for 50sqft or below):
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        ₹{ fixrate1 }
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 5 } className="p-1 text-right text-fix text-lg">
                                        Total (for above 50sqft@₹{ fabrirate1 } ):
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        ₹{ varrate1 }
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 1 } className="p-2 pl-4 text-base">
                                        <button onClick={ () => { add() } } className='px-6 py-1 text-white bg-fix'>Add</button>
                                        {/* <button onClick={ () => { consoleval() } } className='px-6 py-1 text-white bg-fix'>Console</button> */}

                                    </td>

                                    <td colSpan={ 4 } className="p-1 text-right text-fix text-lg">
                                        Grand Total:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-lg">
                                        ₹{ grand1 }
                                    </td>

                                </tr>

                            </>


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Table2