import React, { useState, useEffect } from 'react'
import Home from './Home'
import HomeCard from './HomeCard'
import Loadingbody from './Loadingbody'
import axios from 'axios'

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ4OTYxMzUsImV4cCI6MTY3NDg5OTczNSwiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4xIn19.ClXgLGZcpEmMibvFBsiHf_qR38h2yz62wiFRnhNh5ETn3DwomfeEwI50jy4qBA0m1NCmd0H1ZfJa4NF35RqRLw';

const axiosinstance = axios.create({
    baseURL: "http://localhost:80/blp-api/v1",
    headers:{
        Authorization:`Bearer ${token}`
    }
})

function Homepage() {

    const [loading, setloading] = useState(true);
    const [values, setvalues] = useState([]);


    const usertable = () => {
        axiosinstance.get('/readAll.php').then(function (response) {
            setvalues(response.data);
            console.log(response.data)
            setloading(false);
        })
    }

    useEffect(() => {
        setTimeout(() => {
            usertable();
        }, 2000);
    }, []);


    return (
        <>

            <div className='flex items-center justify-center'>
                <div className="container flex flex-wrap justify-center mx-3 align-middle sm:pt-20 pt-36 h-fit justify-items-center">
                    { loading ?


                        <>
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />


                        </> :

                        values.map((user) =>
                            <HomeCard user={ user } />
                        ) }

                </div>

            </div>

        </>

    )
}

export default Homepage