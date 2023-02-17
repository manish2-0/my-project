import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Loader from './Loader';

function Tablenew() {

    const api = useAxiosPrivate();

    // const navigate = new useNavigate();

    const [loading, setloading] = useState(false);

    const [values, setvalues] = useState([]);
    // values=1;
    // const a=123;
    const location = useLocation();
    const { user } = location.state;
    // console.log(user)
    // const addr=user.blpid;

    const usertable = () => {
        console.log(user)
        api.get(`entries/getOne-entries/${user.blp_id}`).then(function (response) {
            setvalues(response.data.data);
            console.log(response.data)
        })
    }

    useEffect(() => {
        usertable();
    }, []);



    const deletefunc = async (a, k) => {
        setloading(true);
        console.log(a);
        console.log(k);
        api.delete(`entries/delete-entries/${a}`).then(async function (response) {
            if (response.data.status == 1) {
                await setvalues(values.filter((e) => {
                    return e !== k;
                }));
                console.log(values);
                setloading(false);
                window.alert("Record deleted succesfully");
            }
            else {
                setloading(false);
                window.alert("Error occured");
            }
        })
    }


    return (
        <>
        {
            loading
            ?<Loader />
            :<></>
        }
        <div className="relative m-4 mt-2 overflow-x-auto rounded-xl scrollbar-hide">
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
                    {/* {console.log(!values)} */}
                    {!values
                    ? <tr className="bg-white border-b hover:bg-gray-50">
                         <td colSpan="9" className="px-6 py-2 text-lg font-medium text-gray-900 md:text-center whitespace-nowrap">
                                No Entries Found
                            </td>
                    </tr>

                    : values.map((entry, key) =>

                        <tr className="bg-white border-b hover:bg-gray-50">

                            <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                { key + 1 }
                            </th>
                            <td className="px-6 py-2">
                                { entry.date }
                            </td>
                            <td className="px-6 py-2">
                                { entry.nature }
                            </td>
                            <td className="px-6 py-2">
                                { entry.status }
                            </td>

                            <td className="px-6 py-2">
                                { entry.doneby }
                            </td>

                            <td className="px-6 py-2">
                                { entry.remarks1 }
                            </td>
                            <td className="px-6 py-2 text-right">
                                <Link to="extraview" state={ { values: entry,user:user } } className="font-medium text-fix hover:underline">More</Link>
                            </td>
                            <td className="px-6 py-2 text-right">
                                <Link to="/entryedit" state={ { values: entry } } className="font-medium text-fix hover:underline">Edit</Link>
                            </td>

                            <td className="px-6 py-2 text-right">
                                <button onClick={ () => { deletefunc(entry.sr_no, entry) } } className="font-medium text-fix hover:underline">Delete</button>
                            </td>
                        </tr>

                    )}

                </tbody>
            </table>
        </div>
        </>
    )
}

export default Tablenew