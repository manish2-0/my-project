import {useLocation,Navigate,Outlet} from "react-router-dom"
import useAuth from "../hooks/useAuth"


import React,{useState} from 'react'
import Layout from "./Layout";
import Navbar1 from "./Navbar1";

const RequireAuth = () => {

     const {auth,setauth} = useAuth();
    //  const [auth, setauth] = useState(useAuth());

    console.log(auth)
    // const location = useLocation();

  return (
    
    auth?.status
    ? <Outlet/>
    :<Navigate to="/login" replace/>
  )
}

export default RequireAuth