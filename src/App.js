import logo from './logo.svg';
import React,{useState} from 'react';
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
import CustomerDetail from './components/CustomerDetail';
import Tablenew from './components/Tablenew';
import Newclient1 from './components/Newclient1';
import NewEntry2 from './components/NewEntry2';
import ExtraView1 from './components/ExtraView1';
import Information1 from './components/Information1';
import ExtraInformation from './components/ExtraInformation';
import SearchState from './context/SearchState';
import Editclient1 from './components/Editclient1';
import Entryedit2 from './components/Entryedit2';
import SearchContext from './context/SearchContext'
import { useContext } from 'react';


function App() {
  // console.log(searchvalue)
  // const a=useContext(SearchContext);
  // console.log(a.searchvalue)

  const [status, setstatus] = useState(true);

  return (
    
    <>
    


      {/* <Homepage/> */}
      {/* <Home /> */}

      {/* <Navbar1/> */}
      {/* <div className='container mx-auto lg:flex '>
      <div className='lg:w-[35%] xl:w-1/4 border'><CustomerDetail/></div>
      <div className='lg:w-[65%] xl:w-3/4 border'><Tablenew /></div>
      </div> */}
     
     
      {/* <Navbar1/>
      <div className='container mx-auto lg:flex '>
      <div className='lg:w-[35%] xl:w-1/4 border'><CustomerDetail/></div>
      <div className='lg:w-[65%] xl:w-3/4 border'><ExtraView1 /></div>
      </div> */}

      {/* <Newclient1 /> */}
      {/* <NewEntry2 /> */}
      {/* <ExtraView1 /> */}

      
      
      <SearchState>

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
      </SearchState>


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
