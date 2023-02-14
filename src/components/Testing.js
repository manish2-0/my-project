import React from 'react'
import { useEffect } from 'react'
import api from './axiosapi';
import AuthContext from '../context/AuthContext'
import { useContext } from 'react';
import useAuth from '../hooks/useAuth'
import useRefreshToken from '../hooks/useRefreshToken';

export const Testing = () => {

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
        await api.post('admin/login', inputs, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(response => {
            if(response?.data?.accessToken){
                console.log(response.data)
              setauth(response.data);
            } 
              
            }
          )
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
        <div className='m-3'>
            <button className='m-3 ani-button' onClick={ login }>Login</button>
            <button className='m-3 ani-button' onClick={ logout }>Logout</button>
            <button className='m-3 ani-button' onClick={getall}>Get All</button>
            <button className='m-3 ani-button' onClick={()=>{refresh()}}>Get new Access</button>
        </div>

    )
}
