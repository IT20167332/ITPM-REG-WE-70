import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Displayconductor() {
 const [getData, setgetData] = useState([])


  useEffect(() => {
    axios.get("http://localhost:8989/api/conductor/get_conductor")
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
  
 function Delete(id) {
      
    axios
      .delete(`  http://localhost:8989/api/conductor/delete_conductor/${id}`)
      .then((res) => {
        alert("Conductor record delete successfully!");
        //this.getPost();
      
      });
  }

  return (

    <div>
          <h1>Conductor Management</h1>
     <table class= "table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Conductor Name</th>
            <th scope="col">NIC</th>
            <th scope="col">Conductor_ID</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((values,index)=>{
            return(
              <tr>
           <th scope="row">{index+1}</th>
              <td>{values.conductorName}</td>
              <td>{values.conductorNIC}</td>
              <td>{values.conductorId}</td>
              <td>{values.contactNumber}</td>
              <td>
                <Link to='/UpdateConductor'>
                <a className="btn btn-success px-3 btn-rounded waves-effect" href="#">
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                </Link>
                <a className="btn btn-danger">
                  <i className="fas fa-trash-alt" onClick={()=>{Delete(values._id)}}></i>&nbsp;Delete
                </a>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to='/addconductor'>
         <button type="button"class="btn btn-outline-warning btn-rounded waves-effect "><i class="far fa-user pr-2" aria-hidden="true"></i>Add Conductor</button>
        </Link>
</div>
    
    </div>
    
  )
}

export default Displayconductor
