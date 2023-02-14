import React from 'react'
import Newclient1 from './Newclient1'
import {Routes,Route,Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
            {/* <Navbar1 /> */ }
                {/* <Route exact path="/" element={ <Home /> } />
                <Route exact path="/" element={ <Newclient1 /> } />
                <Route exact path="/editclient" element={ <Editclient1 /> } />
                <Route exact path="/newentry" element={ <NewEntry2 /> } />
                <Route exact path="/view" element={ <Information1 /> } />
                <Route exact path="/entryedit" element={ <Entryedit2 /> } />
                <Route exact path="/extraview" element={ <ExtraInformation /> } /> */}

                {/* <Routes>
                <Route path="/" element={ <Newclient1 /> } />
                </Routes> */}

                <Outlet/>
        </>
    )
}

export default Layout