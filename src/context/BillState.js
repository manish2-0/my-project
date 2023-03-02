import React, { useState } from 'react'
import BillContext from './BillContext';

const BillState = (props) => {

    // First Table-Fixed
    const [row1, setrow1] = useState([]);
    const [mul1, setmul1] = useState([]);
    const [tot1, settot1] = useState(0);
    const [fixrate1, setfixrate1] = useState(0);
    const [varrate1, setvarrate1] = useState(0);
    const [grand1, setgrand1] = useState(0);
    const [fabri1, setfabri1] = useState("Select option...");
    const [fabrirate1, setfabrirate1] = useState(0);

    // Extra Inputs Table-Fixed
    const [row2, setrow2] = useState([]);
    const [mul2, setmul2] = useState([]);
    const [grand2, setgrand2] = useState(0);

    // Entries from database automatically-Fixed
    const [grand3, setgrand3] = useState(0);
    const [entries, setentries] = useState([]);


    // Extra Table-Not Fixed
    const [extratable, setextratable] = useState(false);

    const [row4, setrow4] = useState([]);
    const [mul4, setmul4] = useState([]);
    const [tot4, settot4] = useState(0);
    const [fixrate4, setfixrate4] = useState(0);
    const [varrate4, setvarrate4] = useState(0);
    const [grand4, setgrand4] = useState(0);
    const [fabri4, setfabri4] = useState("Select option...");
    const [fabrirate4, setfabrirate4] = useState(0);


    // Extra Cutting and other charges having pre-defined rates

    const [row5, setrow5] = useState([]);
    const [mul5, setmul5] = useState([]);
    const [grand5, setgrand5] = useState(0);
    const [greaterval, setgreaterval ] = useState({ quantity: 0, total:0 });


    // All Grand Total
    const [billtotal, setbilltotal] = useState(0);


    return (
        <BillContext.Provider value={ {
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

        } }>

            { props.children }

        </BillContext.Provider>
    )
}

export default BillState;