import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Loader from './Loader';
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';
import moment from 'moment';

function Entryedit2() {

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const api = useAxiosPrivate();

    const [loading, setloading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { values } = location.state;
    const [inputs, setinputs] = useState(values);



    useEffect(() => {
        setinputs(values => ({ ...values, date: moment(values.date).format("YYYY-MM-DD") }))
    }, []);

    function handlechange(event) {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        if (value == "") {
            if(name=="nanosil" || name=="superflex" ||name=="silicon" || name=="food" || name=="accomodation" || name=="travelling" || name=="expenses"){
                setinputs(values => ({ ...values, [name]: "0" }));
            }
            else{
                setinputs(values => ({ ...values, [name]: "-" }));
            }

        }
        else {
            setinputs(values => ({ ...values, [name]: value }))

        }


        // setinputs(values => ({ ...values, [name]: value }))
        // console.log(inputs)
    }

    const formsubmit = async (event) => {
        event.preventDefault();
        setloading(true);
        // console.log(JSON.stringify(inputs))

        try {
            await api.put(`entries/update-entries/${inputs.sr_no}`, JSON.stringify(inputs)).then(async function (response) {
                // console.log(response)
                if (response.data.status == 1) {
                    setloading(false);
                    // window.alert("Data updated Successfully");
                    setmodal(true);
                    await setmodalmessage({
                        "text1": "Success",
                        "text2": "Entry edited succesfully."
                    });
                    navigate('/');
                }
                else {
                    setloading(false);
                    // window.alert("Error Occured	");
                    setmodal(true);
                    await setmodalmessage({
                        "text1": "Error Occured",
                        "text2": "Error while adding entry."
                    });
                }
            });
        } catch (error) {
            setloading(false);
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
                                <input defaultValue={ moment(inputs.date).format("YYYY-MM-DD") } onChange={ handlechange } name="date" className='px-2 py-2 text-lg bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="date" placeholder="" required />
                            </div>

                            <div className='flex w-full sm:w-1/2'>
                                <label className='py-2 pr-2 text-lg text-gray-500 sm-block sm:min-w-fit ' htmlFor="">Time:</label>
                                <input defaultValue={ inputs.time } onChange={ handlechange } name="time" className='w-full px-2 py-2 text-lg bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                        </div>


                        <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                            <div className='w-full mb-3 lg:w-2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500 ' htmlFor="">Nature of Work:</label>

                                <select defaultValue={ inputs.nature } onChange={ handlechange } name="nature" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-2/5 lg:w-full">
                                    <option selected className=''>Choose a option..</option>
                                    <option>Measurement</option>
                                    <option>Delivery</option>
                                    <option>Installation</option>
                                    <option>Revisit</option>
                                </select>
                            </div>

                            <div className='w-full mb-3 lg:w-1/3'>
                                <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Status:</label>

                                <select defaultValue={ inputs.status } onChange={ handlechange } name="status" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-2/5 lg:w-full">
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
                                <input defaultValue={ inputs.doneby } onChange={ handlechange } name="doneby" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                            <div className='w-full lg:w-2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Remarks:</label>
                                <input defaultValue={ inputs.remarks1 } onChange={ handlechange } name="remarks1" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>
                        </div>



                        <h4 className='mb-3 text-xl underline text-fix min-w-fit '>Materials Consumed:(Please enter values in ml)</h4>

                        <div className='border-b-2'>

                            <div className='flex flex-wrap justify-between pb-3 sm:flex-nowrap'>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Nanosil:</label>
                                    <input defaultValue={ inputs.nanosil } step="0.001"  onChange={ handlechange } name="nanosil" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/2 lg:w-2/5' type="number" placeholder="" />
                                </div>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Silicon:</label>
                                    <input defaultValue={ inputs.silicon } step="0.001" onChange={ handlechange } name="silicon" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/2 lg:w-2/5' type="number" placeholder="" />
                                </div>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Superflex:</label>
                                    <input defaultValue={ inputs.superflex } step="0.001" onChange={ handlechange } name="superflex" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/2 lg:w-2/5' type="number" placeholder="" />
                                </div>

                            </div>

                            <div className='flex w-full pb-3 mb-3 md:w-3/4'>
                                <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                <input defaultValue={ inputs.remarks2 } onChange={ handlechange } name="remarks2" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                        </div>



                        <h4 className='my-3 text-xl underline text-fix min-w-fit '>Expenses(In ₹):</h4>
                        <div className='border-b-2 '>

                            <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Food:</label>
                                    <input defaultValue={inputs.food} onChange={ handlechange } name="food" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                                </div>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                    <input defaultValue={inputs.food_remarks} onChange={ handlechange } name="food_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                                </div>

                            </div>


                            <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Travelling:</label>
                                    <input defaultValue={inputs.travelling} onChange={ handlechange } name="travelling" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                                </div>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                    <input defaultValue={inputs.travelling_remarks} onChange={ handlechange } name="travelling_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                                </div>

                            </div>


                            <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Accomodation:</label>
                                    <input defaultValue={inputs.accomodation} onChange={ handlechange } name="accomodation" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                                </div>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                    <input defaultValue={inputs.accomodation_remarks} onChange={ handlechange } name="accomodation_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                                </div>

                            </div>


                            <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Any other expenses:</label>
                                    <input defaultValue={inputs.expenses} onChange={ handlechange } name="expenses" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none hideinput sm:w-1/3' type="number" placeholder="" />
                                </div>


                                <div className='flex w-full mb-3'>
                                    <label className='py-2 pr-2 text-lg text-gray-500 min-w-fit' htmlFor="">Remarks:</label>
                                    <input defaultValue={inputs.expenses_remarks} onChange={ handlechange } name="expenses_remarks" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-full' type="text" placeholder="" />
                                </div>



                            </div>

                        </div>




                        <h4 className='mb-3 text-xl underline text-fix min-w-fit'>Billing Status:</h4>

                        <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                            <div className='w-full mb-3 lg:2/5'>
                                <label className='py-2 pr-2 text-lg text-gray-500' htmlFor="">Billing Status:</label>

                                <select defaultValue={ inputs.billstatus } onChange={ handlechange } name="billstatus" className="w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none sm:w-1/2 lg:w-2/5">
                                    <option selected className=''>Choose a option..</option>
                                    <option>Pending</option>
                                    <option>Done</option>
                                </select>
                            </div>

                            <div className='w-full lg:flex'>
                                <label className='py-2 pr-2 text-lg text-gray-500 lg:min-w-fit min-w-fit' htmlFor="">Remarks:</label>
                                <input defaultValue={ inputs.remarks3 } onChange={ handlechange } name="remarks3" className='w-full px-2 py-2 text-lg text-black bg-transparent border-b-2 border-gray-300 rounded-sm outline-none' type="text" placeholder="" />
                            </div>

                        </div>


                        <div className='flex items-center justify-center mt-2 md:justify-start'>
                            <button disabled={ loading } className="rounded-sm ani-button ">Submit</button>
                        </div>


                    </form>

                </div>
            </div>
        </>

    )
}

export default Entryedit2