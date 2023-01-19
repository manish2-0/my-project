import React from 'react'

function Newentry() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-400 min-w-screen'>
			<div className='pb-[30px] relative w-[400px] m-[16px] flex justify-center items-center border border-black h-auto p-[12px] py-[18px] rounded-md drop-shadow-2xl bg-white'>
				<form className='relative w-full h-auto' action="">
					<label className=''>Date:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="Date" placeholder='' />
					<label htmlFor="">Nature of Work:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder="" />
					<label htmlFor="">Work Status:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" name="" id="" placeholder='' />
					<label htmlFor="">Work Done By:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Time IN and OUT:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Upload Files:</label>
					<input className='mb-[30px] block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="file" placeholder='' multiple/>
                    <label htmlFor="">Remarks:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Nanosil:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Silicon</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Super Flex:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Expenses:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="number" placeholder='Travelling:' />
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="number" placeholder='Food:' />
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="number" placeholder='Accomodation:' />
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="number" placeholder='Any other expenses:' />
					<label htmlFor="">Remarks:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Billing Status:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="text" placeholder='' />
					<label htmlFor="">Upload Bills:</label>
					<input className='block w-full px-[4px] py-[5px] border-b-2 border-gray-300 my-[10px] mt-0 rounded-sm text-[18px] outline-none bg-transparent text-black' type="file" placeholder='' multiple/>

					<a className='px-[25px] py-[12px] bg-blue-600 text-white relative rounded-full cursor-pointer hover:bg-white hover:text-blue-600 hover:border border-blue-600 font-[500]'>Submit</a>

				</form>

			</div>
		</div>

  )
}

export default Newentry