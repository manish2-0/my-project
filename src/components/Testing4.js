import React,{useEffect} from 'react'

const Testing4 = ({objarray,setobjarray}) => {

    const consoleval=()=>{
        console.log(objarray)
      }

      const update=()=>{
        setobjarray(objarray.map((product,key)=>
        [key === 1 ?   {"b":10} : product]))
      }

      useEffect(() => {

        setTimeout(() => {
            console.log("Timer")
        }, 2000);
        
      }, []);

  return (
    <>
    <button onClick={()=>{consoleval()}} className='m-4 ani-button'>
    Console
  </button>
   <button onClick={()=>{update()}} className='m-4 ani-button'>
   Update
 </button>
 </>
  )
}

export default Testing4