import React from 'react'
import { useState } from 'react';


function Navbar1() {
    const [scrolling ,setscrolling] = useState(false);

    
    // const scrollh=()=>{
    //     if(window.scrollY>=65){
    //         setscrolling(true);
    //         let a=document.getElementById("main");
    //         // console.log(a)
    //     }
    //     else{
    //         setscrolling(false);
    //     }
    // }
    // window.addEventListener("scroll",scrollh);
    
    return (


        
        
        <div className='bghome m-3 rounded z-30' id='main'>
            <div className='container w-full p-2 px-3 mx-auto'>

                <div className='flex justify-between'>

                {/* Navicon */ }
                <div className='w-1/4 order-1'>
                    <img className='h-14 w-14' src="https://i.ibb.co/YyMb3rm/logo.png" alt="" srcset="" />
                </div>

                

                <div className='w-1/2 relative my-2 hidden sm:block order-2'>
                    <div className='w-3/4 relative h-12 rounded-full overflow-hidden'>
                        <span className='absolute top-1/2 -translate-y-1/2 left-2'><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input className='w-full h-full px-8 pr-32 outline-none ' type="text" placeholder='Search...'/>
                        <span className='absolute top-1/2 -translate-y-1/2 right-0'>
                            <select className=' bg-gray-200 text-black px-2 rounded-full h-10 mr-1 outline-none' name="" id="">
                                <option selected>Select...</option>
                                <option>BLP Id</option>
                                <option>ISELL No.</option>
                                <option>DC No.</option>
                                <option>Mobile</option>
                                <option>Name</option>
                                <option>City</option>

                            </select>
                        </span>
                    </div>
                </div>


                {/* Person Logo */ }

                <div className='w-1/4 flex justify-end items-center order-3'>
                    <svg class="w-[30px] h-[30px] text-white  " fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>


                </div>

                <div className='relative my-2 sm:hidden'>
                    <div className='relative h-12 rounded-full overflow-hidden'>
                        <span className='absolute top-1/2 -translate-y-1/2 left-2'><i class="fa-solid fa-magnifying-glass"></i></span>
                        <input className='w-full h-full px-8 pr-32 outline-none ' type="text" placeholder='Search...'/>
                        <span className='absolute top-1/2 -translate-y-1/2 right-0'>
                            <select className=' bg-gray-200 text-black px-2 rounded-full h-10 mr-1 outline-none' name="" id="">
                                <option selected>Select...</option>
                                <option>BLP Id</option>
                                <option>ISELL No.</option>
                                <option>DC No.</option>
                                <option>Mobile</option>
                                <option>Name</option>
                                <option>City</option>

                            </select>
                        </span>
                    </div>
                </div>


            </div>



        </div>

       
    )
}

export default Navbar1