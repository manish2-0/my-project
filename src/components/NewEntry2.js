import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Loader from './Loader';
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';

function NewEntry2() {

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const api = useAxiosPrivate();

    const [loading, setloading] = useState(false);

    const navigate = useNavigate();
    const [path, setpath] = useState([]);


    const location = useLocation();
    const { user } = location.state;

    const [inputs, setinputs] = useState({
        "blp_id": user.blp_id,
        "date": "-",
        "time": "-",
        "nature": "-",
        "status": "-",
        "doneby": "-",
        "remarks1": "-",

        "nanosil": "0",
        "superflex": "0",
        "silicon": "0",
        "remarks2": "-",

        "food": "0",
        "food_remarks": "-",

        "accomodation": "0",
        "accomodation_remarks": "-",

        "travelling": "0",
        "travelling_remarks": "-",

        "expenses": "0",
        "expenses_remarks": "-",

        "billstatus": "-",
        "remarks3": "-"

    });


    function handlechange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({ ...values, [name]: value }))
        // console.log(inputs)
    }

    const handlechangefile = (e) => {
        // console.log(e.target.files);
        setpath(e.target.files);
    }


    const formsubmit = async (event) => {
        event.preventDefault()
        setloading(true);

        try {
            await api.post('entries/register-entries', JSON.stringify(inputs)).then(async function (response) {
                if (response.data.status == 1) {

                    if (path.length) {

                        const sr_no = response.data.sr_no;
                        const formdata = new FormData();

                        for (let i = 0; i < path.length; i++) {
                            formdata.append('files', path[i]);
                        }

                        try {

                            await api.post(`file/upload/${sr_no}`, formdata, {
                                headers: {
                                    'content-type': 'multipart/form-data'
                                }
                            }
                            ).then(
                                async function (response) {
                                    if (response.data.status == 1) {
                                        setloading(false);
                                        // window.alert("Data added Successfully");
                                        setmodal(true);
                                        await setmodalmessage({
                                            "text1": "Success",
                                            "text2": "Entry added succesfully."
                                        })
                                        navigate('/');
                                    }
                                    else {
                                        setloading(false);
                                        // window.alert("Error while uploading files");
                                        setmodal(true);
                                        await setmodalmessage({
                                            "text1": "Error Occured",
                                            "text2": "Error while uploading files."
                                        });

                                    }
                                }
                            )

                        } catch (error) {
                            setloading(false);
                            // console.log(error);
                            // window.alert("No server response while uploading files");
                            setmodal(true);
                            await setmodalmessage({
                                "text1": "Error Occured",
                                "text2": "No server response while uploading files."
                            });
                        }


                    }

                    else {
                        setloading(false);
                        // window.alert("Data added Successfully");
                        setmodal(true);
                        await setmodalmessage({
                            "text1": "Success",
                            "text2": "Entry added Successfully."
                        });
                        navigate('/');
                    }


                }
                else {
                    setloading(false);
                    // window.alert("Error Occured");
                    setmodal(true);
                    await setmodalmessage({
                        "text1": "Error Occured",
                        "text2": "Error while adding entry."
                    });
                }
            })


        } catch (error) {
            setloading(false);
            // console.log(error)
            // window.alert("No server response");
            setmodal(true);
            await setmodalmessage({
                "text1": "Error Occured",
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


            <div className='relative z-0 flex flex-col items-center pt-40 mx-2 border-gray-200 rounded-md sm:pt-20 bg-gray-50 '>
                <h2 className='my-2 mb-4 text-4xl underline text-fix'>Entry Form</h2>
                <div className='container relative flex items-center justify-center h-auto rounded-md bg-gray-50'>


                    <form onSubmit={ formsubmit } className='relative z-10 w-full h-auto px-2 py-4 mx-1 border rounded-lg lg:w-3/4 sm:mx-2 sm:px-6 sm:border-2 border-slate-200 bg-gray-50' >
                        {/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[20px] top-[5px] border-2 border-blue-800'> </span> */ }

                        <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap sm:justify-start'>

                            <div className='w-full mb-3 sm:w-2/5 sm:mr-5 sm:mb-0'>
                                <label className='py-2 pr-2 text-lg text-gray-500 sm:min-w-fit' htmlFor="">Date:</label>
                                <input onChange={ handlechange } name="date" className='px-2 py-2 text-lg bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="date" placeholder="" required />
                            </div>

                            <div className='flex w-full sm:w-1/2'>
                                <label className='py-2 pr-2 text-lg text-gray-500 sm-block sm:min-w-fit ' htmlFor="">Time:</label>
                                <input onChange={ handlechange } name="time" className='w-full px-2 py-2 text-lg bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                        </div>


                        <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                            <div className='w-full mb-3 lg:w-2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500 ' htmlFor="">Nature of Work:</label>

                                <select onChange={ handlechange } name="nature" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-2/5 lg:w-full">
                                    <option selected className=''>Choose a option..</option>
                                    <option>Measurement</option>
                                    <option>Delivery</option>
                                    <option>Installation</option>
                                    <option>Revisit</option>
                                </select>
                            </div>

                            <div className='w-full mb-3 lg:w-1/3'>
                                <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Status:</label>

                                <select onChange={ handlechange } name="status" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-2/5 lg:w-full">
                                    <option selected className=''>Choose a option..</option>
                                    <option>Pending</option>
                                    <option>In Progress</option>
                                    <option>Done</option>
                                </select>
                            </div>

                        </div>

                        <div className='flex flex-wrap justify-between pb-3 mb-3 border-b-2 lg:flex-nowrap'>

                            <div className='w-full mb-3 lg:w-2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Done By:</label>
                                <input onChange={ handlechange } name="doneby" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                            <div className='w-full lg:w-2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Remarks:</label>
                                <input onChange={ handlechange } name="remarks1" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>
                        </div>



                        <h4 className='mb-3 text-xl underline text-fix min-w-fit '>Materials Consumed:(Please enter values in ml)</h4>

                        <div className='border-b-2'>

                        <div className='flex flex-wrap justify-between pb-3 sm:flex-nowrap'>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Nanosil:</label>
                                <input onChange={ handlechange } name="nanosil" step="0.01" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/2 lg:w-2/5' type="number" placeholder="" />
                            </div>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Silicon:</label>
                                <input onChange={ handlechange } name="silicon" step="0.01" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/2 lg:w-2/5' type="number" placeholder="" />
                            </div>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Superflex:</label>
                                <input onChange={ handlechange } name="superflex" step="0.01" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/2 lg:w-2/5' type="number" placeholder="" />
                            </div> 

                        </div>

                        <div className='flex w-full pb-3 mb-3 md:w-3/4'>
                            <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                            <input onChange={ handlechange } name="remarks2" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                        </div>

                        </div>



                        <h4 className='my-3 text-xl underline text-fix min-w-fit '>Expenses(In ₹):</h4>
                        <div className='border-b-2 '>

                        <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Food:</label>
                                <input onChange={ handlechange } name="food" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                            </div>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                <input onChange={ handlechange } name="food_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                            </div>

                        </div>


                        <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Travelling:</label>
                                <input onChange={ handlechange } name="travelling" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                            </div>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                <input onChange={ handlechange } name="travelling_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                            </div>

                        </div>


                        <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Accomodation:</label>
                                <input onChange={ handlechange } name="accomodation" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                            </div>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                <input onChange={ handlechange } name="accomodation_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                            </div>

                        </div>


                        <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Any other expenses:</label>
                                <input onChange={ handlechange } name="expenses" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                            </div>


                            <div className='flex w-full mb-3'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                <input onChange={ handlechange } name="expenses_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                            </div>



                        </div>

                        </div>


                        <h4 className='my-3 text-xl underline text-fix min-w-fit'>Billing Status:</h4>

                        <div className='flex flex-wrap justify-between pb-3 mb-3 border-b-2 lg:flex-nowrap'>

                            <div className='w-full mb-3 lg:2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Billing Status:</label>

                                <select onChange={ handlechange } name="billstatus" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/2 lg:w-2/5">
                                    <option selected className=''>Choose a option..</option>
                                    <option>Pending</option>
                                    <option>Done</option>
                                </select>
                            </div>

                            <div className='w-full mb-3 lg:flex'>
                                <label className='py-2 pr-2 text-lg text-gray-500 lg:min-w-fit min-w-fit' htmlFor="">Remarks:</label>
                                <input onChange={ handlechange } name="remarks3" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                        </div>


                        <h4 className='mb-3 text-xl underline text-fix min-w-fit '>Upload Files:</h4>

                        <div className='flex flex-wrap justify-between border-b-2'>

                            <div className='mb-3 '>
                                <label className='py-2 pr-2 text-lg text-gray-500 outline-none min-w-fit' htmlFor="">Upload Files:</label>
                                <input onChange={ handlechangefile } name="files" className='w-full py-2 text-lg outline-none px-auto' type="file" multiple placeholder="" />
                            </div>


                        </div>

                        <div className='flex items-center justify-center mt-2 md:justify-start'>
                            <button className="rounded-sm ani-button ">Submit</button>
                        </div>


                    </form>

                </div>
            </div>
        </>

    )
}

export default NewEntry2