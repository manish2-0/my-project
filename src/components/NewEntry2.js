import React from 'react'

function NewEntry2() {
    return (
        <div className='relative flex flex-col items-center justify-center mx-2 border-gray-200 rounded-md z-0 bg-gray-50'>
            <h2 className='my-2 mb-4 text-4xl text-blue-900 underline'>Entry Form</h2>
            <div className='container relative flex items-center justify-center h-auto bg-white rounded-md'>
                

                <form className=' w-full lg:w-3/4 mx-2 relative h-auto rounded-lg px-2 py-4 border border-slate-200 bg-white z-10' >
                    {/* <span className='z-[-1] absolute w-full h-full rounded-lg left-[20px] top-[5px] border-2 border-blue-800'> </span> */}

                    <div className='flex justify-between mb-3 flex-wrap sm:flex-nowrap sm:justify-start'>

                        <div className='w-full mb-3 sm:w-2/5 sm:mr-5 sm:mb-0'>
                            <label className='sm:min-w-fit text-gray-500 pr-2 py-2 text-lg' htmlFor="">Date:</label>
                            <input name="date" className='px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent' type="date" placeholder="" />
                        </div>

                        <div className='w-full flex sm:w-1/2'>
                            <label className='sm-block sm:min-w-fit text-gray-500 pr-2 py-2 text-lg ' htmlFor="">Time:</label>
                            <input name="time" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent' type="text" placeholder="" />
                        </div>

                    </div>


                    <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:w-2/5'>
                            <label className=' text-gray-500 pr-2 py-2 text-lg' htmlFor="">Nature of Work:</label>

                            <select name="nature" className="sm:w-2/5 lg:w-full w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black">
                                <option selected className=''>Choose a option..</option>
                                <option>Measurement</option>
                                <option>Delivery</option>
                                <option>Installation</option>
                                <option>Revisit</option>
                            </select>
                        </div>

                        <div className='w-full mb-3 lg:w-1/3'>
                            <label className='text-gray-500 pr-2 py-2 text-lg' htmlFor="">Status:</label>

                            <select name="nature" className=" sm:w-2/5 lg:w-full px-2 py-2 w-full border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black">
                                <option selected className=''>Choose a option..</option>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Done</option>
                            </select>
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 pb-3 border-b-2 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:w-2/5'>
                            <label className='min-w-fit text-gray-500 pr-2 py-2 text-lg' htmlFor="">Done By:</label>
                            <input name="date" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                        <div className='w-full  lg:w-2/5'>
                            <label className='text-gray-500 pr-2 py-2 text-lg' htmlFor="">Remarks:</label>
                            <input name="time" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>
                    </div>



                    <h4 className='text-blue-900 mb-3 text-xl min-w-fit underline '>Materials Consumed:</h4>

                    <div className='flex flex-wrap justify-between mb-3 pb-3 border-b-2 sm:flex-nowrap'>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Nanosil:</label>
                            <input name="date" className='sm:w-1/2 lg:w-2/5 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Silicon:</label>
                            <input name="date" className='sm:w-1/2 lg:w-2/5 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Superflex:</label>
                            <input name="time" className='sm:w-1/2 lg:w-2/5 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                    </div>



                    <h4 className='text-blue-900 mb-3 text-xl min-w-fit underline '>Expenses(In ₹):</h4>
                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Food:</label>
                            <input name="date" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Accomodation:</label>
                            <input name="date" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 sm:flex-nowrap'>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Travelling:</label>
                            <input name="date" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                        <div className='w-full flex mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Any other expenses:</label>
                            <input name="date" className='sm:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="number" placeholder="" />
                        </div>

                    </div>

                    <div className='flex flex-wrap justify-between mb-3 pb-3 border-b-2'>

                        <div className='w-full mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Remarks:</label>
                            <input name="date" className='lg:w-1/3 w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>


                    </div>




                    <h4 className='text-blue-900 mb-3 text-xl min-w-fit underline'>Billing Status:</h4>

                    <div className='flex flex-wrap justify-between mb-3 lg:flex-nowrap'>

                        <div className='w-full mb-3 lg:2/5'>
                            <label className='text-gray-500 pr-2 py-2 text-lg' htmlFor="">Billing Status:</label>

                            <select name="nature" className="sm:w-1/2 lg:w-2/5 px-2 py-2 w-full border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black">
                                <option selected className=''>Choose a option..</option>
                                <option>Pending</option>
                                <option>Done</option>
                            </select>
                        </div>

                        <div className='w-full mb-3 lg:flex'>
                            <label className='lg:min-w-fit pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Remarks:</label>
                            <input name="date" className='w-full px-2 py-2 border-b-2 border-gray-300 rounded-sm text-lg outline-none bg-transparent text-black' type="text" placeholder="" />
                        </div>

                    </div>


                    <h4 className='text-blue-900 mb-3 text-xl min-w-fit underline '>Upload Files:</h4>

                    <div className='flex flex-wrap justify-between border-b-2'>

                        <div className='w-full mb-3'>
                            <label className='pr-2 py-2 min-w-fit text-gray-500 text-lg' htmlFor="">Upload Files:</label>
                            <input name="date" className='w-full px-2 py-2 rounded-sm text-lg outline-none' type="file" multiple placeholder="" />
                        </div>


                    </div>

                    <div className='flex items-center justify-center mt-2 md:justify-start'>
                        <button class="ani-button rounded-sm ">Submit</button>
                    </div>


                </form>

            </div>
        </div>

    )
}

export default NewEntry2