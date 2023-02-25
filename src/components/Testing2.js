import React, { useState, useEffect } from 'react'
import 'tw-elements';

const Testing2 = () => {



    const [size, setsize] = useState([]);
    const [mul, setmul] = useState([]);
    const [tot, settot] = useState(0);
    const [fixrate, setfixrate] = useState(0);
    const [varrate, setvarrate] = useState(0);
    const [grand, setgrand] = useState(0);

    const deleterow = (key) => {
        // setsize(size.splice(key, 1))
        // setmul(mul.splice(key, 1))

        setsize(oldValues => {
            return oldValues.filter((_, i) => i !== key)
        })
        setmul(oldValues => {
            return oldValues.filter((_, i) => i !== key)
        })

    }

    const add = () => {
        setsize(v => [...v, { type: "Select option...", quantity: 0, length: 0, breadth: 0 }])
        setmul(a => [...a, { mul: 0 }])
    }

    function handlechange(key, name, value) {
        // console.log(size[0])
        // setsize(...k,k[key]?.[name]:value);
        setsize(size.map((product, i) => (
            i === key ? { ...product, [name]: value } : product
        )))



    }

    useEffect(() => {

        // This will add mul to size array

        // setmul(size.map((product, i) => (
        //     { ...product, mul: size[i].length * size[i].breadth * size[i].quantity }
        // )))

        // setmul(size.map((product, i) => (
        //     { mul: size[i].length * size[i].breadth * size[i].quantity }
        // )))



        setmul(size.map((product, i) => {
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





    }, [size]);


    useEffect(() => {
        let a = 0;

        for (let i = 0; i < mul.length; i++) {
            a = a + parseFloat(mul[i].mul);
        }

        settot(a.toFixed(2));
    }, [mul]);

    useEffect(() => {
        if (tot > 0 && tot <= 50) {
            setfixrate(8100);
            setvarrate(0);
            setgrand(8100);
        }

        if (tot > 50) {
            setfixrate(8100);
            setvarrate(((tot - 50) * 153).toFixed());
            setgrand((8100 + (tot - 50) * 153).toFixed());

        }

        if (tot <= 0) {
            setfixrate(0);
            setvarrate(0);
            setgrand(0);

        }

    }, [tot]);


    const consoleval = (key) => {
        console.log(size)
        console.log(mul)
    }


    // const items = localStorage.getItem('items');
    //     console.log(items)
    //     // if (items) {
    //      setsize(items);
    //     // }




    // useEffect(() => {
    //     const items = localStorage.getItem('items');
    //     console.log(items)
    //     if (items) {
    //      setsize(items);
    //     }

    // }, []);

    return (
        <div class="flex flex-col">
            <div class=" ">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="w-full text-left text-sm font-light">
                            <thead class="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">No.</th>
                                    
                                    <th scope="col" class="px-6 py-4">Item</th>
                                    <th scope="col" class="px-6 py-4">SQFT/RFT</th>
                                    <th scope="col" class="px-6 py-4">Quantity</th>
                                    <th scope="col" class="px-6 py-4">Length</th>
                                    <th scope="col" class="px-6 py-4">Breadth</th>
                                    <th scope="col" class="px-6 py-4">Area</th>
                                    <th scope="col" class="px-6 py-4">Delete</th>

                                </tr>
                            </thead>

                            <tbody>





                                { size.map((user, key) =>
                                    <tr>
                                        <th scope="col" class="px-6 py-4">{ key + 1 }</th>
                                        <th scope="col" class="px-6 py-4 h-auto">
                                            <input className='h-fit' disabled={key==0?true:false}  value={key==0?"Fixing of Quantra  Top on Kitchen Cabinet/ Dinining table.":""} type="text" />
                                        </th>
                                        <th scope="col" class="px-6 py-4">

                                            <select value={ user.type } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } className='h-10 px-2 mr-1 text-black border border-gray-300 rounded-full outline-none ' name="type" id="">
                                                <option>Select option...</option>
                                                <option>SQFT</option>
                                                <option>RFT</option>


                                            </select>

                                        </th>


                                        <th scope="col" class="px-6 py-4">
                                            <input name="quantity" type="number" value={ user.quantity } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } />
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            <input hidden={ user.type == "SQFT" || user.type == "RFT" ? false : true } name="length" type="number" value={ user.length } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } />
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            <input hidden={ user.type == "SQFT" ? false : true } name="breadth" type="number" value={ user.breadth } onChange={ e => { handlechange(key, e.target.name, e.target.value) } } />
                                        </th>
                                        <th scope="col" class="px-6 py-4">{ mul[key].mul } sq.ft</th>
                                        <th scope="col" class="px-6 py-4">
                                            <button onClick={ () => { deleterow(key) } }>Delete</button>
                                        </th>

                                    </tr>
                                ) }



                            </tbody>
                        </table>
                        <div>
                            <p className='flex justify-end items-center '>
                                <h2 className='text-2xl p-1'>Total Area:</h2>
                                <h6 className='text-xl p-1'>{ tot } sq.ft</h6>
                            </p>
                        </div>

                        <div>
                            <p className='flex justify-end items-center '>
                                <h2 className='text-2xl p-1'>Total Fixed(for 50sqft or below):</h2>
                                <h6 className='text-xl p-1'>{ fixrate }/-</h6>
                            </p>

                            <p className='flex justify-end items-center '>
                                <h2 className='text-2xl p-1'>Total (for above 50sqft ):</h2>
                                <h6 className='text-xl p-1'>{ varrate }/-</h6>
                            </p>

                            <p className='flex justify-end items-center '>
                                <h2 className='text-2xl p-1'>Grand Total:</h2>
                                <h6 className='text-xl p-1'>{ grand }/-</h6>
                            </p>
                        </div>

                        <button className='ani-button m-3' onClick={ () => { consoleval() } }>Console</button>
                        <button className='ani-button m-3' onClick={ () => { add() } }>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testing2