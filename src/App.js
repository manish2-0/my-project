import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
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


function App() {

  const [status, setstatus] = useState(true);

  return (
    
    <>
    
    <Testing />

      
      {/* <SearchState>

      {status?  <Login1 setstatus={setstatus} status={status}/>:
       
        
      <Router>  
      
        <Navbar1 setstatus={setstatus} status={status}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newclient" element={<Newclient1/>} />
        <Route exact path="/editclient" element={<Editclient1/>} />
        <Route exact path="/newentry" element={<NewEntry2/>} />
        <Route exact path="/view" element={<Information1/>} />
        <Route exact path="/entryedit" element={<Entryedit2/>} />
        <Route exact path="/extraview" element={<ExtraInformation/>} />
        
        </Routes>
      </Router>}
      </SearchState> */}


     
    </>
  );
}

export default App;
