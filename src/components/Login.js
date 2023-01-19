import React from 'react'

function Login() {
  return (
    <div className='flex items-center justify-center h-screen overflow-hidden '>
    <div className="rounded-lg gradbg relative  overflow-hidden w-72 h-96 drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] border border-black">
      <div className='drop-shadow-[3px_3px_2px_rgba(0,0,0,0.28)] itslogo absolute top-[18px] left-[50%] translate-x-[-50%] w-[120px] mx-auto h-[120px] outline-red-600'>

      </div>

      {/* <span className='h-[400px] w-[400px] bg-[#6db5fc] absolute rounded-[50%] right-[10%] top-[10%]'></span> */}

      <div className=' absolute bottom-[15px] w-[99%] h-[62%] flex left-[50%]  translate-x-[-50%] justify-center flex-col '>
        <input className='outline-none drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)] w-[90%] h-[45px] m-auto my-[10px] rounded-full px-3 ' type="text" placeholder='Email' required />

        <input className='outline-none drop-shadow-[0px_2px_2px_rgba(0,0,0,0.25)]  w-[90%] h-[45px] m-auto my-[10px] rounded-full px-3 ' type="text" placeholder='Password' required />
        <a className='p-[7px] px-[50px] text-center bg-[#2a3195] text-white hover:drop-shadow-lg rounded-full mx-auto my-[5px] text-[20px] mt-[15px]'>Login</a>
      </div>



    </div>

  </div>


  //     <section className="h-screen">
  //   <div className="h-full px-6 text-gray-800">
  //     <div
  //       className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6"
  //     >
  //       <div
  //         className="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0"
  //       >
  //         <img
  //           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
  //           className="w-full"
  //           alt="Sample image"
  //         />
  //       </div>
  //       <div className="mb-12 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
  //         <form>


  //           <div
  //             className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
  //           >
  //             <p className="mx-4 mb-0 font-semibold text-center">Or</p>
  //           </div>

  //            <div className="mb-6">
  //             <input
  //               type="text"
  //               className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  //               id="exampleFormControlInput2"
  //               placeholder="ID"
  //             />
  //           </div>

  //            <div className="mb-6">
  //             <input
  //               type="password"
  //               className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
  //               id="exampleFormControlInput2"
  //               placeholder="Password"
  //             />
  //           </div>

  //           <div className="flex items-center justify-between mb-6">
  //             <div className="form-group form-check">


  //             </div>
  //           </div>

  //           <div className="text-center lg:text-left">
  //             <button
  //               type="button"
  //               className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
  //             >
  //               Login
  //             </button>

  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // </section>
  )
}

export default Login