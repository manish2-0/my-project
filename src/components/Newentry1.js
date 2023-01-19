import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Newentry1() {

    const location = useLocation();
    const {user} = location.state;

    const [inputs, setinputs] = useState({
        "blpid":user.blpid,
        "date":"",
        "time":"",
        "nature":"",
        "status":"",
        "doneby":"",
        "remarks1":"",
        "files1":"",
        "nanosil":"",
        "superflex":"",
        "silicon":"",
        "food":"",
        "accomodation":"",
        "travelling":"",
        "expenses":"",
        "remarks2":"",
        "files2":"",
        "billstatus":"",
        "files3":""

    });
    

    function handlechange(event) {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setinputs(values => ({ ...values, [name]: value }))
        // console.log(inputs)
	}

    const formsubmit = async (event) => {
		event.preventDefault()
		axios.post(`http://localhost:80/api/dataentry/`, inputs).then(function (response) {
			if (response.data.status == 1) {
				window.alert("Data added Successfully");
			}
			else {
				window.alert("Error Occured	");
			}
		});

        // console.log(inputs)

	}
    
    return (
        <div className='relative flex flex-col items-center justify-center mx-2 border border-gray-200 rounded-md z-0 pb-[24px] bg-gray-50'>
            <h2 className='my-2 mb-4 text-4xl text-blue-900 underline'>Entry Form</h2>
            <div className='relative flex items-center justify-center h-auto bg-white rounded-md'>
                <span className='z-[-1] absolute w-full h-full rounded-lg left-[5px] top-[5px] border-2 border-blue-800'> </span>

                <form className='z-10 w-[800px] relative h-auto rounded-lg p-[12px] py-[18px] border-2 border-gray-300' onSubmit={ formsubmit } >

                    <div className='flex justify-end p-2'>

                        <label  className='text-gray-500 pr-[10px] py-[3px] text-[18px]' htmlFor="">Date:</label>
                        <input onChange={ handlechange } name="date" className='block w-full px-[4px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="date" placeholder="" />

                        <label className='text-gray-500 ml-[30px] pr-[10px] py-[3px] text-[18px]' htmlFor="">Time:</label>
                        <input onChange={ handlechange } name="time" className='block w-full px-[4px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder="" />

                    </div>


                    <div className='flex justify-end p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit' htmlFor="">Nature of Work:</label>
                        <select onChange={ handlechange } name="nature" class="mx-2 px-[4px] w-full py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black">
                            <option selected className=''>Choose a option..</option>
                            <option>Measurement</option>
                            <option>Delivery</option>
                            <option>Installation</option>
                            <option>Revisit</option>
                        </select>


                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit' htmlFor="">Status:</label>
                        <select onChange={ handlechange } name="status" class="mx-2 w-full px-[4px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black">
                            <option selected>Choose a option..</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </select>


                    </div>

                    <div className='flex justify-end p-2'>

                        <label className='text-gray-500 pr-[10px] py-[3px] text-[18px] min-w-fit' htmlFor="">Done By:</label>
                        <input onChange={ handlechange } name="doneby" className='block w-full px-[4px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder="" />

                        <label className='text-gray-500 ml-[30px] pr-[10px] py-[3px] text-[18px] min-w-fit' htmlFor="">Remarks:</label>
                        <input onChange={ handlechange } name="remarks1" className='block w-full px-[4px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder="" />

                    </div>



                    <div className='flex justify-start p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mr-2' htmlFor="">Upload Files:</label>
                        <input onChange={ handlechange } name="files1" className='px-[3px] py-[3px] rounded-sm text-[18px] outline-none bg-transparent text-black' type="file" id="" multiple placeholder='' />


                    </div>


                    <h4 className='text-blue-900 p-2 text-[20px] min-w-fit underline '>Materials Consumed:</h4>
                    <div className='justify-end flex p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Nanosil:</label>
                        <input onChange={ handlechange } name="nanosil" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Superflex:</label>
                        <input onChange={ handlechange } name="superflex" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />


                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Silicon:</label>
                        <input onChange={ handlechange } name="silicon" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />


                    </div>

                    <h4 className='text-blue-900 p-2 text-[20px] min-w-fit underline '>Expenses(In ₹):</h4>
                    <div className='justify-end flex p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Food:</label>
                        <input onChange={ handlechange } name="food" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Accomodation:</label>
                        <input onChange={ handlechange } name="accomodation" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />


                    </div>

                    <div className='justify-end flex p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Travelling:</label>
                        <input onChange={ handlechange } name="travelling" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Any other expenses:</label>
                        <input onChange={ handlechange } name="expenses" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />


                    </div>

                    <div className='justify-end flex p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Remarks:</label>
                        <input onChange={ handlechange } name="remarks2" className='block w-full px-[3px] py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Upload Files:</label>
                        <input onChange={ handlechange } name="files2" className='block w-full px-[3px] py-[3px] rounded-sm text-[18px] outline-none bg-transparent text-black' type="file" id="" placeholder='' multiple />


                    </div>


                    <h4 className='text-blue-900 p-2 text-[20px] min-w-fit underline '>Billing Status:</h4>
                    <div className='justify-end flex p-2 '>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit' htmlFor="">Billing Status:</label>
                        <select onChange={ handlechange } name="billstatus" class="mx-2 px-[4px] w-full py-[3px] border-b-2 border-gray-300 rounded-sm text-[18px] outline-none bg-transparent text-black">
                            <option selected className=''>Choose a option..</option>
                            <option>Pending</option>
                            <option>Done</option>
                        </select>

                        <label className='text-gray-500 py-[3px] text-[18px] min-w-fit mx-2' htmlFor="">Upload Files:</label>
                        <input onChange={ handlechange } name="files3" className='block w-full px-[3px] py-[3px] rounded-sm text-[18px] outline-none bg-transparent text-black' type="file" id="" placeholder='' multiple />

                    </div>

                    <div className='flex items-center justify-start'>
                        <button type='submit' className='px-[60px] py-[12px] bg-blue-800 text-white relative rounded-lg cursor-pointer hover:bg-white hover:text-blue-800 hover:border-blue-800 border-2 border-blue-800 font-[500]'>SUBMIT</button>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Newentry1