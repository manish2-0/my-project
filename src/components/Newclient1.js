import React,{useState} from 'react'
import { Redirect,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

function Newclient1() {


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
		axios.post(`http://localhost:80/blp-api/v1/create.php`, JSON.stringify(inputs)).then(function (response) {
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
		<div className='min-h-screen relative flex flex-col items-center mx-2 border-gray-200 rounded-md z-0 pt-40 sm:pt-20 pb-[24px] bg-gray-50'>
			<h2 className='my-2 mb-4 text-4xl text-fix underline'>Customer Form</h2>
			<div className='md:container m-2  relative flex items-center justify-center h-auto bg-gray-50 rounded-md'>
				{/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[5px] top-[5px] border border-blue-800'> </span> */}

				<form onSubmit={formsubmit} className='z-10 md:w-3/4 lg:w-3/5 relative h-auto rounded-lg px-5 py-5 border border-slate-300 shadow-lg'  >

				<div className='md:flex md:justify-between'>	
                    <div className='flex items-center mb-4 md:w-5/12'>
					<label className='md:block md:min-w-fit text-gray-900 text-lg mr-2' htmlFor="">ISELL No.: </label>
					<input onChange={handlechange}  name="isell" className='md:w-full px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder="ISELL Number" required/>
                    </div>

                    <div className='flex items-center mb-4 md:w-5/12'>
					<label className='md:block md:min-w-fit text-gray-900 text-lg mr-2' htmlFor="">DC No.: </label>
					<input onChange={handlechange}  name="dc_no" className='md:w-full px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder="DC Number" required/>
                    </div>
				</div>

                    <div className='flex items-center justify-start mb-4'>
					<label className='text-gray-900 text-xl w-8' htmlFor=""><i class="fa-regular fa-calendar-days"></i></label>
					<input onChange={handlechange}  name="date" className='px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="date" required/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className='text-gray-900 text-xl w-8' htmlFor=""><i class="fa-solid fa-user"></i></label>
					<input onChange={handlechange}  name="name" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Name' required/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className='text-gray-900 text-xl w-8' htmlFor=""><i class="fa-solid fa-location-dot"></i></label>
					<input onChange={handlechange}  name="address" className='w-full h-16 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Address' required/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className='text-gray-900 text-lg w-8' htmlFor=""><i class="fa-solid fa-city"></i></label>
					<input onChange={handlechange}  name="city" className='lg:w-1/2 w-3/4 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='City' required/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className=' text-gray-900 text-lg w-8 ' htmlFor=""><i class="fa-solid fa-phone"></i></label>
					<input onChange={handlechange}  name="contact" className='lg:w-1/2 w-3/4 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Contact' required/>
                    </div>



					<div className='flex items-center justify-start'>
					<button class="ani-button rounded-sm">Submit</button>
					</div>
				</form>

			</div>
		</div>

	)
}

export default Newclient1