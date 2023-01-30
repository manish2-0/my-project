import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';

function NewEntry2() {

    const navigate = useNavigate();
    const [path, setpath] = useState();

    
    const location = useLocation();
    const { user } = location.state;
    
    const [inputs, setinputs] = useState({
        "blpid": user.blp_id,
        "date": "-",
        "time": "-",
        "nature": "-",
        "status": "-",
        "doneby": "-",
        "remarks1": "-",
        
        "nanosil": "-",
        "superflex": "-",
        "silicon": "-",
        "food": "-",
        "accomodation": "-",
        "travelling": "-",
        "expenses": "-",
        "remarks2": "-",
        
        "billstatus": "-",
        "remarks3":"-",

        "files": "-"
        
    });
    
    
    function handlechange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
        // console.log(inputs)
    }
    
    const handlechangefile = (e) => {
        // console.log(e.target.files);
        setpath(e.target.files);
    }


    const formsubmit = async (event) => {
        event.preventDefault()
        await axios.post(`http://localhost:80/blp-api/testing/dataentry/`, inputs).then(function (response) {
            if (response.data.status == 1) {
                window.alert("Data added Successfully");
                navigate('/');
            }
            else {
               window.alert("Error Occured");
            }
        })

    

            for(let i=0;i<path.length;i++){
                const formdata = new FormData();
                formdata.append('filedata', path[i]);
                await axios.post(`http://localhost:80/blp-api/testing/upload/`, formdata,{headers: {
                    'content-type': 'multipart/form-data'
                }})
    
            }
        
    }


    return (
        <div className='relative z-0 flex flex-col items-center pt-40 mx-2 border-gray-200 rounded-md sm:pt-20 bg-gray-50 '>
            <h2 className='my-2 mb-4 text-4xl underline text-fix'>Entry Form</h2>
            <div className='container relative flex items-center justify-center h-auto rounded-md bg-gray-50'>
                

                <form onSubmit={formsubmit} className='relative z-10 w-full h-auto px-2 py-4 mx-1 border rounded-lg lg:w-3/4 sm:mx-2 sm:px-6 sm:border-2 border-slate-200 bg-gray-50' >
                    {/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[20px] top-[5px] border-2 border-blue-800'> </span> */}

                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap sm:justify-start'>

                        <div className='w-full mb-3 sm:w-2/5 sm:mr-5 sm:mb-0'>
                            <label className='py-2 pr-2 text-lg text-gray-500 sm:min-w-fit' htmlFor="">Date:</label>
                            <input onChange={handlechange} name="date" className='px-2 py-2 text-lg bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="date" placeholder="" />
                        </div>

                        <div className='flex w-full sm:w-1/2'>
                            <label className='py-2 pr-2 text-lg text-gray-500 sm-block sm:min-w-fit ' htmlFor="">Time:</label>
                            <input onChange={handlechange} name="time" className='w-full px-2 py-2 text-lg bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                        </div>

                    </div>


                    <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:w-2/5'>
                            <label className='py-2 pr-2 text-lg text-gray-500 ' htmlFor="">Nature of Work:</label>

                            <select onChange={handlechange} name="nature" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-2/5 lg:w-full">
                                <option selected className=''>Choose a option..</option>
                                <option>Measurement</option>
                                <option>Delivery</option>
                                <option>Installation</option>
                                <option>Revisit</option>
                            </select>
                        </div>

                        <div className='w-full mb-3 lg:w-1/3'>
                            <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Status:</label>

                            <select onChange={handlechange} name="status" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-2/5 lg:w-full">
                                <option selected className=''>Choose a option..</option>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Done</option>
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between pb-3 mb-3 border-b-2 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:w-2/5'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Done By:</label>
                            <input onChange={handlechange} name="doneby" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                        </div>

                        <div className='w-full lg:w-2/5'>
                            <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Remarks:</label>
                            <input onChange={handlechange} name="remarks1" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                        </div>
                    </div>



                    <h4 className='mb-3 text-xl underline text-fix min-w-fit '>Materials Consumed:</h4>

                    <div className='flex flex-wrap justify-between pb-3 mb-3 border-b-2 sm:flex-nowrap'>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Nanosil:</label>
                            <input onChange={handlechange} name="nanosil" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/2 lg:w-2/5' type="text" placeholder="" />
                        </div>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Silicon:</label>
                            <input onChange={handlechange} name="silicon" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/2 lg:w-2/5' type="text" placeholder="" />
                        </div>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Superflex:</label>
                            <input onChange={handlechange} name="superflex" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/2 lg:w-2/5' type="text" placeholder="" />
                        </div>

                    </div>



                    <h4 className='mb-3 text-xl underline text-fix min-w-fit '>Expenses(In ₹):</h4>
                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Food:</label>
                            <input onChange={handlechange} name="food" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/3' type="number" placeholder="" />
                        </div>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Accomodation:</label>
                            <input onChange={handlechange} name="accomodation" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/3' type="number" placeholder="" />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Travelling:</label>
                            <input onChange={handlechange} name="travelling" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/3' type="number" placeholder="" />
                        </div>

                        <div className='flex w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Any other expenses:</label>
                            <input onChange={handlechange} name="expenses" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/3' type="number" placeholder="" />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between pb-3 mb-3 border-b-2'>

                        <div className='w-full mb-3'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                            <input onChange={handlechange} name="remarks2" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none lg:w-1/3' type="text" placeholder="" />
                        </div>


                    </div>




                    <h4 className='mb-3 text-xl underline text-fix min-w-fit'>Billing Status:</h4>

                    <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:2/5'>
                            <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Billing Status:</label>

                            <select onChange={handlechange} name="billstatus" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/2 lg:w-2/5">
                                <option selected className=''>Choose a option..</option>
                                <option>Pending</option>
                                <option>Done</option>
                            </select>
                        </div>

                        <div className='w-full mb-3 lg:flex'>
                            <label className='py-2 pr-2 text-lg text-gray-500 lg:min-w-fit min-w-fit' htmlFor="">Remarks:</label>
                            <input onChange={handlechange} name="remarks3" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                        </div>

                    </div>


                    <h4 className='mb-3 text-xl underline text-fix min-w-fit '>Upload Files:</h4>

                    <div className='flex flex-wrap justify-between border-b-2'>

                        <div className='mb-3 '>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Upload Files:</label>
                            <input onChange={handlechangefile} name="files" className='w-full px-2 py-2 text-lg rounded-sm outline-none' type="file" multiple placeholder="" />
                        </div>


                    </div>

                    <div className='flex items-center justify-center mt-2 md:justify-start'>
                        <button class="ani-button rounded-sm ">Submit</button>
                    </div>


                </form>

            </div>
        </div>

    )
}

export default NewEntry2