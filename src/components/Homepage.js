import React, { useState, useEffect } from 'react'
import Home from './Home'
import HomeCard from './HomeCard'
import Loadingbody from './Loadingbody'
import axios from 'axios'
import api from './axiosapi';
import AddCard from './AddCard';

// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ5MDQ5NTUsImV4cCI6MTY3NDkwODU1NSwiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4xIn19.Bq5aw1f2SibkJm9zKxkVBSd9d4a1F3NLk3omgUbtjPa1wZhtlZQk8VQqF8fFAjByNLJHqk4PCAsq-863uLaeEw';

// const axiosinstance = axios.create({
//     baseURL: "http://localhost:80/blp-api/v1",
//     headers:{
//         Authorization:`Bearer ${token}`
//     }
// })

// const token = 'POINT YOUR TOKEN LOCATION HERE'

// const api = axios.create({
//     baseURL: 'http://localhost:80/blp-api/v1'
//   });

//   axios.defaults.headers = {
//     Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ5MDQ5NTUsImV4cCI6MTY3NDkwODU1NSwiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4xIn19.Bq5aw1f2SibkJm9zKxkVBSd9d4a1F3NLk3omgUbtjPa1wZhtlZQk8VQqF8fFAjByNLJHqk4PCAsq-863uLaeEw' 
//   }

function Homepage() {

    const [loading, setloading] = useState(true);
    const [values, setvalues] = useState([]);


    const usertable = async () => {
        await api.get("readAll.php").then(function (response) {
            setvalues(response.data.data);
            console.log(response.data.data)
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

            <div className='flex flex-col items-center justify-center'>
                <div className="items-stretch container flex flex-wrap justify-center mx-3 align-middle sm:pt-20 pt-36 h-fit justify-items-center">
                    
                    { loading ?


                        <>
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />


                        </> :
                        <>
                        <AddCard />
                        {values.map((user)=>
                            <HomeCard user={ user } />
                        )}
                        </>
                        
                    }
                    

                </div>

            </div>

        </>

    )
}

export default Homepage