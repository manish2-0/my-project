import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Loader from './Loader';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment/moment';
import modal from '../context/ModalContext';
import 'tw-elements';
import useModal from '../hooks/useModal';
import Modal from '../modals/Modal';

// import { useLocation } from 'react-router-dom';

function Tablenew() {

    // const location = useLocation();
    // const { values } = location.state;

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();
    const [deleting, setdeleting] = useState({
        "a": "",
        "k": ""
    });

    const ref = useRef(null);


    const openmodal = (a, k) => {
        ref.current.click();
        setdeleting({ a, k });
    }

    const bclick = () => {
        ref.current.click();
        setdeleting({ "a": "", "k": "" });
    }

    const api = useAxiosPrivate();

    // const navigate = new useNavigate();

    const [loading, setloading] = useState(false);
    const [entryloading, setentryloading] = useState(true);

    const [values, setvalues] = useState([]);
    // values=1;
    // const a=123;
    const location = useLocation();
    const { user } = location.state;
    // console.log(user)
    // const addr=user.blpid;

    const usertable = () => {
        setentryloading(true)
        // console.log(user)
        api.get(`entries/getOne-entries/${user.blp_id}`).then(function (response) {
            setvalues(response.data.data);
            setentryloading(false)
            // console.log(response.data)
        })
    }

    useEffect(() => {
        usertable();
        console.log(user)
    }, []);



    const deletefunc = async () => {
        ref.current.click();
        setloading(true);
        // console.log(a);
        // console.log(k);


        try {
            await api.delete(`entries/delete-entries/${deleting.a}`).then(async function (response) {
                if (response.data.status == 1) {
                    setvalues(values.filter((e) => {
                        return e !== deleting.k;
                    }));
                    // console.log(values);
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Success",
                        "text2": "Record deleted successfully."
                    });
                    // window.alert("Record deleted succesfully");
                }
                else {
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Error",
                        "text2": "Error while deleting record."
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
        }


    }


    return (
        <>
            {
                loading
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
                                <button onClick={ deletefunc }
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



            {/* Table  */ }
            {/* <div className='flex justify-between'> */ }
            <div className='m-4 mt-2'>

                <div className='flex justify-between px-2'>
                    <span className='text-2xl text-fix'>Entries:</span>
                    <Link to="/newentry" state={ { user: user } } className='hover:bg-[#1967b6] px-8 py-2 text-white rounded-md homepagebutton bg-fix'>Add Entry</Link>
                </div>

                <div className="relative overflow-x-auto scrollbar-hide">
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
                                    Nature
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

                            { entryloading
                                ? <tr className="bg-white border-b hover:bg-gray-50">
                                    <td colSpan="9" className='h-8 p-2 text-xl font-medium'>
                                        <Skeleton height={ 25 } />
                                    </td>
                                </tr>

                                : !values
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
                                                { moment(entry.date).format("DD/MM/YYYY") }
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
                                                <Link to="extraview" state={ { values: entry, user: user } } className="font-medium text-fix hover:underline">More</Link>
                                            </td>
                                            <td className="px-6 py-2 text-right">
                                                <Link to="/entryedit" state={ { values: entry } } className="font-medium text-fix hover:underline">Edit</Link>
                                            </td>

                                            <td className="px-6 py-2 text-right">
                                                <button onClick={ () => { openmodal(entry.sr_no, entry) } } className="font-medium text-red-700 hover:underline">Delete</button>
                                                {/* entry.sr_no, entry */ }
                                            </td>
                                        </tr>

                                    ) }

                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Tablenew