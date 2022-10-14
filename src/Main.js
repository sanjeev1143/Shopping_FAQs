import { Button } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Database } from './firebase_config';

function Main() {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const DatabaseRef = collection(Database, "Shopping-enquire")
    useEffect(() => {
        const getData = async () => {

            const data = await getDocs(DatabaseRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        };
        getData();

    })

    return (
        <div className='viewEnquery'>
            {show ?
                <div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        {
                            data.map((value, index) =>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                {value.Name}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                < ul >
                                                    <li><code>Name</code> : {value.Name}</li>
                                                    <li><code>Company_Name</code> : {value.Company_Name}</li>
                                                    <li><code>Contact_Number</code> : {value.Contact_Number}</li>
                                                    <li><code>Email</code> : {value.Email}</li>
                                                    <li><code>Message</code> : {value.Message}</li>
                                                </ul >
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                        <Button onClick={() => { setShow(false) }}><VisibilityOffIcon />Show All Enquires</Button>
                    </div>





                </div>
                : <Button onClick={() => { setShow(true) }}><VisibilityIcon />Show All Enquires</Button>}
        </div >
    )
}

export default Main

