import axios from 'axios';
import React, { useEffect,useState } from 'react'

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
                <a className="btn btn-warning" href="#">
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
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

export default Displaydriver