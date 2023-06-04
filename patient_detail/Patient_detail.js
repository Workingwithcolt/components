import React from 'react'
import "./patient_detail.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Form from "react-bootstrap/Form"
import { Modal } from 'react-bootstrap'
import { useContext } from 'react'
import { LoginInfoContext } from '../LoginContext/DataContext'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Patient_detail = (props) => {    
    const navigate = useNavigate();
    const { data, setAccess } = useContext(LoginInfoContext)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        setEqual(false)
    }
    const [value, setValue] = useState(0)
    const [Error, setError] = useState(false)
    const [equal, setEqual] = useState(false)
    const id = 23
    return (
        <>
            <div className='_patient'>
                <button>
                    {/* //initialy i store  the publlic key to the database when i map through that data 
                    //i pass the key to the component in the component i call  */}
                        
                        <Link to={`/login/Docter/patient/:${id}`}>
                            <div className='_patient_name'>
                                {props.name}
                            </div>
                            <div className='_Address_container'>
                                {props.address}
                            </div>
                        </Link>

                        

                </button>
                
            </div>
        </>
    )
}
