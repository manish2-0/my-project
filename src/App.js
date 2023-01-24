import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login';
import Information from './components/Information';
import Search from './components/Search';
import Table from './components/Table';
import Extraview from './components/Extraview';
import Newclient from './components/Newclient';
import Newentry1 from './components/Newentry1';
import ViewEntriesTesting from './components/ViewEntriesTesting';
import Navbar from './components/Navbar';
import Newentry from './components/Newentry';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Customercard from './components/Customercard';
import Editclient from './components/Editclient';
import View from './components/View';
import Entryedit from './components/Entryedit';
import Uploadtesting from './components/Uploadtesting';
import Loadingbody from './components/Loadingbody';
import Login1 from './components/Login1';
import Homepage from './components/Homepage';
import Navbar1 from './components/Navbar1';
import Home from './components/Home';


function App() {
  return (
    <>
      {/* <Login1/> */}
      {/* <Homepage/> */}
      <Home />
      {/* <Navbar1/> */}
      



      {/* <Login/> */}
       {/* <Search/> */}
      {/* <Information /> */}
       

      {/* <Extraview/> */}
    {/* <Newentry/> */}

    


      {/* <Router>  
      
      <Navbar />
     

        <Routes>
        <Route exact path="/" element={ <Customercard />} />
        <Route exact path="/newclient" element={<Newclient/>} />
        <Route exact path="/editclient" element={<Editclient/>} />
        <Route exact path="/newentry" element={<Newentry1/>} />
        <Route exact path="/view" element={<View/>} />
        <Route exact path="/entryedit" element={<Entryedit/>} />
        <Route exact path="/extraview" element={<Extraview/>} />

        
        </Routes>
      </Router> */}


      {/* <Loadingbody /> */}

      
      {/* <ViewEntriesTesting/> */}
      {/* <Navbar /> */}
      {/* <Customercard /> */}
    
      {/* <Uploadtesting /> */}
    </>
  );
}

export default App;
