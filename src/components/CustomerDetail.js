import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import icon from '../icon.png';
import moment from 'moment';
import 'tw-elements';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useModal from '../hooks/useModal';
import Modal from '../modals/Modal';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function CustomerDetail() {
    const location = useLocation();
    const { user } = location.state;

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const [val, setval] = useState(user);

    const api = useAxiosPrivate();


    const workdone = async (e) => {
        e.preventDefault();
        await api.put(`client/update-workstatus/${user.blp_id}`).then((response) => {

            setval(val => ({ ...val, work_status: "Done" }))
            setmodal(true)
            setmodalmessage({
                "text1": "Success",
                "text2": "Work Status marked as Done."
            });
        })
    }

    const billdone = async (e) => {
        e.preventDefault();
        await api.put(`client/update-billstatus/${user.blp_id}`).then((response) => {

            setval(val => ({ ...val, bill_status: "Done" }))
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
                            <Link to="/editclient" state={ { user: val } } className='pl-2 text-gray-400 text-fix'><i class="fa-solid fa-pencil"></i></Link>
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
                    </p>

                    <div className='flex items-center justify-between w-full text-fix'>

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex items-center justify-between px-6 py-2 text-base font-medium text-white rounded-md w-fit bg-fix hover:text-slate-300 focus:outline-none">
                                    Billing
                                    <ChevronDownIcon className="w-6 h-6 my-auto ml-1" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={ Fragment }
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="w-full py-1">

                                        <form>
                                            <Menu.Item>
                                                { ({ active }) => (
                                                    <Link to={ val.bill_status == "Done" ? "" : "/bill" } state={ { user: val } }

                                                        style={ val.bill_status == "Done"
                                                            ? { "cursor": "not-allowed" }
                                                            : { "cursor": "allowed" }
                                                        }

                                                        className={ classNames(
                                                            active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-center w-full'
                                                        ) }
                                                    >
                                                        Edit
                                                    </Link>


                                                ) }
                                            </Menu.Item>

                                            <Menu.Item>
                                                { ({ active }) => (
                                                    <Link to="/generatebill" state={ { user: val } }

                                                        className={ classNames(
                                                            active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-center w-full'
                                                        ) }
                                                    >
                                                        Generate
                                                    </Link>

                                                ) }
                                            </Menu.Item>
                                        </form>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="inline-flex items-center justify-between px-6 py-2 text-base font-medium text-white rounded-md w-fit bg-fix hover:text-slate-300 focus:outline-none">
                                    Status
                                    <ChevronDownIcon className="w-6 h-6 my-auto ml-1" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={ Fragment }
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="w-full py-1">

                                        <form>
                                            <Menu.Item>
                                                { ({ active }) => (
                                                    <button
                                                        style={ val.work_status == "Done"
                                                            ? { "cursor": "not-allowed" }
                                                            : { "cursor": "allowed" }
                                                        }
                                                        disabled={ val.work_status == "Done" ? true : false }
                                                        onClick={ (e) => { workdone(e) } }
                                                        className={ classNames(
                                                            active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700 cursor-pointer',
                                                            'block w-full px-4 py-2 text-center w-full cursor-pointer'
                                                        ) }
                                                    >
                                                        Work Done
                                                    </button>


                                                ) }
                                            </Menu.Item>

                                            <Menu.Item>
                                                { ({ active }) => (
                                                    <button
                                                        style={ val.bill_status == "Done"
                                                            ? { "cursor": "not-allowed" }
                                                            : { "cursor": "allowed" }
                                                        }
                                                        disabled={ val.bill_status == "Done" ? true : false } onClick={ (e) => { billdone(e) } }
                                                        className={ classNames(
                                                            active ? 'bg-gray-100 text-gray-900 w-full' : 'text-gray-700 cursor-pointer',
                                                            'block w-full px-4 py-2 text-center w-full cursor-pointer'
                                                        ) }
                                                    >
                                                        Bill Done
                                                    </button>


                                                ) }
                                            </Menu.Item>
                                        </form>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                    </div>


                </div>

            </div>

        </>


    )
}

export default CustomerDetail