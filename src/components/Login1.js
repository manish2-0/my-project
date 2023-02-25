import React, { useState } from 'react'
import logo from '../logo.png';
import logo4 from '../logo4.png';
import { useNavigate } from 'react-router';
import api from './axiosapi';
import useAuth from '../hooks/useAuth'
import Loader from './Loader';
import Testing1 from './Testing1';
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';

function Login1(props) {

  const [loading, setloading] = useState(false);
  // const [modal, setmodal] = useState(false);
  // const [modalmessage,setmodalmessage]=useState("");

  const USERNAME = /^[A-Za-z0-9@_]{8,}$/;
  const PASSWORD = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@$&*-]).{12,}$/;

  const [inputs, setinputs] = useState({});
  const navigate = useNavigate();

  const { setauth } = useAuth();
  const { modal, setmodal, modalmessage, setmodalmessage } = useModal();


  function handlechange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setinputs(values => ({ ...values, [name]: value }))
  }


  const handlesubmit = async (event) => {
    event.preventDefault();
    setloading(true);

    // const v1=USERNAME.test(inputs.admin_id);
    // const v2=PASSWORD.test(inputs.password);

    // if(v1 && v2){
    //   // axios code here
    // }
    // else{
    //   // alert("Please check your fields")
    // }

    try {
      await api.post('admin/login', JSON.stringify(inputs), {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        // console.log(response.data)
        if (response?.data?.accessToken) {
          setauth(response.data);
          setloading(false);
          navigate("/", { replace: true })
        }
        else {
          setloading(false);
          setmodal(true);
          setmodalmessage({
            "text1": "Error Occured",
            "text2": response.data.message
          });
        }

      }
      )

    } catch (error) {
      setloading(false);
      setmodal(true);
      setmodalmessage({
        "text1": "Error Occured",
        "text2": "No server response"
      });
      // console.log(error)
      // alert("No server response")
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


      <div className='flex items-center justify-around w-full min-h-screen bg--color'>
        {/* <img className='absolute w-screen h-screen' srcSet={wall} alt="" /> */ }
        <div className='relative m-4 h-96 bg-white w-full max-w-6xl rounded-lg sm:drop-shadow-[0px_5px_3px_rgba(0,0,0,0.2)] sm:flex sm:justify-around sm:h-auto items-center sm:backdrop-filter sm:backdrop-blur-[20px] sm:bg-slate-100/20 sm:shadow-[2px_4px_20px_rgba(0,0,0,0.489)]'>


          <div className='absolute inline left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full h-[120px] w-[120px] bg-[#1C4C7B] sm:bg-transparent border-gray-300 sm:relative sm:w-[45%] sm:left-0 sm:translate-x-0 sm:translate-y-0 sm:h-full sm:rounded-none sm:border-0 sm:flex sm:justify-center sm:m-5'>
            <img className='sm:hidden drop-shadow-[2px_3px_2px_rgba(0,0,0,1)]' srcSet={ logo } alt="" />
            <img className='hidden sm:block drop-shadow-[-3px_2px_1px_rgba(0,0,0,0.25)]' srcSet={ logo4 } alt="" />
            <span className='h-[30px] w-[20px] bg-transparent absolute top-1/2 -left-[16px] shadow-[2px_-8px_0px_#1C4C7B] rounded-tr-full sm:hidden'></span>
            <span className='h-[30px] w-[20px] bg-transparent absolute top-1/2 -right-[16px] shadow-[-2px_-10px_0px_#1C4C7B] rounded-tl-full sm:hidden'></span>
          </div>


          <form onSubmit={ handlesubmit } className='mt-20 m-5 sm:w-[40%] sm:border sm:pb-6 sm:border-gray-200 sm:p-4 sm:my-10 sm:h-fit sm:rounded-lg sm:shadow-lg sm:bg-white/60 '>
            <h2 className='hidden sm:block text-center text-[44px] mb-2  text-[#1960a8] logintxt font-bold '>LOGIN</h2>
            <label className='text-xl font-bold'>User ID:</label>
            <input name="admin_id" onChange={ handlechange } className='block w-full h-10 px-2 my-3 rounded-md outline outline-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="text" placeholder='ID' />
            <label className='text-xl font-bold'>Password:</label>
            <input name="password" onChange={ handlechange } className='block w-full h-10 px-2 my-3 rounded-md outline outline-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="password" placeholder='Password' />
            <div className='flex justify-center mt-7'>
              <button disabled={ loading } className='sm:hidden block px-12 py-3 bg-[#1C4C7B] border-2 border-[#1C4C7B] rounded-full text-[20px] text-white hover:bg-white hover:text-[#1C4C7B] hover:drop-shadow-[2px_5px_2px_rgba(0,0,0,0.3)]'>LOGIN</button>
              <button disabled={ loading } className='sm:block hidden ani-buttonlogin rounded-sm bg-[#1C4C7B] hover:border-2 hover:border-[#003163]'>LOGIN</button>
            </div>
          </form>

        </div>

        {/* <footer className='absolute p-0 md:p-3 w-full bottom-0 '>
          <div className='w-full p-2 px-4 lg:px-16 flex sm:flex-row flex-col justify-center md:justify-between items-center bg-[#1C4B7B] footerlogin'>
            <div className='text-white m-1 sm:m-0 md:block hidden text-xs sm:text-base md:text-center'>
              © Copyright BLP ASSOCIATES.All Rights Reserved
            </div>

            <div className='text-white text-sm sm:text-base  '>
              Developed By: Manish and Dixit 
            </div>

          </div>
        </footer> */}

      </div>
    </>
  )
}

export default Login1