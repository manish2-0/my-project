import React, { useState, useEffect } from 'react'
import useBill from '../hooks/useBill';


const ExtraBillTable = () => {

    const {
        row4, setrow4,
        mul4, setmul4,
        tot4, settot4,
        toparea, settoparea,
        panelarea, setpanelarea,
        grand4, setgrand4,
        fabri4, setfabri4,
        fabrirate4, setfabrirate4,
        inputval4, setinputval4,
        panelamount, setpanelamount,
        topamount, settopamount
    } = useBill();


    function inputval4change(e) {
        e.preventDefault();
        console.log(e.target.value)
        setinputval4(e.target.value)

    }


    const add = () => {
        setrow4(v => [...v, { userinput: "", opt: "Select option...", type: "Select option...", quantity: 0, length: 0, breadth: 0 }])
        setmul4(a => [...a, { mul: 0 }])
    }

    const deleterow = (key) => {
        setrow4(
            row4.filter((_, i) => i !== key)
        )
        setmul4(mul4.filter((_, i) => i !== key)
        )

    }



    function handlechange(key, name, value) {
        setrow4(row4.map((product, i) => (
            i === key ? { ...product, [name]: value } : product
        )))

    }


    useEffect(() => {

        setmul4(row4.map((product, i) => {
            if (product.opt != "Select option..." && product.type === "SQFT") {
                return { mul: (product.length * product.breadth * product.quantity * 0.000010764).toFixed(2) };
            }
            else if (product.opt != "Select option..." && product.type === "RFT") {
                return { mul: (product.length * product.quantity * 0.00328).toFixed(2) };
            }
            else {
                return { mul: 0 };
            }
        }))

    }, [row4]);


    useEffect(() => {
        let tot = 0;
        let areaoftop = 0;
        let areaofpanel = 0;

        for (let i = 0; i < mul4.length; i++) {
            tot = tot + parseFloat(mul4[i].mul);

            if (row4[i].opt == "Top") {
                areaoftop = areaoftop + parseFloat(mul4[i].mul);
            }

            if (row4[i].opt == "Panel") {
                areaofpanel = areaofpanel + parseFloat(mul4[i].mul);
            }

        }

        settot4(tot.toFixed(2));
        settoparea(areaoftop.toFixed(2));
        setpanelarea(areaofpanel.toFixed(2));

    }, [mul4]);


    useEffect(() => {
        settopamount((parseFloat(toparea) * fabrirate4.top).toFixed(0));
    }, [toparea]);

    useEffect(() => {
        setpanelamount((parseFloat(panelarea) * fabrirate4.panel).toFixed(0));
    }, [panelarea]);


    useEffect(() => {
        setgrand4(parseInt(topamount) + parseInt(panelamount));
    }, [topamount, panelamount]);



    return (
        <>
            <p className='container px-3 m-auto max-w-[1300px] text-2xl'>Extra Bill:</p>

            <div className='container px-3 m-auto max-w-[1300px] mb-6'>
                <div className='flex items-center w-full'>
                    <p className='text-lg text-fix'>Fabrication Type: { fabri4 }</p>

                </div>
                <div className="relative overflow-x-auto scrollbar-hide">
                    <table className="mx-auto my-1 text-sm text-left text-gray-500 border shadow-md table-fixed ">
                        <thead className="text-white border-b border-gray-300 bg-fix">
                            <tr className='text-[16px] '>
                                <th scope="col" className="w-1/2 px-6 py-3 text-center border">
                                    ITEM
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-20">
                                    TYPE
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-20">
                                    RFT/SQFT
                                </th>
                                <th scope="col" className="p-2 px-8 text-center border w-20">
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
                                <th colSpan={ 8 } className="px-6 py-2 whitespace-nowrap">
                                    <input type="text" className='w-full border-none outline-none' onChange={ inputval4change } value={ inputval4 } />
                                </th>
                            </tr>


                            {
                                row4.map((value, key) =>
                                    <tr className="bg-white border-b ">

                                        <th className="w-48 px-6 py-2 text-right whitespace-nowrap">
                                            <input value={ value.userinput } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } name="userinput" type="text" className='w-full p-1 text-right border-none outline-none hideinput' />
                                        </th>

                                        <td className="p-1 w-16">
                                            <select value={ value.opt } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='text-black border-none outline-none max-w-fit ' name="opt" id="">
                                                <option>Select option...</option>
                                                <option>Top</option>
                                                <option>Panel</option>
                                            </select>
                                        </td>

                                        <td className="p-1 w-16">
                                            <select value={ value.type } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='text-black border-none outline-none max-w-fit ' name="type" id="">
                                                <option>Select option...</option>
                                                <option>SQFT</option>
                                                <option>RFT</option>
                                            </select>
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.quantity } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='p-1 text-center border outline-none border-slate-200 w-28 hideinput' name="quantity" type="number" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.length } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } hidden={ value.opt != "Select option..." && (value.type == "SQFT" || value.type == "RFT") ? false : true } className='p-1 text-center border outline-none border-slate-200 w-28 hideinput ' name="length" type="number" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <input value={ value.breadth } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } hidden={ value.opt != "Select option..." && value.type == "SQFT" ? false : true } className='p-1 text-center border outline-none border-slate-200 w-28 hideinput ' name="breadth" type="number" />
                                        </td>

                                        <td className="p-1 text-center w-28">
                                            <p className='w-28'>{ mul4[key].mul }</p>
                                        </td>

                                        <td className="w-auto p-1 text-center text-red-700 cursor-pointer text-bold">
                                            <button onClick={ () => { deleterow(key) } }>Delete</button>
                                        </td>


                                    </tr>
                                )
                            }

                            <>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 6 } className="p-1 text-right text-fix text-lg">
                                        Total Area:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        { tot4 } sq.ft
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 6 } className="p-1 text-right text-fix text-lg">
                                        Total Area of Top:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        { toparea } sq.ft
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 6 } className="p-1 text-right text-fix text-lg">
                                        Total Area of Panel:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        { panelarea } sq.ft
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 6 } className="p-1 text-right text-fix text-lg">
                                        Total Amount of Top @₹{ fabrirate4.top }:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        ₹{ topamount }
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 6 } className="p-1 text-right text-fix text-lg">
                                        Total Amount of Panel @₹{ fabrirate4.panel }:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-base">
                                        ₹{ panelamount }
                                    </td>

                                </tr>

                                <tr className="bg-white border-b ">

                                    <td colSpan={ 1 } className="p-2 pl-4 text-base">
                                        <button onClick={ () => { add() } } className='px-6 py-1 text-white bg-fix'>Add</button>


                                    </td>

                                    <td colSpan={ 5 } className="p-1 text-right text-fix text-lg">
                                        Grand Total:
                                    </td>

                                    <td colSpan={ 2 } className="p-1 text-center text-lg">
                                        ₹{ grand4 }
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

export default ExtraBillTable