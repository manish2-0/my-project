import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect,Link,useNavigate } from 'react-router-dom';


function Newclient() {

	const navigate = useNavigate();
	const [inputs, setinputs] = useState({});


	function handlechange(event) {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setinputs(values => ({ ...values, [name]: value }))
	}

	const formsubmit = async (event) => {
		event.preventDefault()
		axios.post(`http://localhost:80/api/`, inputs).then(function (response) {
			if (response.data.status == 1) {
				window.alert("Data added Successfully");
				navigate('/');
			}
			else {
				window.alert("Error Occured	");
			}

		});

		

	}


	return (
		<div className='relative flex flex-col items-center justify-center mx-2 border border-gray-200 rounded-md z-0 pb-[24px] bg-gray-50'>
			<h2 className='my-2 mb-4 text-4xl text-blue-900 underline'>Customer Form</h2>
			<div className='relative flex items-center justify-center h-auto bg-white rounded-md'>
				<span className='z-[-1] absolute w-full h-full rounded-lg left-[5px] top-[5px] border-2 border-blue-800'> </span>

				<form className='z-10 relative w-[400px] h-auto rounded-lg p-[12px] py-[18px] border-2 border-gray-300' action="" onSubmit={ formsubmit }>

					<label className='text-gray-500' htmlFor="">ISELL No:</label>
					<input onChange={ handlechange } name="isell" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder="" />

					<label className='text-gray-500' htmlFor="">Date:</label>
					<input onChange={ handlechange } name="date" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="date" placeholder="" required/>
					<label className='text-gray-500' htmlFor="">Name:</label>
					<input onChange={ handlechange } name="name" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' required/>
					<label className='text-gray-500' htmlFor="">Address:</label>
					<input onChange={ handlechange } name="address" className=' block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' required/>
					<label className='text-gray-500' htmlFor="">Location/City:</label>
					<input onChange={ handlechange } name="city" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' required/>
					<label className='text-gray-500' htmlFor="">Contact:</label>
					<input onChange={ handlechange } name="contact" className='mb-[30px] block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="tel" placeholder='' required/>
					<div className='flex items-center justify-start'>
					<button type='submit' className='px-[60px] py-[12px] bg-blue-800 text-white relative rounded-lg cursor-pointer hover:bg-white hover:text-blue-800 hover:border-blue-800 border-2 border-blue-800 font-[500]'>SUBMIT</button>
					</div>
				</form>

			</div>
		</div>

	)
}

export default Newclient