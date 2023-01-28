import React from 'react'

function Newclient1() {
    return (
		<div className='min-h-screen relative flex flex-col items-center justify-center mx-2 border-gray-200 rounded-md z-0 pb-[24px] bg-gray-50'>
			<h2 className='my-2 mb-4 text-4xl text-blue-900 underline'>Customer Form</h2>
			<div className='md:container m-2  relative flex items-center justify-center h-auto bg-gray-50 rounded-md'>
				{/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[5px] top-[5px] border border-blue-800'> </span> */}

				<form className='z-10 md:w-3/4 lg:w-3/5 relative h-auto rounded-lg px-5 py-5 border border-slate-300 shadow-lg' action="" >

				<div className='md:flex md:justify-between'>	
                    <div className='flex items-center mb-4 md:w-5/12'>
					<label className='md:block md:min-w-fit text-gray-900 text-lg mr-2' htmlFor="">ISELL No.: </label>
					<input  name="isell" className='md:w-full px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder="ISELL Number" />
                    </div>

                    <div className='flex items-center mb-4 md:w-5/12'>
					<label className='md:block md:min-w-fit text-gray-900 text-lg mr-2' htmlFor="">DC No.: </label>
					<input  name="isell" className='md:w-full px-2 py-2 text-[18px] rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder="DC Number" />
                    </div>
				</div>

                    <div className='flex items-center justify-start mb-4'>
					<label className='text-gray-900 text-xl w-8' htmlFor=""><i class="fa-regular fa-calendar-days"></i></label>
					<input  name="isell" className='px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="date"/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className='text-gray-900 text-xl w-8' htmlFor=""><i class="fa-solid fa-user"></i></label>
					<input  name="isell" className='w-full px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Name'/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className='text-gray-900 text-xl w-8' htmlFor=""><i class="fa-solid fa-location-dot"></i></label>
					<input  name="isell" className='w-full h-16 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Address'/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className='text-gray-900 text-lg w-8' htmlFor=""><i class="fa-solid fa-city"></i></label>
					<input  name="isell" className='lg:w-1/2 w-3/4 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='City'/>
                    </div>

                    <div className='flex items-center mb-4'>
					<label className=' text-gray-900 text-lg w-8 ' htmlFor=""><i class="fa-solid fa-phone"></i></label>
					<input  name="isell" className='lg:w-1/2 w-3/4 px-2 py-2 text-[18px] border rounded-md border-slate-300 bg-transparent text-black' type="text" placeholder='Contact'/>
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