import React,{useState,useEffect} from 'react'
import Testing4 from './Testing4';

const Testing3 = () => {

  const [objarray, setobjarray] = useState([[{"a":1},{"b":2}],[{"b":2}]]);


  useEffect(() => {
    console.log("Value changed")
  }, [objarray[0]]);


  return (
    <Testing4 objarray={objarray[0]}/>
  )
}

export default Testing3