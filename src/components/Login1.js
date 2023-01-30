import axios from 'axios';
import React,{useState} from 'react'
import Home from './Home';
import logo1 from '../logo1.png';
import logo from '../logo.png';
import logo4 from '../logo4.png';
import SearchContext from '../context/SearchContext'
import { useContext } from 'react';

function Login1(props) {
  // console.log(props.status)

  const a=useContext(SearchContext);
  // console.log(a.searchvalue)
  
  // const navigate = useNavigate();
	const [inputs, setinputs] = useState({});
  const [loginvalues,setloginvalues]=useState();

  
	const [loginstatus, setloginstatus] = useState(false);

	function handlechange(event) {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;
		setinputs(values => ({ ...values, [name]: value }))
	}

  const headers = {
    'Content-Type': 'application/json'
};

  const handlesubmit = async (event) => {
		event.preventDefault()
    // console.log(JSON.stringify(inputs))
		axios.post(`http://localhost:80/blp-api/v1/login.php`,JSON.stringify(inputs)).then(function (response) {
			if (response.data.status == true) {
        alert(response.data.message);
        a.setsearchvalue(values => ({ ...values, admin_id:  response.data.admin_id}));
        a.setsearchvalue(values => ({ ...values, login_status:  response.data.status}));
        // console.log(a.searchvalue)
        props.setstatus(false)
      }
			else {
        // console.log(response.data)
        alert(response.data.message)
        

			}

		});

  }

  // background: linear-gradient(107deg, #0e387a 60%, #9fafca 40%);
  // background: linear-gradient(107deg, #114290 60%, #cfd2d8 40%);
  // background: linear-gradient(107deg, #00356ae3 60%, #EEEEEC 40%);
  // background: linear-gradient(107deg, #04385e 60%, #dcdcdc 40%);

  return (

    <div className='flex items-center justify-around w-full min-h-screen bg--color'>
      {/* <img className='absolute w-screen h-screen' srcSet={wall} alt="" /> */}
        <div className='relative m-4 h-96 bg-white w-full max-w-6xl rounded-lg sm:drop-shadow-[0px_5px_3px_rgba(0,0,0,0.2)] sm:flex sm:justify-around sm:h-auto items-center sm:backdrop-filter sm:backdrop-blur-[20px] sm:bg-slate-100/20 sm:shadow-[2px_4px_20px_rgba(0,0,0,0.489)]'>
               

                <div className='absolute inline left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full h-[120px] w-[120px] bg-[#1C4C7B] sm:bg-transparent border-gray-300 sm:relative sm:w-[45%] sm:left-0 sm:translate-x-0 sm:translate-y-0 sm:h-full sm:rounded-none sm:border-0 sm:flex sm:justify-center sm:m-5'>
                    <img className='sm:hidden drop-shadow-[2px_3px_2px_rgba(0,0,0,1)]' srcSet={logo}  alt="" />
                    <img className='hidden sm:block drop-shadow-[-3px_2px_1px_rgba(0,0,0,0.25)]' srcSet={logo4}  alt="" />
                    <span className='h-[30px] w-[20px] bg-transparent absolute top-1/2 -left-[16px] shadow-[2px_-8px_0px_#1C4C7B] rounded-tr-full sm:hidden'></span>
                    <span className='h-[30px] w-[20px] bg-transparent absolute top-1/2 -right-[16px] shadow-[-2px_-10px_0px_#1C4C7B] rounded-tl-full sm:hidden'></span>
                </div> 


                <form onSubmit={handlesubmit} className='mt-20 m-5 sm:w-[40%] sm:border sm:pb-6 sm:border-gray-200 sm:p-4 sm:my-10 sm:h-fit sm:rounded-lg sm:shadow-lg sm:bg-white/60 '>
                <h2 className='hidden sm:block text-center text-[44px] mb-2  text-[#1960a8] logintxt font-bold '>LOGIN</h2>
                    <label className='text-xl font-bold'>User ID:</label>
                    <input name="admin_id" onChange={handlechange} className='block w-full h-10 px-2 my-3 rounded-md outline outline-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="text" placeholder='ID' />
                    <label className='text-xl font-bold'>Password:</label>
                    <input name="password" onChange={handlechange} className='block w-full h-10 px-2 my-3 rounded-md outline outline-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="password" placeholder='Password' />
                    <div className='flex justify-center mt-7'>
                    <button className='sm:hidden block px-12 py-3 bg-[#1C4C7B] border-2 border-[#1C4C7B] rounded-full text-[20px] text-white hover:bg-white hover:text-[#1C4C7B] hover:drop-shadow-[2px_5px_2px_rgba(0,0,0,0.3)]'>SUBMIT</button>
                    <button className='sm:block hidden ani-buttonlogin rounded-sm bg-[#1C4C7B] hover:border-2 hover:border-[#003163]'>LOGIN</button>
                    </div>
                </form>
       
        </div>

    </div>
    
  )
}

export default Login1