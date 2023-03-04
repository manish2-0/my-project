import React, { useState, useEffect } from 'react'
import PrintTable3 from './billprint/PrintTable3';
import PrintTable1 from './billprint/PrintTable1';
import PrintTable2 from './billprint/PrintTable2';
import PrintTable4 from './billprint/PrintTable4';
import PrintTable5 from './billprint/PrintTable5';
import useBill from '../hooks/useBill';
import useModal from '../hooks/useModal';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router';
import Modal from '../modals/Modal';
import Loader from './Loader';
import logo from '../billicon.png';

const GenerateBill = () => {

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const api = useAxiosPrivate();
    const navigate = useNavigate();

    const [loading, setloading] = useState(false);
    const [generated, setgenerated] = useState(null);

    const location = useLocation();
    const { user } = location.state;


    const {
        row1, setrow1,
        mul1, setmul1,
        tot1, settot1,
        fixrate1, setfixrate1,
        varrate1, setvarrate1,
        grand1, setgrand1,
        fabri1, setfabri1,
        fabrirate1, setfabrirate1,
        row2, setrow2,
        mul2, setmul2,
        grand2, setgrand2,
        entries, setentries,
        grand3, setgrand3,
        row4, setrow4,
        mul4, setmul4,
        tot4, settot4,
        fixrate4, setfixrate4,
        varrate4, setvarrate4,
        grand4, setgrand4,
        fabri4, setfabri4,
        fabrirate4, setfabrirate4,
        billtotal, setbilltotal,
        extratable, setextratable,
        row5, setrow5,
        mul5, setmul5,
        greaterval, setgreaterval,
        grand5, setgrand5
    } = useBill();

    const setzero = () => {
        setrow1([]);
        setmul1([]);
        settot1(0);
        setfixrate1(0);
        setvarrate1(0);
        setgrand1(0);
        setfabri1("Select option...");
        setfabrirate1(0);
        setrow2([]);
        setmul2([]);
        setgrand2(0);
        setentries([]);
        setgrand3(0);
        setrow4([]);
        setmul4([]);
        settot4(0);
        setfixrate4(0);
        setvarrate4(0);
        setgrand4(0);
        setfabri4("Select option...");
        setfabrirate4(0);
        setbilltotal(0);
        setextratable(false);
        setrow5([]);
        setmul5([]);
        setgreaterval({ quantity: 0, total: 0 });
        setgrand5(0);

    }

    const getbilldata = async () => {

        setloading(true);

        try {
            await api.get(`client/get-bill/${user.blp_id}`).then(async function (response) {
                if (response.data.status == false) {
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Failed",
                        "text2": "No Bill Found."
                    });
                    navigate("/")
                }
                else {
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Success",
                        "text2": "Bill data fetched."
                    });
                    console.log(response.data)
                    setdatabasevalues(response.data);
                }
            });


        } catch (error) {
            setloading(false);
            setmodal(true);
            setmodalmessage({
                "text1": "Error Occured",
                "text2": "No server response"
            });
        }



    }

    const setdatabasevalues = (data) => {
        setrow1(data.row1);
        setmul1(data.mul1);
        settot1(data.tot1);
        setfixrate1(data.fixrate1);
        setvarrate1(data.varrate1);
        setgrand1(data.grand1);
        setfabri1(data.fabri1);
        setfabrirate1(data.fabrirate1);
        setrow2(data.row2);
        setmul2(data.mul2);
        setgrand2(data.grand2);
        setentries(data.entries);   //check
        setgrand3(data.grand3);   //check
        setrow4(data.row4);
        setmul4(data.mul4);
        settot4(data.tot4);
        setfixrate4(data.fixrate4);
        setvarrate4(data.varrate4);
        setgrand4(data.grand4);
        setfabri4(data.fabri4);
        setfabrirate4(data.fabrirate4);
        setbilltotal(data.billtotal);  //check
        setextratable(data.extratable);
        setrow5(data.row5);
        setmul5(data.mul5);
        setgreaterval(data.greaterval);
        setgrand5(data.grand5);

    }


    useEffect(() => {
        setzero();
        getbilldata();
    }, []);

    const printwindow=async()=>{
        await setgenerated(new Date().toLocaleString());
        window.print();
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


            <div className='mx-auto sm:pt-20 pt-36' id='generatebill'>
                <div className='flex justify-center w-full tracking-wide'>
                    <div className='flex flex-col container m-3 p-3 max-w-[1274px] border-slate-300'>

                        <div className='flex flex-row w-full justify-between items-center font-bold'>
                            <img className='w-24 h-24 ' alt="" srcSet={ logo } />
                            <div className=' text-lg flex justify-center flex-col ml-2 mb-2 p-2'>
                                <p className='text-fix'><span className='underline underline-offset-4'>BLP ID:</span><span className='pl-1 font-normal text-slate-700'>{ user.blp_id }</span></p>
                                <p className='text-fix'><span className='underline underline-offset-4'>ISELL No.:</span><span className='pl-1 font-normal text-slate-700'>{user.isell}</span></p>
                                <p className='text-fix'><span className='underline underline-offset-4'>DC No.:</span><span className='pl-1 font-normal text-slate-700'>{user.dc_no}</span></p>
                            
                            </div>
                        </div>

                        <div className='flex flex-col text-lg font-bold text-fix ml-2'>
                            <p className=''><span className='underline underline-offset-4'>Client Name:</span><span className='pl-1 font-normal text-slate-700'>{ user.name }</span></p>
                            <p className=''><span className='underline underline-offset-4'>Client Address:</span><span className='pl-1 font-normal text-slate-700'>{ user.address }</span></p>
                            <p className=''><span className='underline underline-offset-4'>Client City:</span><span className='pl-1 font-normal text-slate-700'>{ user.city }</span></p>
                            <p className=''><span className='underline underline-offset-4'>Client Contact:</span><span className='pl-1 font-normal text-slate-700'>{ user.contact }</span></p>
                            <p id='printdate' className=''><span className='underline underline-offset-4'>Printed at:</span><span className='pl-1 font-normal text-slate-700'>{ generated }</span></p>
                            <button id='printbutton' onClick={printwindow} className='w-[130px] mt-2 ani-button'>Print</button>
                        </div>

                    </div>
                </div>


                { grand1 > 0 ? <PrintTable1 /> : <></> }
                { extratable && grand4 > 0 ? <PrintTable2 /> : <></> }
                { grand5 > 0 ? <PrintTable3 /> : <></> }
                { grand2 > 0 ? <PrintTable4 /> : <></> }
                { grand3 > 0 ? <PrintTable5 /> : <></> }

                <div className='flex justify-center w-full'>
                    <div className='container p-3 max-w-[1274px] bg-fix text-right text-white text-xl px-8 m-2'>
                        Bill Total: <span className='ml-4'>₹{ billtotal }</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default GenerateBill