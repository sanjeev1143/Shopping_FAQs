import { Button } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Database } from './firebase_config';

function Header() {
    const [details, setDetails] = useState({
        Name: "",
        Company_Name: "",
        Contact_Number: "",
        Email: "",
        Message: "",
    });
    const [show, setShow] = useState(false);
    const reftodb = collection(Database, "Shopping-enquire");
    function displayForm() {
        setShow(true);
    }
    async function SaveForm() {
        const data = addDoc(reftodb, details)
        console.log(data);
        setShow(false);

    }
    function setValues(event) {
        event.preventDefault();
        setDetails(prv => ({
            ...prv, [event.target.name]: event.target.value
        }))
        console.log(details);

    }
    return (
        <div className='header'>
            {show ? <form className='EnqForm'>
                <label>Name:</label>

                <input name='Name' value={details.Name} placeholder="" type="text" onChange={setValues} required />
                <label>Company Name:</label>
                <input name='Company_Name' value={details.Company_Name} placeholder="" type="text" onChange={setValues} required />
                <label>Contact Number:</label>
                <input name='Contact_Number' value={details.Contact_Number} placeholder="" type="number" onChange={setValues} required />
                <label>Email:</label>
                <input name='Email' value={details.Email} placeholder="" type="" onChange={setValues} required />
                <label>Message:</label>
                <textarea name='Message' value={details.Message} placeholder="" type="" onChange={setValues} required />
                <input type="submit" onClick={SaveForm} className="submitbtn" />
            </form> :
                <Button variant="contained" sx={{ color: 'white', backgroundColor: '#3B7DD8', borderColor: 'green' }} onClick={displayForm} >Book Enquire</Button>}
        </div>
    )
}

export default Header
