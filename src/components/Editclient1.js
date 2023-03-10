import React from 'react'
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Loader from './Loader';
import moment from 'moment/moment';
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';


function Editclient1() {

	const { modal, setmodal, modalmessage, setmodalmessage } = useModal();


	const api = useAxiosPrivate();

	const [loading, setloading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const { user } = location.state;

	const [inputs, setinputs] = useState(user);

	useEffect(() => {
		setinputs(values => ({ ...values, date: moment(user.date).format("YYYY-MM-DD") }))
	}, []);


	function handlechange(event) {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setinputs(values => ({ ...values, [name]: value }))
		// console.log(inputs)
	}

	const formsubmit = async (event) => {
		event.preventDefault()
		setloading(true);
		// console.log(inputs)

		try {
			await api.put(`client/update-client/${user.blp_id}`, JSON.stringify(inputs)).then(async function (response) {
				if (response.data.status == 1) {
					setloading(false);
					setmodal(true);
					await setmodalmessage({
						"text1": "Done",
						"text2": "Data edited succesfully."
					});
					navigate('/')
				}
				else {
					setloading(false);
					setmodal(true);
					setmodalmessage({
						"text1": "Error Occured",
						"text2": "Something went wrong."
					});
				}
			});

		} catch (error) {
			setloading(false);
			setmodal(true);
			await setmodalmessage({
				"text1": "Error Occured",
				"text2": "No server response."
			});
		}




	}

	return (
		<>
			{
				loading
					? <Loader />
					: <></>
			}

			{
				modal
					? <Modal />
					: <></>

			}


			<div className='min-h-screen relative flex flex-col items-center mx-2 border-gray-200 rounded-md z-0 pt-40 sm:pt-20 pb-[24px] bg-gray-50'>
				<h2 className='my-2 mb-4 text-4xl underline text-fix'>Edit Customer Form</h2>
				<div className='relative flex items-center justify-center h-auto m-2 rounded-md md:container bg-gray-50'>
					{/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[5px] top-[5px] border border-blue-800'>{inputs.blp_id} </span> */ }

					<form onSubmit={ formsubmit } className='relative z-10 h-auto px-5 py-5 border rounded-lg shadow-lg md:w-3/4 lg:w-3/5 border-slate-300'  >

						<div className='md:flex md:justify-between'>
							<div className='flex items-center mb-4 md:w-5/12'>
								<label className='mr-2 text-lg text-gray-900 md:block md:min-w-fit' htmlFor="">ISELL No.: </label>
								<input onChange={ handlechange } defaultValue={ inputs.isell } name="isell" className='md:w-full px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder="ISELL Number" required />
							</div>

							<div className='flex items-center mb-4 md:w-5/12'>
								<label className='mr-2 text-lg text-gray-900 md:block md:min-w-fit' htmlFor="">DC No.: </label>
								<input onChange={ handlechange } defaultValue={ inputs.dc_no } name="dc_no" className='md:w-full px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder="DC Number" required />
							</div>
						</div>

						<div className='flex items-center justify-start mb-4'>
							<label className='w-8 text-xl text-gray-900' htmlFor=""><i className="fa-regular fa-calendar-days"></i></label>
							<input onChange={ handlechange } defaultValue={ moment(inputs.date).format("YYYY-MM-DD") } name="date" className='px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="date" required />
						</div>

						<div className='flex items-center mb-4'>
							<label className='w-8 text-xl text-gray-900' htmlFor=""><i className="fa-solid fa-user"></i></label>
							<input onChange={ handlechange } defaultValue={ inputs.name } name="name" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Name' required />
						</div>

						<div className='flex items-center mb-4'>
							<label className='w-8 text-xl text-gray-900' htmlFor=""><i className="fa-solid fa-location-dot"></i></label>
							<input onChange={ handlechange } defaultValue={ inputs.address } name="address" className='w-full h-16 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Address' required />
						</div>

						<div className='flex items-center mb-4'>
							<label className='w-8 text-lg text-gray-900' htmlFor=""><i className="fa-solid fa-city"></i></label>
							<input onChange={ handlechange } defaultValue={ inputs.city } name="city" className='lg:w-1/2 w-3/4 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='City' required />
						</div>

						<div className='flex items-center mb-4'>
							<label className='w-8 text-lg text-gray-900 ' htmlFor=""><i className="fa-solid fa-phone"></i></label>
							<input onChange={ handlechange } defaultValue={ inputs.contact } name="contact" className='lg:w-1/2 w-3/4 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Contact' required />
						</div>

						<div className='flex items-center mb-4'>
							<label className='mr-2 text-lg text-gray-900 w-fit md:block md:min-w-fit ' htmlFor="">Work Status:</label>

						<select defaultValue={ inputs.work_status } onChange={ handlechange } name="work_status" className='lg:w-1/3 md:w-1/2 px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' required>
								<option>Pending</option>
								<option>Done</option>
							</select>
						</div>


						<div className='flex items-center mb-4'>
							<label className='mr-2 text-lg text-gray-900 w-fit md:block md:min-w-fit ' htmlFor="">Bill Status:</label>

							<select defaultValue={ inputs.bill_status } onChange={ handlechange } name="bill_status" className='md:w-1/2 lg:w-1/3 px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' required>
								<option>Pending</option>
								<option>Done</option>
							</select>
						</div>


						<div className='flex items-center justify-start'>
							<button disabled={ loading } className="rounded-sm ani-button">Submit</button>
						</div>
					</form>

				</div>
			</div>
		</>
	)
}

export default Editclient1