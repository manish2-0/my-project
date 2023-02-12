import React from 'react'
import { useEffect } from 'react'
import axios from 'axios';

export const Testing = () => {

    // useEffect(() => {
    //     axios.get('http://localhost:8000/admin/getAll-client', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6ImFkbWluMSIsImlhdCI6MTY3NjEyMDYwMCwiZXhwIjoxNjc2MTI0MjAwfQ.CgdeDsVpgYY7y-KG6uRCsTt2JzjvKr401dfHA2yaT2I'
    //         }
    //     }).then(response => {
    //         console.log(response.data)
    //     })
    // }, []);


    // useEffect(() => {
    //     axios.post('http://localhost:8000/admin/logout'
    //        ).then(response => {
    //         console.log(response.data)
    //     })
    // }, []);

    let inputs={"admin_id":"admin1","password":"admin1"}

    const login = async() => {
        await axios.post('http://localhost:8000/admin/login', inputs, {
            headers: {
                'Content-Type': 'application/json',
                withCredentials: true
            }
        }).then(response => {
            console.log(response.data)
        })
    }

    const logout = () => {
        axios.post('http://localhost:8000/admin/logout',{
            headers: {
                withCredentials: true
            }
        }
           ).then(response => {
            console.log(response.data)
        })
    }

    return (
        // <div>Testing</div>
        <>
            <button onClick={ login }>Login</button>
            <button onClick={ logout }>Logout</button>
        </>

    )
}
