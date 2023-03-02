import React from 'react'
import PrintTable3 from './billprint/PrintTable3';
import PrintTable1 from './billprint/PrintTable1';
import PrintTable2 from './billprint/PrintTable2';
import PrintTable4 from './billprint/PrintTable4';
import PrintTable5 from './billprint/PrintTable5';

const GenerateBill = () => {
    return (
        <>
            <div id='bill'>
                <PrintTable1 />
                <PrintTable2 />
                <PrintTable3 />
                <PrintTable4 />
                <PrintTable5 />

                <div className='flex justify-center w-full'>
                    <div className='container p-3 max-w-[1280px] bg-fix text-right text-white text-xl px-8 m-2'>
                        Bill Total: <span className='ml-4'>₹999999999</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default GenerateBill