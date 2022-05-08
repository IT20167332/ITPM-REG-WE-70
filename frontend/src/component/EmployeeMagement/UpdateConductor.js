import axios from 'axios';
import React, { useState,useEffect } from 'react'
import "./AddBus.css";
import {useParams} from 'react-router-dom';

function UpdateConductor() {
    const [getData, setgetData] = useState([])
    const [conductorName, setconductorName] = useState('')
    const [conductorNIC, setconductorNIC] = useState('')
    const [conductorId, setconductorId] = useState('')
     const [contactNumber,setcontactNumber] = useState('')

   const { id } = useParams();


     useEffect(() => {
    axios.get(`http://localhost:8989/api/conductor/get_one_conductor/${id}`)
    .then((res)=>{
        setgetData(res.data)
        setconductorName(res.data.conductorName)
    setconductorNIC(res.data.conductorNIC)
    setconductorId(res.data.setconductorId)
    setcontactNumber(res.data.contactNumber)
    })
    .catch((err)=>{
      console.log(err)
    })
          
    setconductorName(getData.conductorName)
    setconductorNIC(getData.conductorNIC)
    setconductorId(getData.setconductorId)
    setcontactNumber(getData.contactNumber)
    
          
    
  }, [])
    console.log(getData) 
   

    const submitData1 = (event) => {
        event.preventDefault();
        const values = {
            conductorName,
            conductorNIC,
            conductorId,
            contactNumber

        }
        axios.put(` http://localhost:8989/api/conductor/update_conductor/${id}`,values)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
  return (
    <div className="form-container">
          <form className="addbus-form" onSubmit={submitData1}>
              <h1>Edit Conductor details</h1>
           
            <input 
                onChange={(event)=>{setconductorName(event.target.value)}}
                value={conductorName}
                className="form-field"
                minlength="3"
                placeholder="Conductor Name"
                name="conductorName" />
           
            <input
                onChange={(event)=>{setconductorNIC(event.target.value)}} 
                value={conductorNIC}
                className="form-field"
                placeholder="NIC"
                maxlength="12"
                name="conductorNIC" />
            
            <input 
                onChange={(event)=>{setconductorId(event.target.value)}}
                value={conductorId}
                className="form-field"
                placeholder="Conductor ID"
                minlength="4"
                maxlength="8"
                name="conductorId" />
               
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

export default UpdateConductor