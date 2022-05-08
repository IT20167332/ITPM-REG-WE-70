import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Displaydriver() {
 const [getData, setgetData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8989/api/driver/get_driver")
    .then((res)=>{
      setgetData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    
  }, [])
    //console.log(getData)
    getData.map((values,index)=>{
      console.log(values)
    })
  
  //const id = window.localStorage.getItem('ids')||'';
  
  function Delete() {
      const [getData, setgetData] = useState([])
    axios
      .delete(` http://localhost:8989/api/driver/delete_driver/626d0a1e421dce2b2206d4c0`)
      .then((res) => {
        alert("delete succesful");
        //this.getPost();
      
      });
  }


  return (

    <div>
          <h1>Driver Management</h1>
     <table class= "table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Driver Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Driver_ID</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((values,index)=>{
            return(
              <tr>
           <th scope="row">{index+1}</th>
              <td>{values.driverName}</td>
              <td>{values.driverNIC}</td>
              <td>{values.driverId}</td>
              <td>{values.contactNumber}</td>
              <td>
                <a className="btn btn-success px-3 btn-rounded waves-effect" href="#">
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a className="btn btn-danger" href="#"  onClick={Delete}>
                  <i className="fas fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <Link to='/adddriver'>
              <button type="button"class="btn btn-outline-warning btn-rounded waves-effect "><i class="far fa-user pr-2" aria-hidden="true"></i>Add Driver</button>
              </Link>
      </div>
      <div class="d-grid gap-2 d-md-block">

        <button class="btn btn-primary bi-arrow-down-circle" type="button">Report</button>
      
      </div>
    
    </div>
    
  )
}

export default Displaydriver
