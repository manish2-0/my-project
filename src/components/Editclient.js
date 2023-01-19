import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';



function Editclient() {
	const navigate = useNavigate();
    const location = useLocation();
  const {user} = location.state;

    const [inputs, setinputs] = useState(user);

	function handlechange(event) {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setinputs(values => ({ ...values, [name]: value }))
	}

	const formsubmit = async (event) => {
		event.preventDefault()
        console.log(inputs)
		axios.put(`http://localhost:80/api/`, inputs).then(function (response) {
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
    <div className='relative flex flex-col items-center justify-center mx-2 border border-gray-200 rounded-md z-0 pb-[24px] bg-gray-50'>
			<h2 className='my-2 mb-4 text-4xl text-blue-900 underline'>Edit Customer Form</h2>
			<div className='relative flex items-center justify-center h-auto bg-white rounded-md'>
				<span className='z-[-1] absolute w-full h-full rounded-lg left-[5px] top-[5px] border-2 border-blue-800'>{user.nanosil} </span>

				<form className='z-10 relative w-[400px] h-auto rounded-lg p-[12px] py-[18px] border-2 border-gray-300' action="" onSubmit={ formsubmit }>

                <label className='text-gray-900 text-xl text-center block underline' htmlFor="">BLP ID:{inputs.blpid}</label><br />
					<label className='text-gray-500' htmlFor="">ISELL No:</label>
					<input onChange={ handlechange } defaultValue={inputs.isell} name="isell" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder="" />

					<label className='text-gray-500' htmlFor="">Date:</label>
					<input defaultValue={inputs.date} onChange={ handlechange } name="date" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="date" placeholder="" />
					<label className='text-gray-500' htmlFor="">Name:</label>
					<input defaultValue={inputs.name} onChange={ handlechange } name="name" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" id="" placeholder='' />
					<label className='text-gray-500' htmlFor="">Address:</label>
					<input defaultValue={inputs.address} onChange={ handlechange } name="address" className=' block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label className='text-gray-500' htmlFor="">Location/City:</label>
					<input defaultValue={inputs.city} onChange={ handlechange } name="city" className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label className='text-gray-500' htmlFor="">Contact:</label>
					<input defaultValue={inputs.contact} onChange={ handlechange } name="contact" className='mb-[30px] block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="tel" placeholder='' />
					<div className='flex items-center justify-start'>
					<button type='submit' className='px-[60px] py-[12px] bg-blue-800 text-white relative rounded-lg cursor-pointer hover:bg-white hover:text-blue-800 hover:border-blue-800 border-2 border-blue-800 font-[500]'>SUBMIT</button>
					</div>
				</form>

			</div>
		</div>
  )
}

export default Editclient