import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";


function Table() {

    const navigate = new useNavigate();

    const [values, setvalues] = useState([]);

    const location = useLocation();
    const { user } = location.state;
    // const addr=user.blpid;

    const usertable = () => {
        axios.get(`http://localhost:80/api/dataentry/${user.blpid}`).then(function (response) {
            setvalues(response.data);
        })


    }

    useEffect(() => {
        usertable();
    }, []);

    const deletefunc = (a,k) => {
        axios.delete(`http://localhost:80/api/dataentry/${a}`).then(function (response) {
            if (response.data.status == 1) {
                setvalues(values.filter((e)=>{
                    return e!==k;
                }))
                window.alert("Record deleted succesfully");
            }
            else {
                window.alert("Error occured");
            }
        })
    }


    return (

        <div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr className='text-[16px]'>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nature of Work
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Work Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Done By
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Time
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Uploaded Files
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Remarks
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">More</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    { values.map((user, key) =>

                        <tr className="bg-white border-b hover:bg-gray-50 ">

                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                { key + 1 }
                            </th>
                            <td className="px-6 py-4">
                                { user.date }
                            </td>
                            <td className="px-6 py-4">
                                { user.nature }
                            </td>
                            <td className="px-6 py-4">
                                { user.status }
                            </td>
                            
                            <td className="px-6 py-4">
                                { user.doneby }
                            </td>
                            <td className="px-6 py-4">
                                { user.time }
                            </td>
                            <td className="px-6 py-4">
                                Nothing Uploaded
                            </td>
                            <td className="px-6 py-4">
                                { user.remarks1 }
                            </td>
                            <td className="px-6 py-4 text-right">
                                <Link to="/extraview" state={ { values: user } } className="font-medium text-blue-600 hover:underline">More</Link>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <Link to="/entryedit" state={ { values: user } } className="font-medium text-blue-600 hover:underline">Edit</Link>
                            </td>

                            <td className="px-6 py-4 text-right">
                                <a onClick={ () => { deletefunc(user.srno,user) }} className="font-medium text-blue-600 hover:underline">Delete</a>
                            </td>
                        </tr>
                    ) }

                </tbody>
            </table>
        </div>

    )
}

export default Table