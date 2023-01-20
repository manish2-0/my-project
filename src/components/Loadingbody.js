import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from "react-router-dom";
import 'react-loading-skeleton/dist/skeleton.css'

function Loadingbody({count}) {

    return (

            <div className="block p-4 rounded-lg shadow-lg bg-white w-[370px] m-4">
                <div className='flex justify-around items-center'>
                    <h5 className='w-[65%]'><Skeleton height={ 20 } /></h5>
                    <h5 className='w-[25%]'> <Skeleton height={ 20 } /> </h5>
                </div>
                <h5 className='m-[10px]'><Skeleton height={ 20 } width={ 250 } /></h5>
                <h5 className='m-[10px]'><Skeleton height={ 20 } width={ 200 } /></h5>
                <h5 className='m-[10px]'><Skeleton height={ 35 } /></h5>
                <h5 className='m-[10px]'><Skeleton height={ 20 } width={ 200 } /></h5>
                <h5 className='m-[10px]'><Skeleton height={ 20 } width={ 200 } /></h5>

                <div className='flex justify-between items-center m-4'>
                    <h5 className='w-1/3'>
                        <Skeleton height={ 30 } />
                    </h5>

                    <h5 className='w-1/3'>
                        <Skeleton height={ 30 } />
                    </h5>



                </div>

            </div>
    
    )
    
}

export default Loadingbody