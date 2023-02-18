import React from 'react'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import axios from 'axios';
import Loader from './Loader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useAuth from '../hooks/useAuth';

function ExtraView1() {

    const api = useAxiosPrivate();

    const {auth}=useAuth();
    

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

        api.get(`file/image/${f.fname}`).then(function(response){
            window.open(f.flink)
        })

    }

    const deletefile = async (f) => {
        setloading(true)

        try {
            await api.delete(`file/delete/${f.file_no}`).then(async function (response) {
                if (response.data.status == 1) {
                    setfiles(files.filter((e) => {
                        return e !== f;
                    }));
                    setloading(false);
                    window.alert("File deleted succesfully");
                }
                else {
                    setloading(false);
                    window.alert("Error occured");
                }


            })

        } catch (error) {
            setloading(false);
            window.alert("No server response");
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


            <div className='flex flex-wrap justify-start md:flex-nowrap'>
                <div className='w-full mt-2 md:w-2/5 lg:w-1/3 '>
                    <span className='mx-4 text-2xl text-fix'>Extra Information:</span>
                    <div className="block p-4 m-4 mt-1 border border-gray-300 rounded-lg shadow-md bg-slate-50">
                        <h5 className='mb-2 text-base font-bold leading-tight underline text-fix'>Chemicals used (in ml):</h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Nanosil: <span className='font-medium text-gray-800'> { inputs.nanosil }ml </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Super Flex: <span className='font-medium text-gray-800'> { inputs.superflex }ml </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Silicon: <span className='font-medium text-gray-800'> { inputs.silicon }ml </span></h5>
                        <h5 className='mb-2 text-base font-bold leading-tight underline text-fix'>Expenses: <span className='font-medium text-gray-800'></span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Food: <span className='font-medium text-gray-800'> ₹{ inputs.food } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Travelling: <span className='font-medium text-gray-800'> ₹{ inputs.travelling } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Accomodation: <span className='font-medium text-gray-800'> ₹{ inputs.accomodation } </span></h5>
                        <h5 className='mb-2 ml-2 text-base font-bold leading-tight text-fix'>Extra Expenses: <span className='font-medium text-gray-800'> ₹{ inputs.expenses } </span></h5>
                        <h5 className='mb-2 text-base font-bold leading-tight text-fix'>Remarks: <span className='font-medium text-gray-800'> { inputs.remarks2 } </span></h5>
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
                                        Delete
                                    </th>

                                </tr>
                            </thead>

                            <tbody className=''>


                                { entryloading
                                ?<tr className="bg-white border-b hover:bg-gray-50">
                                        <td colSpan="4" className="px-6 py-2 text-lg font-medium text-gray-900 md:text-center whitespace-nowrap">
                                        <Skeleton height={25} />
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
                                                <button onClick={ () => { deletefile(f) } } className="font-medium text-fix hover:underline">Delete</button>
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