import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './BusList.css'
import BusListContainer from './BusListContainer'
import {useParams} from 'react-router-dom'


function BusList() {

    
       const { from } = useParams();
       const { to } = useParams();
       const [buses, setbuses] = useState([])

       //console.log("from = "+from+" to : "+to)
       useEffect(() => {
              
            axios.get(`http://localhost:8989/api/timetable/get_select_time_row/${from}/${to}`)
            .then(res => setbuses(res.data))
       }, [])
       console.log(buses)
       
  return (

    <>
    <div className='container border my-4'>
        <h1 className='my-2'>Bus List</h1>
    </div>
    <div className='container border bg-light text-dark '>
        {buses.map((bus,index)=>{
            return(<BusListContainer key={index}
                          img={""}
                          busNO={bus.BusId.regNo}
                          RouteNo={bus.rout}
                          From={bus.from}
                          To={bus.to}
                          FromTime={bus.fromTime}
                          ToTime={bus.toTime}
                          details={bus.BusId.details}
                          id={bus._id}/>)
        })}
    </div>
    </>
  )
}

export default BusList