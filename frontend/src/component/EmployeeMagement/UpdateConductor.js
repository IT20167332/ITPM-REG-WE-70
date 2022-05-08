import axios from 'axios';
import React, { useState } from 'react'
import "./AddBus.css";

function UpdateConductor() {
    const[values, setValues]= useState({
        driverName:"",
        driverNIC:"",
        driverId:"",
        contactNumber:""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleRegNoInputChange = (event) =>{
        setValues({...values, driverName: event.target.value})
    }
    const handleBusRouteInputChange = (event) =>{
        setValues({...values, driverNIC: event.target.value})
    }
    const handleNoOfSeatsInputChange = (event) =>{
        setValues({...values, driverId: event.target.value})
    }
    const handleAdditionalDetailsInputChange = (event) =>{
        setValues({...values, contactNumber: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.driverName && values.driverNIC && values.driverId && values.contactNumber){
            setValid(true);
        }
        setSubmitted(true);

        submitData(event);
    }

    const submitData = (event) => {
        event.preventDefault();
        axios.put("  http://localhost:8989/api/conductor/update_conductor/625b219249fad367a1766cf5",values)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    }
  return (
    <div className="form-container">
          <form className="addbus-form" onSubmit={handleSubmit}>
              <h1>Edit Conductor  </h1>
            {submitted && valid ?<div className="alert alert-success ">Driver Add Successfully! <i class="fa fa-check"></i></div>:null}
            <input 
                onChange={handleRegNoInputChange}
                value={values.driverName}
                className="form-field"
                minlength="3"
                placeholder="Driver Name"
                name="DriverName" />
            {submitted && !values.driverName ? <span> <i class="fa fa-times-circle"></i>please enter a Driver Name</span>:null}
            <input
                onChange={handleBusRouteInputChange} 
                value={values.driverNIC}
                className="form-field"
                placeholder="NIC"
                maxlength="12"
                name="DriverNIC" />
            {submitted && !values.driverNIC ? <span> <i class="fa fa-times-circle"></i>please enter a Driver NIC</span>:null}
            <input 
                onChange={handleNoOfSeatsInputChange}
                value={values.driverId}
                className="form-field"
                placeholder="Driver ID"
                minlength="4"
                maxlength="8"
                name="DriverID" />
                {submitted && !values.driverId ?<span> <i class="fa fa-times-circle"></i>please enter a Driver ID</span>:null}
            <input 
                onChange={handleAdditionalDetailsInputChange}
                value={values.contactNumber}
                className="form-field"
                placeholder="Contact Number"
                maxlength="10"
                name="Contact Number" />
                {submitted && !values.contactNumber ?<span> <i class="fa fa-times-circle"></i>please enter the Contact Number</span>:null}

            <div>
              <button class="btn btn-outline-warning btn-rounded waves-effect d-grid gap-2 col-6 mx-auto" type="submit">
                    submit
                  </button>
    
             </div> 
              
        </form>
    </div>
  )
}

export default UpdateConductor