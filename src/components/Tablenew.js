import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";

function Tablenew() {

    const navigate = new useNavigate();

    const [values, setvalues] = useState([]);

    const location = useLocation();
    const { user } = location.state;
    // console.log(user)
    // const addr=user.blpid;

    const usertable = () => {
        axios.get(`http://localhost:80/blp-api/testing/dataentry/${user.blp_id}`).then(function (response) {
            setvalues(response.data);
        })

    }

    useEffect(() => {
        // usertable();
        console.log(user)
    }, []);

    const deletefunc = (a,k) => {
        axios.delete(`http://localhost:80/blp-api/testing/dataentry/${a}`).then(function (response) {
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
    <div className="relative m-4 overflow-x-auto rounded-xl scrollbar-hide">
        <span className='text-2xl text-fix'>Entries:</span>
    <table className="container w-full m-1 mx-auto text-sm text-left text-gray-500 border shadow-md">
        <thead className="text-white uppercase border-b border-gray-300 bg-fix">
            <tr className='text-[16px] '>
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
                    Remarks
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">More</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        <tbody className=''>

        { values.map((user, key) =>

                <tr className="bg-white border-b hover:bg-gray-50">

                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                        {key+1}
                    </th>
                    <td className="px-6 py-2">
                        {user.date}
                    </td>
                    <td className="px-6 py-2">
                       {user.nature}
                    </td>
                    <td className="px-6 py-2">
                       {user.status}
                    </td>
                    
                    <td className="px-6 py-2">
                        {user.doneby}
                    </td>
                   
                    <td className="px-6 py-2">
                       {user.remarks1}
                    </td>
                    <td className="px-6 py-2 text-right">
                        <Link to="/extraview" state={ { values:user } }  className="font-medium text-fix hover:underline">More</Link>
                    </td>
                    <td className="px-6 py-2 text-right">
                        <Link to="/entryedit" state={ { values: user } }  className="font-medium text-fix hover:underline">Edit</Link>
                    </td>

                    <td className="px-6 py-2 text-right">
                        <button onClick={ () => { deletefunc(user.srno,user) }} className="font-medium  text-fix hover:underline">Delete</button>
                    </td>
                </tr>
        )}
                
             

        </tbody>
    </table>
</div>
  )
}

export default Tablenew