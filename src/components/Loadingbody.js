import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

function Loadingbody({count}) {

    return (

            <div className="block p-2 px-4 rounded-lg shadow-lg bg-white w-[370px] sm:w-[300px] md:[350px] lg-[370px] m-3">
                <div className='flex items-center justify-start'>
                    <div className='mr-3'><Skeleton height={50} width={50} circle/></div>
                    <h5 className='w-1/2'> <Skeleton height={ 40 } /> </h5>
                </div>
                <h5 className='mt-2'><Skeleton height={ 40 } width={ 250 } /></h5>
                <h5 className='mt-2'><Skeleton height={ 40 } width={ 200 } /></h5>
                {/* <h5 className='m-[10px]'><Skeleton height={ 35 } /></h5>
                <h5 className='m-[10px]'><Skeleton height={ 20 } width={ 200 } /></h5>
                <h5 className='m-[10px]'><Skeleton height={ 20 } width={ 200 } /></h5> */}

                <div className='flex items-center justify-between mt-2'>
                    <h5 className='w-1/3'>
                        <Skeleton height={ 40 } width={150} />
                    </h5>

                    <h5 className=''>
                        <Skeleton height={ 40 } width={100} />
                    </h5>



                </div>

            </div>
    
    )
    
}

export default Loadingbody