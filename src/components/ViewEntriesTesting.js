import React, { useEffect,useState } from 'react'
import axios from 'axios';

function ViewEntriesTesting() {

    const [values, setvalues] = useState([]);
    

    const deleteEntry=(id)=>{

        axios.delete(`http://localhost:80/api/delete/${id}`).then(function(response) {
           console.log(response)
        
        })
    }
   
    const usertable= ()=> {
         axios.get(`http://localhost:80/api/`).then(function(response) {
            setvalues(response.data);
        })
    }

    useEffect(() => {
        usertable();
    }, []);

    
    return (
        <div className="relative m-4 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr className='text-[16px]'>
                        <th scope="col" className="px-6 py-3">
                            BLPID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ISELL
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Address
                        </th>
                        <th scope="col" className="px-6 py-3">
                            City
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">More</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                {values.map((user, key) =>
                     <tr key={key} className="bg-white border-b hover:bg-gray-50 ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {user.srno}
                        </th>
                        <td className="px-6 py-4">
                            {user.date}
                        </td>
                        <td className="px-6 py-4">
                            {user.isell}
                        </td>
                        <td className="px-6 py-4">
                            {user.name}
                        </td>
                        <td className="px-6 py-4">
                            {user.address}
                        </td>
                        <td className="px-6 py-4">
                           {user.city}
                        </td>
                        <td className="px-6 py-4">
                            {user.contact}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button href="#" className="font-medium text-blue-600 hover:underline">Edit</button>
                        </td>
                        <td className="px-6 py-4 text-right">
                            <button onClick={()=>{deleteEntry(user.srno)}} href="#" className="font-medium text-blue-600 hover:underline">Delete</button>
                        </td>
                    </tr> 

                    )} 

                       

                </tbody>
            </table>
        </div>

    )
}

export default ViewEntriesTesting