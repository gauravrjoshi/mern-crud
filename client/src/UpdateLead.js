import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';

function UpdateLead() {

    const [newPhone, setNewPhone] = useState(0)
    const [phonebook, setPhonebook] = useState([])

    const updatePhone = (id) => {
        Axios.put('http://localhost:8080/update-phone', { id, newPhone })
    }


    const deletePhone = (id) => {
        Axios.delete(`http://localhost:8080/delete-phone/${id}`)
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/get-phone').then(res => {
            setPhonebook(res.data.data.phoneNumbers)
        })
    }, [])

    return (
        <div className="container">
            {
                phonebook.map((val, key) => {
                    return <div key={key} className="phone" >
                        <h1>{val.name}</h1>
                        <h1>{val.phone}</h1>
                        <input type="number" placeholder='update Phone...' onChange={(e) => {
                            setNewPhone(e.target.value)
                        }} />
                        <button className="update-btn" onClick={() => { updatePhone(val._id) }}>Update</button>
                        <button className='delete-btn' onClick={() => { deletePhone(val._id) }}>Delete</button>
                    </div>
                })
            }

        </div>
    );
}

export default UpdateLead;