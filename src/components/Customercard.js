import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Customerdata from './Customerdata';
import Skeleton from 'react-loading-skeleton';
import Loadingbody from './Loadingbody';



function Customercard() {

    const [search, searchset] = useState("");

    const [values, setvalues] = useState([]);
     const [loading, setloading] = useState(true);

    const usertable = () => {
        axios.get(`http://localhost:80/api/`).then(function (response) {
            setvalues(response.data);
            setloading(false);
        })
    }

    useEffect(() => {
        setTimeout(() => {
            usertable();
        }, 2000);
    }, []);


    function handlechange(event) {
        event.preventDefault();
        searchset(event.target.value);

    }

    // console.log(search)


    return (
        
        <>

            <div className="sticky z-20 m-2 top-24 ">

                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

                <input onChange={ handlechange } type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search..." />

            </div>
            
            <div className="flex flex-wrap justify-items-center justify-center align-middle m-2 ">

              

                
                {loading?
                
                
                <>
                <Loadingbody/>
                <Loadingbody/>
                <Loadingbody/>
                <Loadingbody/>
                <Loadingbody/>
                <Loadingbody/>
                
                
                </>:
                
                values.filter((user) => {
                    return search.toLowerCase() === ""
                        ? user
                        : user.name.toLowerCase().includes(search);
                }).map((user) =>
                    <Customerdata user={ user } />
                ) }

            </div>
        </>
    )
}

export default Customercard