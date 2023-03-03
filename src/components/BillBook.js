import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useBill from '../hooks/useBill';
import EntriesBill from './EntriesBill';
import ExtraBillTable from './ExtraBillTable';
import ExtraEntriesTable from './ExtraEntriesTable';
import Table2 from './Table2';
import TablePre from './TablePre';
import { useNavigate } from 'react-router-dom';

import Loader from './Loader';
import Modal from '../modals/Modal';
import useModal from '../hooks/useModal';

const BillBook = () => {

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

    // const [trial, settrial] = useState();

    // useEffect(() => {
    //     console.log(trial);
    // }, [trial]);

    const getbilldata = async () => {

        setloading(true);

        if (localStorage.getItem(user.blp_id)) {
            setloading(false);
            // console.log(localStorage.getItem(user.blp_id))
            setdatabasevalues(JSON.parse(localStorage.getItem(user.blp_id)));
            console.log("Calling from if")
            // localStorage.removeItem(user.blp_id);
            // let a=JSON.parse(localStorage.getItem(user.blp_id))
            // settrial(a);
            
            setmodal(true);
                setmodalmessage({
                    "text1": "Unsaved changes found",
                    "text2": "We found unsaved changes please check them or you can close window to delete the data."
                });
        }

        else {
            try {
                await api.get(`client/get-bill/${user.blp_id}`).then(async function (response) {
                    if (response.data.status == false) {
                        setloading(false);
                    }
                    else {
                        setloading(false);
                        setdatabasevalues(response.data);
                        console.log("Calling from else")
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


    }

    const uploadbill = async () => {

        setloading(true);

        let a = {
            row1, mul1, tot1, fixrate1, varrate1, grand1, fabri1, fabrirate1,
            row2, mul2, grand2,
            entries, grand3,
            row4, mul4, tot4, fixrate4, varrate4, grand4, fabri4, fabrirate4,
            extratable,
            row5, mul5, greaterval, grand5,
            billtotal
        };

        localStorage.setItem(user.blp_id, JSON.stringify(a))

        try {
            await api.post(`client/upload-bill/${user.blp_id}`, JSON.stringify(a)).then(async function (response) {
                if (response.data.status == true) {
                    setloading(false);
                    setmodal(true);
                    await setmodalmessage({
                        "text1": "Done",
                        "text2": "Bill uploaded succesfully."
                    });
                    localStorage.removeItem(user.blp_id);
                    setzero()

                    navigate('/')

                }
                else {
                    setloading(false);
                    setmodal(true);
                    setmodalmessage({
                        "text1": "Error Occured",
                        "text2": "Something went wrong."
                    });

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

    const addtable = () => {
        setextratable(true);
    }

    const deletetable = () => {
        setextratable(false);
        setrow4([]);
        setmul4([]);
        settot4(0);
        setfixrate4(0);
        setvarrate4(0);
        setgrand4(0);
        setfabri4("Select option...");
        setfabrirate4(0);
    }



    useEffect(() => {
        setbilltotal(parseInt(grand1) + parseInt(grand2) + parseInt(grand3) + parseInt(grand4) + parseInt(grand5))
    }, [grand1, grand2, grand3, grand4, grand5]);


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

            <div className='mx-auto sm:pt-20 pt-36 '>
                <div className='p-4 m-2 text-3xl text-center text-white bg-fix'>BLP ID: { user.blp_id }</div>
                <button className='m-2 ani-button' onClick={ () => { addtable() } } hidden={ extratable }>Add Extra Table</button>
                <button className='m-2 ani-button' onClick={ () => { deletetable() } } hidden={ !extratable }>Delete Extra Table</button>
                <Table2 />
                { extratable ? <ExtraBillTable /> : <></> }
                <TablePre />
                <ExtraEntriesTable />
                <EntriesBill />

                <div className='flex justify-center w-full'>
                    <div className='container p-3 max-w-[1280px] bg-fix text-right text-white text-xl px-8 m-2'>
                        Bill Total: ₹{ billtotal }
                    </div>

                </div>

                <div className='flex justify-center w-full'>
                    <div className='container p-3 max-w-[1280px] text-right text-white text-xl px-8 m-2'>
                        <button onClick={ () => { uploadbill() } } className='ani-button'>Upload</button>
                    </div>

                </div>

            </div>
        </>

    )
}

export default BillBook