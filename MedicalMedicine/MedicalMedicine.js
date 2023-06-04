import React, { useContext } from 'react'
import { LoginInfoContext } from '../LoginContext/DataContext'
import { useState } from 'react'
export default function MedicalMedicine(props) {
  const { AddMedicineByDocter ,data} = useContext(LoginInfoContext)
  const [value,setValue] = useState(" ")
  const temp = {
    name: props["name"],
    quantity: parseInt(value)
  }
  const HandleAdd = (e)=> {
    e.preventDefault()
    if(parseInt(value)>1){
      AddMedicineByDocter(temp)
    }
    setValue(" ")
  }
  console.log(data)
  return (
    <>
    <form onSubmit={HandleAdd}>
    <div className='___medicine_'>
        <div className='___medicine_name_'>
          {props.name}
        </div>
        <div className='___medicine_quantity_'>
          InputQuantity:<input
            style={{
              height: "10px",
              width: "140px",
              margin: "auto"
            }}
            value = {value}
            onChange={(e) => { setValue(e.target.value)}}
            className="___quantity_" type='number' />
          <button
            style={{
              padding: "10px"
            }}
            type='submit'
            className='___add_medicine_'
          >Add</button>
        </div>
      </div>
    </form>
    </>
  )
}
