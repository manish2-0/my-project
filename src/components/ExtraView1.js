import React from 'react'
import { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import axios from 'axios';
import Loader from './Loader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useAuth from '../hooks/useAuth';

import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';
import modal from '../context/ModalContext';
import 'tw-elements';



function ExtraView1() {

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();
    const [deleting, setdeleting] = useState({
        "f": ""
    });

    const ref = useRef(null);


    const openmodal = (f) => {
        ref.current.click();
        setdeleting({ f });
    }

    const bclick = () => {
        ref.current.click();
        setdeleting({ "f": "" });
    }



    const api = useAxiosPrivate();

    const { auth } = useAuth();


    const [loading, setloading] = useState(false);
    const [entryloading, setentryloading] = useState(true);


    const location = useLocation();



    const { values } = location.state;
    const [inputs, setinputs] = useState(values);

    const [files, setfiles] = useState();

    const usertable = async () => {
        await api.get(`file/get-files/${values.sr_no}`).then(function (response) {
            if (response?.data?.data) {
                // console.log(response.data.data);
                setfiles(response.data.data);
                setentryloading(false);
            }
            else {
                setentryloading(false);
                // console.log("No files uploaded")
            }
        })
    }

    const viewfile = async (f) => {
        
        window.open(f.flink)

    }
    const downloadfile = async (f) => {

        window.open(`file/download/${f.fname}`,"_self");

    }

    const deletefile = async () => {
        ref.current.click();
        setloading(true)

        try {
            await api.delete(`file/delete/${deleting.f.file_no}`).then(async function (response) {
                if (response.data.status == 1) {
                    setfiles(files.filter((e) => {
                        return e !== deleting.f;
                    }));
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Success",
                        "text2": "File deleted successfully."
                    });
                    // window.alert("File deleted succesfully");
                }
                else {
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Error",
                        "text2": "Error while deleting file."
                    });
                    // window.alert("Error occured");
                }


            })

        } catch (error) {
            setloading(false);
            setmodal(true);
            setmodalmessage({
                "text1": "Error",
                "text2": "No server response."
            });
            // window.alert("No server response");
        }

    }

    useEffect(() => {
        usertable();
        // console.log(values)
    }, []);


    return (

        <>
            { loading
                ? <Loader />
                : <></>
            }

            {
                modal
                    ? <Modal />
                    : <></>
            }

            {/* Delete Modal */ }
            <>
                {/* <button onClick={ bclick }>Click</button> */ }
                {/* <!-- Button trigger modal --> */ }
                <button ref={ ref } type="button" className="hidden" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>

                {/* <!-- Modal --> */ }
                <div className="fixed top-0 left-0 hidden w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
                    id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="relative w-auto pointer-events-none modal-dialog">
                        <div
                            className="relative flex flex-col w-full text-current bg-white border-none rounded-md shadow-lg outline-none pointer-events-auto modal-content bg-clip-padding">
                            <div
                                className="flex items-center justify-between flex-shrink-0 px-3 py-2 border-b border-gray-200 modal-header rounded-t-md">
                                <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                                    Warning
                                </h5>
                                <button onClick={ bclick } type="button"
                                    className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="relative px-3 py-3 modal-body">
                                Are you sure you want to delete?
                            </div>
                            <div
                                className="flex flex-wrap items-center justify-end flex-shrink-0 gap-3 p-4 border-t-2 border-opacity-100 rounded-b-md border-neutral-100 dark:border-opacity-50">
                                <button onClick={ bclick }
                                    type="button"
                                    class="inline-block rounded bg-gray-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black-300 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-0 "
                                    data-te-modal-dismiss
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    No, Cancel
                                </button>
                                <button onClick={ deletefile }
                                    type="button"
                                    class="inline-block rounded bg-red-600 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-0"
                                    data-te-modal-dismiss
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Yes, I am sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </>


            <div className='flex flex-wrap justify-start md:flex-nowrap'>
                <div className='w-full mt-2 md:w-2/5 lg:w-1/3 '>
                    <span className='mx-4 text-2xl text-fix'>Extra Information:</span>
                    <div className="block p-4 m-4 mt-1 border border-gray-300 rounded-lg shadow-md bg-slate-50">
                        <h5 className='mb-2 text-lg font-bold leading-tight underline text-fix'>Chemicals used (in ml):</h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Nanosil: <span className='font-medium text-gray-800'> { inputs.nanosil }ml </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Super Flex: <span className='font-medium text-gray-800'> { inputs.superflex }ml </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Silicon: <span className='font-medium text-gray-800'> { inputs.silicon }ml </span></h5>
                        <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.remarks2 } </span></h5>
                        
                        <h5 className='mb-2 text-lg font-bold leading-tight underline text-fix'>Expenses: <span className='font-medium text-gray-800'></span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Food: <span className='font-medium text-gray-800'> ₹{ inputs.food } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.food_remarks } </span></h5>
                        
                        
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Travelling: <span className='font-medium text-gray-800'> ₹{ inputs.travelling } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.travelling_remarks } </span></h5>
                        
                        
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Accomodation: <span className='font-medium text-gray-800'> ₹{ inputs.accomodation } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.accomodation_remarks } </span></h5>
                        
                        
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Extra Expenses: <span className='font-medium text-gray-800'> ₹{ inputs.expenses } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.expenses_remarks } </span></h5>
                        
                        
                        <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Billing status: <span className='font-medium text-gray-800'> { inputs.billstatus } </span></h5>
                        <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.remarks3 } </span></h5>

                    </div>


                </div>

                <div className='order-2 w-full md:w-2/3'>

                    <div className="relative m-4 mt-2 overflow-x-auto rounded-xl scrollbar-hide">
                        <span className='text-2xl text-fix'>Files:</span>
                        <table className="container w-full m-1 mx-auto text-sm text-left text-gray-500 border shadow-md">
                            <thead className="text-white uppercase border-b border-gray-300 bg-fix">
                                <tr className='text-base '>
                                    <th scope="col" className="px-6 py-3">
                                        No.
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        File
                                    </th>
                                    <th scope="col" className="px-1 py-3 text-fix">
                                        View
                                    </th>
                                    <th scope="col" className="px-1 py-3 text-fix">
                                        Download
                                    </th>
                                    <th scope="col" className="px-1 py-3 text-fix">
                                        Delete
                                    </th>

                                </tr>
                            </thead>

                            <tbody className=''>


                                { entryloading
                                    ? <tr className="bg-white border-b hover:bg-gray-50">
                                        <td colSpan="4" className="px-6 py-2 text-lg font-medium text-gray-900 md:text-center whitespace-nowrap">
                                            <Skeleton height={ 25 } />
                                        </td>
                                    </tr>
                                    :


                                    !files

                                        ? <tr className="bg-white border-b hover:bg-gray-50">
                                            <td colSpan="4" className="px-6 py-2 text-lg font-medium text-gray-900 md:text-center whitespace-nowrap">
                                                No Data Found
                                            </td>
                                        </tr>

                                        : files.map((f, key) =>

                                            <tr className="bg-white border-b hover:bg-gray-50">

                                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                                    { key + 1 }
                                                </th>
                                                <td className="px-6 py-2">
                                                    { f.fname }
                                                </td>
                                                <td className="px-1 py-2 text-center text-fix">
                                                    <button onClick={ () => { viewfile(f) } } className="font-medium text-fix hover:underline">View</button>
                                                </td>
                                                <td className="px-1 py-2 text-center text-fix">
                                                    <button onClick={ () => { downloadfile(f) } } className="font-medium text-fix hover:underline">Download</button>
                                                </td>
                                                <td className="px-1 py-2 text-center text-fix">
                                                    <button onClick={ () => { openmodal(f) } } className="font-medium text-fix hover:underline">Delete</button>
                                                </td>

                                            </tr>
                                        ) }

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ExtraView1