import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './docter.css'
import { useState } from 'react';
// export const otp_number = uuidv4();
import { Alert } from 'react-bootstrap';
import {Patient_detail} from "../patient_detail/Patient_detail"
import { LoginInfoContext } from '../LoginContext/DataContext';
import { useContext } from 'react';
import { logout } from '../ContractMethod';
import Logout from '../Logout/logout';

export const Docter = () => {
    const navigate = useNavigate()
    const {data,Access,SetCurrentAccount,SetAccess} = useContext(LoginInfoContext)
    const handleChange = () => {
        logout()
        SetCurrentAccount("Account")
        SetAccess(false)
        
        navigate("/")
      }
    // console.log("Docter")
    // console.log(Access)
    if(!data){
        return (
            <div
            style={{margin:"auto",
            marginTop:"5rem"    
    }}
            >
                <Alert
                style={{
                    padding:"5rem",
                    color:"red",
                    fontSize:"2rem"
                }}
            variant='danger'>
                No Any Patient is Present
            </Alert>
            </div>            
        )
    }
    return (
        <div className='_container'>
            <div className='_container_first'>0
                {/* name */}
                <div className='_Name_container'>
                    Dr.Rokde
                </div>
                <Logout Access = {Access} handleChange={handleChange}/>
                {/* addres */}
                <div className='_Address_container'>
                    0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                </div>
            </div>
            
            <div className="_container_second">
                {/* medicines */}
                   < Patient_detail name = {"Chean"} address = {"0xe66d125041f0eabc15E0dEe318aBF49f8c864451"}/>
            </div>

        </div>
    )
}
