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
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';
import InfiniteScroll from 'react-infinite-scroll-component'

function Homepage() {

    const api=useAxiosPrivate();

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();


    const a=useContext(SearchContext);
    // console.log(a.searchvalue.searchitem)
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
        // e.preventDefault();
        try {
            await api.get('client/getAll-client').then(response => {
                if(response?.data?.data){
                    // console.log(response.data.data)
                    setvalues(response.data.data)
                    setloading(false);
                }
                else{
                    setloading(false);
                    setmodal(true)
                    setmodalmessage({
                        "text1": "Error",
                        "text2": "No client found."
                    });
                }
            })
            
        } catch (error) {
            setloading(false);
            setmodal(true)
            setmodalmessage({
                "text1": "Error",
                "text2": "Could not fetch data please refresh page."
            });
            
        }
    }


    useEffect(() => {
        getall();
    }, []);


    return (
        <>

        
        {
            modal
            ?<Modal />
            :<></>
        }
        
        


            <div className='flex flex-col items-center justify-top bg-[#fdfdfd] min-h-screen'>
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

                           

                            {
                                values.length
                                ?values.slice(0).reverse().filter((user) => {
                                    return a.searchvalue.value.toLowerCase() === ""
                                        ? user
                                        :  user[a.searchvalue.searchitem].toLowerCase().includes(a.searchvalue.value.toLowerCase());
                                }).map((user,key) =>
                                                <HomeCard key={key}  user={ user } />
                                            ) 
                                :<></>
                             }
                            
                        </>

                    }

              


                </div>

            </div>

        </>

    )
}

export default Homepage