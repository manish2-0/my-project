import React, { useState, useRef, useEffect } from 'react'
import 'tw-elements';
import useModal from '../hooks/useModal';

const Testing2 = () => {


    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const ref = useRef(null)

    const bclick = () => {
        ref.current.click();
        setmodal(false);
    }

    useEffect(() => {
        ref.current.click();
    }, []);

    return (
        <>
            <button onClick={ bclick }>Click</button>
            {/* <!-- Button trigger modal --> */ }
            <button ref={ ref } type="button" className="hidden" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></button>

            {/* <!-- Modal --> */ }
            <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto outline-none modal fade"
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
                            <button  onClick={ bclick }
                                type="button"
                                class="inline-block rounded bg-gray-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black-300 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-0 "
                                data-te-modal-dismiss
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                No, Cancel
                            </button>
                            <button
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
    )
}

export default Testing2