import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import logo from '../logo.png';
import SearchContext from '../context/SearchContext'
import { useContext } from 'react';
import api from './axiosapi';
import useAuth from '../hooks/useAuth';
import Loader from './Loader';
import modal from '../context/ModalContext';
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';
import Testing3 from './Testing3';
import 'tw-elements';
// import "flowbite";   

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Navbar1(props) {

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const [loading, setloading] = useState(false);

    const { setauth,adminname,setadminname } = useAuth();

    const nav = useNavigate();

    const a = useContext(SearchContext);

    // const current1={
    //         admin_id:a.searchvalue.admin_id
    //     }


    const [scrolling, setscrolling] = useState(false);

    function handlechange(event) {
        event.preventDefault();
        // searchset(event.target.value);
        // console.log(event.target.value);

        const name = event.target.name;
        const value = event.target.value;
        // setinputs(values => ({ ...values, [name]: value }))


        a.setsearchvalue(values => ({ ...values, [name]: value }));
        // console.log(a.searchvalue.value)
    }


    function handlechange1(event) {
        event.preventDefault();
        // searchset(event.target.value);
        // console.log(event.target.value);

        const name = event.target.name;
        let value = event.target.value;

        if (value === "BLP Id") {
            value = "blp_id";
        }
        else if (value === "ISELL No.") {
            value = "isell";
        }
        else if (value === "DC No.") {
            value = "dc_no";
        }
        else if (value === "Mobile") {
            value = "contact";
        }
        else if (value === "Name") {
            value = "name";
        }
        else if (value === "City") {
            value = "city";
        }

        a.setsearchvalue(values => ({ ...values, [name]: value }));
        // console.log(a.searchvalue.searchitem)
    }

    const handlelogout = async (e) => {
        localStorage.removeItem("admin_id");
        setloading(true);
        e.preventDefault();

        try {
            await api.post('admin/logout').then(function (response) {
                // console.log(response.data);
                // props.setstatus(true);
                a.setsearchvalue(values => ({ ...values, value: "" }));
                a.setsearchvalue(values => ({ ...values, searchitem: "blp_id" }));
                a.setsearchvalue(values => ({ ...values, admin_id: null }));
                a.setsearchvalue(values => ({ ...values, login_status: false }));
                setloading(false)
                setauth({});
                setadminname("");
                setmodal(true);
                setmodalmessage({
                    "text1": "Success",
                    "text2": "Logged out successfully"
                });
                nav("/login", { replace: true });
                // alert("Logged out successfully");
            })

        } catch (error) {
            setloading(false)
            setmodal(true);
            setmodalmessage({
                "text1": "Error",
                "text2": "No server response."
            });
            // alert("No server response");
        }


    }

    const scrollh = () => {
        if (window.scrollY >= 65) {
            setscrolling(true);
            // let a = document.getElementById("main");
        }
        else {
            setscrolling(false);
        }
    }

    const imageclicked = () => {
        nav("/");
    }

    window.addEventListener("scroll", scrollh);

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

            <div className='z-50' id='navbarprivate'>
                <div className={ scrolling ? "sm:translate-y-0 transition  -translate-y-1/2 z-30 bg-fix fixed w-full" : "transition translate-y-0 z-30 bg-fix fixed w-full" } id='main'>
                    <div className='container relative w-full p-2 px-3 mx-auto bg-fix sm:translate-y-0'>

                        <div className='flex justify-between h-1/2 sm:h-auto'>

                            {/* Navicon */ }
                            <div className='flex items-center order-1 w-1/4 lg:ml-2'>
                                <img onClick={ imageclicked } className='w-16 h-16 cursor-pointer' alt="" srcSet={ logo } />
                            </div>



                            <div className='relative justify-center order-2 hidden w-1/2 my-2 sm:flex'>
                                <div className='relative w-3/4 h-12 overflow-hidden rounded-full'>
                                    <span className='absolute -translate-y-1/2 top-1/2 left-4 text-fix'><i className="fa-solid fa-magnifying-glass"></i></span>
                                    <input onChange={ handlechange } name="value" className='w-full h-full px-10 pr-4 border-none outline-none ' type="search" placeholder='Search...' />
                                    <span className='absolute right-0 -translate-y-1/2 top-1/2'>
                                        <select onChange={ handlechange1 } className='h-10 px-2 mr-1 text-black border border-gray-300 rounded-full outline-none ' name="searchitem" id="">

                                            <option selected>BLP Id</option>
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

                            <div className='relative flex items-center justify-end order-3 w-1/4 lg:mr-2'>
                                {/* <span className="text-white cursor-pointer w-fit h-fit" onClick={ handlelogout }>LOGOUT</span>   */ }

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="inline-flex items-center justify-center w-full px-2 py-2 text-base font-medium text-white bg-transparent rounded-md hover:text-slate-300 focus:outline-none">
                                            Welcome,{localStorage.getItem("admin_id")}
                                            <ChevronDownIcon className="w-6 h-6 my-auto ml-1" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={ Fragment }
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                
                                                <form>
                                                <Menu.Item>
                                                        { ({ active }) => (
                                                            <button 
                                                                className={ classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-center'
                                                                ) }
                                                            >
                                                                Generate Report
                                                            </button>
                                                        ) }
                                                    </Menu.Item>

                                                    <Menu.Item>
                                                        { ({ active }) => (
                                                            <button onClick={ handlelogout }
                                                                className={ classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block w-full px-4 py-2 text-center'
                                                                ) }
                                                            >
                                                                Logout
                                                            </button>
                                                        ) }
                                                    </Menu.Item>

                                                    


                                                </form>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>


                            </div>


                        </div>

                        <div className='relative mt-4 h-1/2 sm:hidden'>
                            <div className='relative h-12 overflow-hidden rounded-full'>
                                <span className='absolute -translate-y-1/2 top-1/2 left-4 text-fix'><i className="fa-solid fa-magnifying-glass"></i></span>
                                <input onChange={ handlechange } name="value" className='w-full h-full px-10 pr-4 border-none outline-none ' type="search" placeholder='Search...' />
                                <span className='absolute right-0 -translate-y-1/2 top-1/2'>
                                    <select onChange={ handlechange1 } className='h-10 px-2 mr-1 text-black border border-gray-300 rounded-full outline-none ' name="searchitem" id="">
                                        <option selected>BLP Id</option>
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
        </>

    )
}

export default Navbar1