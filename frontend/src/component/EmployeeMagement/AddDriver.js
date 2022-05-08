import axios from 'axios';
import React, { useState } from 'react'
import "./AddBus.css";

function AddDriver() {
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
        axios.post(" http://localhost:8989/api/driver/add_driver",values)
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
              <h1>Driver Registration Form</h1>
            {submitted && valid ?<div className="success-message">Driver Add Successfully</div>:null}
            <input 
                onChange={handleRegNoInputChange}
                value={values.driverName}
                className="form-field"
                minlength="3"
                placeholder="Driver Name"
                name="DriverName" />
            {submitted && !values.driverName ? <span>please enter a Driver Name</span>:null}
            <input
                onChange={handleBusRouteInputChange} 
                value={values.driverNIC}
                className="form-field"
                placeholder="Driver NIC"
                maxlength="12"
                name="DriverNIC" />
            {submitted && !values.driverNIC ? <span>please enter a Driver NIC</span>:null}
            <input 
                onChange={handleNoOfSeatsInputChange}
                value={values.driverId}
                className="form-field"
                placeholder="Driver ID"
                minlength="4"
                maxlength="8"
                name="DriverID" />
                {submitted && !values.driverId ?<span>please enter a Driver ID</span>:null}
            <input 
                onChange={handleAdditionalDetailsInputChange}
                value={values.contactNumber}
                className="form-field"
                placeholder="Contact Number"
                maxlength="12"
                name="Contact Number" />
                {submitted && !values.contactNumber ?<span>please enter the Contact Number</span>:null}

            <button class="form-field" type="submit">
            submit
            </button>
        </form>
    </div>
  )
}

export default AddDriver