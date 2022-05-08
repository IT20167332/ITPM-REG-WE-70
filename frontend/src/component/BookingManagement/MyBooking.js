import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BookingCom from './BookingCom';
function MyBooking() {
  const userId = "u0001";  
  //http://localhost:8989/api/booking/get_booking/u0001
  const [getData, setgetData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:8989/api/booking/get_booking/u0001`)
        .then(res => setgetData(res.data))
        .catch(error => console.log(error));
  }, [])
  console.log(getData)
  
  return (
    <>
        <div className='container border my-4'>
            <h1 className='my-2'>My Booking</h1>
        </div>
        
        <div className='container border my-4'>
            {
                getData.map((val,index)=>{
                    return(
                        <BookingCom data={val}/>
                    )
                })
            }
        </div>

    </>
  )
}

export default MyBooking