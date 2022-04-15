import axios from 'axios';
import React, { useState } from 'react'
import "./AddBus.css";

function AddBus() {
    const[values, setValues]= useState({
        regNo:"",
        busRoute:"",
        noOfSeats:"",
        details:""
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const handleRegNoInputChange = (event) =>{
        setValues({...values, regNo: event.target.value})
    }
    const handleBusRouteInputChange = (event) =>{
        setValues({...values, busRoute: event.target.value})
    }
    const handleNoOfSeatsInputChange = (event) =>{
        setValues({...values, noOfSeats: event.target.value})
    }
    const handleAdditionalDetailsInputChange = (event) =>{
        setValues({...values, details: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.regNo && values.busRoute && values.noOfSeats && values.details){
            setValid(true);
        }
        setSubmitted(true);

        submitData(event);
    }

    const submitData = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8989/api/busManagement/add_bus",values)
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
            {submitted && valid ?<div className="success-message">Success! Thank you for submitting</div>:null}
            <input 
                onChange={handleRegNoInputChange}
                value={values.regNo}
                className="form-field"
                placeholder="Register Number"
                name="RegisterNumber" />
            {submitted && !values.regNo ? <span>please enter a registration number</span>:null}
            <input
                onChange={handleBusRouteInputChange} 
                value={values.busRoute}
                className="form-field"
                placeholder="Route"
                name="Route" />
            {submitted && !values.busRoute ? <span>please enter a bus route</span>:null}
            <input 
                onChange={handleNoOfSeatsInputChange}
                value={values.noOfSeats}
                className="form-field"
                placeholder="Number of Seats"
                name="NumberOfSeats" />
                {submitted && !values.noOfSeats ?<span>please enter number of seats</span>:null}
            <input 
                onChange={handleAdditionalDetailsInputChange}
                value={values.details}
                className="form-field"
                placeholder="Additional Details"
                name="AdditionalDetails" />
                {submitted && !values.details ?<span>please enter the bus details</span>:null}

            <button class="form-field" type="submit">
            submit
            </button>
        </form>
    </div>
  )
}

export default AddBus