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
import PersistLogin from './components/PersistLogin';
import ExtraView1 from './components/ExtraView1';
import Loader from './components/Loader';
import Testing2 from './components/Testing2';
import LoginErrorModal from './modals/Modal';
import Testing3 from './components/Testing3';
import BillTop from './components/BillTop';
import Table2 from './components/Table2';
import EntriesBill from './components/EntriesBill';
import ExtraEntriesTable from './components/ExtraEntriesTable';
import BillBook from './components/BillBook';
import GenerateBill from './components/GenerateBill';
import Testing4 from './components/Testing4';


function App() {

  // const [status, setstatus] = useState(true);

  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Layout /> }>


            <Route path='login' element={ <Login1 /> } />

            <Route element={<PersistLogin/>}>
              <Route element={ <RequireAuth /> }>
                <Route path='/' element={  <Home /> } />
                <Route path='newclient' element={ <Newclient1 /> } />
                <Route path='newentry' element={  <NewEntry2 /> } />
                <Route exact path="entryedit" element={ <Entryedit2 /> } />
                <Route exact path='view' element={ <Information1 /> } >
                  <Route index element={ <Tablenew /> } />
                  <Route path='extraview' element={ <ExtraView1 /> } />
                </Route>
                <Route exact path="/editclient" element={  <Editclient1 /> } />
                <Route exact path="/bill" element={  <BillBook /> } />
                <Route exact path="/generatebill" element={  <GenerateBill /> } />
              </Route>
            </Route>

            <Route path='*' element={ <ErrorPage /> } />

          </Route>

        </Routes>

      </Router>

      {/* <BillTop /> */}

      {/* <Table2 />
      <ExtraEntriesTable />
      <EntriesBill /> */}

      {/* <GenerateBill /> */}

      {/* <BillBook /> */}


      {/* <Navbar1/> */ }

      {/* <Testing2 /> */}
      {/* <Testing4 /> */}
      {/* <LoginErrorModal /> */}


      {/* <Loader/> */}
    </>
  );
}

export default App;
