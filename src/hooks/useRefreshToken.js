import axios from 'axios';
import React from 'react'
import api from '../components/axiosapi'
import useAuth from './useAuth'



const useRefreshToken = () => {
    const {auth,setauth} = useAuth();

    const refresh=async()=>{
        const response=await api.get('refresh/get-access-token');
        setauth(prev=>{
            console.log(auth);
            if(response?.data?.status){
                return {...prev,accessToken:response.data.accessToken}
            }
            else{
                // console.log("1");
                return ({});
            }
           
        });
        return response.data.accessToken;
    }

  return refresh;
}

export default useRefreshToken;