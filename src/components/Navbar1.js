import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom"
import logo from '../logo.png';
import SearchContext from '../context/SearchContext'
import { useContext,useEffect } from 'react';
import axios from 'axios'
import api from './axiosapi';
import useAuth from '../hooks/useAuth';



function Navbar1(props) {

    const {auth,setauth}=useAuth();

    const nav = useNavigate();
    
    const a = useContext(SearchContext);

    const current1={
            admin_id:a.searchvalue.admin_id
        }
        
    
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

        if (value == "BLP Id") {
            value = "blp_id";
        }
        else if (value == "ISELL No.") {
            value = "isell";
        }
        else if (value == "DC No.") {
            value = "dc_no";
        }
        else if (value == "Mobile") {
            value = "contact";
        }
        else if (value == "Name") {
            value = "name";
        }
        else if (value == "City") {
            value = "city";
        }

        a.setsearchvalue(values => ({ ...values, [name]: value }));
        // console.log(a.searchvalue.searchitem)
    }

    const handlelogout=async(e)=> {
        e.preventDefault();

        await api.post('admin/logout').then(function (response) {
            console.log(response.data);
            // props.setstatus(true);
            a.setsearchvalue(values => ({ ...values, value: "" }));
            a.setsearchvalue(values => ({ ...values, searchitem: "blp_id" }));
            a.setsearchvalue(values => ({ ...values, admin_id: null }));
            a.setsearchvalue(values => ({ ...values, login_status: false }));
            setauth({});
            nav("/login", { replace: true });
            alert("Logged out successfully");
        })

    }

    const scrollh = () => {
        if (window.scrollY >= 65) {
            setscrolling(true);
            let a = document.getElementById("main");
        }
        else {
            setscrolling(false);
        }
    }

    // useEffect(() => {
    //     console.log(a.searchvalue.admin_id,"Hello")
    // }, []);


    window.addEventListener("scroll", scrollh);

    return (

        <div className=''>
            <div className={ scrolling ? "sm:translate-y-0 transition  -translate-y-1/2 z-30 bg-fix fixed w-full" : "transition translate-y-0 z-30 bg-fix fixed w-full" } id='main'>
                <div className='container relative w-full p-2 px-3 mx-auto bg-fix sm:translate-y-0'>

                    <div className='flex justify-between h-1/2 sm:h-auto'>

                        {/* Navicon */ }
                        <div className='order-1 w-1/4 lg:ml-2'>
                            <img className='h-14 w-14' alt="" srcset={ logo } />
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

                        <div className='flex items-center justify-end order-3 w-1/4 lg:mr-2'>
                            {/* <svg className="w-[30px] h-[30px] text-white  " fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> */ }
                            <a className="text-white cursor-pointer w-fit h-fit" onClick={handlelogout}>LOGOUT</a>
                        </div>


                    </div>

                    <div className='relative mt-4 h-1/2 sm:hidden'>
                        <div className='relative h-12 overflow-hidden rounded-full'>
                            <span className='absolute -translate-y-1/2 top-1/2 left-4 text-fix'><i className="fa-solid fa-magnifying-glass"></i></span>
                            <input onChange={ handlechange } name="value" className='w-full h-full px-10 pr-4 border-none outline-none ' type="search" placeholder='Search...' />
                            <span className='absolute right-0 -translate-y-1/2 top-1/2'>
                                <select onChange={ handlechange1 } className='h-10 px-2 mr-1 text-black border border-gray-300 rounded-full outline-none ' name="searchitem" id="">
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