import React from 'react'

function Login1() {
  return (
    <div className='min-h-screen flex justify-around items-center w-full bg--color '>
        <div className='relative m-4 h-96 bg-white w-full max-w-6xl rounded-lg drop-shadow-[0px_5px_3px_rgba(0,0,0,0.2)] sm:flex sm:justify-around sm:h-auto items-center sm:backdrop-filter sm:backdrop-blur-[20px] sm:bg-slate-100/20 sm:shadow-[2px_4px_20px_rgba(0,0,0,0.489)]'>
               

                <div className='absolute inline left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full h-[120px] w-[120px] bg-[#96CAFD] sm:bg-transparent border-b-2 border-gray-300 sm:relative sm:w-[45%] sm:left-0 sm:translate-x-0 sm:translate-y-0 sm:h-full sm:rounded-none sm:border-0 sm:flex sm:justify-center sm:m-5'>
                    <img className='sm:hidden drop-shadow-[2px_3px_2px_rgba(0,0,0,1)]' srcSet='https://i.ibb.co/YyMb3rm/logo.png'  alt="" />
                    <img className='hidden sm:block drop-shadow-[-3px_2px_1px_rgba(0,0,0,0.25)]' srcSet='https://i.ibb.co/Wgj9K6b/logo1.png'  alt="" />
                    <span className='h-[20px] w-[20px] bg-transparent absolute top-1/2 -left-[17px] shadow-[0px_-10px_0px_#96CAFD] rounded-tr-full sm:hidden'></span>
                    <span className='h-[20px] w-[20px] bg-transparent absolute top-1/2 -right-[17px] shadow-[0px_-10px_0px_#96CAFD] rounded-tl-full sm:hidden'></span>
                </div>


                <div className='mt-20 m-5 sm:w-[40%] sm:border sm:pb-6 sm:border-gray-200 sm:p-4 sm:my-10 sm:h-fit sm:rounded-lg sm:shadow-lg sm:bg-white/60 '>
                <h2 className='hidden sm:block text-center text-[44px] mb-2  text-blue-800 logintxt font-bold '>Login</h2>
                    <label className='text-xl font-bold'>User ID:</label>
                    <input className='block my-3 h-10 w-full px-2 rounded-md outline outline-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="text" placeholder='ID' />
                    <label className='text-xl font-bold'>Password:</label>
                    <input className='block my-3 h-10 w-full px-2 rounded-md outline outline-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="password" placeholder='Password' />
                    <div className='mt-7 flex justify-center'>
                    <button className=' px-12 py-3 bg-blue-800 border-2 border-blue-800 rounded-full text-[20px] text-white hover:bg-white hover:text-blue-800 hover:drop-shadow-[2px_5px_2px_rgba(0,0,0,0.3)]'>SUBMIT</button>
                    </div>
                </div>
       
        </div>

       


    </div>
  )
}

export default Login1