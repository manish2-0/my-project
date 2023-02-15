import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Login1 from './components/Login1';
import Navbar1 from './components/Navbar1';
import Home from './components/Home';
import Newclient1 from './components/Newclient1';
import NewEntry2 from './components/NewEntry2';
import Information1 from './components/Information1';
import ExtraInformation from './components/ExtraInformation';
import SearchState from './context/SearchState';
import Editclient1 from './components/Editclient1';
import Entryedit2 from './components/Entryedit2';
import { Testing } from './components/Testing';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Testing1 from './components/Testing1';
import Tablenew from './components/Tablenew';


function App() {

  // const [status, setstatus] = useState(true);

  return (

    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={ <Layout /> }>


            <Route path='login' element={ <Login1 /> } />

            <Route element={ <RequireAuth /> }>
              <Route element={ <Navbar1 /> }></Route>
              <Route path='/' element={ [<Navbar1 />, <Home />] } />
              <Route path='newclient' element={ [<Navbar1 />, <Newclient1 />] } />
              <Route path='newentry' element={ [<Navbar1 />, <NewEntry2 />] } />
              <Route exact path='view' element={ <Information1 /> } >
                  <Route index element={ <Tablenew /> } />
                  <Route path='testing1' element={ <Testing1 /> } />
        
              </Route>
              <Route exact path="/editclient" element={ [<Navbar1 />, <Editclient1 />] } />
            </Route>

            <Route path='*' element={ <ErrorPage /> } />

          </Route>

        </Routes>

      </Router> */}


      {/* <Navbar1/> */ }

       <Testing /> 


    </>
  );
}

export default App;
