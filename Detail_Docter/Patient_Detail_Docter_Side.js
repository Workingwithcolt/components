import React from 'react'
import './Docter_Detail.css'
import '../../css/bootstrap.min.css';
import '../../css/style.css';
import Medicine from '../Medicine/Medicine';
import { useContext } from 'react';
import { LoginInfoContext } from '../LoginContext/DataContext';
import Search from '../Search/Search';
import MedicalMedicine from '../MedicalMedicine/MedicalMedicine';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
export const Patient_Detail_Docter_Side = (props) => {

    const [searchvalue,setSearchValue] = useState("")
    const { data } = useContext(LoginInfoContext)
    const i = require('../../img/logo.png')
    const {id} = useParams()
    const public_key = typeof(parseInt(id.substr(1,id.length)))
    
    const filterItems = (arr, query) => {
        return arr.filter(element => 
        element.Name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    // getPatient

    // console.log(searchvalue)
    return (
        <div className='___container_docter_detail'>

            <div className='___container_first'>
                {/* name */}
                <div className='___Name_container'>
                    Chetan
                </div>
                {/* addres */}
                <div className='___Address_container'>
                    0xe66d125041f0eabc15E0dEe318aBF49f8c864451
                </div>
            </div>
            <div className='___detail'>
                <div className='___mid'>
                    <div className='___medicine_detail'>
                        <Search handleSearch = {(e)=>setSearchValue(e)}/>
                        {filterItems(data.Medical_Medicine,searchvalue).map((e)=>(<MedicalMedicine name = {e.Name}/>))}
                    </div>
                    <div className="___current_medicine">
                        <Medicine />
                    </div>
                </div>
            </div>
        </div>

    )
}
