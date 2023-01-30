import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';

function Entryedit2() {

    const navigate = useNavigate();
    const location = useLocation();
    const {values} = location.state;
    const [inputs, setinputs] = useState(values);


    function handlechange(event) {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setinputs(values => ({ ...values, [name]: value }))
        // console.log(inputs)
	}

    const formsubmit = async (event) => {
		event.preventDefault()
        axios.put(`http://localhost:80/blp-api/testing/dataentry/`, inputs).then(function (response) {
			if (response.data.status == 1) {
				window.alert("Data updated Successfully");
                navigate('/');
			}
			else {
				window.alert("Error Occured	");
			}
		});
    }

    return (
        <div className='relative flex flex-col items-center pt-40 sm:pt-20 mx-2 border-gray-200 rounded-md z-0 bg-gray-50 '>
            <h2 className='my-2 mb-4 text-4xl text-fix underline'>Entry Form</h2>
            <div className='container relative flex items-center justify-center h-auto bg-gray-50 rounded-md'>
                

                <form onSubmit={formsubmit} className=' w-full lg:w-3/4 sm:mx-2 mx-1 relative h-auto rounded-lg sm:px-6 px-2 py-4 border sm:border-2 border-slate-200 bg-gray-50 z-10' >
                    {/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[20px] top-[5px] border-2 border-blue-800'> </span> */}

                    <div className='flex justify-between mb-3 flex-wrap sm:flex-nowrap sm:justify-start'>

                        <div className='w-full mb-3 sm:w-2/5 sm:mr-5 sm:mb-0'>
                            <label className='sm:min-w-fit text-gray-500 pr-2 py-2 text-lg' htmlFor="">Date:</label>
                            <input defaultValue={inputs.date} onChange={ handlechange } name="date" className='px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent' type="date" placeholder="" />
                        </div>

                        <div className='w-full flex sm:w-1/2'>
                            <label className='sm-block sm:min-w-fit text-gray-500 pr-2 py-2 text-lg ' htmlFor="">Time:</label>
                            <input defaultValue={inputs.time} onChange={handlechange} name="time" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent' type="text" placeholder="" />
                        </div>

                    </div>


                    <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:w-2/5'>
                            <label className=' text-gray-500 pr-2 py-2 text-lg' htmlFor="">Nature of Work:</label>

                            <select defaultValue={inputs.nature} onChange={handlechange} name="nature" className="sm:w-2/5 lg:w-full w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black">
                                <option selected className=''>Choose a option..</option>
                                <option>Measurement</option>
                                <option>Delivery</option>
                                <option>Installation</option>
                                <option>Revisit</option>
                            </select>
                        </div>

                        <div className='w-full mb-3 lg:w-1/3'>
                            <label className='text-gray-500 pr-2 py-2 text-lg' htmlFor="">Status:</label>

                            <select defaultValue={inputs.status} onChange={handlechange} name="status" className=" sm:w-2/5 lg:w-full px-2 py-2 w-full border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black">
                                <option selected className=''>Choose a option..</option>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Done</option>
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 pb-3 border-b-2 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:w-2/5'>
                            <label className='min-w-fit text-gray-500 pr-2 py-2 text-lg' htmlFor="">Done By:</label>
                            <input defaultValue={inputs.doneby} onChange={handlechange} name="doneby" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                        <div className='w-full  lg:w-2/5'>
                            <label className='text-gray-500 pr-2 py-2 text-lg' htmlFor="">Remarks:</label>
                            <input defaultValue={inputs.remarks1} onChange={handlechange} name="remarks1" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>
                    </div>



                    <h4 className='text-fix mb-3 text-xl min-w-fit underline '>Materials Consumed:</h4>

                    <div className='flex flex-wrap justify-between mb-3 pb-3 border-b-2 sm:flex-nowrap'>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Nanosil:</label>
                            <input defaultValue={inputs.nanosil} onChange={handlechange} name="nanosil" className='sm:w-1/2 lg:w-2/5 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Silicon:</label>
                            <input defaultValue={inputs.silicon} onChange={handlechange} name="silicon" className='sm:w-1/2 lg:w-2/5 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Superflex:</label>
                            <input defaultValue={inputs.superflex} onChange={handlechange} name="superflex" className='sm:w-1/2 lg:w-2/5 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                    </div>



                    <h4 className='text-fix mb-3 text-xl min-w-fit underline '>Expenses(In ₹):</h4>
                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Food:</label>
                            <input defaultValue={inputs.food} onChange={handlechange} name="food" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Accomodation:</label>
                            <input defaultValue={inputs.accomodation} onChange={handlechange} name="accomodation" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Travelling:</label>
                            <input defaultValue={inputs.travelling} onChange={handlechange} name="travelling" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Any other expenses:</label>
                            <input defaultValue={inputs.expenses} onChange={handlechange} name="expenses" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 pb-3 border-b-2'>

                        <div className='w-full mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Remarks:</label>
                            <input defaultValue={inputs.remarks2} onChange={handlechange} name="remarks2" className='lg:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>


                    </div>




                    <h4 className='text-fix mb-3 text-xl min-w-fit underline'>Billing Status:</h4>

                    <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:2/5'>
                            <label className='text-gray-500 pr-2 py-2 text-lg' htmlFor="">Billing Status:</label>

                            <select defaultValue={inputs.billstatus} onChange={handlechange} name="billstatus" className="sm:w-1/2 lg:w-2/5 px-2 py-2 w-full border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black">
                                <option selected className=''>Choose a option..</option>
                                <option>Pending</option>
                                <option>Done</option>
                            </select>
                        </div>

                        <div className='w-full lg:flex'>
                            <label className='lg:min-w-fit pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Remarks:</label>
                            <input defaultValue={inputs.remarks3} onChange={handlechange} name="remarks3" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
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

export default Entryedit2