import React, { useState, useEffect } from 'react'
import Home from './Home'
import HomeCard from './HomeCard'
import Loadingbody from './Loadingbody'
import axios from 'axios'
// import api from './axiosapi';
import AddCard from './AddCard';
import {Link} from "react-router-dom"
import SearchContext from '../context/SearchContext'
import { useContext } from 'react';
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate';

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

    const api=useAxiosPrivate();

    const a=useContext(SearchContext);
    console.log(a.searchvalue.searchitem)
    // a.setsearchvalue(event.target.value);
    // console.log(a.searchvalue)
    // const [search, searchset] = useState(a);

    const [loading, setloading] = useState(true);
    const [values, setvalues] = useState([]);

    const {auth,setauth}=useAuth();


    // const usertable = async () => {
    //      api.get("/readAll.php").then(function (response) {
    //         setvalues(response.data.data);
    //         console.log(response.data.data)
    //         setloading(false);
    //     })



    // }

    const getall = async() => {
       
        // await api.get('client/getAll-client',{
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization':'Bearer '+auth.accessToken
        //     }
        // }).then(response => {
        //     console.log(response.data.data)
        //     setvalues(response.data.data)
        //     setloading(false);
        // })


        await api.get('client/getAll-client').then(response => {
            console.log(response.data.data)
            setvalues(response.data.data)
            setloading(false);
        })
    }

//     const usertable = async () => {
//         //  fetch('http://localhost:80/blp-api/v1/readAll.php', )
//         //     .then(resp => resp.json())
//         //     .then(json => console.log(JSON.stringify(json)))

//         // const l=await fetch('http://localhost:80/blp-api/v1/readAll.php')
//         // // console.log(JSON.stringify(l.json()));
//         // const data = await l.json();
//         //  console.log(data.data);

//         const url="http://localhost:80/blp-api/v1/readAll.php";

//         const accesst='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ5NzQ4NDMsImV4cCI6MTY3NDk3ODQ0MywiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4xIn19.KR_i3i_vvIRRF64QkLtrxZxxHxxUNq1QJfYKQBmSh5eq98c203DdxohGEhe-leB9-rKMBcOPtbyXt17tJXjE8Q';

// //         const myHeaders = new Headers();

// //   /* 
// //     myHeaders.append('Content-Type', 'application/json'); 
// //     since it's a get request you don't need to specify your content-type
// //   */

// //   myHeaders.append('Authorization', 'Token 1234abcd');

//          try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NzQ5NzQ4NDMsImV4cCI6MTY3NDk3ODQ0MywiYXVkIjoiYWRtaW4iLCJkYXRhIjp7ImFkbWluX2lkIjoiYWRtaW4xIn19.KR_i3i_vvIRRF64QkLtrxZxxHxxUNq1QJfYKQBmSh5eq98c203DdxohGEhe-leB9-rKMBcOPtbyXt17tJXjE8Q'}
//               });
//             const data = await response.json();
//             console.log(data);
//             setvalues(data.data);
//             setloading(false);
//           } catch (error) {
//             console.log(error);
//           }
//     }

    useEffect(() => {
        // setTimeout(() => {
        //     getall();
        // }, 2000);
        getall();
    }, []);


    return (
        <>


            <div className='flex flex-col items-center justify-center bg-[#fdfdfd]'>
                <div className="container flex flex-wrap items-stretch justify-center mx-3 align-middle sm:pt-20 pt-36 h-fit justify-items-center">

                    { loading ?


                        <>
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />
                            <Loadingbody />


                        </> :
                        <>
                            <AddCard />
                            { values.filter((user) => {
                    return a.searchvalue.value.toLowerCase() === ""
                        ? user
                        :  user[a.searchvalue.searchitem].toLowerCase().includes(a.searchvalue.value.toLowerCase());
                }).map((user,key) =>
                                <HomeCard key={key}  user={ user } />
                            ) }
                        </>

                    }

              


                </div>

            </div>

        </>

    )
}

export default Homepage