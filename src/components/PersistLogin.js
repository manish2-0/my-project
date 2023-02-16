import React,{useState,useEffect} from 'react'
// import { useState,useEffect } from 'react'
import {Outlet} from "react-router-dom";
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';


const PersistLogin = () => {

    const [loading, setloading] = useState(true);
    const refresh=useRefreshToken();
    const {auth}=useAuth();

    useEffect(() => {
        const verify=async()=>{
            try{
                await refresh();
            }
            catch(err){
                console.error(err);
            }
            finally{
                setloading(false);
            }
        }

        !auth?.accessToken
            ?verify()
            :setloading(false);

    }, []);

  return (
    <>
        {
            loading 
                ?<div>Loading...</div>
                :<Outlet/>
        }
    </>
  )
}

export default PersistLogin