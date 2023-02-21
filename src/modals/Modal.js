import React, { useState,useRef,useEffect } from 'react'
import 'tw-elements';
import useModal from '../hooks/useModal';

const Modal = () => {

    
  const {modal,setmodal,modalmessage,setmodalmessage}=useModal();

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
                                {modalmessage.text1}
                            </h5>
                            <button onClick={bclick} type="button"
                                className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 btn-close focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="relative px-3 py-3 modal-body">
                            {modalmessage.text2}
                        </div>
                        <div
                            className="flex flex-wrap items-center justify-end flex-shrink-0 px-3 py-2 modal-footer rounded-b-md">
                            <button onClick={bclick} type="button"
                                className="inline-block px-6 py-2.5  text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-fix hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal