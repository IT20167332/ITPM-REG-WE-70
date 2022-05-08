import axios from 'axios';
import React, { useState,useEffect } from 'react'
import "./AddBus.css";
import {useParams} from 'react-router-dom';

function UpdateDriver() {
    const [getData, setgetData] = useState([])
    const [driverName, setdriverName] = useState('')
    const [driverNIC, setdriverNIC] = useState('')
    const [driverId, setdriverId] = useState('')
     const [contactNumber,setcontactNumber] = useState('')

   const { id } = useParams();


   

      useEffect(() => {
    axios.get(` http://localhost:8989/api/driver/get_one_driver/${id}`)
    .then((res)=>{
        setgetData(res.data)
        setdriverName(res.data.driverName)
    setdriverNIC(res.data.driverNIC)
    setdriverId(res.data.setdriverId)
    setcontactNumber(res.data.contactNumber)
    })
    .catch((err)=>{
      console.log(err)
    })
          
    setdriverName(getData.driverName)
    setdriverNIC(getData.driverNIC)
    setdriverId(getData.setdriverId)
    setcontactNumber(getData.contactNumber)
    
          
    
  }, [])
    console.log(getData) 
   

    const submitData = (event) => {
        event.preventDefault();
        const values = {
            driverName,
            driverNIC,
            driverId,
            contactNumber

        }
        axios.put(` http://localhost:8989/api/driver/update_driver/${id}`,values)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
  return (
    <div className="form-container">
          <form className="addbus-form" onSubmit={submitData}>
              <h1>Edit Driver  </h1>
           
            <input 
                onChange={(event)=>{setdriverName(event.target.value)}}
                value={driverName}
                className="form-field"
                minlength="3"
                placeholder="Driver Name"
                name="DriverName" />
            
            <input
                onChange={(event)=>{setdriverNIC(event.target.value)}} 
                value={driverNIC}
                className="form-field"
                placeholder="NIC"
                maxlength="12"
                name="DriverNIC" />
          
            <input 
                onChange={(event)=>{setdriverId(event.target.value)}}
                value={driverId}
                className="form-field"
                placeholder="Driver ID"
                minlength="4"
                maxlength="8"
                name="DriverID" />
                
            <input 
                onChange={(event)=>{setcontactNumber(event.target.value)}}
                value={contactNumber}
                className="form-field"
                placeholder="Contact Number"
                maxlength="10"
                name="Contact Number" />
                

            <div>
              <button class="btn btn-outline-warning btn-rounded waves-effect d-grid gap-2 col-6 mx-auto" type="submit">
                    Save
                  </button>
    
             </div> 
              
        </form>
    </div>
  )
}

export default UpdateDriver