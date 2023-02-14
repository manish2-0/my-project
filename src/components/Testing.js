import React from 'react'
import { useEffect } from 'react'
import api from './axiosapi';

export const Testing = () => {

    // useEffect(() => {
    //     axios.get('http://localhost:8000/admin/getAll-client', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6ImFkbWluMSIsImlhdCI6MTY3NjMwMjcwMCwiZXhwIjoxNjc2MzA2MzAwfQ.Tf9-7wcO5nYmH6i9hmcnBhMw91VUAR4sPGCjUT8huoM'
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
        await api.post('/login', inputs, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data)
        })
    }

    const logout = async() => {
        await api.post('/logout').then(response => {
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
