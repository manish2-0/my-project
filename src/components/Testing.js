import React from 'react'
import { useEffect } from 'react'
// import api from './axiosapi';
import AuthContext from '../context/AuthContext'
import { useContext } from 'react';
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken';
import {Link,useLocation} from "react-router-dom"
import useAxiosPrivate from '../hooks/useAxiosPrivate';

export const Testing = () => {

    // const location = useLocation();
    // const {user} = location.state;



    const api=useAxiosPrivate();

    const {auth,setauth}=useAuth();
    const refresh=useRefreshToken();

    // useEffect(() => {
    //     axios.get('http://localhost:8000/admin/getAll-client', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6ImFkbWluMSIsImlhdCI6MTY3NjMwMjcwMCwiZXhwIjoxNjc2MzA2MzAwfQ.Tf9-7wcO5nYmH6i9hmcnBhMw91VUAR4sPGCjUT8huoM'
    //         }
    //     }).then(response => {
    //         console.log(response.data)
    //     })
    // }, []);


    let inputs={"admin_id":"admin1","password":"admin1"}

    const login = async() => {

        let isMounted=true;
        const controller=new AbortController();

        try{
            await api.post('admin/login', inputs, {
            //    signal:controller.signal
              }).then(response => {
                if(response?.data?.accessToken){
                    console.log(response.data)
                  setauth(response.data);
                } 
                  
                }
              )
        }
        catch (err){
            console.log(err)

        }


        
    }

    const logout = async() => {
        await api.post('admin/logout').then(response => {
            console.log(response.data)
            setauth({});

        })
    }



    const getall = async() => {
       
        await api.get('client/getAll-client',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+auth.accessToken
            }
        }).then(response => {
            console.log(response.data)
        })
    }

    
    // setauth(false)
    // useEffect(() => {
    //     console.log("useAuth")
    //     console.log(b.auth)
    //     // console.log(auth)

    // }, []);

    return (
        // <div>Testing</div>
        // <div className=''>
        //     <button className='m-3 ani-button' onClick={ login }>Login</button>
        //     <button className='m-3 ani-button' onClick={ logout }>Logout</button>
        //     <button className='m-3 ani-button' onClick={getall}>Get All</button>
        //     <button className='m-3 ani-button' onClick={()=>{refresh()}}>Get new Access</button>
        //     <Link to='testing1' state={{ user:user }} className="font-medium text-fix hover:underline">More</Link>
        // </div>

        <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <a href="#" class="text-white font-bold text-xl">My Website</a>
      </div>
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
          <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  </div>
</nav>


    )
}
