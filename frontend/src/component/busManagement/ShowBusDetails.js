import axios from 'axios';
import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'

function ShowBusDetails() {
 const [getData, setgetData] = useState([])

  //const fomType = 'update'
  useEffect(() => {
    axios.get("http://localhost:8989/api/busManagement/show_bus_details")
    .then((res)=>{
      setgetData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    
  }, [])
    //console.log(getData)
    getData.map((values,index)=>{
      console.log(values.regNo)
    })


  return (

    <div>
      <h2><center>All bus details</center></h2>
     <table class= "table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Reg No</th>
            <th scope="col">Bus Route</th>
            <th scope="col">No of Seats</th>
            <th scope="col">Additional Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((values,index)=>{
            return(
              <tr>
           <th scope="row">{index+1}</th>
              <td>{values.regNo}</td>
              <td>{values.busRoute}</td>
              <td>{values.noOfSeats}</td>
              <td>{values.details}</td>
              <td>
                <Link to='contact/update'>
                  <a className="btn btn-warning" href="#">
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                </Link>
                
                &nbsp;
                <a className="btn btn-danger" href="#">
                  <i className="far fa-trash"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>

    
    </div>
  )
}

export default ShowBusDetails