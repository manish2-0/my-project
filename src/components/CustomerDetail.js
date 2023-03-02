import React,{useState} from 'react'
import { useLocation, Link } from 'react-router-dom';
import icon from '../icon.png';
import moment from 'moment';
import 'tw-elements';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useModal from '../hooks/useModal';
import Modal from '../modals/Modal';

function CustomerDetail() {
    const location = useLocation();
    const { user } = location.state;

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const [val, setval] = useState(user);

    const api = useAxiosPrivate();


    const workdone=async()=>{
       await api.put(`client/update-workstatus/${user.blp_id}`).then((response)=>{
        
            setval(val=>({...val,work_status:"Done"}))
            setmodal(true)
            setmodalmessage({
                "text1": "Success",
                "text2": "Work Status marked as Done."
            });
       })
    }

    const billdone=async()=>{
        await api.put(`client/update-billstatus/${user.blp_id}`).then((response)=>{
         
             setval(val=>({...val,bill_status:"Done"}))
             setmodal(true)
             setmodalmessage({
                 "text1": "Success",
                 "text2": "Bill Status marked as Done."
             });
        })
     }

    return (

        <>
        
        {
				modal
					? <Modal />
					: <></>

			}


        <div className='relative mx-auto md:container '>

            <div className="relative px-6 py-5 mx-3 my-2 text-base border border-gray-300 rounded-lg shadow bg-slate-50">

                {/* <div className='absolute top-2 right-2'>
            <Link to="/editclient" state={{ user:user }} className='text-gray-400'>Edit</Link>
                    
            </div> */}


                <div className='flex justify-center mb-2'>
                    <img className='w-14 h-14' srcSet={ icon } alt="" />
                </div>


                <div className='flex flex-wrap justify-between text-gray-400'>
                    <div className="text-lg text-fix">BLP Number: <span className='pl-1 font-semibold text-gray-600 '>{ user.blp_id }</span>
                    <Link to="/editclient" state={{ user:val }} className='pl-2 text-gray-400 text-fix'><i class="fa-solid fa-pencil"></i></Link>
                    </div>
                    <div className="text-lg text-fix">ISELL Number: <span className='pl-1 font-semibold text-gray-600 '>{ user.isell }</span></div>


                </div>

                <p className="mb-3 text-lg text-fix" >
                    DC Number:
                    <span className='pl-1 font-semibold text-gray-600 '>{ user.dc_no }</span>
                </p>


                <p className="mb-3 text-fix" >
                    <i className="fa-solid fa-user"></i>
                    <span className='pl-4 font-[600] text-gray-900  fontinformation'>{ user.name }</span>
                </p>

                <div className='flex flex-wrap items-center justify-between mb-3 text-fix'>
                    <div className="flex"><i className="pt-[4px] fa-solid fa-address-book"></i> <div className='pl-4 font-[900] text-gray-900 fontinformation'>{ user.address }</div>
                    </div>
                    <div className=""><i className="fa-sharp fa-solid fa-location-dot"></i> <span className=' pl-4 font-[600] text-gray-900 fontinformation'>{ user.city }</span></div>

                </div>


                <p className="mb-3 text-fix" >
                    <i className="fa-regular fa-calendar"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>{ moment(user.date).format("DD MMMM YYYY") }</span>
                </p>

                <p className="mb-3 text-fix" >
                    <i className="fa-solid fa-phone"></i>
                    <span className=' pl-4 font-[600] text-gray-900 fontinformation'>+91 { user.contact }</span>
                    {/* <Link to="/editclient" state={{ user:user }} className='pl-2 text-gray-400 text-fix'>Edit</Link> */}
                    
                </p>

                <div className='flex flex-col items-center justify-between text-fix'>
                    {/* <Link to="/editclient" state={ { user: user } } className='hover:bg-[#1967b6] w-3/4 px-4 text-center py-2 text-white rounded-md homepagebutton bg-fix'>Edit</Link> */}
                    <Link to={val.bill_status=="Done"?"":"/bill"} state={ { user: val } } className={val.bill_status=="Done"?"w-3/4 px-4 text-center py-2 text-black rounded-md cursor-not-allowed bg-slate-200 mt-2":"hover:bg-[#1967b6] w-3/4 px-4 text-center py-2 text-white rounded-md homepagebutton bg-fix mt-2"}>Edit Bill</Link>
                    {/* <Link className='hover:bg-[#1967b6] w-3/4 px-4 text-center py-2 text-white rounded-md homepagebutton bg-fix mt-2'>Generate Detailed Bill</Link> */}
                    <Link to="/generatebill" state={ { user: val } } className='hover:bg-[#1967b6] w-3/4 px-4 text-center py-2 text-white rounded-md homepagebutton bg-fix mt-2'>Generate Bill</Link>
                    <button disabled={val.work_status=="Done"?true:false} onClick={()=>{workdone()}} className={val.work_status=="Done"?"w-3/4 px-4 text-center py-2 text-black rounded-md cursor-not-allowed bg-slate-200 mt-2":"hover:bg-[#1967b6] w-3/4 px-4 text-center py-2 text-white rounded-md homepagebutton bg-fix mt-2"}>Mark Work as Done</button>
                    <button disabled={val.bill_status=="Done"?true:false} onClick={()=>{billdone()}} className={val.bill_status=="Done"?"w-3/4 px-4 text-center py-2 text-black rounded-md cursor-not-allowed bg-slate-200 mt-2":"hover:bg-[#1967b6] w-3/4 px-4 text-center py-2 text-white rounded-md homepagebutton bg-fix mt-2"}>Mark Bill as Done</button>
                    
                </div>


            </div>

        </div>

        </>


    )
}

export default CustomerDetail