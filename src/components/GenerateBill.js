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

const GenerateBill = () => {

    const { modal, setmodal, modalmessage, setmodalmessage } = useModal();

    const api = useAxiosPrivate();
    const navigate = useNavigate();

    const [loading, setloading] = useState(false);

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


            <div id='bill'>
                { grand1 > 0 ? <PrintTable1 /> : <></> }
                { extratable && grand4 > 0 ? <PrintTable2 /> : <></> }
                { grand5 > 0 ? <PrintTable3 /> : <></> }
                { grand2 > 0 ? <PrintTable4 /> : <></> }
                { grand3 > 0 ? <PrintTable5 /> : <></> }

                <div className='flex justify-center w-full'>
                    <div className='container p-3 max-w-[1280px] bg-fix text-right text-white text-xl px-8 m-2'>
                        Bill Total: <span className='ml-4'>₹{ billtotal }</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default GenerateBill