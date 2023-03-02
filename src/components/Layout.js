import React from 'react'
import Newclient1 from './Newclient1'
import {Routes,Route,Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
                <Outlet/>
        </>
    )
}

export default Layout