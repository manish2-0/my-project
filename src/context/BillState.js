import React, { useState } from 'react'
import BillContext from './BillContext';

const BillState = (props) => {

    // Fabrication at factory
    const [row1, setrow1] = useState([]);
    const [mul1, setmul1] = useState([]);
    const [tot1, settot1] = useState(0);
    const [fixrate1, setfixrate1] = useState(0);
    const [varrate1, setvarrate1] = useState(0);
    const [grand1, setgrand1] = useState(0);
    const [fabri1, setfabri1] = useState("Fabrication at Factory");
    const [fabrirate1, setfabrirate1] = useState(153);
    const [inputval1, setinputval1] = useState("Fixing of Quantra Top on Kitchen Cabinet/ Dinining table.");

    // Extra Inputs Table-Fixed
    const [row2, setrow2] = useState([]);
    const [mul2, setmul2] = useState([]);
    const [grand2, setgrand2] = useState(0);

    // Entries from database automatically-Fixed
    const [grand3, setgrand3] = useState(0);
    const [entries, setentries] = useState([]);


    // Fabrication at site

    const [row4, setrow4] = useState([]);
    const [mul4, setmul4] = useState([]);
    const [tot4, settot4] = useState(0);
    const [toparea, settoparea] = useState(0);
    const [panelarea, setpanelarea] = useState(0);
    const [panelamount, setpanelamount] = useState(0);
    const [topamount, settopamount] = useState(0);
    const [grand4, setgrand4] = useState(0);
    const [fabri4, setfabri4] = useState("Fabrication at Site");
    const [fabrirate4, setfabrirate4] = useState({ top: 405, panel: 297 });
    const [inputval4, setinputval4] = useState("Fixing of Quantra Top on Kitchen Cabinet/ Dinining table.");



    // Extra Cutting and other charges having pre-defined rates

    const [row5, setrow5] = useState([]);
    const [mul5, setmul5] = useState([]);
    const [grand5, setgrand5] = useState(0);
    const [greaterval, setgreaterval] = useState({ quantity: 0, total: 0 });


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
            inputval1, setinputval1,

            row2, setrow2,
            mul2, setmul2,
            grand2, setgrand2,

            entries, setentries,
            grand3, setgrand3,

            row4, setrow4,
            mul4, setmul4,
            tot4, settot4,
            toparea, settoparea,
            panelarea, setpanelarea,
            grand4, setgrand4,
            fabri4, setfabri4,
            panelamount, setpanelamount,
            topamount, settopamount,
            fabrirate4, setfabrirate4,
            inputval4, setinputval4,


            row5, setrow5,
            mul5, setmul5,
            greaterval, setgreaterval,
            grand5, setgrand5,

            billtotal, setbilltotal,
        } }>

            { props.children }

        </BillContext.Provider>
    )
}

export default BillState;