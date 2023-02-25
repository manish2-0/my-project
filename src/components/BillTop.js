import React from 'react'
import '../App.css';
import logo from '../logo.png';
import logo4 from '../logo4.png';


const BillTop = () => {
    return (
        <>
    
    
          <div className='flex items-center justify-around rounded-md m-4 pt-16 bg-[#1C4C7B]'>
            {/* <img className='absolute w-screen h-screen' srcSet={wall} alt="" /> */ }
            <div className='container relative flex-col items-center m-4 rounded-lg bg-slate-50 h-52 sm:justify-around '>
    
    
              <div className='absolute inline left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full h-[120px] w-[120px] bg-[#1C4C7B] '>
                <img  srcSet={ logo } alt="" />
                <span className='h-[30px] w-[20px] bg-transparent absolute top-1/2 -left-[16px] shadow-[2px_-8px_0px_#1C4C7B] rounded-tr-full '></span>
                <span className='h-[30px] w-[20px] bg-transparent absolute top-1/2 -right-[16px] shadow-[-2px_-10px_0px_#1C4C7B] rounded-tl-full '></span>
              </div>
    
    
              <form  className='mt-20 '>
                               
              </form>
    
            </div>
    
         
    
          </div>
        </>
      )
}

export default BillTop