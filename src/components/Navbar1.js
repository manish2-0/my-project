import React from 'react'
import { useState } from 'react';


function Navbar1() {
    const [scrolling ,setscrolling] = useState(false);

    
    const scrollh=()=>{
        if(window.scrollY>=65){
            setscrolling(true);
            let a=document.getElementById("main");
            console.log(a)
        }
        else{
            setscrolling(false);
        }
    }


    window.addEventListener("scroll",scrollh);
    
    return (


        
        <div className=''>
        <div className={scrolling?"sm:translate-y-0 transition  -translate-y-1/2 z-30 bg-blue-600 fixed w-full" :"transition translate-y-0 z-30 bg-blue-600 fixed w-full"}  id='main'>
            <div className='container relative w-full p-2 px-3 mx-auto bg-blue-600 sm:translate-y-0'>

                <div className='flex justify-between h-1/2 sm:h-auto'>

                {/* Navicon */ }
                <div className='order-1 w-1/4'>
                    <img className='h-14 w-14' src="https://i.ibb.co/YyMb3rm/logo.png" alt="" srcset="" />
                </div>

                

                <div className='relative order-2 hidden w-1/2 my-2 sm:block'>
                    <div className='relative w-3/4 h-12 overflow-hidden rounded-full'>
                        <span className='absolute -translate-y-1/2 top-1/2 left-2'><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input className='w-full h-full px-8 pr-32 outline-none ' type="text" placeholder='Search...'/>
                        <span className='absolute right-0 -translate-y-1/2 top-1/2'>
                            <select className='h-10 px-2 mr-1 text-black bg-gray-200 rounded-full outline-none ' name="" id="">
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

                <div className='flex items-center justify-end order-3 w-1/4'>
                    <svg className="w-[30px] h-[30px] text-white  " fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>


                </div>

                <div className='relative mt-4 h-1/2 sm:hidden'>
                    <div className='relative h-12 overflow-hidden rounded-full'>
                        <span className='absolute -translate-y-1/2 top-1/2 left-2'><i className="fa-solid fa-magnifying-glass"></i></span>
                        <input className='w-full h-full px-8 pr-32 outline-none ' type="text" placeholder='Search...'/>
                        <span className='absolute right-0 -translate-y-1/2 top-1/2'>
                            <select className='h-10 px-2 mr-1 text-black bg-gray-200 rounded-full outline-none ' name="" id="">
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
        </div>

       
    )
}

export default Navbar1