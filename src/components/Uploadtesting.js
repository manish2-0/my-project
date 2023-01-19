import axios from 'axios';
import React, { useState } from 'react'

function Uploadtesting() {

    const [path, setpath] = useState();

    const handlechange = (e) => {
        // console.log(e.target.files);
        setpath(e.target.files);
    }

    const formsubmit = (e) => {
        e.preventDefault();
        // console.log(path);

        for(let i=0;i<path.length;i++){

            const formdata = new FormData();
            formdata.append('filedata', path[i]);
            // console.log(path[i]);

            axios.post(`http://localhost:80/api/upload/`, formdata,{headers: {
                'content-type': 'multipart/form-data'
            }}).then(function (response){
                console.log(response);
            });

        }
		}
    

    return (

        <form className='m-4' onSubmit={ formsubmit }>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
            <input onChange={ handlechange } class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" multiple  />
            {/* <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div> */ }
            <button type="submit" class="m-6 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>

        </form>

    )
}

export default Uploadtesting