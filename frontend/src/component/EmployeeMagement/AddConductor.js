import axios from 'axios';
import React, { useState } from 'react'
import "./AddBus.css";

function AddConductor() {
    const[values, setValues]= useState({
        conductorName:"",
        conductorNIC:"",
        conductorId:"",
        contactNumber:""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleRegNoInputChange = (event) =>{
        setValues({...values, conductorName: event.target.value})
    }
    const handleBusRouteInputChange = (event) =>{
        setValues({...values, conductorNIC: event.target.value})
    }
    const handleNoOfSeatsInputChange = (event) =>{
        setValues({...values, conductorId: event.target.value})
    }
    const handleAdditionalDetailsInputChange = (event) =>{
        setValues({...values, contactNumber: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.conductorName && values.conductorNIC && values.conductorId && values.contactNumber){
            setValid(true);
        }
        setSubmitted(true);

        submitData(event);
    }

    const submitData = (event) => {
        event.preventDefault();
        axios.post(" http://localhost:8989/api/conductor/add_conductor",values)
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
              <h1>Conductor Registration Form</h1>
            {submitted && valid ?<div className="alert alert-success ">Conductor insert Successfully!    <i class="fa fa-check"></i></div>:null}
            <input 
                onChange={handleRegNoInputChange}
                value={values.conductorName}
                className="form-field"
                minlength="3"
                placeholder="Conductor Name"
                name="conductorName" />
            {submitted && !values.conductorName ? <span > <i class="fa fa-times-circle"></i>please enter a Conductor Name</span>:null}
            <input
                onChange={handleBusRouteInputChange} 
                value={values.conductorNIC}
                className="form-field"
                placeholder="NIC"
                maxlength="12"
                name="conductorNIC" />
            {submitted && !values.conductorNIC ? <span> <i class="fa fa-times-circle"></i>please enter a Conductor NIC</span>:null}
            <input 
                onChange={handleNoOfSeatsInputChange}
                value={values.conductorId}
                className="form-field"
                placeholder="Conductor ID"
                minlength="4"
                maxlength="8"
                name="conductorId" />
                {submitted && !values.conductorId ?<span> <i class="fa fa-times-circle"></i>please enter a Conductor ID</span>:null}
            <input 
                onChange={handleAdditionalDetailsInputChange}
                value={values.contactNumber}
                className="form-field"
                placeholder="Contact Number"
                maxlength="10"
                name="Contact Number" />
                {submitted && !values.contactNumber ?<span> <i class="fa fa-times-circle"></i>please enter the Contact Number</span>:null}

            <button class="btn btn-outline-warning btn-rounded waves-effect d-grid gap-2 col-6 mx-auto" type="submit">
            submit
            </button>
        </form>
    </div>
  )
}

export default AddConductor